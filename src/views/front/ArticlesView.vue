<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <h2 class="text-center py-5 mb-7"><b>專欄文章</b></h2>
        <div class="mb-7">
            <CategoryFilterBar
                :filters="categories['專欄文章']" :filter="filter"
                @switch-filter="switchFilter" />
        </div>
        <ul class="row g-5 list-unstyled mb-7" v-if="columnList.length">
            <template v-for="item in columnList" :key="item.id">
            <li class="col-xl-4 col-md-6">
                <div class="h-100 card">
                    <img class="card-img-top" :src="item.image" :alt="item.title">
                    <div class="card-body d-flex flex-column">
                        <div class="text-nowrap overflow-x-scroll">
                            <h4 class="fs-5 fw-bold mb-4">
                                <span class="section-title">{{ item.title }}</span>
                            </h4>
                            <h5 class="fs-6 mb-4">
                                <span>{{ $calc.formatDate(item.create_at * 1000) }}</span>
                                <span>｜專欄：{{ item.author }}</span>
                            </h5>
                        </div>
                        <p class="flex-grow-1 text-secondary text-justify mb-4">
                        {{ item.description }}
                        </p>
                        <div class="text-end">
                            <RouterLink :to="`/article/${item.id}`" v-slot="{ navigate }" custom>
                                <button
                                    type="button" class="btn-slider btn-navigate ps-2 pe-4"
                                    @click="navigate">
                                    <span class="arrow-animation">
                                        <span class="arrow text-light">
                                            <i class="bi bi-caret-right-fill"></i>
                                        </span>
                                    </span>
                                    <span>繼續閱讀</span>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </li>
            </template>
        </ul>
        <div class="alert text-center py-7 mb-7" v-else>這個分類目前沒有文章喔！</div>
        <div class="d-flex justify-content-center">
            <PaginationComponent
                :current="currentPage.column" :total="totalPages.column"
                @switch-page="changePage"
                v-show="totalPages.column > 1" />
        </div>
    </div>
    <SubscriptionSection />
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

import userArticleStore from '@/stores/userArticle';

//

import CategoryFilterBar from '@/components/CategoryFilterBar.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    components: {

        CategoryFilterBar, PaginationComponent, SubscriptionSection,

    },

    computed: {

        ...mapState(adminArticleStore, ['categories']),

        ...mapState(userArticleStore, ['columns', 'columnList', 'filter', 'currentPage', 'totalPages']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles', 'switchFilter', 'switchPage']),

        changePage(num) { this.switchPage(num, 'column'); },

    },

    mounted() {

        if (!this.columns.length) { this.getArticles(); }

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.section-title::after {

  bottom: 0; left: 2px;
  height: 30%; width: 99%;

}

.btn-navigate {

  background-color: $primary;
  color: $light;

  &::after { background-color: $secondary; }

}

.card-img-top { height: 250px; object-position: 50% 20%; }

</style>
