<template>

<template v-if="carts.length">

<div class="flex-classic mb-5">
    <button tyoe="button" class="btn btn-outline-secondary rounded-1"
            @click="$router.push('/products')">
    <span class="text-highlight"><i class="bi bi-caret-left-fill"></i></span>
    繼續購物</button>
    <button type="button" class="btn btn-outline-secondary rounded-1"
            @click="clearCart">
    清空購物車</button>
</div>

<!-- cart -->

<div class="d-flex flex-column gap-3">
    <template v-for="cart in carts" :key="cart">
    <div class="bg-white rounded-1 p-3 position-relative">
        <div class="row align-items-center g-3">
            <div class="col-xl-8 col-lg-7">
                <div class="row align-items-stretch gx-3">
                    <div class="col-sm-4">
                        <div class="h-100 mask z-0">
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
                    <div class="col-sm-8">
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
                        <button
                            type="button" class="input-group-text btn btn-primary"
                            :disabled="cart.qty <= 1"
                            @click="changeCartQty(cart.id, cart.qty - 1)">
                        <i class="bi bi-dash"></i>
                        </button>
                        <input
                            type="number" class="form-control py-1 text-center"
                            min="1" :value="cart.qty"
                            @change="(e) =>
                                    changeCartQty(cart.id, +e.target.value)">
                        <button
                            type="button" class="input-group-text btn btn-primary"
                            @click="changeCartQty(cart.id, cart.qty + 1)">
                        <i class="bi bi-plus"></i>
                        </button>
                    </div>
                    <div class="w-75 text-end">
                        <p class="mb-0"><b>NT＄{{ cart.total }}</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute top-0 end-0">
            <button type="button"
                    class="btn btn-sm btn-remove btn-primary
                           rounded-1 shadow-sm"
                    @click="deleteSingleCart(cart.id)">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
    </template>
</div>

<!-- coupon -->

<div class="py-5 border-bottom-dotted">
    <div class="row justify-content-end gx-1 gy-5">
        <div class="col-xl-4 col-lg-5">
            <div class="input-group">
                <label for="coupon" class="input-group-text bg-primary text-white fw-bold">
                <div role="status" class="spinner-border spinner-border-sm me-2"
                     v-show="!!loadingTask">
                <span class="visually-hidden">Loading...</span>
                </div>
                {{ couponLabelText }}</label>
                <input
                    id="coupon" type="text"
                    class="form-control" v-model.trim="couponCode"
                    :disabled="loadingTask || !couponEditable">
                <button type="button" class="btn btn-primary" @click="checkCoupon"
                        :disabled="!!loadingTask">
                    <span v-if="couponEditable"><b>套用</b></span>
                    <i class="bi bi-arrow-repeat" v-else></i>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- cost -->

<div class="text-end py-5 border-bottom-dotted mb-5">
    <p class="fs-7" v-if="carts[0].coupon">折扣了
    <span class="text-danger">{{ sum.total - sum.finalTotal }}</span> 元！
    </p>
    <p class="fs-5 mb-0">
    <span>總計：</span><span>NT＄</span>
    <span :class="sum.finalTotal !== sum.total ? couponUsed: ''">
    {{ sum.total }}</span>
    <span class="ms-1" v-show="sum.finalTotal !== sum.total">
    {{ sum.finalTotal }}</span>
    </p>
</div>

<div>
<router-link to="/checkout/form" v-slot="{ navigate }" custom>
    <button type="button" class="float-end btn btn-highlight rounded-1"
            @click="navigate">
    下一步</button>
</router-link>
</div>

</template>

<template v-else>

<div class="alert bg-light text-center mb-0">
    購物車空空如也！
    去<router-link class="text-info" to="/products">逛逛</router-link>吧！
</div>
<lottie-player :animationData="sleepCatJSON" :height="250" />

</template>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import loaderStore from '@/stores/loader';

import cartStore from '@/stores/userCart';

//

import sleepCatJSON from '@/assets/lottie/sleep-cat.json';

export default {

    data() {

        return {

            sleepCatJSON,

            couponCode: '',

            couponUsed: ['text-decoration-line-through', 'text-secondary'],
            couponEditable: true,

            // 止抖

            timer: '',

        };

    },

    computed: {

        ...mapState(loaderStore, ['loadingTask']),

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

                if (n.length) {

                    if (n[0].coupon) { // !== undefined

                        this.couponCode = n[0].coupon.code;
                        this.couponEditable = false;

                    }

                }

            },

            deep: true,

        },

    },

    methods: {

        ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteSingleCart', 'clearCart', 'useCoupon']),

        checkCoupon() {

            if (!this.couponEditable) {

                this.couponEditable = true;

            } else if (this.couponEditable && this.couponCode) { this.useCoupon(this.couponCode); }

        },

        changeCartQty(id, qty) {

            const target = this.carts.find((i) => i.id === id);

            if (!Number.isInteger(qty)) {

                target.qty = Math.floor(qty);

            } else if (qty < 1) {

                target.qty = 1;

            } else { target.qty = qty; }

            // debounce

            if (this.timer) { clearTimeout(this.timer); }

            this.timer = setTimeout(() => this.updateCart(target, target.qty), 500);

        },

    },

    mounted() {

        this.getCarts();

        if (this.carts[0]?.coupon) { this.couponCode = this.carts[0].coupon.code; }

    },

};

</script>

<style lang="scss" scoped>

.card-img { min-height: 100%; }

</style>
