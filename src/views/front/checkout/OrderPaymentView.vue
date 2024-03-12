<template>

<div class="text-center mb-7">
    <h3 class="mb-5">訂單已成立！</h3>
    <p><b class="text-danger">請務必記下您的訂單編號</b>，方便您隨時追蹤訂單進度！</p>
    <p>如在未付款的情況下關閉此頁，您<b class="text-danger">仍然能透過訂單編號進行付款</b>哦！</p>
</div>
<template v-if="tempOrder.id">
    <order-template :order="tempOrder" />
</template>

</template>

<script>

import OrderTemplate from '@/components/OrderTemplate.vue';

//

import { mapState } from 'pinia';

import userOrderStore from '@/stores/userOrder';

//

export default {

    components: { OrderTemplate },

    computed: {

        ...mapState(userOrderStore, ['tempOrder']),

    },

    methods: {

        redirect() { if (!this.tempOrder.id) { this.$router.replace('/checkout/carts'); } },

    },

    activated() { this.redirect(); },

    created() { this.redirect(); },

};

</script>
