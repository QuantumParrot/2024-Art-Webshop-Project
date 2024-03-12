/* eslint-disable max-len */

import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

//

export default defineStore('adminOrder', {

    state: () => ({

        orders: [],

        statesCode: {

            0: { title: '未確認款項', color: '#c62828' },
            1: { title: '已確認款項', color: '#ff6f00' },
            2: { title: '安排出貨中', color: '#1565c0' },
            3: { title: '商品配送中', color: '#00838f' },
            4: { title: '訂單已完成', color: '#388e3c' },

        },

        // 用來篩選訂單狀態的變數

        currentPage: 1,

        orderState: 5,
        isPaid: 2,

        timeAscending: 0,

    }),

    getters: {

        refactorOrders: ({ orders }) => orders.map((order) => {

            if (order.message.startsWith('{"')) {

                const data = JSON.parse(order.message);

                return {

                    ...order,

                    message: data.message || '無',
                    project: data.project,
                    state: parseInt(data.state, 10),

                    total: parseInt(order.total.toFixed(0), 10),

                };

            }

            return {

                ...order,

                project: order.project || '不指定',
                state: order.state || 0,
                total: parseInt(order.total.toFixed(0), 10),

            };

        }),

        stateOptions: ({ isPaid }) => {

            if (isPaid !== 0) { return [0, 1, 2, 3, 4]; }

            return [];

        },

        filterOrders: ({ refactorOrders, isPaid, orderState }) => {

            let newOrders = isPaid === 2 ? refactorOrders : refactorOrders.filter((o) => o.is_paid === !!isPaid);

            // console.log(newOrders.length);

            newOrders = orderState === 5 ? newOrders : newOrders.filter((o) => o.state === orderState);

            // console.log(newOrders.length);

            return newOrders;

        },

        displaying: ({ filterOrders, currentPage, timeAscending }) => {

            filterOrders.sort((a, b) => (timeAscending ? a.create_at - b.create_at : b.create_at - a.create_at));

            return filterOrders.filter((o, i) => Math.floor(i / 10) + 1 === currentPage);

        },

        totalPages: ({ filterOrders }) => Math.ceil(filterOrders.length / 10),

        unhandled: ({ refactorOrders }) => refactorOrders.filter((o) => o.is_paid && o.state === 0).length,

    },

    actions: {

        switchPage(num) { this.currentPage = num; },

        resetOrders() { this.totalOrderList.length = 0; },

        getOrders(page = 1) {

            // 必須取得所有訂單才能做整體的狀態管理 ( 來自同學 Ann Chou 的程式碼提供的靈感，謝謝！ )

            const apiUrl = `${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/orders?page=`;

            loaderStore.createLoader('get-orders');

            axios.get(`${apiUrl}${page}`)
                .then((res) => {

                    const { pagination } = res.data;

                    const reqs = [];

                    for (let i = 1; i <= pagination.total_pages; i += 1) {

                        reqs.push(axios.get(`${apiUrl}${i}`));

                    }

                    return Promise.all(reqs);

                })
                .then((resArr) => {

                    // 回傳的結果會是 [ {...}, {...} ] 陣列包物件的格式

                    const total = [];

                    resArr.forEach((res) => total.push(...res.data.orders));

                    this.orders = total;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-orders'));

        },

        updateOrder(data, hideModal) {

            const { code, order } = data;

            loaderStore.setLoader(order.id);
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/order/${order.id}`, {
                data: { ...order, state: Number(code) },
            })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getOrders();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.setLoader(''));

        },

        deleteOrder(id, hideModal) {

            loaderStore.createLoader('delete-order');
            axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/order/${id}`)
                .then(() => {

                    alertStore.toastAlert('我們懷念它 (´;ω;`)', 'success');
                    hideModal();
                    this.getOrders();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('delete-order'));

        },

        downTheDrain() {

            alertStore.multiverseAlert(() => {

                loaderStore.createLoader('tan-tiau');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/orders/all`)
                    .then(() => {

                        alertStore.toastAlert('沒了 ... 都沒了 (´;ω;`)', 'success');
                        this.getOrders();

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('tan-tiau'));

            });

        },

        switchFilter(filter, value) { this[filter] = value; },

    },

});
