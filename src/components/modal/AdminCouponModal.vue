<template>

<div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header justify-content-end">
                <button type="button" class="btn border-0 p-0 fs-4"
                        @click="hideModal">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <v-form v-slot="{ meta }" @submit="confirmUpdate" ref="form">
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label is-required" for="title">優惠券名稱</label>
                    <v-field
                        id="title" type="text"
                        class="form-control" v-model.trim="coupon.title"
                        name="title" rules="required"></v-field>
                </div>
                <div class="mb-3">
                    <label class="form-label is-required" for="code">優惠碼</label>
                    <v-field
                        id="code" type="text"
                        class="form-control" v-model.trim="coupon.code"
                        name="code" rules="required"></v-field>
                </div>
                <div class="mb-3">
                    <div class="flex-classic mb-2">
                        <label class="is-required" for="percent">折扣</label>
                        <span class="fs-7 text-danger mb-0">必須是 1 ～ 100 之間的整數</span>
                    </div>
                    <div class="input-group">
                    <v-field
                        id="percent" type="number" min="1" max="100"
                        class="form-control" v-model.number="coupon.percent"
                        name="percent" rules="required|integer|min_value:1|max_value:100"></v-field>
                        <span class="input-group-text">％</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label is-required" for="due_date">
                    <span>優惠截止日期</span></label>
                    <input id="due_date" type="date" class="form-control"
                           v-model="due_date" :min="$calc.today()">
                </div>
            </div>
            <div class="modal-footer justify-content-between align-items-center">
                <div class="form-check">
                    <input id="is_enabled" type="checkbox" class="form-check-input"
                           v-model="coupon.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-label" for="is_enabled">
                    是否啟用</label>
                </div>
                <div>
                <button type="submit" class="btn btn-primary me-2"
                        :disabled="!meta.valid">確認更新</button>
                <button type="button" class="btn btn-outline-secondary"
                        @click="hideModal">取消</button>
                </div>
            </div>
            </v-form>
        </div>
    </div>
</div>

</template>

<script>

import modalMixins from '@/mixins/modal';

//

import { mapActions } from 'pinia';

import adminCouponStore from '@/stores/adminCoupon';

import alertStore from '@/stores/alert';

//

export default {

    mixins: [modalMixins],

    data() { return { coupon: {} }; },

    props: ['tempCoupon'],

    computed: {

        due_date: {

            get() { return this.$calc.formatDate(this.coupon.due_date * 1000); },

            set(date) {

                this.coupon.due_date = new Date(date).getTime() / 1000;

            },

        },

    },

    watch: {

        tempCoupon() { this.coupon = this.tempCoupon; },

    },

    methods: {

        ...mapActions(adminCouponStore, ['createCoupon', 'updateCoupon']),

        ...mapActions(alertStore, ['toastAlert']),

        confirmUpdate() {

            if (this.coupon.id) {

                this.updateCoupon(this.coupon, this.hideModal);

            } else {

                this.createCoupon(this.coupon, this.hideModal);

            }

        },

    },

    mounted() { this.coupon = this.tempCoupon; },

};

</script>
