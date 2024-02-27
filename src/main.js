/* eslint-disable indent */

import './assets/main.scss';

import 'bootstrap-icons/font/bootstrap-icons.scss';

//

import { createApp, markRaw } from 'vue';

import { createPinia } from 'pinia';

import {

  defineRule, configure,
  Form, Field, ErrorMessage,

} from 'vee-validate';

import * as rules from '@vee-validate/rules';

import { setLocale, localize } from '@vee-validate/i18n';

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import axios from 'axios';

import VueAxios from 'vue-axios';

//

import LoadingOverlay from './components/LoadingOverlay.vue';

//

import router from './router';

import App from './App.vue';

//

Object.keys(rules).forEach((rule) => defineRule(rule, rules[rule]));

configure({

  generateMessage: localize({ zhTW }),
  validateOnInput: true,

});

setLocale('zhTW');

//

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {

  const newStore = store;
  newStore.router = markRaw(router);

});

app.component('v-form', Form);

app.component('v-field', Field);

app.component('error-message', ErrorMessage);

app.component('loading-overlay', LoadingOverlay);

app.use(pinia);

app.use(router);

app.use(VueAxios, axios);

app.mount('#app');
