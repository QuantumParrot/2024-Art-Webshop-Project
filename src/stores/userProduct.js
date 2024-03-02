/* eslint-disable max-len */

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
                    this.getRelatedProducts(res.data.product);

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-product'));

        },

        getRelatedProducts(item) {

            loaderStore.createLoader('get-related-products');

            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/products/all`)
                .then((res) => {

                    const { category, tags } = item;

                    let { products } = res.data;

                    // 取得所有商品之後，先篩選掉當前的商品 ( 自己 ) 和沒有標籤的商品

                    products = products.filter((i) => i.id !== item.id && Array.isArray(i.tags));

                    // 接著開始尋找有同樣標籤的商品

                    const results = products.filter((i) => i.tags.some((tag) => tags.includes(tag)));

                    // console.log('results', results.map((i) => i.title));

                    if (results.length < 3) {

                        // console.log('篩選結果小於三！');

                        const excludes = results.map((i) => i.id);

                        const filterAgain = products.filter((i) => i.category === category && !excludes.includes(i.id));

                        results.push(...this.getRandomProducts(filterAgain, 3 - results.length));

                        this.relatedProducts = results.length < 3 ? this.getRandomProducts(products, 3 - results.length) : results;

                    } else {

                        this.relatedProducts = this.getRandomProducts(results, 3);

                    }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-related-products'));

        },

        getRandomProducts(data, times) { // 還在改良中！

            let count = 0;

            const copiedData = [...data];

            const results = [];

            function random() {

                const index = Math.floor(Math.random() * copiedData.length);

                // console.log('index', index);

                count += 1;

                // console.log('count', count);

                results.push(...copiedData.splice(index, 1));

                // console.log('results', results);

                // console.log('copiedData', copiedData);

            }

            while (count < times) { random(); }

            // console.log('最終結果', results);

            return results;

        },

    },

});
