<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <template v-if="!isLoading">
        <div class="d-flex justify-content-center">
            <div>
            <img class="main-img mb-5" :class="frame ? frameSetting[frame] : ''"
                 :src="mainImage" :alt="product.title" width="600">
            <div class="bg-light rounded-2 p-3 mb-5
                        d-flex gap-3">
            <template v-for="img in displayImages" :key="img">
                <img class="display-img" :class="{ 'opacity-50': img !== mainImage }"
                     :src="img" :alt="product.title"
                     @click="mainImage = img">
            </template>
            </div>
            <div class="d-flex gap-3 mb-5" v-if="product.category === '複製油畫'">
                <button type="button" class="btn btn-outline-primary fw-bold"
                        :class="{ 'active': frame === '' }"
                        @click="frame = ''">
                不加框</button>
                <button type="button" class="btn btn-outline-primary fw-bold"
                        :class="{ 'active': frame === 'dark' }"
                        @click="frame = 'dark'">
                黑</button>
                <button type="button" class="btn btn-outline-primary fw-bold"
                        :class="{ 'active': frame === 'wooden' }"
                        @click="frame = 'wooden'">
                淺木</button>
                <button type="button" class="btn btn-outline-primary fw-bold"
                        :class="{ 'active': frame === 'golden' }"
                        @click="frame = 'golden'">
                金</button>
            </div>
            <h2 class="text-black mb-5">{{ product.title }}</h2>
            <p class="mb-0">{{ product.subtitle }}</p>
            </div>
        </div>
        <hr>
        <div class="row g-5 mb-5">
            <div class="col-xl-7 order-xl-1 order-2">
                <div class="h-100 d-flex flex-column">
                    <div class="flex-grow-1 alert bg-light p-5 mb-5">
                        <div class="h-100 border border-gray shadow-sm rounded-2 p-5 pb-6
                                    d-flex flex-column justify-content-between">
                            <div>
                            <h3 class="lh-lg fs-4 text-dark fw-bold mb-5">
                                <span class="section-title">關於它的故事</span>
                            </h3>
                            <div class="lh-lg pre-wrap text-justify mb-6">
                            {{ product.description }}</div>
                            </div>
                            <div class="d-flex gap-2
                                        flex-nowrap text-nowrap overflow-scroll">
                                <span v-for="tag in product.tags" :key="tag"
                                      class="badge bg-primary fs-6 py-2">
                                {{ tag }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="alert bg-light p-5 mb-0">
                        <p class="lh-lg mb-0">
                        <i class="bi bi-c-circle me-1"></i>
                        圖片與文字出處請參閱：<a target="_blank" href="https://www.notion.so/9f522b0de5c2413c8090249c96bd692a?v=5b0f1f1c376f4b468a56aaec87a97c8a">本站索引</a></p>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 order-xl-2 order-1">
                <div class="sticky-sidebar">
                    <div class="alert bg-light p-5 mb-5">
                        <h4 class="fs-5 text-dark fw-bold mb-4">購買須知</h4>
                        <p class="lh-lg pre-wrap text-justify mb-0">{{ product.notes || '無' }}</p>
                    </div>
                    <div class="alert bg-light p-5 mb-5">
                        <div class="mb-5">
                            <p class="text-nowrap overflow-scroll">
                            <span class="fs-6 badge bg-primary px-3 py-2 me-2">規格</span>
                            {{ product.content }}</p>
                            <p class="text-nowrap overflow-scroll">
                            <span class="fs-6 badge bg-primary px-3 py-2 me-2">單位</span>
                            一{{ product.unit }}</p>
                        </div>
                        <div class="alert bg-white p-5 mb-0">
                            <p class="fs-5 fw-bold mb-5">
                            <span>NT＄</span>
                            <template v-if="product.origin_price > product.price">
                            <span class="text-muted text-decoration-line-through">
                            {{ product.origin_price }}</span>
                            <span class="arrow-animation"><span class="arrow">→</span></span>
                            </template>
                            <span>{{ product.price }}</span>
                            </p>
                            <div class="row g-3">
                                <div class="col-sm-8">
                                    <div class="input-group">
                                    <button type="button" class="btn btn-secondary input-group-text"
                                            @click="this.quantity --" :disabled="quantity <= 1">
                                    <i class="bi bi-dash"></i>
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control text-center" min="1"
                                        v-model.number="quantity">
                                    <button type="button" class="btn btn-secondary input-group-text"
                                            @click="this.quantity ++">
                                    <i class="bi bi-plus"></i>
                                    </button>
                                    </div>
                                </div>
                                <div class="col-sm-4 text-end">
                                    <button type="button" class="w-100 btn btn-primary"
                                            @click="addToCart(product.id, quantity)"
                                            :disabled="!!loadingTask">
                                    <div role="status" class="spinner-border spinner-border-sm me-2"
                                         v-show="loadingTask">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <span>{{ loadingTask ? '加入中 ...' : '加入購物車' }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="alert bg-light p-5 mb-0">
                        <div class="row g-3">
                            <div class="col-sm-4">
                                <div class="d-flex flex-sm-column
                                            justify-content-sm-center align-items-center">
                                    <div class="bg-white rounded-pill shadow-sm
                                                px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                    <i class="bi bi-truck fs-3"></i></div>
                                    <span>專業物流配送</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="d-flex flex-sm-column
                                            justify-content-sm-center align-items-center">
                                    <div class="bg-white rounded-pill shadow-sm
                                                px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                    <i class="bi bi-7-circle fs-3"></i></div>
                                    <span>七天鑑賞期</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="d-flex flex-sm-column
                                            justify-content-sm-center align-items-center">
                                    <div class="bg-white rounded-pill shadow-sm
                                                px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                    <i class="bi bi-recycle fs-3"></i></div>
                                    <span>採用環保包裝</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert bg-white p-5">
        <h4 class="text-center mb-5">您也許感興趣的商品</h4>
            <div class="row g-5">
                <div class="col-md-4" v-for="item in relatedProducts" :key="item.id">
                    <a class="text-decoration-none"
                       href="#" @click.prevent="$router.push(`/product/${item.id}`)">
                    <div class="card">
                        <img class="card-img-top" :src="item.imageUrl" :alt="item.title">
                        <div class="card-body py-5 flex-classic">
                            <h5 class="fs-6 fw-bold mb-0">{{ item.title }}</h5>
                            <p class="mb-0">NT$ {{ item.price }}</p>
                        </div>
                    </div></a>
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

import userCartStore from '@/stores/userCart';

import loaderStore from '@/stores/loader';

export default {

    data() {

        return {

            frame: '',
            frameSetting: {

                wooden: 'frame-wooden',
                golden: 'frame-golden',
                dark: 'frame-dark',

            },

            mainImage: '',
            quantity: 1,

        };

    },

    computed: {

        ...mapState(userProductStore, ['product', 'relatedProducts']),

        ...mapState(loaderStore, ['isLoading', 'loadingTask']),

        displayImages() {

            const { imageUrl, imagesUrl } = this.product;

            return Array.isArray(imagesUrl) ? [imageUrl, ...imagesUrl] : [imageUrl];

        },

    },

    watch: {

        '$route.params': {

            handler() { this.getProduct(this.$route.params.id); },

            deep: true,

        },

        product() {

            this.mainImage = this.product.imageUrl;
            this.quantity = 1;
            this.frame = '';

        },

        quantity(value) { // current value

            if (!Number.isInteger(value)) {

                this.quantity = Math.floor(this.quantity);

            } else if (value < 1) { this.quantity = 1; }

        },

    },

    methods: {

        ...mapActions(userProductStore, ['getProduct']),

        ...mapActions(userCartStore, ['addToCart']),

    },

    mounted() { this.getProduct(this.$route.params.id); },

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

.btn.active { pointer-events: none; }

.display-img {

    cursor: pointer;
    height: 100px;

}

.basic-frame {

    // border-image-outset: 0;
    --framing-thickness: 15px;
    border-image-width:  15px;
    border-image-slice: 60;
    padding: 15px;

}

.frame-dark {

    @extend .basic-frame;
    border-image-source: url('https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709377604263.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VkS6dR5mWmFLZwqKi06nZ4E3cfQI1A17U502Tws22vNofvkLotfYPF1%2BvM60NNLi2Fy2xf32yo1b87wV6JqBGc1vrqfafaSMPwy9DFRS4DCwDaZQRi6zQYbsyAh9y9FJPdMbzULTWg%2BRi3ggAvgk%2BR6e6oILPfyjgZokGhaVGcMa%2F0rBQ5ozmyiPK1q%2F46sHLHPGy4W61HXPZgVAsMhINbRHF%2BlEZKzFeVYP%2Bhd6CT%2B%2BQtRpQtfjvoakjHyT5SygS2FFMU3c3au7k%2Fio4qfZ%2FlCHcOwqCJm8Oxw%2Fu5xg%2Bh3K4aBI9lzk1sjDWh%2Fv2DqcH8CSGBn%2BBDlPVyAa3ZPvhA%3D%3D');

}

.frame-wooden {

    @extend .basic-frame;
    border-image-source: url('https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709377743362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=X0P5fPFat4IPSDn%2BLCORb7K6tW1603TZDs6eirn3uq9P%2Bsn%2BFMTQviUP9sdGBZXC6Ri3Sl%2BNtRGd12cpiJ0lpMjUnl0vXVIFq57%2FtgVhb2MQcecexSVqOYFt6QArUVtBByoYZBKdO5iSMJNJYbmX1XTD1Q0IWgbwYNRtjuEu0hxpf%2B3tl3OqZrVtU%2F1Rf%2Bq9GYTOuowSSTaAoWGSE0svb4s6AwB04kNoaJf0ORXkXWYb%2FF8rQA51MKZ27YvM%2BxgJo19njqoBcWaoFNU51cZiFFesHv2vnhRMH6NTS3ZvQGVla9YReuDIwdW%2FoWKHeS%2FXPgqPFQdUC8lPVnMRDZ%2BFeA%3D%3D');

}

.frame-golden {

    @extend .basic-frame;
    border-image-source: url('https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709377766860.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PKDDwODOFPEg4m%2FurAdlfBCMX8iXnq0vg%2Bprk1yOVpEfaHDkaa5NBdfli6udPi1f%2BVD%2FSI2JMtGz0lJ%2FoVl45AYy7GFzDcsVIrMDscaKJs0rHEQUDdLkhB79jYxM6VXW0KtmhH75pEHS%2BVJvj4AQib0Y%2BQnb4Sk2BXAaOgNQUHRk0BDRN2mSMU%2FTWAmrdRtD4cYKfNUjH0REDfzfTfev6gxjJ7I7OBxB1YTXStiszQHiPEDtTTvmckohm0X9sGVK7UhzMXCEeWO%2BQGW%2BpAO%2Fv1uJWfIrEopf8BRZ1pi9YBi8Je%2BDNWyKv6a7QLpkqNG0Yauy9gT2eIhycYwa9jsnww%3D%3D');

}

.section-title::after { left: 1%; }

.card-img-top { height: 250px; object-position: 50% 30%; }

</style>
