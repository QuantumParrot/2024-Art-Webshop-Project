<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <h2 class="text-center py-5 mb-7"><b>最新消息</b></h2>
        <div class="mb-7">
            <category-filter-bar
                :category="category" :current="filter" total="全部消息"
                @switch-category="switchFilter" />
        </div>
        <template v-if="displaying.length">
        <ul class="list-unstyled d-flex flex-column gap-5
                   alert bg-white px-md-7 p-5 mb-7">
            <template v-for="item in displaying" :key="item.id">
            <li class="d-flex flex-md-row flex-column
                       align-items-md-center
                       gap-md-7 gap-3">
                <div>
                <span class="badge bg-primary fs-6 rounded-1">{{ item.category }}</span>
                </div>
                <router-link class="nav-link text-decoration-none" :to="`/news/${item.id}`">
                    <p class="fs-7 mb-2">
                    {{ $calc.formatDate(item.create_at * 1000, '/') }}</p>
                    <p class="mb-0">{{ item.title }}</p>
                </router-link>
            </li>
            </template>
        </ul>
        <div class="d-flex justify-content-center">
            <pagination-component
                :current="currentPage.news" :total="totalPages.news"
                @switch-page="(num) => switchPage(num, 'news')" />
        </div>
        </template>
        <div class="alert bg-white text-center mb-0" v-else>這個分類目前沒有消息喔！</div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

import userArticleStore from '@/stores/userArticle';

//

import CategoryFilterBar from '@/components/CategoryFilterBar.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

export default {

    components: { CategoryFilterBar, PaginationComponent },

    data() {

        return { filter: '' };

    },

    computed: {

        ...mapState(adminArticleStore, ['categories']),

        ...mapState(userArticleStore, ['news', 'currentPage', 'totalPages']),

        category() { return this.categories['網站公告'].filter((i) => i !== '網站測試'); },

        displaying() {

            if (this.filter) { return this.news.filter((i) => i.category === this.filter); }

            return this.news;

        },

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles', 'switchPage']),

        switchFilter(value) { this.filter = value; },

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
