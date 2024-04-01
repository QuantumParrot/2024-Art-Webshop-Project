<template>

<div class="h-100 card border-0 overflow-hidden">
    <div class="overflow-hidden">
        <div class="card-img overflow-hidden">
            <RouterLink :to="`/product/${product.id}`">
                <img
                    class="card-img-top"
                    :src="product.imageUrl" :alt="product.title">
                <div class="card-navigate">
                    <button type="button" class="btn fs-4 text-light">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </RouterLink>
        </div>
    </div>
    <div class="card-body py-5">
        <div class="mb-5">
            <div class="h-100 d-flex flex-column justify-content-between">
                <div class="flex-grow-1 d-flex gap-3 mb-3">
                    <h4 class="fs-5 fw-bold text-primary overflow-scroll mb-0 text-nowrap">
                    {{ product.title }}
                    </h4>
                </div>
                <div class="fs-6 text-start">
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
                    <span class="fw-bold">{{ product.price }} 元</span>
                </div>
            </div>
        </div>
        <div class="flex-classic gap-3">
            <button
                type="button" class="btn btn-outline-primary"
                @click="toggleCollection(product.id)">
                <i class="bi" :class="isCollection(product.id) ?
                'bi-heart-fill' : 'bi-heart'"></i>
            </button>
            <button
                type="button" class="w-100 btn btn-primary"
                @click="addToCart(product.id)"
                :disabled="loadingTask === product.id">
                <template v-if="loadingTask === product.id">
                <div role="status" class="spinner-border spinner-border-sm">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </template>
                <i class="bi bi-cart-plus-fill" v-else></i>
                <span class="ms-2">加入購物車</span>
            </button>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userCartStore from '@/stores/userCart';

import loaderStore from '@/stores/loader';

import userCollectionStore from '@/stores/userCollection';

export default {

    props: ['product'],

    computed: {

        ...mapState(loaderStore, ['loadingTask']),

    },

    methods: {

        ...mapActions(userCartStore, ['addToCart']),

        ...mapActions(userCollectionStore, ['toggleCollection', 'isCollection']),

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.card { background-color: $light; }

.card-img {

  position: relative;
  border-radius: 0.25rem 0 0;

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

</style>
