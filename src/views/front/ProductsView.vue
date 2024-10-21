<script setup>

import { toRefs, watch, onMounted } from 'vue';

import { useRoute } from 'vue-router';

//

import useUserProductStore from '@/stores/userProduct';

import useUserCollectionStore from '@/stores/userCollection';

//

import PaginationComponent from '@/components/PaginationComponent.vue';

import ProductCard from '@/components/card/ProductCard.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

import SearchBar from '@/components/SearchBar.vue';

//

const route = useRoute();

const userProductStore = useUserProductStore();

const userCollectionStore = useUserCollectionStore();

const {

    displaying, currentPage, totalPages,
    categories, filter,

} = toRefs(userProductStore);

const { getProducts, switchFilter, switchPage } = userProductStore;

const { collection } = toRefs(userCollectionStore);

const { getCollection, updateCollection } = userCollectionStore;

//

onMounted(() => { getProducts(); });

//

onMounted(() => { switchFilter(route.query.category || ''); });

watch(() => route.query.category, (current) => {

    switchFilter(current || '');

});

//

onMounted(() => { getCollection(); });

// 每一次透過 toggle 讓 favorite 陣列的值產生變化時，都要觸發 update 更新 localStorage 內的資料

watch(collection, () => { updateCollection(); }, { deep: true });

</script>

<template>

<div class="h-100 bg-gray text-primary" v-if="displaying.length">
    <div class="container py-7">
        <div class="flex-classic py-5 mb-7">
            <h2><b>線上商城</b></h2>
            <SearchBar />
        </div>
        <ul class="nav flex-column flex-md-row mb-7">
            <li class="nav-item">
                <RouterLink
                    to="/products"
                    class="nav-link" :class="{ 'link-active': !filter }">
                    <span>全部商品</span>
                </RouterLink>
            </li>
            <template v-for="item in categories" :key="item">
            <li class="nav-item">
                <RouterLink
                    :to="`/products?category=${item}`"
                    class="nav-link" :class="{ 'link-active': filter === item }">
                    <span>{{ item }}</span>
                </RouterLink>
            </li>
            </template>
        </ul>
        <ul class="row gy-6 list-unstyled mb-7">
            <template v-for="product in displaying" :key="product.id">
            <li class="col-xl-4 col-md-6">
                <ProductCard :product="product" />
            </li>
            </template>
        </ul>
        <div class="d-flex justify-content-center" v-if="totalPages > 1">
            <PaginationComponent
                :current="currentPage" :total="totalPages"
                @switch-page="switchPage" />
        </div>
    </div>
    <SubscriptionSection />
</div>

</template>

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
