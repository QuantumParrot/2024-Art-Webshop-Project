import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

import useUserCartStore from './userCart';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const cartStore = useUserCartStore();

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

//

export default defineStore('userOrder', {

    state: () => ({ order: {}, tempOrder: {} }),

    actions: {

        getOrder(id, reset) {

            loaderStore.createLoader('get-single-order');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/order/${id}`)
                .then((res) => {

                    const { order } = res.data;

                    if (order !== null) {

                        this.order = this.refactorOrder(order);

                    } else { alertStore.toastAlert('查無此訂單', 'error'); }

                })
                .finally(() => {

                    if (typeof reset === 'function') reset();

                    loaderStore.removeLoader('get-single-order');

                });

        },

        createOrder(data) {

            const detail = {

                message: data.message,
                project: data.project || '不指定',
                state: 0,

            };

            const order = {

                user: {
                    name: data.name,
                    tel: data.tel,
                    address: data.address,
                    email: data.email,
                },

                message: JSON.stringify(detail),

            };

            const config = { title: '確認送出訂單？', text: '一旦按下確定，即視為交易成立', type: 'confirm' };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('create-order');
                axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/order`, { data: order })
                    .then((res) => {

                        alertStore.toastAlert(res.data.message, 'success');
                        return axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/order/${res.data.orderId}`);

                    })
                    .then((res) => {

                        this.tempOrder = this.refactorOrder(res.data.order);
                        this.router.replace('/checkout/order');

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('create-order'));

            });

        },

        refactorOrder(order) {

            const newValue = +(order.total).toFixed(0);

            if (order.message.startsWith('{"')) {

                const detail = JSON.parse(order.message);

                return {

                    ...order,
                    message: detail.message,
                    state: +detail.state,
                    project: detail.project,
                    total: newValue,

                };

            }

            return {

                ...order,
                state: order.state || 0,
                project: order.project || '不指定',
                total: newValue,

            };

        },

        payOrder(id) {

            loaderStore.createLoader('pay-order');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/pay/${id}`)
                .then(() => {

                    const config = {

                        title: '謝謝您！',
                        text: '我們將立即為您出貨，敬請耐心等待等候！',
                        icon: 'success',
                        buttonColor: '#424242',

                    };

                    alertStore.modalAlert(config);

                    cartStore.getCarts();
                    this.getOrder(id);

                    setTimeout(() => this.router.push('/'), 1500);

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('pay-order'));

        },

    },

});
