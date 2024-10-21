<script setup>

import {

    ref, computed, watch,
    toRefs, onMounted,

} from 'vue';

import { useRoute } from 'vue-router';

//

import useUserProductStore from '@/stores/userProduct';

import useUserCartStore from '@/stores/userCart';

import useUserCollectionStore from '@/stores/userCollection';

import useLoaderStore from '@/stores/loader';

//

import ZoomImageModal from '@/components/modal/ZoomImageModal.vue';

import ProductCard from '@/components/card/ProductCard.vue';

//

const loaderStore = useLoaderStore();

const userProductStore = useUserProductStore();

const userCollectionStore = useUserCollectionStore();

const userCartStore = useUserCartStore();

const { loadingTask } = toRefs(loaderStore);

const { product, relatedProducts } = toRefs(userProductStore);

const { getProduct, getRelatedProducts } = userProductStore;

const { collection } = toRefs(userCollectionStore);

const { getCollection, updateCollection } = userCollectionStore;

const { addToCart } = userCartStore;

//

const route = useRoute();

watch(() => route.params.id, (id) => {

    getProduct(id);

});

//

const transition = ref(true);

const mainImage = ref('');

const quantity = ref(1);

const frame = ref('');

onMounted(() => { getProduct(route.params.id); });

watch(product, () => {

    getRelatedProducts(product.value);

    mainImage.value = product.value.imageUrl;

    quantity.value = 1;

    frame.value = '';

    transition.value = false;

    window.scrollTo(0, 0, 'smooth');

});

const frameSetting = {

    wooden: 'frame-wooden',
    golden: 'frame-golden',
    dark: 'frame-dark',
    baroque: 'frame-baroque',

};

const displayImages = computed(() => {

    const { imageUrl, imagesUrl } = product.value;

    return Array.isArray(imagesUrl) ? [imageUrl, ...imagesUrl] : [imageUrl];

});

//

const zoomImageModal = ref(null);

const zoomImage = ref('');

const openModal = () => {

    zoomImage.value = mainImage.value;

    zoomImageModal.value.showModal();

};

watch(quantity, (current) => {

    if (!Number.isInteger(current)) {

        quantity.value = Math.floor(quantity.value);

    }

    if (current < 1) { quantity.value = 1; }

});

onMounted(() => { getCollection(); });

watch(collection, () => { updateCollection(); }, { deep: true });

</script>

<template>

<div class="h-100 bg-gray text-primary" v-show="!transition">
    <div class="container py-7">
        <div class="d-flex justify-content-center">
            <div>
                <nav class="mb-5" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol class="breadcrumb flex-nowrap text-nowrap overflow-x-scroll">
                        <li class="breadcrumb-item">
                            <RouterLink to="/">首頁</RouterLink>
                        </li>
                        <li class="breadcrumb-item">
                            <RouterLink to="/products">商品列表</RouterLink>
                        </li>
                        <li class="breadcrumb-item">
                            <RouterLink :to="`/products?category=${product.category}`">
                                <span>{{ product.category }}</span>
                            </RouterLink>
                        </li>
                        <li class="d-md-block d-none breadcrumb-item active"
                            aria-current="page">
                            <span>{{ product.title }}</span>
                        </li>
                    </ol>
                </nav>
                <div class="mb-5">
                    <img
                        class="main-img" :class="frame ? frameSetting[frame] : ''"
                        :src="mainImage" :alt="product.title"
                        width="600" @click="openModal">
                </div>
                <div class="bg-light rounded-2 p-3 mb-5 d-flex gap-3 overflow-x-scroll">
                    <template v-for="img in displayImages" :key="img">
                    <img
                        class="display-img" :class="{ 'opacity-50': img !== mainImage }"
                        :src="img" :alt="product.title"
                        @click="mainImage = img">
                    </template>
                </div>
                <div class="overflow-x-scroll">
                    <div
                        class="frames d-flex flex-nowrap text-nowrap mb-5"
                        v-if="product.category === '複製油畫'">
                        <button
                            type="button" class="fs-7 btn btn-outline-primary"
                            :class="{ 'active': frame === '' }"
                            @click="frame = ''">
                            <b>無畫框</b>
                        </button>
                        <button
                            type="button" class="fs-7 btn btn-outline-primary"
                            :class="{ 'active': frame === 'dark' }"
                            @click="frame = 'dark'">
                            <b>極簡黑</b>
                        </button>
                        <button
                            type="button" class="fs-7 btn btn-outline-primary"
                            :class="{ 'active': frame === 'wooden' }"
                            @click="frame = 'wooden'">
                            <b>淺木紋</b>
                        </button>
                        <button
                            type="button" class="fs-7 btn btn-outline-primary"
                            :class="{ 'active': frame === 'golden' }"
                            @click="frame = 'golden'">
                            <b>典雅金</b>
                        </button>
                        <button
                            type="button" class="fs-7 btn btn-outline-primary"
                            :class="{ 'active': frame === 'baroque' }"
                            @click="frame = 'baroque'">
                            <b>巴洛克</b>
                        </button>
                    </div>
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
                        <div
                            class="h-100 border border-gray rounded-2 p-5 pb-6
                            d-flex flex-column justify-content-between">
                            <div>
                                <h3 class="lh-lg fs-4 text-dark fw-bold mb-5">
                                    <span class="section-title">關於它的故事</span>
                                </h3>
                                <div class="lh-lg pre-wrap text-justify mb-6">
                                    <span>{{ product.description }}</span>
                                </div>
                            </div>
                            <div>
                                <p class="fs-7 mb-5">點選下方標籤，搜尋相關商品：</p>
                                <div class="d-flex gap-2 flex-nowrap text-nowrap overflow-scroll">
                                    <template v-for="tag in product.tags" :key="tag">
                                    <RouterLink
                                        :to="`/search?keyword=${tag}`"
                                        target="_blank"
                                        class="tag badge fs-6 py-2">
                                        <span>{{ tag }}</span>
                                    </RouterLink>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="alert bg-light p-5 mb-0">
                        <p class="lh-lg mb-0">
                            <i class="bi bi-c-circle me-1"></i>
                            <span>圖片與文字參考資料請參閱：<a target="_blank" href="https://www.notion.so/9f522b0de5c2413c8090249c96bd692a?v=5b0f1f1c376f4b468a56aaec87a97c8a">本站索引</a></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 order-xl-2 order-1">
                <div class="sticky-sidebar">
                    <div class="alert bg-light p-5 mb-5">
                        <h4 class="fs-5 text-dark fw-bold mb-4">購買須知</h4>
                        <p class="lh-xl pre-wrap text-justify mb-0">{{ product.notes || '無' }}</p>
                    </div>
                    <div class="alert bg-light p-5 mb-5">
                        <div class="mb-5">
                            <p class="text-nowrap overflow-x-scroll">
                                <span class="fs-6 badge bg-primary px-3 py-2 me-2">規格</span>
                                <span>{{ product.content }}</span>
                            </p>
                            <p class="text-nowrap overflow-x-scroll">
                                <span class="fs-6 badge bg-primary px-3 py-2 me-2">單位</span>
                                <span>一{{ product.unit }}</span>
                            </p>
                        </div>
                        <div class="alert bg-white p-5 mb-0">
                            <p class="fs-5 fw-bold mb-5">
                                <span>NT＄</span>
                                <template v-if="product.origin_price > product.price">
                                <span class="text-muted text-decoration-line-through">
                                {{ product.origin_price }}
                                </span>
                                <span class="arrow-animation">
                                    <span class="arrow"> → </span>
                                </span>
                                </template>
                                <span>{{ product.price }}</span>
                            </p>
                            <div class="row g-3">
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <button
                                            type="button" class="btn btn-secondary input-group-text"
                                            @click="quantity -= 1" :disabled="quantity <= 1">
                                            <i class="bi bi-dash"></i>
                                        </button>
                                        <input
                                            type="number"
                                            class="form-control text-center" min="1"
                                            v-model.number="quantity">
                                        <button
                                            type="button" class="btn btn-secondary input-group-text"
                                            @click="quantity += 1">
                                            <i class="bi bi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-sm-4 text-end">
                                    <button
                                        type="button" class="w-100 btn btn-primary"
                                        @click="addToCart(product.id, quantity)"
                                        :disabled="!!loadingTask">
                                        <div
                                            class="spinner-border spinner-border-sm me-2"
                                            role="status" v-show="loadingTask">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <span>{{ loadingTask ? '加入中' : '加入購物車' }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="alert bg-light p-5 mb-0">
                        <div class="row g-3">
                            <div class="col-sm-4">
                                <div
                                    class="d-flex flex-sm-column
                                    justify-content-sm-center align-items-center">
                                    <div
                                        class="bg-white rounded-pill shadow-sm
                                        px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                        <i class="bi bi-truck fs-3"></i>
                                    </div>
                                    <span>專業物流配送</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div
                                    class="d-flex flex-sm-column
                                    justify-content-sm-center align-items-center">
                                    <div
                                        class="bg-white rounded-pill shadow-sm
                                        px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                        <i class="bi bi-7-circle fs-3"></i>
                                    </div>
                                    <span>七天鑑賞期</span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div
                                    class="d-flex flex-sm-column
                                    justify-content-sm-center align-items-center">
                                    <div
                                        class="bg-white rounded-pill shadow-sm
                                        px-3 py-2 mb-sm-3 me-sm-0 me-3">
                                        <i class="bi bi-recycle fs-3"></i>
                                    </div>
                                    <span>採用環保包裝</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert bg-white p-5">
            <h4 class="text-center mb-5">為您推薦</h4>
            <div class="row g-5">
                <template v-for="item in relatedProducts" :key="item.id">
                <div class="col-md-4">
                    <ProductCard :product="item" />
                </div>
                </template>
            </div>
        </div>
    </div>
</div>
<ZoomImageModal :image="zoomImage" ref="zoomImageModal" />

</template>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

// * { outline: 1px solid tomato; }

hr { margin: 1.5rem 0; }

.sticky-sidebar {

  position: sticky;
  top: 0;
  z-index: 1000;

}

.frames {

  .btn {

    margin: 0 -1px -1px 0;

    border-radius: 0;

    &:first-child { border-radius: .25rem 0 0 .25rem; }

    &:last-child { border-radius: 0 .25rem .25rem 0; }

  }

  .btn.active { pointer-events: none; }

}

.main-img { cursor: zoom-in; }

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

.frame-baroque {

  @extend .basic-frame;
  border-image-source: url('https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709808760692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ItgELpQ5KErsr%2BGkG%2F%2BG1jowKifEeu0WYWPJRD1r7EJp66PDvnDen%2FIeGY%2FPMhj%2BqCf1zQvF7i1XmDv8kIWo0yWIy77cpKzBaCIezebT3Y4eeJVnafA1qZ9jjv0i2pGeYhbkX0VHjXtsel5qzGdR3xSkCzu61Rko3APbDfQhhaDcZZLZLMvZYlimwHjiRoQ%2B%2BmgA3bRSmW5sTmmuIX6YFvKyy1KsaUXzE990qTlkxt16MDdweqB5cggsuv%2Fwur6u7tT%2BJfJyAuYzDvy0OQIEn4HJv57HZRFr3CPAP7fbcamRdjVU%2BgWY2JEiWOh4iQlQnWjCcMtdNSgwKqCJBQBCIA%3D%3D');

  --framing-thickness: 30px;
  border-image-width:  30px;
  border-image-slice: 90;
  padding: 30px;

}

.section-title::after { left: 1%; }

.card-img-top { height: 250px; object-position: 50% 30%; }

.tag {

    text-decoration: none;
    background-color: $primary;

    &:hover { background-color: $secondary; }

}

</style>
