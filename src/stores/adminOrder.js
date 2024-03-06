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

        currentPage: 1,

        orderState: '',
        isPaid: '',

        timeAscending: 0,

    }),

    getters: {

        totalPages: ({ orders }) => Math.ceil(orders.length / 5),

        ordersList: ({ orders }) => orders.map((order) => {

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

        displaying: ({ timeAscending, ordersList, currentPage }) => {

            ordersList.sort((a, b) => (timeAscending ? a.create_at - b.create_at : b.create_at - a.create_at));

            return ordersList.filter((o, i) => Math.floor(i / 5) + 1 === currentPage);

        },

        unhandled: ({ ordersList }) => ordersList.filter((i) => i.is_paid && i.state === 0).length,

    },

    actions: {

        switchPage(num) { this.currentPage = num; },

        getOrders() {

            loaderStore.createLoader('get-orders');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/orders`)
                .then((res) => {

                    this.orders = res.data.orders;
                    this.switchPage(1);

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
