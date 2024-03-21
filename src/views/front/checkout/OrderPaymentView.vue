<template>

<div class="text-md-center" style="margin-top: -3rem">
    <LottiePlayer :animationData="successJSON" :height="250" />
    <h3 class="text-center mb-7"><b>訂單已成立</b></h3>
    <p><b>請務必記下您的訂單編號</b>，方便您隨時追蹤訂單進度！</p>
    <p class="mb-0">
        <span>如在未付款的情況下關閉此頁，您<b>
        <span>仍然能在</span>
        <RouterLink
            target="_blank" to="/member"
            class="text-decoration-none text-dark border-bottom-dotted">個人專區</RouterLink>
        <span>透過訂單編號進行付款</span></b>哦！</span>
    </p>
</div>
<template v-if="tempOrder.id">
    <div class="text-md-center my-7">
        <p>複製訂單編號：</p>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ClipboardComponent :value="tempOrder.id" />
            </div>
        </div>
    </div>
    <OrderTemplate :order="tempOrder" />
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
