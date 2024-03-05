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

                    // console.log(res.data);

                    this.carts = res.data.data.carts;
                    this.sum = {

                        total: res.data.data.total,
                        finalTotal: res.data.data.final_total,

                    };

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-carts'));

        },

        addToCart(id, qty = 1) { // productId

            loaderStore.setLoader(id);
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart`, { data: { product_id: id, qty } })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.setLoader(''));

        },

        updateCart(cart, qty) { // cartId & productId

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

        deleteSingleCart(id) { // cartId

            loaderStore.createLoader('delete-single-cart');
            axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/cart/${id}`)
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('delete-single-cart'));

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

                    // console.log(res.data);
                    this.sum.finalTotal = res.data.final_total;
                    alertStore.toastAlert('已套用優惠券！', 'success');
                    this.getCarts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.setLoader(''));

        },

    },

});
