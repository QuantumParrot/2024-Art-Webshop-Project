<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <div class="row justify-content-center">
            <div class="col-md-10" v-if="!isLoading">
                <template v-if="carts.length">
                <div class="nav w-100 mb-7 align-items-center
                            justify-content-lg-center justify-content-between gap-lg-4 gap-2">
                    <div class="nav-item h2 mb-0 shadow-sm" :class="{ 'active': step === 1 }">
                        <i class="bi bi-1-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">確認購物車</span>
                    </div>
                    <div class="d-md-block d-none">
                        <span class="arrow-animation">
                            <span class="arrow">➡️</span>
                        </span>
                    </div>
                    <div class="nav-item h2 mb-0 shadow-sm" :class="{ 'active': step === 2 }">
                        <i class="bi bi-2-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">填寫收件資訊</span>
                    </div>
                    <div class="d-md-block d-none">
                        <span class="arrow-animation">
                            <span class="arrow">➡️</span>
                        </span>
                    </div>
                    <div class="nav-item h2 mb-0 shadow-sm" :class="{ 'active': step === 3 }">
                        <i class="bi bi-3-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">完成付款</span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                <template v-for="cart in carts" :key="cart">
                    <div class="bg-white rounded-2 p-3 position-relative">
                        <div class="row align-items-center g-3">
                            <div class="col-xl-8 col-lg-7">
                                <div class="row align-items-stretch gx-3">
                                    <div class="col-sm-4">
                                        <div class="mask z-0">
                                            <router-link target="_blank"
                                                         :to="`/product/${cart.product.id}`">
                                            <img class="card-img object-fit-cover"
                                                 :src="cart.product.imageUrl"
                                                 :alt="cart.product.title">
                                            <div class="z-2 mask-txt text-light fs-3">
                                            <i class="bi bi-box-arrow-up-right"></i>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 col-sm-8">
                                        <div class="h-100 bg-light rounded-0 px-3 py-5 mb-0
                                                    d-flex align-items-center">
                                            <div>
                                            <p><b>{{ cart.product.title }}</b></p>
                                            <p class="fs-7 text-muted">
                                            {{ cart.product.content }}</p>
                                            <p class="mb-0">單價 NT＄{{ cart.product.price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="flex-classic gap-3">
                                    <div class="input-group">
                                        <span class="input-group-text">－</span>
                                        <input
                                            type="number" class="form-control py-1 text-center"
                                            :value="cart.qty">
                                        <span class="input-group-text">＋</span>
                                    </div>
                                    <div class="w-75 text-end">
                                        <p class="mb-0"><b>NT＄{{ cart.total }}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute top-0 end-0">
                            <button type="button"
                                    class="btn btn-sm btn-remove btn-primary rounded-2"
                                    @click="deleteSingleCart(cart.id)">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                    </div>
                </template>
                </div>
                <div class="py-5 border-bottom-dotted">
                    <div class="row justify-content-end gx-1">
                        <div class="col-xl-4 col-lg-5">
                            <div class="input-group">
                                <label for="coupon"
                                       class="input-group-text bg-primary text-white fw-bold">
                                <div role="status" class="spinner-border spinner-border-sm me-2"
                                     v-show="loadingTask">
                                <span class="visually-hidden">Loading...</span>
                                </div>
                                {{ couponLabelText }}</label>
                                <input
                                    id="coupon" type="text" class="form-control"
                                    v-model.trim="couponCode"
                                    @change="checkCoupon"
                                    :disabled="!couponEditable">
                                <button type="button" class="btn btn-primary"
                                        v-if="!couponEditable" @click="couponEditable = true">
                                    <i class="bi bi-arrow-repeat"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5 border-bottom-dotted">
                    <p class="text-end fs-5 mb-0">
                        <span>總計：NT＄</span>
                        <span :class="sum.final_total !== sum.total ? couponUsed: ''">
                        {{ sum.total }}</span>
                        <span class="ms-1" v-show="sum.final_total !== sum.total">
                        {{ sum.finalTotal }}</span>
                    </p>
                </div>
                </template>
                <div class="alert bg-light text-center mb-0" v-else>
                購物車空空如也！
                去<router-link class="text-info" to="/products">逛逛</router-link>吧！
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import loaderStore from '@/stores/loader';

import cartStore from '@/stores/userCart';

export default {

    data() {

        return {

            step: 1,
            couponCode: '',

            couponUsed: ['text-decoration-line-through', 'text-secondary'],
            couponEditable: true,

        };

    },

    computed: {

        ...mapState(loaderStore, ['isLoading', 'loadingTask']),

        ...mapState(cartStore, ['carts', 'sum']),

        couponLabelText() {

            if (this.loadingTask) { return '套用中'; }
            if (this.carts[0].coupon && !this.couponEditable) { return '已套用優惠券'; }

            return '套用優惠券';

        },

    },

    watch: {

        carts: {

            handler(n) {

                if (n[0].coupon) { // !== undefined

                    this.couponCode = n[0].coupon.code;

                }

            },

            deep: true,

        },

        couponCode(n) { this.couponEditable = !n; },

    },

    methods: {

        ...mapActions(cartStore, ['deleteSingleCart', 'useCoupon']),

        checkCoupon() {

            if (this.couponCode) { this.useCoupon(this.couponCode); }

        },

    },

    mounted() { if (this.carts[0]?.coupon) { this.couponCode = this.carts[0].coupon.code; } },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: $light;
    border-radius: .25rem;
    padding: .5rem 1rem .5rem .5rem;

    &.active {

        background-color: $primary;
        color: $light;

    }

}

.card-img { min-height: 100%; }

.btn-inline { top: 0; }

@media (max-width: 575px) {

    .card-img { max-height: 250px; object-position: 50% 15%; }

}

@media (max-width: 492px) {

    .nav {

        flex-direction: column;
        align-items: start;

    }

    .nav-item { width: 100%; }

}

</style>
