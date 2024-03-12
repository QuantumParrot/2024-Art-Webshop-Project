import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const { VITE_APP_SITE } = import.meta.env;

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

//

export default defineStore('adminAuth', {

    state: () => ({ isLogin: false }),

    actions: {

        login(data) {

            loaderStore.createLoader('login');
            axios.post(`${VITE_APP_SITE}/admin/signin`, data)
                .then((res) => {

                    const { message, token, expired } = res.data;
                    document.cookie = `hexVueToken=${token}; expires=${new Date(expired)}`;
                    alertStore.toastAlert(message, 'success');
                    setTimeout(() => { this.router.replace('/admin'); }, 1500);

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('login'));

        },

        checkLogin(path) {

            loaderStore.createLoader('check-login');
            const token = document.cookie.split('; ').find((row) => row.startsWith('hexVueToken='))?.split('=')[1];
            axios.defaults.headers.common.Authorization = token;
            axios.post(`${VITE_APP_SITE}/api/user/check`)
                .then(() => { this.changeLoginState(true); })
                .catch((error) => {

                    document.cookie = 'hexVueToken=; Max-Age=-1';

                    if (path !== '/login') {

                        alertStore.errorAlert(error);
                        setTimeout(() => { this.router.push('/login'); }, 1500);

                    }

                })
                .finally(() => loaderStore.removeLoader('check-login'));

        },

        logout() {

            loaderStore.createLoader('logout');
            axios.post(`${VITE_APP_SITE}/logout`)
                .then((res) => {

                    document.cookie = 'hexVueToken=; Max-Age=-1';
                    this.changeLoginState(false);
                    alertStore.toastAlert(res.data.message, 'success');
                    setTimeout(() => { this.router.replace('/login'); }, 1500);

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('logout'));

        },

        changeLoginState(state) { this.isLogin = state; },

    },

});
