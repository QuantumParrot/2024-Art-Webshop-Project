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

        product: {},
        relatedProducts: [],

        productList: [],
        currentPage: 1,

        categories: ['複製油畫', '複製雕塑', '玩具模型', '裝飾工藝', '文具禮品'],
        filter: '',

    }),

    getters: {

        products: ({ productList, filter }) => {

            if (filter) {

                return productList.filter((item) => item.category === filter);

            }

            return productList;

        },

        totalPages: ({ products }) => Math.ceil(products.length / 9),

        displaying: ({ products, currentPage }) => products.filter((p, i) => {

            const group = Math.floor(i / 9) + 1;

            return group === currentPage;

        }),

    },

    actions: {

        switchFilter(value) { this.filter = this.categories.includes(value) ? value : ''; },

        switchPage(num) { this.currentPage = num; },

        async getProducts(recommendFn, productData) {

            try {

                loaderStore.createLoader('get-user-products');

                const res = await axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/products/all`);

                this.productList = Object.values(res.data.products).reverse();

                if (typeof recommendFn === 'function') { recommendFn(productData); }

            } catch (error) {

                alertStore.errorAlert(error);

            } finally { loaderStore.removeLoader('get-user-products'); }

            return this.productList;

        },

        getProduct(id) {

            loaderStore.createLoader('get-single-product');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/product/${id}`)
                .then((res) => {

                    this.product = res.data.product;

                    if (this.productList.length) {

                        this.getRelatedProducts(this.product);

                    } else {

                        this.getProducts(this.getRelatedProducts, this.product);

                    }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-product'));

        },

        getRelatedProducts(item) {

            const { category, tags } = item;

            // p => products

            const p = this.productList.filter((i) => i.id !== item.id && Array.isArray(i.tags));

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
