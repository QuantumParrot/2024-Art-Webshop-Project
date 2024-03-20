<template>

<h3 class="h2 mb-7">
    <i class="bi bi-bookmark-heart me-3"></i>
    <span>我的收藏</span>
</h3>

<div class="flex-classic mb-5">
    <h4>商品收藏（ 共 {{ collection.length }} 筆 ）</h4>
    <button
        type="button" class="btn btn-outline-light"
        @click="clearCollection" :disabled="!collection.length">
    清空收藏</button>
</div>

<template v-if="displaying.length">

<div class="mb-5">
    <PaginationComponent :current="currentPage" :total="totalPages" @switch-page="switchPage" />
</div>
<ul class="list-unstyled row g-4">
    <template v-for="item in displaying" :key="item.id">
    <li class="col-xxl-4 col-xl-6">
        <ProductCard :product="item" />
    </li>
    </template>
</ul>

</template>

<div class="alert bg-light text-primary" v-else>
    <span>目前沒有任何收藏哦！去</span>
    <RouterLink class="text-info" to="/products">逛逛</RouterLink>吧！
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userProductStore from '@/stores/userProduct';

import userCollectionStore from '@/stores/userCollection';

//

import ProductCard from '@/components/card/ProductCard.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

export default {

    data() { return { currentPage: 1 }; },

    components: { ProductCard, PaginationComponent },

    computed: {

        ...mapState(userCollectionStore, ['collection']),

        ...mapState(userProductStore, ['totalProducts']),

        totalPages() { return Math.ceil(this.collection.length / 6); },

        totalItems() { return this.totalProducts.filter((i) => this.collection.includes(i.id)); },

        // eslint-disable-next-line max-len
        displaying() { return this.totalItems.filter((i, idx) => Math.floor(idx / 6) + 1 === this.currentPage); },

    },

    methods: {

        ...mapActions(userCollectionStore, ['getCollection', 'updateCollection', 'clearCollection']),

        ...mapActions(userProductStore, ['getTotalProducts']),

        switchPage(num) { this.currentPage = num; },

    },

    watch: {

        totalProducts() { this.getCollection(); },

        totalPages(n) { if (n < this.currentPage) { this.switchPage(1); } },

        collection: {

            handler() { this.updateCollection(); },

            deep: true,

        },

    },

    mounted() { if (!this.totalProducts.length) { this.getTotalProducts(); } },

};

</script>
