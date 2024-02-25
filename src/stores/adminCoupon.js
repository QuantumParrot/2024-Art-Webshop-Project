import axios from 'axios';

//

import { defineStore } from 'pinia';

import useLoaderStore from './loader';

import useAlertStore from './alert';

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

const loaderStore = useLoaderStore();

const alertStore = useAlertStore();

//

export default defineStore('adminCoupon', {

    state: () => ({ coupons: [], pagination: {} }),

    actions: {

        getCoupons(page = 1) {

            loaderStore.createLoader('get-coupons');
            axios.get(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/coupons?page=${page}`)
                .then((res) => {

                    const { coupons, pagination } = res.data;
                    this.coupons = coupons;
                    this.pagination = pagination;

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('get-coupons'));

        },

        createCoupon(data, hideModal) {

            loaderStore.createLoader('create-coupon');
            axios.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/coupon`, { data })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getCoupons();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('create-coupon'));

        },

        updateCoupon(data, hideModal) {

            loaderStore.createLoader('update-coupon');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/coupon/${data.id}`, { data })
                .then((res) => {

                    alertStore.toastAlert(res.data.message, 'success');
                    hideModal();
                    this.getCoupons();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('update-coupon'));

        },

        deleteCoupon(coupon) {

            const config = { title: '確定刪除優惠券？', text: `優惠券名稱：${coupon.title}` };

            alertStore.checkAlert(config, () => {

                loaderStore.createLoader('delete-coupon');
                axios.delete(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`)
                    .then((res) => {

                        alertStore.toastAlert(res.data.message, 'success');
                        this.getCoupons();

                    })
                    .catch((error) => alertStore.errorAlert(error))
                    .finally(() => loaderStore.removeLoader('delete-coupon'));

            });

        },

        switchCouponStatus(data) {

            const current = !!(data.is_enabled);

            loaderStore.createLoader('switch-coupon-status');
            axios.put(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/coupon/${data.id}`, {
                data: { ...data, is_enabled: current ? 0 : 1 },
            })
                .then(() => {

                    alertStore.toastAlert(`成功${current ? '取消' : '開啟'}優惠券`, 'success');
                    this.getCoupons();

                })
                .catch((error) => alertStore.errorAlert(error))
                .finally(() => loaderStore.removeLoader('switch-coupon-status'));

        },

    },

});
