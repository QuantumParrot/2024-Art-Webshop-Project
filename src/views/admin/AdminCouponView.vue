<template>

<div class="text-end mb-7">
    <h3 class="fs-2 mb-2">優惠券</h3>
    <p class="text-muted">目前共有 {{ coupons.length }} 張優惠券</p>
</div>

<div class="alert bg-gray flex-classic mb-5">
    <div>
        <button type="button" class="btn btn-highlight" @click="openModal()">建立優惠券</button>
    </div>
    <pagination-component
        :current="pagination.current_page" :total="pagination.total_pages"
        @switch-page="getCoupons" />
</div>

<div class="table-responsive" v-if="coupons.length">
    <table class="table table-hover text-nowrap">
        <thead>
            <tr>
            <th scope="col" width="10%">到期</th>
            <th scope="col" width="50%">名稱</th>
            <th scope="col" width="15%" class="text-end">折扣</th>
            <th scope="col" width="10%" class="text-center">狀態</th>
            <th scope="col" width="15%" class="text-center">處理</th>
            </tr>
        </thead>
        <tbody class="align-middle">
            <tr v-for="coupon in coupons" :key="coupon.id">
                <td>{{ $calc.formatDate(coupon.due_date * 1000, '/') }}</td>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <span>{{ coupon.title }}</span>
                        <span class="badge bg-primary py-2">{{ coupon.code }}</span>
                    </div>
                </td>
                <td class="text-end">{{ coupon.percent }}％</td>
                <td class="text-center">
                    <div class="form-switch">
                        <input type="checkbox" role="switch"
                               class="form-check-input"
                               :checked="coupon.is_enabled" @change="switchCouponStatus(coupon)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="d-flex flex-column gap-2">
                        <button type="button" class="w-100 btn btn-outline-secondary"
                                @click="openModal(coupon)">
                        編輯</button>
                        <button type="button" class="w-100 btn btn-outline-danger"
                                @click="deleteCoupon(coupon)">
                        刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="alert bg-gray" v-else>還沒有任何優惠券！趕快建立一個吧！</div>

<admin-coupon-modal ref="couponModal" :temp-coupon="tempCoupon" />

</template>

<script>

import { mapState, mapActions } from 'pinia';

import adminCouponStore from '@/stores/adminCoupon';

//

import AdminCouponModal from '@/components/modal/AdminCouponModal.vue';

import PaginationComponent from '@/components/PaginationComponent.vue';

//

export default {

    components: { AdminCouponModal, PaginationComponent },

    data() { return { tempCoupon: {} }; },

    computed: {

        ...mapState(adminCouponStore, ['coupons', 'pagination']),

    },

    methods: {

        ...mapActions(adminCouponStore, ['getCoupons', 'deleteCoupon', 'switchCouponStatus']),

        openModal(item) {

            this.tempCoupon = item ? { ...item } : {

                is_enabled: 0,
                due_date: this.$calc.now(),

            };

            this.$refs.couponModal.showModal();

        },

    },

    mounted() { this.getCoupons(); },

};

</script>
