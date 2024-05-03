<template>

<div class="h-100 bg-gray text-primary" v-show="article.id">
    <div class="container py-7">
        <div class="bg-white rounded-2 p-md-7 p-5 shadow">
            <div class="p-3 border rounded-2">
                <div class="text-center mb-6">
                    <h3 class="h2 fw-bold lh-lg py-3 border-bottom mb-3">{{ article.title }}</h3>
                    <p class="py-3">
                        <span>{{ $calc.formatDate(article.create_at * 1000) }}</span>
                        <span>｜專欄：{{ article.author }}</span>
                    </p>
                    <img class="article-img" :src="article.image" :alt="article.title">
                </div>
                <div class="row justify-content-center mb-3">
                    <div class="col-xl-6 col-md-8 mb-2">
                        <div class="article-content text-justify" v-html="article.content"></div>
                    </div>
                </div>
                <div class="border-top py-6" v-if="article.recommend && relatedProducts.length">
                    <h4 class="text-center mb-6"><b>為您推薦</b></h4>
                    <div class="row g-3">
                        <div class="col-md-4" v-for="item in relatedProducts" :key="item.id">
                            <ProductCard :product="item" />
                        </div>
                    </div>
                </div>
                <div class="border-top pt-6 text-center mb-3">
                    <RouterLink class="fw-bold text-info" to="/articles">回文章列表</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <SubscriptionSection />
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import loaderStore from '@/stores/loader';

import userArticleStore from '@/stores/userArticle';

import userCollectionStore from '@/stores/userCollection';

//

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

import ProductCard from '@/components/card/ProductCard.vue';

//

export default {

    components: { SubscriptionSection, ProductCard },

    computed: {

        ...mapState(userArticleStore, ['article', 'relatedProducts']),

        ...mapState(loaderStore, ['isLoading']),

        ...mapState(userCollectionStore, ['collection']),

        author() { return this.authors.find((i) => i.column === this.article.author); },

    },

    watch: {

        '$route.params.id': {

            // 為了讓用戶手動輸入網址時也能觸發切換文章的效果

            handler(n) { this.getArticle(n); },

            deep: true,

        },

        collection: {

            handler() { this.updateCollection(); },

            deep: true,

        },

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticle']),

        ...mapActions(userCollectionStore, ['getCollection', 'updateCollection']),

    },

    mounted() {

        this.getArticle(this.$route.params.id);
        this.getCollection();

    },

};

</script>

<style lang="scss">

.article-img {

  object-fit: cover;
  max-height: 500px;

}

.article-content img {

  width: 100%;
  object-fit: cover;

}

.image_resized { height: auto; }

.card-img-top { height: 250px; object-position: 50% 30%; }

@media (max-width: 991px) {

  .author-img { width: 80px; height: 80px; }

}

</style>
