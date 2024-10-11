<script setup>

import { register } from 'swiper/element/bundle';

import {

    defineAsyncComponent,
    toRefs, computed, onMounted,

} from 'vue';

import { useRoute } from 'vue-router';

//

import useAdminArticleStore from '@/stores/adminArticle';

import useUserArticleStore from '@/stores/userArticle';

//

import useFilter from '@/composables/useFilter';

//

import CarouselComponent from '@/components/CarouselComponent.vue';

import CategoryFilterBar from '@/components/CategoryFilterBar.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

import sleepCatJSON from '@/assets/lottie/sleep-cat.json';

// Lottie Animation Data

const LottiePlayer = defineAsyncComponent(() => import('@/components/LottiePlayer.vue'));

const sleepCatLottie = sleepCatJSON;

//

const {

    filter, currentPage, switchFilter, switchPage,

} = useFilter();

// News Categories

const { categories } = useAdminArticleStore();

const newsCategories = categories['網站公告'].filter((i) => i !== '網站測試');

//

const userArticleStore = useUserArticleStore();

const { news } = toRefs(userArticleStore);

const currentNews = computed(() => {

    if (!filter.value) { return news.value; }

    return news.value.filter((n) => n.category === filter.value);

});

const totalPages = computed(() => Math.ceil(currentNews.value.length / 10));

const displayingNews = computed(() => currentNews.value
    .filter((n, idx) => Math.floor(idx / 10) + 1 === currentPage.value));

// News Carousel

const carousel = computed(() => news.value.filter((n, i) => i < 3));

//

const { getArticles } = userArticleStore;

const route = useRoute();

onMounted(() => {

    if (!news.value.length) { getArticles(); }

    switchFilter(route.query.category || '');

    register();

});

</script>

<template>

<div class="h-100 bg-gray text-primary" v-if="news.length">
    <div class="container py-7">
        <h2 class="text-center py-5 mb-7"><b>最新消息</b></h2>
        <div class="mb-7">
            <CarouselComponent>
                <template v-for="item in carousel" :key="item.id">
                    <swiper-slide lazy="true">
                        <div class="slide-content">
                            <img
                                :src="item.image" :alt="item.title"
                                class="w-100 object-fit-cover"
                                loading="true">
                        </div>
                        <div class="slide-title fs-5 py-3">
                            <RouterLink class="text-decoration-none" :to="`/news/${item.id}`">
                                <b>{{ item.title }}</b>
                            </RouterLink>
                        </div>
                    </swiper-slide>
                </template>
            </CarouselComponent>
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
            <LottiePlayer :json="sleepCatLottie" />
        </template>
    </div>
</div>

</template>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-link {

  &:hover { color: $secondary }

}

.slide-content {

  height: 400px;

  img {

    height: 100%;
    object-position: 50% 60%;

  }

}

.slide-title {

  background-color: $primary;
  text-align: center;
  color: $light;

}

</style>
