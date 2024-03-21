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

    state: () => ({

        products: [],
        pagination: {},

        product: {},
        totalProducts: [],
        relatedProducts: [],

    }),

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

                    if (this.totalProducts.length) {

                        this.getRelatedProducts(res.data.product);

                    } else {

                        this.getTotalProducts(res.data.product, this.getRelatedProducts);

                    }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-product'));

        },

        getTotalProducts(data, fn) {

            loaderStore.createLoader('get-total-products');

            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/products/all`)
                .then((res) => {

                    this.totalProducts = Object.values(res.data.products);
                    if (typeof fn === 'function') { fn(data); }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-total-products'));

        },

        getRelatedProducts(item) {

            const { category, tags } = item;

            // p => products

            const p = this.totalProducts.filter((i) => i.id !== item.id && Array.isArray(i.tags));

            const results = p.filter((i) => i.tags.some((tag) => tags.includes(tag)));

            if (results.length < 3) {

                // ex => excludes

                const ex = results.map((i) => i.id);

                // cf => categoryFilter

                const cf = p.filter((i) => i.category === category && !ex.includes(i.id));

                results.push(...this.getRandomProducts(cf, 3 - results.length));

                if (results.length < 3) {

                    // rm => remains

                    const rm = p.filter((i) => !results.map((result) => result.id).includes(i.id));

                    results.push(...this.getRandomProducts(rm, 3 - results.length));

                }

                this.relatedProducts = results;

            } else { this.relatedProducts = this.getRandomProducts(results, 3); }

        },

        getRandomProducts(data, times) {

            let count = 0;

            const copiedData = [...data];

            const results = [];

            function random() {

                const index = Math.floor(Math.random() * copiedData.length);

                count += 1;

                results.push(...copiedData.splice(index, 1));

            }

            while (count < times) { random(); }

            return results;

        },

    },

});
