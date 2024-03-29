<template>

<div class="h-100 bg-gray text-primary" v-if="products.length">
    <div class="container py-7">
        <h2 class="text-center py-5 mb-7"><b>線上商城</b></h2>
        <ul class="nav flex-column flex-md-row mb-7">
            <li class="nav-item">
                <RouterLink
                    to="/products"
                    class="nav-link" :class="{ 'link-active': !$route.query.category }">
                    <span>全部商品</span>
                </RouterLink>
            </li>
            <template v-for="item in categories" :key="item">
            <li class="nav-item">
                <RouterLink
                    :to="`/products?category=${item}`"
                    class="nav-link" :class="{ 'link-active': $route.query.category === item }">
                    <span>{{ item }}</span>
                </RouterLink>
            </li>
            </template>
        </ul>
        <ul class="row g-6 list-unstyled mb-7">
            <template v-for="product in products" :key="product.id">
            <li class="col-xl-4 col-md-6">
                <ProductCard :product="product" />
            </li>
            </template>
        </ul>
        <div class="d-flex justify-content-center" v-show="products.length">
        <PaginationComponent
            :current="pagination.current_page" :total="pagination.total_pages"
            @switch-page="(num) => getProducts(pagination.category, num)"
            v-show="totalPages.column > 1" />
        </div>
    </div>
    <SubscriptionSection />
</div>

</template>

<script>

import categoryMixins from '@/mixins/category';

//

import { mapState, mapActions } from 'pinia';

import userProductStore from '@/stores/userProduct';

import userCartStore from '@/stores/userCart';

import loaderStore from '@/stores/loader';

import userCollectionStore from '@/stores/userCollection';

//

import PaginationComponent from '@/components/PaginationComponent.vue';

import ProductCard from '@/components/card/ProductCard.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    components: { ProductCard, PaginationComponent, SubscriptionSection },

    mixins: [categoryMixins],

    computed: {

        ...mapState(userProductStore, ['products', 'pagination']),

        ...mapState(userCollectionStore, ['collection']),

        ...mapState(loaderStore, ['loadingTask']),

    },

    watch: {

        '$route.query': {

            handler(current) { this.getProducts(current.category); },

            deep: true,

        },

        // 每一次重整時都要從 localstorage 取得 collection 的資訊

        products() { this.getCollection(); },

        // 每一次透過 toggle 讓 favorite 陣列的值產生變化時，都要觸發 update 更新 localStorage 內的資料

        collection: {

            handler() { this.updateCollection(); },

            deep: true,

        },

    },

    methods: {

        ...mapActions(userCollectionStore, ['getCollection', 'updateCollection']),

        ...mapActions(userProductStore, ['getProducts']),

        ...mapActions(userCartStore, ['addToCart']),

    },

    mounted() { this.getProducts(this.$route.query.category); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

  flex-grow: 1;

  border: 1px solid $primary;

  margin: 0 -1px -1px 0;

  overflow: hidden;

  &:first-child { border-radius: .25rem 0 0 .25rem; }

  &:last-child { border-radius: 0 .25rem .25rem 0; }

}

.nav-link {

  text-align: center;
  background-color: $gray;

  &.link-active {

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

@media (max-width: 767px) {

  .nav-item {

    &:first-child { border-radius: .25rem .25rem 0 0; }

    &:last-child { border-radius: 0 0 .25rem .25rem; }

  }

}

</style>
