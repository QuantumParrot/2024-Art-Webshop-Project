<template>

<ul class="lh-lg nav nav-tabs nav-fill mb-3 border-bottom">
    <li class="nav-item">
        <a href="#" class="nav-link py-3" :class="{ 'active': filter === '網站公告' }"
        @click.prevent="filter = '網站公告'">
        <b>網站公告</b></a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link py-3" :class="{ 'active': filter === '專欄文章' }"
        @click.prevent="filter = '專欄文章'">
        <b>專欄文章</b></a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link py-3" :class="{ 'active': filter === '公益計劃' }"
        @click.prevent="filter = '公益計劃'">
        <b>公益計劃</b></a>
    </li>
</ul>

<div class="text-end mb-3">
<p class="text-muted">目前共有 {{ displayingArticles.length }} 篇{{ filter }}</p>
</div>

<div class="alert bg-gray flex-classic mb-6">
    <div>
    <button type="button" class="btn btn-highlight" @click="openModal()">新增{{ filter }}</button>
    </div>
    <pagination-component
        :current="currentPage" :total="totalPages"
        @switch-page="getArticles" />
</div>

<div class="table-responsive" v-if="articles.length">
    <table class="table table-hover text-nowrap">
        <thead>
        <tr>
        <th scope="col" width="10%">日期</th>
        <th scope="col" width="10%">分類</th>
        <th scope="col" width="50%">{{ filter }}</th>
        <th scope="col" width="15%" class="text-center">狀態</th>
        <th scope="col" width="15%" class="text-center">處理</th>
        </tr>
        </thead>
        <tbody class="align-middle">
        <tr v-for="article in displayingArticles" :key="article.id">
            <td>{{ $calc.formatDate(article.create_at * 1000, '/') }}</td>
            <td>
            <span class="badge bg-highlight text-dark py-2">{{ article.category }}</span></td>
            <td>
            <p class="fw-bold mb-2">{{ article.title }}</p>
            <span class="text-muted fs-7">作者｜{{ article.author }}</span>
            </td>
            <td class="text-center">
                <div class="form-switch">
                <input type="checkbox" role="switch" class="form-check-input"
                       :checked="article.isPublic" @change="switchArticleStatus(article)">
                </div>
            </td>
            <td class="text-center">
                <div class="d-flex flex-column gap-2">
                    <button type="button" class="w-100 btn btn-outline-secondary"
                            @click="openModal(article.id)">
                    編輯</button>
                    <button type="button"
                            class="w-100 btn btn-outline-danger"
                            @click="deleteArticle(article.id, article.title)">
                    刪除</button>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>

<div class="alert bg-gray" v-else>還沒有任何文章！趕快新增一篇吧！</div>

<admin-article-modal ref="articleModal" :type="filter" :temp-article="tempArticle" />

</template>

<script>

// 需要優化的地方：執行 getArticle 的流程

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

import loaderStore from '@/stores/loader';

import alertStore from '@/stores/alert';

//

import AdminArticleModal from '@/components/modal/AdminArticleModal.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

//

export default {

    components: { AdminArticleModal, PaginationComponent },

    data() {

        return {

            filter: '網站公告',
            currentPage: 1,

            tempArticle: {},

        };

    },

    computed: {

        ...mapState(adminArticleStore, ['articles', 'article']),

        displayingArticles() {

            return this.articles.filter((i) => i.type === this.filter);

        },

        totalPages() { return Math.ceil(this.displayingArticles.length / 5); },

    },

    methods: {

        ...mapActions(adminArticleStore, ['getArticles', 'getArticle', 'deleteArticle', 'switchArticleStatus']),

        ...mapActions(loaderStore, ['createLoader', 'removeLoader']),

        ...mapActions(alertStore, ['errorAlert']),

        openModal(id) {

            if (id) {

                this.getArticle(id);

            } else { this.tempArticle = { isPublic: false, create_at: this.$calc.now() }; }

            this.$refs.articleModal.showModal();

        },

        getArticle(id) {

            this.createLoader('get-single-article');
            this.$http.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/article/${id}`)
                .then((res) => {

                    this.tempArticle = res.data.article;

                })
                .catch((error) => this.errorAlert(error))
                .finally(() => this.removeLoader('get-single-article'));

        },

    },

    created() { if (!this.articles.length) { this.getArticles(); } },

};

</script>

<style lang="scss" scoped>

.nav, .nav-link, .nav-link:hover { border-bottom: 0; }

.nav-link, .nav-link.active { margin: -2px 0; }

</style>
