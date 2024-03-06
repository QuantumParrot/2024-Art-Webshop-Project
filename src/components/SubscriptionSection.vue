<template>

<section class="bg-primary text-white py-7">
    <div class="container">
        <div class="row gy-5">
            <div class="col-md-4">
                <div class="h-100 d-flex align-items-center">
                    <h3 class="fw-bold mb-0">常見問答｜
                        <span class="fs-5 text-light">Q & A</span>
                    </h3>
                </div>
            </div>
            <div class="col-md-8">
                <div class="accordion" id="faq">
                    <template v-for="q in questions" :key="q.id">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <button type="button" class="bg-light accordion-button collapsed"
                                    data-bs-toggle="collapse" :data-bs-target="`#faq${q.id}`"
                                    aria-expanded="false" :aria-controls="`#faq-${q.id}`">
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
            </div>
        </div>
    </div>
</section>

<section class="subscription text-primary py-7">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p class="text-shadow fs-4 fw-bold mb-3">
                歡迎訂閱我們的電子報，<br>
                好康消息、專欄文章不漏接！
                </p>
                <v-form v-slot="{ errors }" @submit="subscribe">
                <div class="input-group">
                    <v-field
                        type="text" placeholder="請輸入您的電子信箱"
                        class="form-control py-2" :class="{ 'is-invalid': errors['email'] }"
                        name="email" rules="required"></v-field>
                    <button type="submit" class="btn btn-primary px-5">訂閱</button>
                </div>
                </v-form>
            </div>
        </div>
    </div>
</section>

</template>

<script>

import faqMixins from '@/mixins/faq';

//

import { mapActions } from 'pinia';

import alertStore from '@/stores/alert';

export default {

    mixins: [faqMixins],

    methods: {

        ...mapActions(alertStore, ['modalAlert']),

        subscribe(data, { resetForm }) {

            const config = {

                title: '感謝您的訂閱！',
                text: '什麼也沒發生 ･*･:≡(　ε:)',
                icon: 'success',
                buttonColor: '#424242',
                buttonTxt: '好喔',

            };

            this.modalAlert(config);
            resetForm();

        },

    },

};

</script>

<style>

.subscription {

    background-attachment: fixed;
    background-image: url(https://images.unsplash.com/photo-1587811798408-e7200ed808d0?q=80&w=2953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

}

</style>
