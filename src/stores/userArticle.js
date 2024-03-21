import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

import useUserProductStore from './userProduct';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default defineStore('userArticle', {

    state: () => ({

        articles: [],
        article: {},
        filter: '',

        relatedProducts: [],

        currentPage: { column: 1, news: 1 },

    }),

    getters: {

        news: ({ articles }) => articles.filter((i) => i.type === '網站公告').sort((a, b) => b.create_at - a.create_at),

        newsList: ({ news, currentPage }) => {

            news.filter((i, idx) => Math.floor(idx / 5) + 1 === currentPage.news);

        },

        columns: ({ articles }) => articles.filter((i) => i.type === '專欄文章'),

        columnList: ({ columns, filter, currentPage }) => {

            const { column } = currentPage;

            const items = filter ? columns.filter((i) => i.category === filter) : columns;

            return items.filter((item, idx) => Math.floor(idx / 9) + 1 === column);

        },

        projects: ({ articles }) => articles.filter((i) => i.type === '公益計劃'),

        totalPages: ({ columns, news }) => ({

            column: Math.ceil(columns.length / 9),
            news: Math.ceil(news.length / 5),

        }),

    },

    actions: {

        getArticles() {

            loaderStore.createLoader('get-user-articles');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/articles`)
                .then((res) => {

                    this.articles = res.data.articles;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-user-articles'));

        },

        getArticle(id) {

            loaderStore.createLoader('get-single-article');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/article/${id}`)
                .then((res) => {

                    // console.log(res);

                    this.article = res.data.article;

                    if (this.article.type === '專欄文章') {

                        this.router.push(`/article/${this.article.id}`);
                        this.getRelatedProducts(this.article.tag);

                    } else { this.router.push(`/news/${this.article.id}`); }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-article'));

        },

        switchFilter(value) { this.filter = value; },

        switchPage(num, type) { this.currentPage[type] = num; },

        async getRelatedProducts(tag) {

            const { getRandomProducts } = useUserProductStore();

            const res = await axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/products/all`);

            const products = Object.values(res.data.products);

            let results = [];

            if (Array.isArray(tag)) {

                results = products.filter((i) => i.tags.some((t) => tag.includes(t)));

            }

            if (results.length > 3) {

                results = getRandomProducts(results, 3);

            } else {

                results.push(...getRandomProducts(products, Math.abs(results.length - 3)));

            }

            this.relatedProducts = results;

        },

    },

});
