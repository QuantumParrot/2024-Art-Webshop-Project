<template>

<div class="h-100 bg-gray text-primary" v-show="!isLoading">
    <div class="container py-7">
        <div class="bg-white rounded-2 p-md-7 p-5 shadow">
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
                    <div class="col-xl-6 col-md-8 mb-2">
                        <div class="text-justify" v-html="article.content"></div>
                    </div>
                </div>
                <div class="border-top py-6" v-if="article.recommend && relatedProducts.length">
                    <h4 class="text-center mb-6"><b>為您推薦</b></h4>
                    <div class="row g-5">
                        <div class="col-md-4" v-for="item in relatedProducts" :key="item.id">
                            <a class="text-decoration-none"
                            href="#" @click.prevent="$router.push(`/product/${item.id}`)">
                                <div class="card">
                                    <img
                                        class="card-img-top"
                                        :src="item.imageUrl" :alt="item.title">
                                    <div class="card-body py-5 flex-classic">
                                        <h5 class="fs-6 fw-bold mb-0">{{ item.title }}</h5>
                                        <p class="mb-0">NT$ {{ item.price }}</p>
                                    </div>
                                </div>
                            </a>
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

//

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    components: { SubscriptionSection },

    computed: {

        ...mapState(userArticleStore, ['article', 'relatedProducts']),

        ...mapState(loaderStore, ['isLoading']),

        author() { return this.authors.find((i) => i.column === this.article.author); },

    },

    watch: {

        '$route.params.id': {

            // 為了讓用戶手動輸入網址時也能觸發切換文章的效果

            handler(n) { this.getArticle(n); },

            deep: true,

        },

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticle']),

    },

    mounted() {

        this.getArticle(this.$route.params.id);

    },

};

</script>

<style lang="scss">

.article-img {

  object-fit: cover;
  max-height: 500px;

}

.author-img {

  width: 100px; height: 100px;
  border-radius: 50%;

  background-size: cover;
  background-position: center center;

}

.card-img-top { height: 250px; object-position: 50% 30%; }

@media (max-width: 991px) {

  .author-img { width: 80px; height: 80px; }

}

</style>
