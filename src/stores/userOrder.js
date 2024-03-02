import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default defineStore('userOrder', {

    state: () => ({ order: {} }),

    actions: {

        getOrder(id, reset) {

            loaderStore.createLoader('get-single-order');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/order/${id}`)
                .then((res) => {

                    const { order } = res.data;

                    if (order !== null) {

                        this.refactorOrder(order);

                    } else { alertStore.toastAlert('查無此訂單', 'error'); }

                })
                .finally(() => {

                    loaderStore.removeLoader('get-single-order');
                    reset();

                });

        },

        createOrder() {

        },

        refactorOrder(order) {

            if (order.message.startsWith('{"')) {

                const detail = JSON.parse(order.message);

                this.order = {

                    ...order,
                    message: detail.message,
                    state: +detail.state,
                    project: detail.project,

                };

            } else {

                this.order = { ...order, state: order.state || 0, project: order.project || '不指定' };

            }

        },

        payOrder(id) {

            loaderStore.createLoader('pay-order');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/pay/${id}`)
                .then(() => {

                    const config = { title: '謝謝您！', text: '我們將立即為您出貨，敬請耐心等待等候！', icon: 'success' };

                    alertStore.modalAlert(config);
                    this.getOrder(id);

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('pay-order'));

        },

    },

});
