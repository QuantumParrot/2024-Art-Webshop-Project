<template>

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

import { mapActions } from 'pinia';

import alertStore from '@/stores/alert';

export default {

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
