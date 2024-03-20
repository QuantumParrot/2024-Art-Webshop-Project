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
                <div class="border-top py-6">
                    <div class="row justify-content-center" v-if="author">
                        <div class="col-xl-6 col-md-8">
                            <h4 class="text-center mb-6"><b>作者介紹</b></h4>
                            <div class="row gy-3">
                                <div class="col-sm-3">
                                    <div class="d-flex justify-content-center">
                                    <div class="author-img"
                                    :style="{ backgroundImage: `url(${author.image})`}"></div>
                                    </div>
                                </div>
                                <div class="col-sm-9">
                                    <div class="h-100 d-flex flex-column justify-content-center">
                                    <h5 class="fs-6 mb-3">
                                    <b>{{ article.author }}</b>｜{{ author.name }}
                                    </h5>
                                    <p class="fs-7 mb-0">{{ author.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-top py-6">
                    <h4 class="text-center mb-6"><b>為您推薦</b></h4>
                    <div class="row g-5">
                        <div class="col-md-4" v-for="item in relatedProducts" :key="item.id">
                            <a class="text-decoration-none"
                            href="#" @click.prevent="$router.push(`/product/${item.id}`)">
                            <div class="card">
                                <img class="card-img-top" :src="item.imageUrl" :alt="item.title">
                                <div class="card-body py-5 flex-classic">
                                    <h5 class="fs-6 fw-bold mb-0">{{ item.title }}</h5>
                                    <p class="mb-0">NT$ {{ item.price }}</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div class="text-center mb-3">
                    <router-link class="fw-bold text-info" to="/articles">回文章列表</router-link>
                </div>
            </div>
        </div>
    </div>
    <faq-section :types="['文章問題', '其他問題']" />
    <subscription-section />
</div>

</template>

<script>

import authorsMixins from '@/mixins/authors';

//

import { mapState, mapActions } from 'pinia';

import loaderStore from '@/stores/loader';

import userArticleStore from '@/stores/userArticle';

//

import FaqSection from '@/components/section/FaqSection.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    mixins: [authorsMixins],

    components: { FaqSection, SubscriptionSection },

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

        ...mapActions(userArticleStore, ['getArticle', 'getRelatedProducts']),

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
