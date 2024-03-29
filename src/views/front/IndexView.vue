<template>

<div class="h-100">
    <section class="banner bg-primary text-white py-md-8 py-7">
        <div class="container">
            <h2 class="h1 lh-lg ls-sm mb-md-8 mb-7">
                <span
                    class="banner-txt" data-aos="fade-right"
                    data-aos-duration="1200">
                    邀您一同探索
                </span>
                <br>
                <span
                    class="banner-txt" data-aos="fade-right"
                    data-aos-delay="1000" data-aos-duration="1200">
                    這顆星球上的吉光片羽
                </span>
            </h2>
            <div
                data-aos="fade-right" data-aos-duration="1200"
                data-aos-delay="1500">
                <RouterLink to="/products" v-slot="{ navigate }" custom>
                <button
                    type="button" class="btn btn-lg btn-primary text-gray
                    rounded-1 bg-primary-shadow"
                    @click="navigate"><b>開 始 探 索</b></button>
                </RouterLink>
            </div>
        </div>
    </section>
    <section class="bg-gray py-md-8 py-7">
        <div class="container">
            <div class="row g-3 mb-7">
                <div class="col-lg-6 col-md-4">
                    <img
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1200"
                        class="intro-img rounded-1"
                        alt="Image by Bianca Fazacas on Unsplash"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710000525437.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AlR7N4VamKsOqdXkK44fPMjxcB0xA7vu1%2FaglK9lKJJExH5k32lqepXywkm3kripat70dkBMqX2Vihwi90Jf%2B2kRdoUrtTjI9Tcy2qvEPRR%2Fu%2FSiPF5ZkqZtMUpYpk3Zz776tKBIdPN294hAPnJa0BayCzciAWoiLktKye%2FZ5ncIXfGt3fOQOOtKD2Bx9vP%2B32a5Ry0x05%2Bq8w06BF6POm8q0Q5MPV4k5gyI76CaJQNJncaCQiCljgNbSqPkVtf9%2BZlqO3q9X2%2Fqf2K8dAA3smK4utoucOyEgiUdhL44Lgbth75FmZD7Fn7%2BtFcfGUS2gCljXqypPziDCVk%2Fu5tg3g%3D%3D">
                </div>
                <div class="col-lg-6 col-md-8">
                    <div
                        class="intro-sec shadow-sm rounded-1 p-2"
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
                        <div
                            class="d-flex justify-content-lg-center align-items-center
                            px-lg-7 px-5 py-6 border border-white">
                            <div>
                                <h3 class="fw-bold mb-6">
                                    <span class="section-title">多樣的商品選擇</span>
                                </h3>
                                <p>收藏家是一個小型的藝術品販售平台</p>
                                <p>匯聚了世界各地的</p>
                                <p>歷史痕跡、文明瑰寶與創意結晶</p>
                                <p>歡迎盡情瀏覽、仔細品味它們的故事</p>
                                <p>找尋與您的靈魂最契合的物品</p>
                                <p>讓它妝點您的店面，您的住家</p>
                                <p class="mb-6">以及您的個人鑑賞品味</p>
                                <RouterLink
                                    target="_blank" to="/products"
                                    class="btn-slider rounded-1 ps-3">
                                    <span>立即選購</span>
                                    <i class="bi bi-caret-right-fill ms-2"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row flex-md-row flex-column-reverse g-3 mb-7">
                <div class="col-lg-6 col-md-8">
                    <div
                        class="intro-sec shadow-sm rounded-1 p-2"
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
                        <div
                            class="d-flex justify-content-lg-center align-items-center
                            px-lg-7 px-4 py-6 border border-white rounded-1"
                            data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
                            <div>
                                <h3 class="fw-bold mb-6">
                                    <span class="section-title">紮實的專欄文章</span>
                                </h3>
                                <p>我們不止步於純粹的電商經營</p>
                                <p>同時更致力於打造無隔閡的知識交流空間</p>
                                <p>收藏家將不定期更新專欄文章</p>
                                <p>深入淺出，包羅萬象</p>
                                <p class="mb-6">與您分享我們在閱讀與生活中得到的感動</p>
                                <RouterLink
                                    target="_blank" to="/articles"
                                    class="btn-slider rounded-1 ps-3">
                                    <span>前往閱讀</span>
                                    <i class="bi bi-caret-right-fill ms-2"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4">
                    <img
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        class="intro-img rounded-1"
                        alt="Image by Jaredd Craig on Unsplash"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709822916310.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gU2FW5XVwDYvgnjYMfCnLndYBDMmcCWFY%2B1thpbeIyQ8CSiLQlAlAHiBaTEgN6eo25TZKOw2dT1l3JVqDm8nwQVz9m5ucJnXTdseUsg9f3YIaMyIzFNGM06QIHIGZtMc595kdnIwuGpxQJCt8gK9yuEr3AmF4D8Ou%2Bwjy%2FqhxDJcew7WfVcmN31yGsfyTPZ1mOdj7lqLtTzq6RL94vo4UiLNdTOXIe3c7NoweDKQdIULx71yJPeOJZDaWO%2B3xodiY%2BJm4gCMi6LuacGsUNkISpWq2CwcmFY9l6aSDHSQokQsXhlqCA4YRrAIpNxCtXWq04XlY1LawhpwiK%2BHO0%2BZFw%3D%3D">
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-6 col-md-4">
                    <img
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        class="intro-img rounded-1"
                        alt="Image by atlascompany on Freepik"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709826148810.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qTwkWRj0hhwy6orSCoAQx2j6Z%2B1vuc%2BBbkr%2B%2FAJHRQwtg15ubOBryZlqrMHX42AqX5VIhf2R3cCv4XrRDWfljnlcewJptCZpIOttxcNDLybkvlLX7NPIq%2BEmMatX9M9N3Pa1gcDdnH2rIErRUqeP7ur%2BvySTRjOV6F9B6mgbBJPj%2FAUOhGTMxXyJOotbu4MJY4%2BvG3nMZOMkwdEOsVk%2B350d1qjHkw3IfXEiTtxY1fLoL6%2BEJJwQqj3zUf8T%2F%2Fnq2d16E3KrAEv3LNiO5UkHXnIUqt%2B2JkNIIeceUctnFRE1OQR5VPCGBRZVVM4uz8jjTWUR6s%2FkgJ%2FAG2u5LjMVzg%3D%3D">
                </div>
                <div class="col-lg-6 col-md-8">
                    <div
                        class="intro-sec shadow-sm rounded-1 p-2"
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
                        <div
                            class="d-flex justify-content-lg-center align-items-center
                            px-lg-7 px-4 py-6 border border-white rounded-1">
                            <div>
                                <h3 class="fw-bold mb-6">
                                    <span class="section-title">將收益化為公益</span>
                                </h3>
                                <p>我們相信，藝術鑑賞與社會參與並不矛盾</p>
                                <p>收藏家會妥善運用您在這裡的支出</p>
                                <p>每一筆訂單的部分收益</p>
                                <p>將用來贊助不同類型的非營利公益組織</p>
                                <p>歡迎自由選擇想支持的計畫</p>
                                <p class="mb-6">詳情請參考我們的方案介紹</p>
                                <RouterLink
                                    target="_blank" :to="{ path: '/about', hash: '#project' }"
                                    class="btn-slider rounded-1 ps-3">
                                    <span>深入瞭解</span>
                                    <i class="bi bi-caret-right-fill ms-2"></i>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-primary text-white py-8">
        <div class="container">
            <div class="row g-3 mb-3">
                <div class="col-md-6">
                    <RouterLink to="products?category=複製油畫">
                        <div class="overflow-hidden">
                            <div class="mask">
                                <img
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1708467331249.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B3yrKMMG0T3BbgxQKu%2FFOzNraQlVFZR0jACqOBzoYWYOGzcT6PmvXKLMVuzetVScSGBZqxPP2JqESKAExEBJd7t7wwUUrWSlF8bo27De6xCGrzF8v%2BpI1AQjpmIsAoCd1EoogT%2B2uCprxtSl%2BgktidvmRfYPF541n3TAa60pvm%2B6Y4J0xx8Xzo3fyuHX4%2BQHClDwD3MN7mc3EmDSimcQjuEZMF9eklK9uaQ%2BLsaow62S0%2BGStgruV%2Ffv2a%2FqJj8yXAY9GLgpXjiS4lQjqrWdQ35W6wfnSiHjKAHv7XcqoyggtO0v5HaLSk8UbgzPGVL2mlBiQYHcfLd6KOk9ps9H%2BQ%3D%3D"
                                    alt="painting" height="400px">
                                <div class="mask-txt fs-4 text-shadow-black">
                                    <p class="mb-0">＃ 油畫</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-md-6">
                    <RouterLink to="/products?category=複製雕塑">
                        <div class="overflow-hidden">
                            <div class="mask">
                                <img
                                    src="https://images.unsplash.com/photo-1515139832362-a06b09ecced0?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="sculpture" height="400px">
                                <div class="mask-txt fs-4 text-shadow-black">
                                    <p class="mb-0">＃ 雕塑</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-md-4">
                    <RouterLink to="/products?category=玩具模型">
                        <div class="overflow-hidden">
                            <div class="mask">
                                <img
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709489767874.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n4L5%2FjlupJO3Yl4XNKdNCvk06IguPwxLtt3KGRj6PsmhrK%2BSTjC0JToqlXybIMmRJKaoKjMFe5gNn9Iv6noEjL02zhl6JHLjMbiBEtUJOnta%2B0nq04TLPW%2BLN%2BCAZB3neTSYtaXI5PuW6cwTo3U%2Bz5N%2BBzMT00eimhGi%2FRshRlxmJwqhiShsD%2F5oicV7WYEkho57Wff72yZKtRKxDWs6A9TN1SN%2Bh5DagqQmzPm%2FrZn6YhxZvJq9UecrGfrJeR04rpY3pPeU5HtWMF6jymRCy7S%2BbRdHZJtMeaKujMHaiA7m5Up5c3k5x%2BqgfAzqpVA3hfLD0josoBK6ol38UR634Q%3D%3D"
                                    alt="toy and model" height="300px" class="w-100">
                                <div class="mask-txt fs-4 text-shadow-black">
                                    <p class="mb-0">＃ 玩具模型</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-md-4">
                    <RouterLink to="/products?category=裝飾工藝">
                        <div class="overflow-hidden">
                            <div class="mask">
                                <img
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1707154286226.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DPe%2BbJeO1jl3RKwjXPdfZd62%2Bic%2FArYzAxuY5Hz2yOl9E0aI4cm0IV4Am%2Bp6C74SDRRijgSQjyvqJ7pDCKDBnyH73rAwwUR9fdsZaYvL%2F5AgBVgnHDkORUmH0W0XXYrLT%2BgyjDt%2BBAUbNxalb%2FxlmgW7y2rg%2FRL73%2BGTs1uN%2BwRxp%2FBeM37rYfN78aCs99JhBECvbXDna2pXok4CjBN2xlf92RGLESCWc4ZiWyXW3biq6UOjyCw20DSOfwSx16sEZfyZpaFRaF0d%2BUZhG1YaNIc9cZHB31vBoiP4dRBVUsj4VBj0suZWgzUfJy9r%2BgrLFitGbzI07L8V5ZpjqGH7qg%3D%3D"
                                    alt="craft and antique" height="300px" class="w-100">
                                <div class="mask-txt fs-4 text-shadow-black">
                                    <p class="mb-0">＃ 裝飾工藝</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-md-4">
                    <RouterLink to="/products?category=文具禮品">
                        <div class="overflow-hidden">
                            <div class="mask">
                                <img
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709490186395.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jgjiLKuTWkohFV347QfMCLN1vrgI6sQYWPvaBNiQXz9ir%2Bk0knRKY67JYE170HZhnTRHPuipYMYTcSjOn3DgqYZmW%2BwH2yi8xP6JjvdEKn6JwmVatEQcIu5SOWEEkFayv2LW63BAM5yiJBbuVszkCgzL73dQmHQX%2FTEj%2FNWBNFlSZ3GXOLPL%2F41EknhSAMw6OTKIVhS7B4JorjfVJ4rau4RNu1QaGe0fyzvJccQtx2B36tpT0aPt210OlQJafMhxgCqCMMshtRgKCIvxq6D%2FEzKz4B3K%2F2BqAIkn0%2FcJP79bJ%2BViHtMu4T4PM7GC5ZlV6HXRfgfEyM%2B5HQPyC26%2BxQ%3D%3D"
                                    alt="stationery" height="300px" class="w-100 object-fit-cover">
                                <div class="mask-txt fs-4 text-shadow-black">
                                    <p class="mb-0">＃ 文具禮品</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
    <section class="py-8">
        <div class="container">
            <div class="row gy-5">
                <div class="col-md-4">
                    <div class="h-100 d-flex align-items-center">
                        <h3 class="mb-0"><b>最新消息</b></h3>
                    </div>
                </div>
                <div class="col-md-8">
                    <ul class="list-unstyled d-flex flex-column gap-3 mb-5">
                        <template v-for="item in news.filter((i, idx) => idx < 3)" :key="item.id">
                        <li class="alert bg-light p-5 mb-0">
                            <p class="lh-lg mb-0">
                                <span class="fw-bold me-3">
                                {{ $calc.formatDate(item.create_at * 1000, '/') }}
                                </span>
                                <RouterLink :to="`/news/${item.id}`">
                                {{ item.title }}
                                </RouterLink>
                            </p>
                        </li>
                        </template>
                    </ul>
                    <div class="text-end">
                        <RouterLink to="/news">
                            <span class="arrow-animation">
                                <span class="arrow">
                                    <i class="bi bi-caret-right-fill"></i>
                                </span>
                            </span>
                            <span class="fw-bold text-primary">更多消息</span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FaqSection />
    <SubscriptionSection />
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userArticleStore from '@/stores/userArticle';

import FaqSection from '@/components/section/FaqSection.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

export default {

    components: { FaqSection, SubscriptionSection },

    computed: {

        ...mapState(userArticleStore, ['news']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles']),

    },

    mounted() { this.getArticles(); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/variables';

img { object-fit: cover; }

.banner {

  height: 600px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710004950072.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dZNhm32F89EIliw2AFxuxqQfDO2E6GcQyYDaGzzNAykb%2FdKix0kc1Ju20%2BucFI6HgU6MCa7DmfrfUjJYPdatckrEo1r3Xgi3h8jyRJSWSCSeMOuP0NwMMZh9Q%2FSxn1NXMC8JvrMIob6AdCjEt9uv8uihe7J3b3Wz9NVn8b0bJtsLmcT%2BaJB%2B5aYZ6OYkS7LuLH27wlqV2LSV%2F92Bq6JWDvM8uMg7MJBhesdFqrlWpY6WTnWtryBMGBcBecjNVf5Vpp%2BP6YE9D5cx9rfcUz4tu6dyUU6GC6JxUqZwSUui8bizHRao1d7FaUbjL2%2B5MEvrdNWqNsC69z6iu%2FSREiZb%2Bw%3D%3D);
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: cover;

  position: relative;

  &::after {

    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%; height: 100px;
    background-image: linear-gradient(to top, $gray, transparent);
    box-shadow: 5px 5px $gray;

  }

}

.banner-txt { background-color: rgba(0, 0, 0, .35); }

.intro-sec {

  height: 100%;
  background-color: $light;

}

.intro-img {

  width: 100%;
  height: 400px;
  min-height: 100%;

}

.mask-txt { flex-direction: column; }

.btn-slider {

  background-color: $primary;
  color: $gray;

  &::after { background-color: $secondary; }

}

</style>
