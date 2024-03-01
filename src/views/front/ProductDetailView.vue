<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <template v-if="product.id">
        <div class="d-flex justify-content-center">
            <div>
            <img class="main-img mb-5" :src="mainImage" :alt="product.title" width="600">
            <div class="bg-light rounded-2 p-3 mb-5
                        d-flex gap-3">
            <template v-for="img in displayImages" :key="img">
                <img class="display-img" :class="{ 'opacity-50': img !== product.imageUrl }"
                     :src="img" :alt="product.title"
                     @click="mainImage = img">
            </template>
            </div>
            <h2 class="text-black mb-5">{{ product.title }}</h2>
            <p class="mb-0">{{ product.subtitle }}</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xl-7 order-xl-1 order-2">
                <div class="alert bg-light p-5 mb-0">
                    <div class="border border-gray rounded-2 p-5">
                        <h3 class="fs-4 text-dark fw-bold mb-5">
                            <span class="section-title">關於它的故事</span>
                        </h3>
                        <div class="lh-lg pre-wrap text-justify">{{ product.description }}</div>
                    </div>
                </div>
                <div class="alert">
                </div>
            </div>
            <div class="col-xl-5 order-xl-2 order-1">
                <div class="sticky-sidebar alert bg-light p-5">
                    <div>
                    <p>
                    <span class="fs-6 badge bg-primary px-3 py-2 me-2">規格</span>
                    {{ product.content }}</p>
                    <p>
                    <span class="fs-6 badge bg-primary px-3 py-2 me-2">數量</span>
                    一{{ product.unit }}</p>
                    </div>
                    <div class="alert bg-white flex-classic p-5 mb-0">
                        <p class="fs-5 fw-bold mb-0">
                        <span>NT＄</span>
                        <template v-if="product.origin_price > product.price">
                        <span class="text-muted text-decoration-line-through">
                        {{ product.origin_price }}</span>
                        <span class="arrow-animation"><span class="arrow">→</span></span>
                        </template>
                        <span>{{ product.price }}</span>
                        </p>
                        <button type="button" class="btn btn-highlight">加入購物車</button>
                    </div>
                </div>
            </div>
        </div>
        </template>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userProductStore from '@/stores/userProduct';

export default {

    data() { return { mainImage: '' }; },

    computed: {

        ...mapState(userProductStore, ['product']),

        displayImages() {

            const { imageUrl, imagesUrl } = this.product;

            return Array.isArray(imagesUrl) ? [imageUrl, ...imagesUrl] : [imageUrl];

        },

    },

    watch: {

        product() { this.mainImage = this.product.imageUrl; },

    },

    methods: {

        ...mapActions(userProductStore, ['getProduct']),

    },

    mounted() {

        this.getProduct(this.$route.params.id);

    },

};

</script>

<style lang="scss" scoped>

// * { outline: 1px solid tomato; }

hr { margin: 1.5rem 0; }

.sticky-sidebar {

    position: sticky;
    top: 0;
    z-index: 1000;

}

.display-img {

    cursor: pointer;
    height: 100px;

}

.section-title::after { left: 1%; }

</style>
