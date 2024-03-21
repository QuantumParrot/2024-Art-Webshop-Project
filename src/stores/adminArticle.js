// 需要優化的地方：尚未處理文章總數量超過十篇的情況！記得補上！

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

    state: () => ({

        articles: [],

        categories: {

            網站公告: ['營運通知', '優惠活動', '展覽資訊', '講座資訊', '網站測試'],
            專欄文章: ['藝術', '歷史', '地球', '天文'],
            公益計劃: ['海洋保育', '野生動物救援', '社會關懷'],

        },

    }),

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

                    const { articles } = res.data;
                    this.articles = articles.sort((a, b) => b.create_at - a.create_at);

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

        deleteArticle(id, title) {

            const config = { title: '確定刪除文章？', text: `名稱：${title}` };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('delete-article');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${id}`)
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
