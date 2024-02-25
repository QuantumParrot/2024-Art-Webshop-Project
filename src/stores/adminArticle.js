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

export default defineStore('adminArticle', {

    state: () => ({ articles: [], pagination: {} }),

    getters: {

        tags: ({ articles }) => {

            const tags = [];
            articles.forEach((item) => item.tag.forEach((tag, idx) => {

                if (idx !== 0 && !tags.includes(tag)) {

                    tags.push(tag);

                }

            }));
            return tags;

        },

    },

    actions: {

        getArticles(page = 1) {

            loaderStore.createLoader('get-articles');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/articles?page=${page}`)
                .then((res) => {

                    const { articles, pagination } = res.data;
                    this.articles = articles.sort((a, b) => b.create_at - a.create_at);
                    this.pagination = pagination;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-articles'));

        },

        createArticle(data, hideModal) {

            loaderStore.createLoader('create-article');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article`, { data })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getArticles();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('create-article'));

        },

        updateArticle(data, hideModal) {

            loaderStore.createLoader('update-article');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${data.id}`, { data })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getArticles();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('update-article'));

        },

        deleteArticle(data) {

            const config = { title: '確定刪除文章？', text: `名稱：${data.title}` };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('delete-article');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${data.id}`)
                    .then((res) => {

                        alertStore.toastAlert(res.data.message, 'success');
                        this.getArticles();

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('delete-article'));

            });

        },

        switchArticleStatus(data) {

            const current = data.isPublic;

            loaderStore.createLoader('switch-article-status');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${data.id}`, {
                data: { ...data, content: data.description, isPublic: !data.isPublic },
            })
                .then(() => {

                    alertStore.toastAlert(`文章已${current ? '隱藏' : '公開'}`, 'success');
                    this.getArticles();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('switch-article-status'));

        },

    },

});
