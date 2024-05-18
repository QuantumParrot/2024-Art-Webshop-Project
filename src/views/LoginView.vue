<template>

<LoadingOverlay :isLoading="isLoading" />

<div class="container-fluid" ref="background">
    <div class="h-100 row justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="col-lg-4 col-md-6">
            <VForm class="p-7 shadow" v-slot="{ errors }" @submit="login">
                <h2 class="mb-7 text-center text-white">管理員登入</h2>
                <div class="form-floating mb-3">
                    <VField
                        type="email" id="username" placeholder="帳號"
                        class="form-control mb-3" :class="{ 'is-invalid': errors['username'] }"
                        name="username" rules="email|required">
                    </VField>
                    <label for="username" class="form-label">帳號</label>
                    <ErrorMessage name="username" v-slot="{ message }">
                        <p class="invalid-feedback">{{ localize(message, 'username') }}</p>
                    </ErrorMessage>
                </div>
                <div class="form-floating mb-7">
                    <VField
                        id="password" :type="isPwdVisible ? 'text' : 'password'"
                        placeholder="密碼"
                        class="form-control mb-3" :class="{ 'is-invalid': errors['password'] }"
                        name="password" rules="required">
                    </VField>
                    <label for="password" class="form-label">密碼</label>
                    <ErrorMessage name="password" v-slot="{ message }">
                        <p class="invalid-feedback">{{ localize(message, 'password') }}</p>
                    </ErrorMessage>
                    <button
                        type="button" class="fs-5 btn btn-inline" v-show="!errors['password']"
                        @click="isPwdVisible = !isPwdVisible">
                        <i class="bi" :class="isPwdVisible ? 'bi-eye' : 'bi-eye-slash'"></i>
                    </button>
                </div>
                <button type="submit" class="w-100 btn-slider btn-login">確認登入</button>
                <RouterLink v-if="isLogin" to="/admin" v-slot="{ navigate }" custom>
                    <button
                        type="button" class="w-100 btn-slider btn-navigate mt-3"
                        @click="navigate">前往後台</button>
                </RouterLink>
            </VForm>
        </div>
    </div>
    <p class="bg-text py-2 mb-0">{{ backgroundText }}</p>
</div>

</template>

<script>

import backgroundMixins from '@/mixins/background';

import validationMixins from '@/mixins/validation';

//

import { mapState, mapActions } from 'pinia';

import adminAuthStore from '@/stores/adminAuth';

import loaderStore from '@/stores/loader';

//

export default {

    mixins: [backgroundMixins, validationMixins],

    data() {

        return { backgroundText: '', isPwdVisible: false };

    },

    methods: {

        ...mapActions(adminAuthStore, ['login', 'checkLogin']),

    },

    computed: {

        ...mapState(adminAuthStore, ['isLogin']), ...mapState(loaderStore, ['isLoading']),

    },

    created() { this.checkLogin(this.$route.path); },

    mounted() {

        const img = this.randomSwitchImg();
        this.$refs.background.style.backgroundImage = `url(${img.url})`;
        this.backgroundText = img.description;

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.container-fluid {

  width: 100%; height: 100%;
  background-size: cover;
  position: relative;
  z-index: 10;

  &::after {

    content: '';
    width: 100%; height: 100%;
    position: absolute;
    top: 0; left: 0;
    z-index: -10;
    background-color: $gray-500;
    opacity: 0.5;

  }

}

.bg-text {

  width: 100%;
  padding: 0 12px;
  position: absolute;
  bottom: 0; left: 0;
  backdrop-filter: brightness(90%);
  text-shadow: 0 0 10px rgba(255, 255, 255, .3);

}

form {

  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(8px);

}

.btn-login {

  padding: 0.75rem;
  font-weight: 700;

  background-color: $highlight;

  &::after { background-color: $orange-100; }

}

.btn-navigate {

  padding: 0.75rem;
  font-weight: 700;

  background-color: $gray-500;

  &::after { background-color: $gray; }

}

.btn-inline { top: 0.85rem; right: .75rem; }

.invalid-feedback {

  color: $red-400;
  text-shadow: 0 0 10px rgba(0, 0, 0, .8);

}

</style>
