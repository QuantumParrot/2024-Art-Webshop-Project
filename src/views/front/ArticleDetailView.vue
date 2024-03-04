<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <div class="bg-white rounded-2 p-md-7 p-5 shadow" v-if="article.id">
            <div class="p-3 border rounded-2">
                <div class="text-center mb-6">
                    <h3 class="h2 fw-bold lh-lg py-3 border-bottom mb-3">{{ article.title }}</h3>
                    <p>
                    <span>{{ $calc.formatDate(article.create_at * 1000) }}</span>
                    <span>｜專欄：{{ article.author }}</span>
                    </p>
                    <img class="article-img" :src="article.image" :alt="article.title">
                </div>
                <div class="row justify-content-center mb-3">
                    <div class="col-lg-6 col-md-8">
                        <div class="text-justify" v-html="article.content"></div>
                    </div>
                </div>
                <div class="border-top py-6 mb-0">
                    <h4 class="text-center fw-bold">相關商品</h4>
                </div>
                <div class="text-center mb-3">
                    <router-link class="fw-bold text-info" to="/articles">回文章列表</router-link>
                </div>
            </div>
        </div>
    </div>
    <subscription-component />
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userArticleStore from '@/stores/userArticle';

import SubscriptionComponent from '@/components/SubscriptionComponent.vue';

export default {

    components: { SubscriptionComponent },

    computed: {

        ...mapState(userArticleStore, ['article']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticle']),

    },

    mounted() { this.getArticle(this.$route.params.id); },

};

</script>

<style lang="scss">

.article-img {

    object-fit: cover;
    max-height: 500px;

}

</style>
