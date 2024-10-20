import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default defineStore('userCart', {

    state: () => ({ carts: [], sum: {} }),

    actions: {

        getCarts() {

            loaderStore.createLoader('get-carts');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart`)
                .then((res) => {

                    this.carts = res.data.data.carts;
                    this.sum = {

                        total: +(res.data.data.total.toFixed(0)),
                        finalTotal: +(res.data.data.final_total.toFixed(0)),

                    };

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-carts'));

        },

        // 需要 productId

        addToCart(id, qty = 1) {

            loaderStore.setLoader(id);
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart`, { data: { product_id: id, qty } })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.setLoader(''));

        },

        // 需要 cartId & productId

        updateCart(cart, qty) {

            loaderStore.createLoader('update-cart');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart/${cart.id}`, {
                data: { product_id: cart.product_id, qty },
            })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('update-cart'));

        },

        deleteSingleCart(cart, reset) {

            const config = { title: '確定刪除此商品？', text: `您刪除的商品為：${cart.product.title}` };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('delete-single-cart');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart/${cart.id}`)
                    .then((res) => {

                        alertStore.toastAlert(res.data.message, 'success');
                        this.getCarts();

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('delete-single-cart'));

            }, reset);

        },

        clearCart() {

            const config = { title: '確定清空購物車？' };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('delete-all-carts');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/carts`)
                    .then((res) => {

                        alertStore.toastAlert(res.data.message, 'success');
                        this.getCarts();

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('delete-all-carts'));

            });

        },

        useCoupon(code) {

            loaderStore.setLoader('use-coupon');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/coupon`, { data: { code } })
                .then((res) => {

                    this.sum.finalTotal = res.data.final_total;
                    alertStore.toastAlert('已套用優惠券！', 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.setLoader(''));

        },

    },

});
