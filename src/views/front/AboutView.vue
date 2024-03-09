<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <div class="profile mb-7 overflow-hidden">
            <img class="w-100 h-100 object-fit-cover rounded-2"
                 alt="Image by Joseph on Unsplash"
                 src="https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710000754385.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iNtTm4dgOgiHLWhbK6oyK0Ctq%2Bau1cMB7AWbmIb00hfhS5NINzgyLUbntQPG0h%2FCc3e9PEi40B4YRvnmh%2F%2FZhNEbhSfDft%2BXkhP%2BkaZ9ggmIH%2BLOGtqT1OaC3tyglwqXqUjByLSePAEjYsBRtTbund2GJlI5stXvvhqWCDclpQU87hAgFzuZo7a1qRWiCcL3xpit%2BSlpe337ugaSodlRatSRXFVLR2riAIh0G2gAqnkH6IWezdRiqzHHb2McaL6rkNKvSuR0Pw%2F%2Fv8DDcfvg5mS9xsMa53xvJiBfWUUNPKCyrtPYG8K8fh2KDRWSM3lx17ocib3FkmbNf2UgfbMMgw%3D%3D">
            <div class="position-absolute top-0 w-100 h-100 z-2
                        d-flex flex-column
                        justify-content-center align-items-lg-start align-items-center">
                <div class="profile-txt rounded-2 px-5 py-7 mx-md-5
                            text-light text-shadow-black">
                    <h3 class="mb-md-7 mb-5"><b>認識我們</b></h3>
                    <div class="lh-lg">
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
            <h3 class="text-dark mb-7"><b>公益計劃</b></h3>
            <p>我們會將每一筆訂單 <b class="text-danger">10 ～ 20％</b> 的收益，</p>
            <p>全數回饋給這些在不同社會議題努力的非營利組織，謝謝他們為這片土地的付出！</p>
            <p class="mb-7">
            <span class="text-light">雖然網站是假的，</span>
            <span>但是這些團體是真實的存在，歡迎點選以下的連結認識他們喔！</span>
            </p>
        </div>
        <div class="mb-7">
            <h3 class="text-dark mb-7"><b>常見問答</b></h3>
            <div class="row mb-7">
                <div class="col-md-4">
                    <select class="form-select py-3 fw-bold" v-model="filter">
                        <option value="">全部問題</option>
                        <option v-for="type in faqTypes" :key="type" :value="type">
                        {{ type }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="accordion mb-7" id="faq">
            <template v-for="q in displayingQuestions" :key="q.id">
            <div class="accordion-item">
                <div class="accordion-header">
                    <button type="button"
                            class="accordion-button collapsed"
                            data-bs-toggle="collapse" :data-bs-target="`#faq${q.id}`"
                            aria-expanded="false" :aria-controls="`#faq-${q.id}`">
                    <i class="fs-7 text-subtle bi bi-asterisk me-3"></i>
                    <b>{{ q.question }}</b>
                    </button>
                </div>
                <div class="accordion-collapse collapse" :id="`faq${q.id}`"
                     data-bs-parent="#faq" aria-expanded="false">
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

import faqMixins from '@/mixins/faq';

export default {

    mixins: [faqMixins],

    data() { return { filter: '' }; },

    computed: {

        faqTypes() {

            const types = [];

            this.questions.forEach((q) => {

                if (!types.includes(q.type)) { types.push(q.type); }

            });

            return types;

        },

        displayingQuestions() {

            if (this.filter) { return this.questions.filter((q) => q.type === this.filter); }

            return this.questions;

        },

    },

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

.profile-txt { background-color: rgba(0, 0, 0, 0.2); }

.accordion-button {

    background-color: $secondary;
    color: $light;

}

@media (max-width: 471px) {

    .profile { height: 800px; }

};

</style>
