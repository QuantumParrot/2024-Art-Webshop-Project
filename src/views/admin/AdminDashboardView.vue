<template>

<p class="text-end fs-5 mb-6">{{ greeting }}，管理員！</p>

<section class="card p-3">
    <h3 class="mb-5"><span class="section-title">訂單近況</span></h3>
        <p class="mb-0" v-if="!!unhandled">
        <span>有 <span class="fw-bold text-danger">{{ unhandled }}</span> 筆已付款的訂單尚未處理喔！</span>
        <span class="arrow-animation"><span class="arrow">→</span></span>
        <span><router-link class="text-info" to="admin/order">前往訂單頁面</router-link></span>
        </p>
        <p class="mb-0" v-else>目前沒有新消息</p>
</section>

</template>

<script>

import moment from 'moment';

import { mapState, mapActions } from 'pinia';

import adminOrderStore from '@/stores/adminOrder';

export default {

    data() {

        return { greeting: '您好' };

    },

    computed: {

        ...mapState(adminOrderStore, ['unhandled']),

    },

    methods: {

        ...mapActions(adminOrderStore, ['getOrders']),

    },

    created() {

        const now = moment().format('H');

        if (now > 4 && now < 11) {

            this.greeting = '早上好';

        } else if (now > 10 && now < 18) {

            this.greeting = '午安';

        } else {

            this.greeting = '晚上好';

        }

    },

    mounted() { this.getOrders(); },

};

</script>
