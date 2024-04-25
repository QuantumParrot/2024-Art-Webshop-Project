import './assets/main.scss';

import 'bootstrap-icons/font/bootstrap-icons.scss';

import 'animate.css';

//

import { createApp, markRaw } from 'vue';

import { createPinia } from 'pinia';

// vee-validate

import {

    defineRule, configure,
    Form, Field, ErrorMessage,

} from 'vee-validate';

import * as rules from '@vee-validate/rules';

import { setLocale, localize } from '@vee-validate/i18n';

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// axios

import axios from 'axios';

import VueAxios from 'vue-axios';

//

import * as calculator from '@/methods/calculator';

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

app.config.globalProperties.$calc = { ...calculator };

const pinia = createPinia();

pinia.use(({ store }) => {

    const newStore = store;
    newStore.router = markRaw(router);

});

app.component('VForm', Form);

app.component('VField', Field);

app.component('ErrorMessage', ErrorMessage);

app.component('LoadingOverlay', LoadingOverlay);

app.use(pinia);

app.use(router);

app.use(VueAxios, axios);

app.mount('#app');
