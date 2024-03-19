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

export default defineStore('adminProduct', {

    state: () => ({ products: [], filter: '全部', currentPage: 1 }),

    getters: {

        categories: ({ products }) => {

            const categories = [];

            products.forEach((item) => {

                if (!categories.includes(item.category)) { categories.push(item.category); }

            });
            return categories;

        },

        tagsList: ({ products }) => {

            const list = {};

            products.forEach((item) => {

                // 處理有些商品未包含 tags 的情況

                if (item.tags) {

                    item.tags.forEach((tag) => {

                        if (!list[tag.length]) { list[tag.length] = []; }

                        if (!list[tag.length].includes(tag)) { list[tag.length].push(tag); }

                    });

                }

            });

            return list;

        },

        productsList: ({ products, filter }) => {

            if (filter === '全部') { return products; }

            return products.filter((item) => item.category === filter);

        },

        totalPages: ({ productsList }) => Math.ceil(productsList.length / 5),

        displaying: ({ productsList, currentPage }) => {

            const items = productsList.toSorted((a, b) => a.price - b.price);

            return items.filter((i, idx) => Math.floor(idx / 5) === currentPage - 1);

        },

    },

    actions: {

        switchPage(num) { this.currentPage = num; },

        getProducts() {

            loaderStore.createLoader('get-products');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/products/all`)
                .then((res) => {

                    const { products } = res.data;
                    this.products = Object.values(products);

                    if (this.totalPages === 0) { this.switchFilter('全部'); }
                    if (this.currentPage > this.totalPages) { this.switchPage(1); }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-products'));

        },

        createProduct(data, hideModal) {

            loaderStore.createLoader('create-products');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/product`, { data })
                .then((res) => {

                    const { message } = res.data;
                    alertStore.toastAlert(message, 'success');
                    hideModal();
                    this.getProducts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('create-products'));

        },

        updateProduct(data, hideModal) {

            loaderStore.createLoader('update-products');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/product/${data.id}`, { data })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getProducts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('update-products'));

        },

        switchProductStatus(data) {

            const current = data.is_enabled;

            loaderStore.createLoader('switch-product-status');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/product/${data.id}`, {
                data: { ...data, is_enabled: !data.is_enabled },
            })
                .then(() => {

                    alertStore.toastAlert(`成功${current ? '下架' : '上架'}`, 'success');
                    this.getProducts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('switch-product-status'));

        },

        deleteProduct(id, hideModal) {

            loaderStore.createLoader('delete-product');
            axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/product/${id}`)
                .then(() => {

                    alertStore.toastAlert('我們懷念它 (´;ω;`)', 'success');
                    hideModal();
                    this.getProducts();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('delete-product'));

        },

        switchFilter(value) { this.switchPage(1); this.filter = value; },

    },

});
