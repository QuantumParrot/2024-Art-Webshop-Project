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
        relatedProducts: [],

    }),

    getters: {

        // 所有的公益計劃

        projects: ({ articles }) => articles.filter((i) => i.type === '公益計劃'),

        // 所有的最新消息

        news: ({ articles }) => articles.filter((i) => i.type === '網站公告').sort((a, b) => b.create_at - a.create_at),

        // 所有的專欄文章

        columns: ({ articles }) => articles.filter((i) => i.type === '專欄文章'),

    },

    actions: {

        getArticles(page = 1) {

            const api = `${VITE_APP_SITE}/api/${VITE_APP_PATH}/articles?page=`;

            loaderStore.createLoader('get-user-articles');
            axios.get(`${api}${page}`)
                .then((res) => {

                    const { articles, pagination } = res.data;

                    this.articles = articles;

                    if (pagination.total_pages > 1) {

                        const reqs = [];

                        for (let i = 2; i <= pagination.total_pages; i += 1) {

                            reqs.push(axios.get(`${api}${i}`));

                        }

                        return Promise.all(reqs);

                    }

                    return false;

                })
                .then((resArr) => {

                    if (Array.isArray(resArr)) {

                        resArr.forEach((res) => this.articles.push(...res.data.articles));

                    }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-user-articles'));

        },

        getArticle(id) {

            loaderStore.createLoader('get-single-article');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/article/${id}`)
                .then((res) => {

                    this.article = res.data.article;

                    if (this.article.type === '專欄文章') {

                        this.router.push(`/article/${this.article.id}`);
                        if (this.article.recommend) { this.getRelatedProducts(this.article.tag); }

                    } else { this.router.push(`/news/${this.article.id}`); }

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-article'));

        },

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
