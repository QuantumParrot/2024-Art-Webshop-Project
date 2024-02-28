<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <h3 class="h2 text-center mb-7">專欄文章</h3>
        <ul class="nav mb-5">
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ 'active': filter === '全部' }"
                   @click.prevent="switchFilter('全部')">全部</a>
            </li>
            <template v-for="item in categories['專欄文章']" :key="item">
                <li class="nav-item">
                    <a href="#" class="nav-link" :class="{ 'active': filter === item }"
                       @click.prevent="switchFilter(item)">{{ item }}</a>
                </li>
            </template>
        </ul>
        <ul class="row list-unstyled" v-if="displaying.length">
            <li class="col-lg-4 col-md-6">
                <div class="card" v-for="item in displaying" :key="item.id">
                    <img class="card-img-top" :src="item.image" :alt="item.title">
                    <div class="card-body p-3">
                        <h4 class="fs-5 fw-bold mb-4">
                        <span class="section-title">{{ item.title }}</span>
                        </h4>
                        <h5 class="fs-6 mb-4">
                        <span>{{ $calc.formatDate(item.create_at * 1000) }}</span>
                        <span>｜專欄：{{ item.author }}</span>
                        </h5>
                        <p class="text-secondary text-justify">{{ item.description }}</p>
                        <div class="text-end">
                            <router-link :to="`/article/${item.id}`" v-slot="{ navigate }" custom>
                            <button type="button" @click="navigate"
                                    class="btn-slider btn-navigate ps-2 pe-4">
                                <span class="arrow-animation">
                                    <span class="arrow">
                                        <i class="bi bi-caret-right-fill"></i>
                                    </span>
                                </span>
                                <span>繼續閱讀</span>
                            </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="alert text-center" v-else>這個分類目前沒有文章喔！</div>
    </div>
</div>

</template>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

    flex-grow: 1;

    border: 1px solid $primary;

    &:not(:last-child) { border-right: none; }

}

.nav-link {

    text-align: center;
    background-color: $gray;

    &.active {

        background-color: $primary;
        color: $light;
        font-weight: bold;

    }

    &:hover {

        background-color: $primary;
        color: $light;
        font-weight: bold;

    }

}

.section-title::after {

    bottom: 0; left: 2px;
    height: 30%; width: 99%;

}

.card-img-top {

    max-height: 350px;
    object-fit: cover;

}

.btn-navigate {

    background-color: $primary;
    color: $light;

    &::after { background-color: $secondary; }

}

</style>

<script>

import { mapState, mapActions } from 'pinia';

import adminArticleStore from '@/stores/adminArticle';

import userArticleStore from '@/stores/userArticle';

export default {

    computed: {

        ...mapState(adminArticleStore, ['categories']),

        ...mapState(userArticleStore, ['columns', 'displaying', 'filter']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles', 'switchFilter']),

    },

    mounted() {

        if (!this.columns.length) { this.getArticles(); }

    },

};

</script>
