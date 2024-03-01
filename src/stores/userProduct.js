import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default defineStore('userProduct', {

    state: () => ({ products: [], pagination: {}, product: {} }),

    actions: {

        getProducts(category = '', page = 1) {

            loaderStore.createLoader('get-user-products');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/products?category=${category}&page=${page}`)
                .then((res) => {

                    this.products = res.data.products;
                    this.pagination = res.data.pagination;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-user-products'));

        },

        getProduct(id) {

            loaderStore.createLoader('get-single-product');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/product/${id}`)
                .then((res) => {

                    this.product = res.data.product;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-product'));

        },

    },

});
