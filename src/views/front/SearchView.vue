<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <div class="py-5 mb-7" v-show="totalProducts.length">
            <h2 class="text-center mb-7">
                <b>商品搜尋</b>
            </h2>
            <div class="row justify-content-center mb-7">
                <div class="col-md-6">
                    <div class="input-group">
                        <input
                            type="text" class="form-control" v-model="keyword"
                            placeholder="輸入您想搜尋的關鍵字"
                            @keyup.enter="startSearch">
                        <button
                            type="button" class="btn btn-primary"
                            :disabled="!keyword" @click="startSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <p class="mb-5" v-show="keywordCache">
            您搜尋的關鍵字為：<b>{{ keywordCache }}</b>，共有 <b>{{ results.length }}</b> 項商品
            </p>
            <template v-if="results.length">
            <ul class="row list-unstyled g-6">
                <template v-for="item in results" :key="item.id">
                <li class="col-xl-4 col-md-6">
                    <ProductCard :product="item" />
                </li>
                </template>
            </ul>
            </template>
            <div class="alert bg-light py-5 mb-0" v-else>
                <p class="text-center mb-0">{{ keyword ? '找不到您要的結果' : '請輸入關鍵字' }}</p>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userProductStore from '@/stores/userProduct';

import userCollectionStore from '@/stores/userCollection';

import loaderStore from '@/stores/loader';

//

import ProductCard from '@/components/card/ProductCard.vue';

//

export default {

    components: { ProductCard },

    data() {

        return {

            totalProducts: [],

            keyword: '',
            keywordCache: '',
            results: [],

        };

    },

    computed: {

        ...mapState(userProductStore, ['productList']),

        ...mapState(loaderStore, ['isLoading']),

        ...mapState(userCollectionStore, ['collection']),

    },

    watch: {

        '$route.query.keyword': {

            handler(n) {

                if (n) {

                    this.keyword = n;
                    this.search();

                }

            },

            deep: true,

        },

        collection: {

            handler() { this.updateCollection(); },

            deep: true,

        },

    },

    methods: {

        ...mapActions(userProductStore, ['getProducts']),

        ...mapActions(userCollectionStore, ['getCollection', 'updateCollection']),

        startSearch() {

            // 送出關鍵字之後，同步修改當前路由

            if (!this.keyword) return;

            this.$router.push(`/search?keyword=${this.keyword}`);

        },

        search() {

            this.keywordCache = this.keyword;

            // 搜尋邏輯

            this.results = this.productList.filter((p) => p.title.match(this.keyword)
            || (p.tags || []).some((tag) => tag.match(this.keyword))
            || (p.keywords || []).includes(this.keyword));

        },

        reset() {

            this.keyword = '';
            this.keywordCache = '';
            this.results = [];

        },

    },

    async mounted() {

        if (!this.productList.length) {

            const res = await this.getProducts();
            this.totalProducts = res;

        } else { this.totalProducts = this.productList; }

        this.keyword = this.$route.query.keyword || '';

        if (this.keyword) {

            this.search();
            this.getCollection();

        }

    },

    unmounted() { this.reset(); },

};

</script>
