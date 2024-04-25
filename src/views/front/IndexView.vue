<template>

<transition name="fade">
<div class="h-100" v-if="!isLoading">
    <section class="banner bg-primary text-white py-md-8 py-7">
        <div class="container">
            <h2 class="h1 lh-lg ls-sm mb-md-8 mb-7">
                <span
                    class="banner-txt" data-aos="fade-right" data-aos-once="true"
                    data-aos-duration="1200"
                    data-aos-delay="500">
                    為您的生活空間
                </span>
                <br>
                <span
                    class="banner-txt" data-aos="fade-right" data-aos-once="true"
                    data-aos-delay="1250" data-aos-duration="1200">
                    增添藝術的色彩
                </span>
            </h2>
            <div
                data-aos="fade-right" data-aos-duration="1200"
                data-aos-once="true" data-aos-delay="1500">
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
                        data-aos-once="true"
                        class="intro-img rounded-1"
                        alt="Image by Bianca Fazacas on Unsplash"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714072186418.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IOwmHVtK7e%2FBGxIoiRQCI6RmQUH4jzIVwOgspyo8mMr6p%2B8taI29do7JrG4odTbPw2w%2ForkCjOoQR%2Bd6ceubU07rTf9sObgIPwKfA2hK%2Bi%2FmpN68h6J5015GKD%2B2HiGBK9I13X18Y0LA%2FWWVEyyS1Lm%2BZMdfpFHvBp21ZrUMEUnK6B4%2Fi3%2F%2Ba1yVwKl4b2EYgAWsDJ0eWUAlgTZEvBidTo7y0LN0Vwm5kTgvOX2bikZdpq4DM7b0Cm6cenLYA6xuEsjvuW%2FwRILlQEM3e%2BhG8VH29i6PvkbBcEuz8x4zQvOiNGhc7wP2KKK3SaLbDA7JIlt8cF2VjYSDylUi2Ts%2BiQ%3D%3D">
                </div>
                <div class="col-lg-6 col-md-8">
                    <div
                        class="intro-sec shadow-sm rounded-1 p-2"
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        data-aos-once="true">
                        <div
                            class="d-flex justify-content-lg-center align-items-center
                            px-lg-7 px-5 py-6 border border-white">
                            <div>
                                <h3 class="fw-bold mb-6">
                                    <span class="section-title">豐富多樣的商品</span>
                                </h3>
                                <p>收藏家是一個小型的藝術品販售商店</p>
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
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        data-aos-once="true">
                        <div
                            class="d-flex justify-content-lg-center align-items-center
                            px-lg-7 px-4 py-6 border border-white rounded-1"
                            data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                            data-aos-once="true">
                            <div>
                                <h3 class="fw-bold mb-6">
                                    <span class="section-title">紮實的文章內容</span>
                                </h3>
                                <p>我們不止步於純粹的電商經營</p>
                                <p>同時更致力於打造平易近人的知識分享平台</p>
                                <p>收藏家將不定期更新專欄文章</p>
                                <p>深入淺出，包羅萬象</p>
                                <p class="mb-6">邀您一同探索這顆星球上的吉光片羽</p>
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
                        data-aos-once="true"
                        class="intro-img rounded-1"
                        alt="Image by Jaredd Craig on Unsplash"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714072531215.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cuenwrGCDZzdIgbtvwALgLj6lZtfxa6L8mSO18lH%2B9cN3631k4r54WFoo2OqjNeHsgbiVpY%2BHOjwumnl2DmIqi%2BvfZvCrMtb2BHPEjbiIcmerXwdrhFoxJ8WeObVLJT%2B95%2BhqPY5jrYPgY6MZE%2F9VVa3JMSc%2Fa64o91Zukdv43xFbns%2FqkAb5uIDjIc3UD%2FLkBCLXdQARN7OoxF0KeOX49tFCRs2Y1lSZAFZ%2FkuF87rHrPX0WVej7X8ckAcV9o%2BvzZ7wd43SC0ApBPtwpBY7Mc5ddfi8vrVfVN8rzCelqr7EuB8pJyBWPSoBzbKqB0witq%2BsjPdTfDV4PF8h0zaZhw%3D%3D">
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-6 col-md-4">
                    <img
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        data-aos-once="true"
                        class="intro-img rounded-1"
                        alt="Image by atlascompany on Freepik"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709826148810.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qTwkWRj0hhwy6orSCoAQx2j6Z%2B1vuc%2BBbkr%2B%2FAJHRQwtg15ubOBryZlqrMHX42AqX5VIhf2R3cCv4XrRDWfljnlcewJptCZpIOttxcNDLybkvlLX7NPIq%2BEmMatX9M9N3Pa1gcDdnH2rIErRUqeP7ur%2BvySTRjOV6F9B6mgbBJPj%2FAUOhGTMxXyJOotbu4MJY4%2BvG3nMZOMkwdEOsVk%2B350d1qjHkw3IfXEiTtxY1fLoL6%2BEJJwQqj3zUf8T%2F%2Fnq2d16E3KrAEv3LNiO5UkHXnIUqt%2B2JkNIIeceUctnFRE1OQR5VPCGBRZVVM4uz8jjTWUR6s%2FkgJ%2FAG2u5LjMVzg%3D%3D">
                </div>
                <div class="col-lg-6 col-md-8">
                    <div
                        class="intro-sec shadow-sm rounded-1 p-2"
                        data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000"
                        data-aos-once="true">
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
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714072994705.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Cp8SMwBlU6qf09UVe%2B0USRWKM30R9MHlagghKaueBjS%2FlW8J3b%2FkJOchxY1Qm6hcR5Zfun6Q3iPphGDnDBvZEDEXML5dw9g8C1iOVTtSM2FbLWuW2IzRScH7qA30P7edKKTofcVg%2Bpkk9aTU6EooKtQwh%2BtF1r4OyQAR8F8SvLJE477IDNTqrttALvay9fJt2VgEY8TSxl%2F6GCVAovG2Nh4Gz12hshDzhIS%2Fk15yIjNMQeY4XNx0QGYed%2FfG2nz9xs4%2BTsdy4Wk0tE5jYzLr88bPfYZXW8WZhDWEkjIhOvbnN6%2FFHYmUZsWrmVbMiKflZ6t39%2FtRtKnZZ2A44EN0Uw%3D%3D"
                                    alt="painting" height="400">
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
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714073168943.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=glHlQT5j1VUIdVOJfcDpKB2vMEcugcXdul6EVe0dUhYGzNqBw2lDGzQm4ZVaJ3vigFQrCZMR6NCT62TKmb8PxHLeMCrKufnfoB2BK55YI7x66jf2NGsIZUjXOlv95RfkP1eA8rO7sj8uMFCk5YudYxqeXXkfTS%2FJOHPNXfqnqZHSwVpSDSf%2BonG2nhT7r8EjOPKuFAimnSDUezuAYUVDabgfw8uDUN5y6rTQO8cTl1Kz91sqMNdyLonz6cO78I%2FLy2mU5zQQDVVkOn%2FAsU2AlX4VBbKoVzs8i%2BdQDPlJDe2O4bmgQDe8%2F4MwixpY%2Bn3qsUG5IlEwKVS2xE9IQhqrBA%3D%3D"
                                    alt="sculpture" height="400">
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
                                    alt="toy and model" height="300" class="w-100">
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
                                    alt="craft and antique" height="300" class="w-100">
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
                                    src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714073485705.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=p4oNrBeTOAdymru%2FMWJ4rKgzmagTdlQ7zbq%2F5mVwckFH9kJpCVXGa7QqSiBoXFi37FmYZySPLjCONoIsnLpsnPYmqEhF3w3XRlrGmmuzJtb9g%2Bk%2F9n9wdY9tsqrs5uEtnSNVbDS1LBb1i9Gh3r3jmriTCEE%2BDYY5PobcqFW8IUvrkgcZFkem8bfvxlSzsx%2F1wFl5YSo%2BGXvCYV%2B1vtOg7A6aTzSlTTRDIkmSB%2FrcktJZ%2Foar3IRgN%2B7j1tVgBzoAE8NwYMJIZxC1RHDLUb4FmVcZMON5inh2kHlWKP8007yqdLmG2k%2FfGCkJ6WehUdu2ER2bo1AnH%2BxqdqIr%2F9P08A%3D%3D"
                                    alt="stationery" height="300" class="w-100 object-fit-cover">
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
</transition>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import loaderStore from '@/stores/loader';

import userArticleStore from '@/stores/userArticle';

//

import aos from 'aos';

import 'aos/dist/aos.css';

//

import FaqSection from '@/components/section/FaqSection.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    components: { FaqSection, SubscriptionSection },

    computed: {

        ...mapState(userArticleStore, ['news']),

        ...mapState(loaderStore, ['isLoading']),

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles']),

    },

    mounted() {

        aos.init();
        this.getArticles();

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/variables';

.fade-enter-from, .fade-leave-to { opacity: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity .5s ease; }

img { object-fit: cover; }

.banner {

  height: 600px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714069125080.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NRvtGnMH4odftFw2fsr6F5QRy8wwvqOrI%2FfVZ4%2BXg7BKxIDD6BLl5QdO7nYfnqv3%2B0ksy6qxnCUZuKECpQMa4%2BRiWy03brhWDuXn9qX6S%2BYjX1LiPClD%2BPCuo3Q1te7Y1UX4kf6ZuopE5N4xefX4iRK0GdKcvnJwCb97PYkRxqAInPzmwfratpUBw9PbEML8WMEWnfiahvnWzroHLIAHrbfE6cWKblL444%2BzEnes71SnjX8aOalx3GQk9pWS47BaFASkitQSfU%2F3bnM67w8Z7Oj5hqhmnGkGNuNTz1xh2X5NWcgl%2F1WGLEgyUfvKaImz2frPop%2BmHJ30jzVddHs9Wg%3D%3D);
  background-repeat: no-repeat;
  background-position: 50% 10%;
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

.banner-txt {

    background-color: rgba(0, 0, 0, .5);
    padding-left: .5rem;

}

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
