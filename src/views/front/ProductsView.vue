<template>

<div class="h-100 h-100 bg-gray text-primary">
    <div class="container py-7">
        <h3 class="h2 text-center mb-7">商品一覽</h3>
        <ul class="nav flex-column flex-md-row mb-7">
            <li class="nav-item">
            <router-link
                to="/products"
                class="nav-link" :class="{ 'link-active': !$route.query.category }">
                全部</router-link>
            </li>
            <template v-for="item in categories" :key="item">
            <li class="nav-item">
            <router-link
                :to="`/products?category=${item}`"
                class="nav-link" :class="{ 'link-active': $route.query.category === item }">
                {{ item }}</router-link>
            </li>
            </template>
        </ul>
        <div class="d-flex justify-content-center mb-7" v-if="products.length">
            <pagination-component
                :current="pagination.current_page" :total="pagination.total_pages"
                @switch-page="(num) => getProducts(pagination.category, num)" />
        </div>
        <ul class="row g-6 list-unstyled mb-7" v-if="products.length">
            <template v-for="product in products" :key="product.id">
                <li class="col-xl-4 col-md-6">
                    <div class="h-100 card border-0 rounded-0 shadow">
                        <div class="overflow-hidden">
                            <div class="card-img">
                                <router-link :to="`/product/${product.id}`">
                                <img class="card-img-top"
                                     :src="product.imageUrl" :alt="product.title">
                                <div class="card-navigate">
                                    <button type="button" class="btn btn-outline-light">
                                    <i class="bi bi-search"></i>
                                    </button>
                                </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="card-body py-5
                                    d-flex flex-column justify-content-between">
                            <div class="flex-grow-1">
                                <h4 class="card-title h6 fw-bold text-nowrap overflow-scroll
                                           d-flex align-items-center mb-3">
                                <span class="bg-primary text-light px-2 py-2">
                                {{ product.category }}</span>
                                <span class="px-2">
                                {{ product.title }}</span>
                                </h4>
                            </div>
                            <div class="fs-5 flex-classic">
                                <div>
                                <span>NT＄</span>
                                <template v-if="product.price < product.origin_price">
                                    <span>
                                    <span class="text-decoration-line-through text-muted">
                                    {{ product.origin_price }}</span>
                                    </span>
                                    <span class="arrow-animation">
                                    <span class="arrow"> → </span>
                                    </span>
                                </template>
                                <span class="fw-bold">{{ product.price }}</span>
                                </div>
                                <button type="button"
                                        class="btn btn-highlight text-white rounded-1">
                                <i class="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
        <div class="alert text-center mb-7" v-else>這個分類目前沒有商品喔！</div>
        <div class="d-flex justify-content-center" v-if="products.length">
            <pagination-component
                :current="pagination.current_page" :total="pagination.total_pages"
                @switch-page="(num) => getProducts(pagination.category, num)" />
        </div>
    </div>
</div>

</template>

<script>

import categoryMixins from '@/mixins/category';

//

import { mapState, mapActions } from 'pinia';

import userProductStore from '@/stores/userProduct';

//

import PaginationComponent from '@/components/PaginationComponent.vue';

//

export default {

    components: { PaginationComponent },

    mixins: [categoryMixins],

    computed: {

        ...mapState(userProductStore, ['products', 'pagination']),

    },

    watch: {

        '$route.query': {

            handler(current) { this.getProducts(current.category); },

            deep: true,

        },

    },

    methods: {

        ...mapActions(userProductStore, ['getProducts']),

    },

    mounted() { this.getProducts(this.$route.query.category); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

    flex-grow: 1;

    border: 1px solid $primary;

    margin: 0 -1px -1px 0

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

.card { background-color: $light; }

.card-img {

    border-radius: 0 0 0 0;
    position: relative;

    &:hover {

        transform: scale(1.2);
        transition: all 0.75s;

    }

    &:hover::after {

        content: '';
        width: 100%; height: 100%;
        position: absolute;
        top: 0; left: 0;
        z-index: 1;
        backdrop-filter: brightness(70%);

    }

}

.card-img-top {

    height: 300px;
    object-position: 50% 30%;
    border-radius: 0 0 0 0;

}

.card-navigate {

    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: 2;

    &:hover { opacity: 1; }

}

.card-title { border: 1px solid $primary; }

.badge {

    background-color: $primary;
    border-radius: 0;

}

</style>
