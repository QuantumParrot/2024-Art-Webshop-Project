<template>

<div class="h-100 bg-gray text-primary">
    <div class="h-100 container py-7">
        <div class="bg-light rounded-2 shadow-sm" v-show="!isLoading">
            <div class="px-md-7 px-6 pt-7 pb-6">
                <nav class="mb-5" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb text-nowrap overflow-x-scroll">
                        <li class="breadcrumb-item">
                        <router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item">
                        <router-link to="/news">最新消息</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">
                        <span>{{ article.title }}</span></li>
                    </ol>
                </nav>
                <div class="row gx-7 gy-3">
                    <div class="col-lg-4 mb-3">
                    <img class="h-100 object-fit-cover"
                         :src="article.image" :alt="article.title">
                    </div>
                    <div class="col-lg-8">
                        <div>
                        <p class="text-muted mb-5">
                        <span>{{ $calc.formatDate(article.create_at * 1000, '/') }}｜</span>
                        <span>{{ article.category }}</span>
                        </p>
                        <h4 class="h3 fw-bold mb-5">
                        {{ article.title }}</h4>
                        <div class="lh-lg text-justify" v-html="article.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userArticleStore from '@/stores/userArticle';

import loaderStore from '@/stores/loader';

export default {

    computed: {

        ...mapState(userArticleStore, ['article']),

        ...mapState(loaderStore, ['isLoading']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticle']),

    },

    mounted() { this.getArticle(this.$route.params.id); },

};

</script>
