<template>

<div class="h-100 bg-gray text-primary">
    <div class="container py-md-8 py-7">
        <template v-if="step !== 0">
        <!-- progress -->
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div
                    class="nav w-100 mb-8 align-items-center justify-content-between">
                    <div class="nav-item" :class="{ 'active': step === 1 }">
                        <i class="bi bi-1-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">確認商品</span>
                    </div>
                    <div class="nav-item" :class="{ 'active': step === 2 }">
                        <i class="bi bi-2-square-fill" style="line-height: 1;"></i>
                        <span class="h6 mb-0">填寫資料</span>
                    </div>
                    <div class="nav-item" :class="{ 'active': step === 3 }">
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
                <RouterView v-slot="{ Component }">
                    <keep-alive><component :is="Component" /></keep-alive>
                </RouterView>
            </div>
        </div>
    </div>
    <FaqSection :types="['付款問題', '取貨問題', '訂單問題']" />
    <SubscriptionSection />
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

                if (n === 'front-checkout-carts') {

                    this.step = this.carts.length ? 1 : 0;

                } else if (n === 'front-checkout-form') {

                    if (!this.carts.length) {

                        this.$router.replace('/checkout/carts');

                    } else { this.step = 2; }

                } else if (n === 'front-checkout-order-pay') {

                    if (!this.tempOrder.id) {

                        this.$router.replace('/checkout/carts');

                    } else {

                        this.step = 3;

                        this.getCarts();

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

.nav {

  position: relative;

  &::after {

    content: '';
    position: absolute;
    top: 50%;
    width: 100%; height: 1px;
    background-color: $secondary;
    z-index: 1;

  }

}

.nav-item {

  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;

  background-color: $gray;
  color: $secondary;

  border-radius: .25rem;
  padding: .5rem 1.5rem;
  margin-bottom: 0;

  &:first-child { padding-left: 0; }

  &:last-child { padding-right: 0; }

  &.active { color: $primary }

}

@media (max-width: 575px) {

  .card-img { max-height: 250px; object-position: 50% 15%; }

}

@media (max-width: 492px) {

  .nav::after { top: 30%; }

  .nav-item {

    flex-direction: column;
    padding: .5rem;

  }

}

</style>
