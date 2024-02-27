<template>

<loading-overlay :isLoading="isLoading"></loading-overlay>

<div class="container-fluid" ref="background">
    <div class="h-100 row justify-content-center align-items-center">
        <div class="col-lg-4 col-md-6">
            <v-form class="p-5 shadow" v-slot="{ errors }" @submit="login">
                <h2 class="mb-5 text-center text-white">管理員登入</h2>
                <div class="form-floating mb-3">
                    <v-field type="email" id="username" placeholder="帳號"
                             class="form-control mb-3" :class="{ 'is-invalid': errors['username'] }"
                             name="username" rules="email|required">
                    </v-field>
                    <label for="username" class="form-label">
                    帳號</label>
                    <error-message name="username" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'username') }}</p>
                    </error-message>
                </div>
                <div class="form-floating mb-5">
                    <v-field type="password" id="password" placeholder="密碼"
                             class="form-control mb-3" :class="{ 'is-invalid': errors['password'] }"
                             name="password" rules="required">
                    </v-field>
                    <label for="password" class="form-label">
                    密碼</label>
                    <error-message name="password" v-slot="{ message }">
                    <p class="invalid-feedback">{{ localize(message, 'password') }}</p>
                    </error-message>
                </div>
                <button type="submit" class="w-100 btn btn-login">確認登入</button>
                <router-link to="/admin" v-slot="{ navigate }" custom v-if="isLogin">
                <button type="button" class="w-100 btn btn-navigate mt-3"
                        @click="navigate">前往後台</button>
                </router-link>
            </v-form>
        </div>
    </div>
    <p class="bg-text py-2 mb-0">{{ backgroundText }}</p>
</div>

</template>

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

.btn {

  overflow: hidden;
  padding: 0.75rem;
  border: 0;
  font-weight: 700;

}

.btn-login {

  background-color: $highlight;
  position: relative;
  z-index: 1;

  &::after {

    content: '';
    width: 0; height: 100%;
    position: absolute;
    top: 0; right: 0;
    z-index: -1;
    background-color: $orange-100;
    transition: all 0.5s;

  }

  &:hover::after { width: 100%; left: 0; }

}

.btn-navigate {

  background-color: $gray-500;
  position: relative;
  z-index: 1;

  &::after {

    content: '';
    width: 0; height: 100%;
    position: absolute;
    top: 0; right: 0;
    z-index: -1;
    background-color: $light;
    transition: all 0.5s;

  }

  &:hover::after { width: 100%; left: 0; }

}

.invalid-feedback {

  color: $red-400;
  text-shadow: 0 0 10px rgba(0, 0, 0, .8);

}

</style>

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

    data() { return { backgroundText: '' }; },

    methods: {

        ...mapActions(adminAuthStore, ['login', 'checkLogin']),

    },

    computed: {

        ...mapState(adminAuthStore, ['isLogin']), ...mapState(loaderStore, ['isLoading']),

    },

    async created() { await this.checkLogin(this.$route.path); },

    mounted() {

        const img = this.randomSwitchImg();
        this.$refs.background.style.backgroundImage = `url(${img.url})`;
        this.backgroundText = img.description;

    },

};

</script>
