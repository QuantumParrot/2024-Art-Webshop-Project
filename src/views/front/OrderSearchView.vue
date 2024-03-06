<template>

<div class="h-100 bg-secondary text-white">
    <div class="container py-7">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="h2 mb-7">
                    <i class="bi bi-search me-2"></i>
                    查詢訂單進度
                </h3>
                <label for="search" class="mb-5">請輸入訂單編號：</label>
                <v-form v-slot="{ errors }" @submit="submitOrderId">
                    <div class="input-group mb-5">
                        <v-field
                            id="search" type="text"
                            class="form-control" :class="{ 'is-invalid': errors['id'] }"
                            name="id" rules="required" :validate-on-change="true">
                        </v-field>
                        <button type="submit" class="btn btn-primary">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </v-form>
                <details class="alert bg-light text-primary mb-5">
                    <summary>可供使用的範例</summary>
                    <ul class="list-unstyled mt-4 mb-0">
                        <li class="mb-3">-Nr_GNNyiZSiTAKt9xTw</li>
                        <li>-NsI1R_8ZLLjqPwoERMF</li>
                    </ul>
                </details>
                <template v-if="order.id">
                    <p class="mb-5">您的訂單：</p>
                    <order-template :order="order"></order-template>
                </template>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import orderTemplate from '@/components/OrderTemplate.vue';

import { mapState, mapActions } from 'pinia';

import userOrderStore from '@/stores/userOrder';

//

export default {

    components: { orderTemplate },

    computed: {

        ...mapState(userOrderStore, ['order']),

    },

    methods: {

        ...mapActions(userOrderStore, ['getOrder', 'payOrder']),

        submitOrderId({ id }, { resetForm }) { this.getOrder(id, resetForm); },

    },

};

</script>
