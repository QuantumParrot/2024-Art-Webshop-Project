<template>

<div class="h-100 bg-gray text-primary" v-if="projects.length">
    <div class="container py-7">
        <div class="profile mb-7 overflow-hidden">
            <img
                class="w-100 h-100 object-fit-cover rounded-2"
                alt="Image by Joseph on Unsplash"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710039277736.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=e0amGflGBfJ0MrTJtOUcm0VZIkPNZ8i0Ec6xFV1%2FSXN%2BM5ScwrPus3Yucr%2FqRIxt6EBEwPfzQ3f39frzjf6%2B07YvrzNGVICSo3E%2BANxqq7ZntJ0117Xliu%2B5dt%2BjNJt6xIXIcQDsjINkIvYIYEQYQU2J%2BZeo%2B7L%2BuYmeM5SrNiwd0r4Hc%2FKtmWYJfB0xLjMsGch76%2FXPum568ZC94RhpmSP%2Fn5%2B8Z51%2Bi6QZi6%2Fo4KONabfqjKYSCZubBXVwkZvHnoIgiBCudh3OU%2Bk7urDKiD4P4pou61RWkNiz0ZzyUj2K%2Fg2YN3BXxumfbVSAuQWV8kRkAiCWmG7%2F%2Fcrivq317w%3D%3D">
            <div
                class="position-absolute top-0 w-100 h-100 z-2
                d-flex flex-column
                justify-content-center align-items-lg-start align-items-center">
                <div
                    class="profile-txt rounded-2 px-5 py-7 mx-md-5
                    text-light lh-lg animate__animated animate__fadeIn">
                    <h2 class="h3 mb-md-7 mb-5"><b>認識我們</b></h2>
                    <div>
                        <p>收藏家的創業構想起源於 2015 年，</p>
                        <p>最初的團隊成員在博物館擔任導覽志工時互相認識，</p>
                        <p>懷抱不切實際的夢想與藍圖，憑藉對歷史藝術的熱情與執著，</p>
                        <p>2023 年終於成立了這間工作室，作為副業經營。</p>
                        <p>目前工作室共有十人，每個人都是來自不同知識領域的夥伴，</p>
                        <p>但是我們擁有共同的理念－－</p>
                        <p><b>透過對藝術、歷史與文化的探索，</b></p>
                        <p><b>讓更多人認識我們所處的這片土地、這顆星球，</b></p>
                        <p><b>在這稍縱即逝的人生行旅上，</b></p>
                        <p class="mb-0"><b>深入體會生活中的日常之美，領略生命中最純粹的那份感動。</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-7">
            <h3 class="text-dark mb-7" id="project"><b>公益計劃</b></h3>
            <p>我們會將每一筆訂單 <b class="text-danger">10 ～ 20％</b> 的收益，</p>
            <p>全數回饋給這些在不同社會議題努力的非營利組織，謝謝他們為這片土地的付出！</p>
            <p class="mb-7">
            <span class="text-muted">雖然網站是假的，</span>
            <span>但是這些團體是真實的存在，歡迎點選以下的連結認識他們喔！</span>
            </p>
            <h4 class="mb-6">
                <i class="text-highlight bi bi-brightness-high-fill me-3"></i>
                <b>海洋保育</b>
            </h4>
            <div class="row gy-6 mb-6">
                <template v-for="item in ocean" :key="item.id">
                <div class="col-lg-4 col-md-6">
                    <NGOCard :org="item" />
                </div>
                </template>
            </div>
            <h4 class="mb-6">
                <i class="text-highlight bi bi-brightness-high-fill me-3"></i>
                <b>野生動物救援</b>
            </h4>
            <div class="row gy-6 mb-6">
                <template v-for="item in wildAnimal" :key="item.id">
                <div class="col-lg-4 col-md-6">
                    <NGOCard :org="item" />
                </div>
                </template>
            </div>
            <h4 class="mb-6">
                <i class="text-highlight bi bi-brightness-high-fill me-3"></i>
                <b>社會關懷</b>
            </h4>
            <div class="row gy-6 mb-6">
                <template v-for="item in socialCare" :key="item.id">
                <div class="col-lg-4 col-md-6">
                    <NGOCard :org="item" />
                </div>
                </template>
            </div>
        </div>
        <div class="mb-7">
            <h3 class="text-dark mb-7" id="faq"><b>常見問答</b></h3>
        </div>
        <div class="accordion mb-7" id="faq-section">
            <template v-for="q in sortQuestions" :key="q.id">
            <div class="accordion-item">
                <div class="accordion-header">
                    <button
                        type="button"
                        class="bg-light accordion-button collapsed"
                        data-bs-toggle="collapse" :data-bs-target="`#faq${q.id}`"
                        aria-expanded="false" :aria-controls="`#faq-${q.id}`">
                        <i class="fs-7 text-highlight bi bi-asterisk"></i>
                        <b class="ms-3 text-dark">{{ q.question }}</b>
                    </button>
                </div>
                <div
                    class="accordion-collapse collapse" :id="`faq${q.id}`"
                    data-bs-parent="#faq-section" aria-expanded="false">
                    <div class="accordion-body">
                        <p class="mb-0 lh-lg" v-html="q.answer"></p>
                    </div>
                </div>
            </div>
            </template>
        </div>
        <div class="alert bg-white py-5 mb-0">
            <p>沒有回覆到您的疑問嗎？請透過以下方式聯繫我們：</p>
            <ul class="ps-3 mb-3">
                <li class="mb-3"><b>信箱</b>：collectorstudio@mail.com</li>
                <li><b>電話</b>：0900-900900</li>
            </ul>
            <p class="mb-0">我們將在 24 小時內給予您答覆！</p>
        </div>
    </div>
</div>

</template>

<script>

import 'animate.css';

//

import faqMixins from '@/mixins/faq';

import { mapState, mapActions } from 'pinia';

import userArticleStore from '@/stores/userArticle';

//

import NGOCard from '@/components/card/NGOCard.vue';

export default {

    components: { NGOCard },

    mixins: [faqMixins],

    computed: {

        ...mapState(userArticleStore, ['projects']),

        // 公益計劃

        ocean() { return this.projects.filter((i) => i.category === '海洋保育'); },

        wildAnimal() { return this.projects.filter((i) => i.category === '野生動物救援'); },

        socialCare() { return this.projects.filter((i) => i.category === '社會關懷'); },

    },

    methods: {

        ...mapActions(userArticleStore, ['getArticles']),

    },

    mounted() { if (!this.projects.length) { this.getArticles(); } },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.profile {

  position: relative;
  height: 700px;

  &::after {

    content: '';
    width: 100%; height: 100%;
    position: absolute;
    top: 0; right: 0;
    z-index: 1;

    background-color: rgba(255, 255, 255, 0.3);

  };

}

.profile-txt { background-color: rgba(0, 0, 0, 0.4); }

.accordion-button {

  background-color: $secondary;
  color: $light;

}

@media (max-width: 471px) {

  .profile { height: 800px; }

};

</style>
