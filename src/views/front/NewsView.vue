<template>

<div class="h-100 bg-gray text-primary" v-if="news.length">
    <div class="container py-7">
        <h2 class="text-center py-5 mb-7"><b>最新消息</b></h2>
        <div class="mb-7">
            <NewsCarousel :data="carousel" />
        </div>
        <div class="mb-7">
            <CategoryFilterBar
                :filters="newsCategories" :filter="filter" total-title="全部消息"
                @switch-filter="switchFilter" />
        </div>
        <template v-if="displayingNews.length">
        <ul class="list-unstyled alert bg-white px-md-7 p-5 mb-7
            d-flex flex-column gap-5">
            <template v-for="item in displayingNews" :key="item.id">
            <li class="d-flex flex-md-row flex-column align-items-md-center gap-md-7 gap-3">
                <div>
                    <span class="badge bg-primary fs-6 rounded-1">{{ item.category }}</span>
                </div>
                <RouterLink class="nav-link text-decoration-none" :to="`/news/${item.id}`">
                    <p class="fs-7 mb-2">{{ $calc.formatDate(item.create_at * 1000, '/') }}</p>
                    <p class="mb-0">{{ item.title }}</p>
                </RouterLink>
            </li>
            </template>
        </ul>
        <div class="d-flex justify-content-center" v-if="totalPages > 1">
            <PaginationComponent
                :current="currentPage" :total="totalPages" @switch-page="switchPage" />
        </div>
        </template>
        <template v-else>
            <div class="alert px-md-7 p-5 mb-0 bg-white text-center">這個分類目前沒有消息喔！</div>
            <LottiePlayer :json="sleepCatJSON" />
        </template>
    </div>
</div>

</template>

<script>

import { defineAsyncComponent } from 'vue';

import { mapState, mapActions } from 'pinia';

//

import filterMixins from '@/mixins/filter';

//

import adminArticleStore from '@/stores/adminArticle';

import userArticleStore from '@/stores/userArticle';

//

import NewsCarousel from '@/components/swiper/NewsCarousel.vue';

import CategoryFilterBar from '@/components/CategoryFilterBar.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

import sleepCatJSON from '@/assets/lottie/sleep-cat.json';

const LottiePlayer = defineAsyncComponent(() => import('@/components/LottiePlayer.vue'));

export default {

    components: {

        NewsCarousel, CategoryFilterBar, PaginationComponent, LottiePlayer,

    },

    mixins: [filterMixins],

    data() {

        return {

            sleepCatJSON,

            filter: '',
            currentPage: 1,

        };

    },

    computed: {

        ...mapState(adminArticleStore, ['categories']),

        ...mapState(userArticleStore, ['news']),

        newsCategories() { return this.categories['網站公告'].filter((i) => i !== '網站測試'); },

        currentNews() {

            if (this.filter) { return this.news.filter((i) => i.category === this.filter); }

            return this.news;

        },

        totalPages() { return Math.ceil(this.currentNews.length / 10); },

        displayingNews() {

            return this.currentNews.filter((n, i) => Math.floor(i / 10) + 1 === this.currentPage);

        },

        carousel() { return this.news.filter((n, i) => i < 3); },

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles', 'switchPage']),

    },

    mounted() {

        if (!this.news.length) { this.getArticles(); }

        this.switchFilter(this.$route.query.category || '');

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-link {

  &:hover { color: $secondary }

}

</style>
