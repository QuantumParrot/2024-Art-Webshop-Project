<template>

<h3 class="h2 mb-7">
    <i class="bi bi-search me-3"></i>
    <span>查詢訂單進度</span>
</h3>

<label for="search" class="mb-5">請輸入訂單編號：</label>
<VForm v-slot="{ errors }" @submit="submitOrderId">
    <div class="input-group mb-5">
        <VField
            id="search" type="text"
            class="form-control" :class="{ 'is-invalid': errors['id'] }"
            name="id" rules="required" :validate-on-change="true">
        </VField>
        <button type="submit" class="btn btn-primary">
            <i class="bi bi-search"></i>
        </button>
    </div>
</VForm>

<details class="alert bg-light text-primary mb-5">
    <summary>可供測試的範例</summary>
    <ul class="list-unstyled mt-4 mb-0">
        <li class="mb-3">-Nr_GNNyiZSiTAKt9xTw</li>
        <li>-NsI1R_8ZLLjqPwoERMF</li>
    </ul>
</details>

<template v-if="order.id">
    <p class="mb-5">您的訂單：</p>
    <OrderTemplate :order="order" />
</template>

</template>

<script>

import OrderTemplate from '@/components/OrderTemplate.vue';

import { mapState, mapActions } from 'pinia';

import userOrderStore from '@/stores/userOrder';

//

export default {

    components: { OrderTemplate },

    computed: {

        ...mapState(userOrderStore, ['order']),

    },

    methods: {

        ...mapActions(userOrderStore, ['getOrder', 'payOrder']),

        submitOrderId({ id }, { resetForm }) { this.getOrder(id, resetForm); },

    },

};

</script>
