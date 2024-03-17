<template>

<div class="text-md-center" style="margin-top: -3rem">
    <lottie-player :animationData="successJSON" :height="250" />
    <h3 class="text-center mb-7"><b>訂單已成立</b></h3>
    <p><b class="text-danger">請務必記下您的訂單編號</b>，方便您隨時追蹤訂單進度！</p>
    <p class="mb-0">如在未付款的情況下關閉此頁，您<b class="text-danger">
    <span>仍然能在</span>
    <router-link
        target="_blank" to="/member"
        class="text-decoration-none text-dark border-bottom-dotted">個人專區</router-link>
    <span>透過訂單編號進行付款</span></b>哦！</p>
</div>
<template v-if="tempOrder.id">
    <div class="text-md-center my-7">
        <p>複製訂單編號：</p>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <clipboard-component :value="tempOrder.id" />
            </div>
        </div>
    </div>
    <order-template :order="tempOrder" />
</template>

</template>

<script>

import { mapState } from 'pinia';

import userOrderStore from '@/stores/userOrder';

//

import OrderTemplate from '@/components/OrderTemplate.vue';

import ClipboardComponent from '@/components/ClipboardComponent.vue';

//

import successJSON from '@/assets/lottie/success.json';

export default {

    components: { OrderTemplate, ClipboardComponent },

    data() { return { successJSON }; },

    computed: {

        ...mapState(userOrderStore, ['tempOrder']),

    },

};

</script>
