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

                        // console.log('已經取過全部商品的資料！');

                        this.getRelatedProducts(res.data.product);

                    } else {

                        // console.log('還未取過全部商品的資料！');

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

                    // console.log(res);

                    this.totalProducts = Object.values(res.data.products);
                    if (typeof fn === 'function') { fn(data); }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-total-products'));

        },

        getRelatedProducts(item) { // 寫得超爛 XD 還在改良中！

            const { category, tags } = item;

            // 取得所有商品之後，先篩選掉當前的商品 ( 自己 ) 和沒有標籤的商品

            const products = this.totalProducts.filter((i) => i.id !== item.id && Array.isArray(i.tags));

            // 接著開始尋找有同樣標籤的商品

            const results = products.filter((i) => i.tags.some((tag) => tags.includes(tag)));

            // console.log('results', results.map((i) => i.title));

            if (results.length < 3) {

                // 篩選結果少於三個？沒關係，就從同類型 ( category ) 裡面挑幾個出來吧！

                const excludes = results.map((i) => i.id);

                const categoryFilter = products.filter((i) => i.category === category && !excludes.includes(i.id));

                results.push(...this.getRandomProducts(categoryFilter, 3 - results.length));

                if (results.length < 3) {

                    // 怎麼還是少於三個啦 ｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡ 只好從所有商品裡面亂槍打鳥了

                    const remains = products.filter((i) => !results.map((result) => result.id).includes(i.id));

                    // console.log(remains.map((i) => i.title));

                    results.push(...this.getRandomProducts(remains, 3 - results.length));

                }

                this.relatedProducts = results;

                // console.log(this.relatedProducts.map((i) => i.title));

            } else { this.relatedProducts = this.getRandomProducts(results, 3); }

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
