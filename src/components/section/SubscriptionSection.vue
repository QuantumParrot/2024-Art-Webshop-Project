<template>

<section class="subscription text-primary py-md-8 py-7">
    <div class="container">
        <div class="row">
            <div class="col-md-6 z-2">
                <p class="fs-4 fw-bold mb-5">
                歡迎訂閱我們的電子報，<br>
                好康消息、專欄文章不漏接！
                </p>
                <VForm v-slot="{ errors }" @submit="subscribe">
                    <div class="input-group">
                        <VField
                            type="text" placeholder="請輸入您的電子信箱"
                            class="form-control py-2" :class="{ 'is-invalid': errors['email'] }"
                            name="email" rules="required"></VField>
                        <button type="submit" class="btn btn-primary px-5">訂閱</button>
                    </div>
                </VForm>
            </div>
        </div>
    </div>
</section>

</template>

<script>

import { mapActions } from 'pinia';

import alertStore from '@/stores/alert';

export default {

    methods: {

        ...mapActions(alertStore, ['toastAlert']),

        subscribe(data, { resetForm }) {

            this.toastAlert('感謝訂閱 ･*･:≡(　ε:)', 'success');
            resetForm();

        },

    },

};

</script>

<style>

.subscription {

  background-attachment: fixed;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1714073582986.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h8z3fOh6f8IKUEEEr1jZKrT02SWa7HMdUqjY%2FHLGN3CkCs2EexkTCUkiwRzYAa07B0m2rwxns6%2FkP6OVlXc8j6TEikFMjZuCnF%2BpB4Gr%2FERhM0Ii1N8l%2FZyvetWS3AZ2k4kRlX8qGz9S4H8rvN3UVGx38DtSD6gWoqYIhFxJ%2Bors%2FEb5Xud0AKBurarIxtZQqiK%2F0wiCvOOm6d%2Ff%2FsUW7xk56E14rb7Um%2FwFNauCBCN7KpmxC2UWcncfESLvBquVMrAOfjCdhM2EVtNdLAkOj6qLTSN4dguc%2FVxJX%2F826X%2BD3NerJPku8ea5f9MFQCqbUx6bT0RClMXDi9wB40WoQA%3D%3D);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
  z-index: 1;

  &::after {

    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 0;

  }

}

</style>
