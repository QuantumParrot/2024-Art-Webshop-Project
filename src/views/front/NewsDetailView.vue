<template>

<div class="h-100 bg-gray text-primary">
    <div class="h-100 container py-7">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <nav class="mb-5" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb flex-nowrap text-nowrap overflow-x-scroll">
                        <li class="breadcrumb-item">
                            <RouterLink to="/">首頁</RouterLink>
                        </li>
                        <li class="breadcrumb-item">
                            <RouterLink to="/news">最新消息</RouterLink>
                        </li>
                        <li class="d-md-block d-none breadcrumb-item active" aria-current="page">
                            <span>{{ article.title }}</span>
                        </li>
                    </ol>
                </nav>
                <div class="bg-light rounded-2 shadow-sm" v-show="!isLoading">
                    <div class="px-md-7 px-6 pt-7 pb-6">
                        <div class="row flex-column gx-7 gy-5">
                            <div class="col">
                                <img
                                    class="object-fit-cover"
                                    :src="article.image" :alt="article.title">
                            </div>
                            <div class="col">
                                <div>
                                    <p class="text-muted mb-3">
                                    {{ $calc.formatDate(article.create_at * 1000, '/') }}｜
                                    {{ article.category }}
                                    </p>
                                    <h4 class="h3 lh-lg text-justify fw-bold mb-5">
                                        <span>{{ article.title }}</span>
                                    </h4>
                                    <div class="lh-lg text-justify" v-html="article.content"></div>
                                </div>
                            </div>
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
