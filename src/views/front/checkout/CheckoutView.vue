<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-7">
        <template v-if="step !== 0">
        <!-- progress -->
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="nav w-100 mb-7 align-items-center
                            justify-content-lg-center justify-content-between gap-lg-6 gap-2">
                    <div class="nav-item h2 mb-0 shadow-sm" :class="{ 'active': step === 1 }">
                        <i class="bi bi-1-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">確認商品</span>
                    </div>
                    <div class="d-md-block d-none">
                        <span class="arrow-animation">
                            <span class="arrow">➡️</span>
                        </span>
                    </div>
                    <div class="nav-item h2 mb-0 shadow-sm" :class="{ 'active': step === 2 }">
                        <i class="bi bi-2-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">填寫收件資料</span>
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
            </div>
        </div>
        </template>
        <!-- main -->
        <div class="row justify-content-center">
            <div class="col-md-10">
                <template v-if="$route.path === 'checkout/form'">
                <router-view v-slot="{ Component }">
                    <keep-alive><component :is="Component"></component></keep-alive>
                </router-view>
                </template>
                <router-view v-else></router-view>
            </div>
        </div>
    </div>
    <faq-section :types="['付款問題', '取貨問題', '訂單問題']" />
    <subscription-section />
</div>

</template>

<script>

//

import { mapState, mapActions } from 'pinia';

import userCartStore from '@/stores/userCart';

import userOrderStore from '@/stores/userOrder';

//

import FaqSection from '@/components/section/FaqSection.vue';

import SubscriptionSection from '@/components/section/SubscriptionSection.vue';

//

export default {

    components: { FaqSection, SubscriptionSection },

    data() { return { step: 0 }; },

    computed: {

        ...mapState(userCartStore, ['carts']),

        ...mapState(userOrderStore, ['tempOrder']),

    },

    methods: {

        ...mapActions(userCartStore, ['getCarts']),

    },

    watch: {

        carts(n) {

            if (this.$route.name === 'front-checkout-carts') {

                this.step = n.length ? 1 : 0;

            }

        },

        '$route.name': {

            handler(n) {

                // console.log(n);

                if (n === 'front-checkout-form') {

                    if (!this.carts.length) {

                        this.$router.replace('/checkout/carts');

                    } else { this.step = 2; }

                } else if (n === 'front-checkout-order-pay') {

                    if (!this.tempOrder.id) {

                        this.$router.replace('/checkout/carts');

                    } else {

                        this.step = 3;

                        this.getCarts(); // 重新整理購物車

                    }

                }

            },

            deep: true,

            immediate: true,

        },

    },

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
