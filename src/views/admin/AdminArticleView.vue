<template>

<div class="text-end mb-7">
<h3 class="fs-2 mb-2">文章</h3>
<span>目前共有 {{ articles.length }} 篇文章 (꜆꜄꜆ ˙꒳˙)꜆꜄꜆ｵﾗｵﾗｵﾗｵﾗ</span>
</div>

<div class="alert bg-light flex-classic mb-5">
    <div>
        <button type="button" class="btn btn-highlight" @click="openModal()">新增文章</button>
    </div>
    <pagination-component
        :current="pagination.current_page" :total="pagination.total_pages"
        @switch-page="getArticles" />
</div>

<div class="table-responsive" v-if="articles.length">
    <table class="table table-hover text-nowrap">
        <thead>
            <tr>
            <th scope="col" width="10%">日期</th>
            <th scope="col" width="10%">分類</th>
            <th scope="col" width="50%">文章</th>
            <th scope="col" width="15%" class="text-center">狀態</th>
            <th scope="col" width="15%" class="text-center">處理</th>
            </tr>
        </thead>
        <tbody class="align-middle">
            <tr v-for="article in articles" :key="article.id">
                <td>{{ formatDate(article.create_at * 1000, '/') }}</td>
                <td><span class="badge bg-highlight text-dark py-2">{{ article.tag[0] }}</span></td>
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
                                @click="openModal(article)">
                        編輯</button>
                        <button type="button" class="w-100 btn btn-outline-danger"
                                @click="deleteArticle(article)">
                        刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="alert bg-light" v-else>還沒有任何文章！趕快新增一篇吧！</div>

<admin-article-modal ref="articleModal" :temp-article="tempArticle" />

</template>

<script>

import calculatorMixins from '@/mixins/calculator';

//

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

//

import AdminArticleModal from '@/components/modal/AdminArticleModal.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

export default {

    mixins: [calculatorMixins],

    components: { AdminArticleModal, PaginationComponent },

    data() { return { tempArticle: {} }; },

    computed: {

        ...mapState(adminArticleStore, ['articles', 'pagination']),

    },

    methods: {

        ...mapActions(adminArticleStore, ['getArticles', 'deleteArticle', 'switchArticleStatus']),

        openModal(item) {

            this.tempArticle = item ? { ...item } : { isPublic: false, create_at: this.now() };

            this.$refs.articleModal.showModal();

        },

    },

    mounted() { this.getArticles(); },

};

</script>
