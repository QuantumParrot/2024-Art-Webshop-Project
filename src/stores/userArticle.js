import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default defineStore('userArticle', {

    state: () => ({ articles: [], filter: '全部', article: {} }),

    getters: {

        news: ({ articles }) => articles.filter((i) => i.type === '網站公告'),

        columns: ({ articles }) => articles.filter((i) => i.type === '專欄文章'),

        displaying: ({ columns, filter }) => {

            if (filter === '全部') { return columns; }

            return columns.filter((i) => i.category === filter);

        },

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

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-single-article'));

        },

        switchFilter(value) { this.filter = value; },

    },

});
