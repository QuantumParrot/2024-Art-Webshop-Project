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
  background-image: url(https://images.unsplash.com/photo-1587811798408-e7200ed808d0?q=80&w=2953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
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
