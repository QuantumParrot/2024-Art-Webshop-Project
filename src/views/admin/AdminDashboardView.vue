<template>

<p class="text-end fs-5 mb-7">{{ greeting }}，管理員！</p>

<section class="card p-3 mb-5">
    <h3 class="mb-5"><span class="section-title">訂單近況</span></h3>
    <div class="lh-lg d-flex flex-column flex-sm-row" v-if="!!unhandled">
        <span>
        有
        <span class="fw-bold text-danger">{{ unhandled }}</span>
        筆已付款的訂單尚未處理喔！
        </span>
        <div>
            <span class="arrow-animation">
                <span class="arrow">→</span></span>
            <span>
                <RouterLink class="text-info" to="admin/order?paid=1&state=0">
                前往訂單頁面</RouterLink>
            </span>
        </div>
    </div>
    <p class="mb-0" v-else>目前沒有新消息</p>
</section>

<section class="alert bg-light">
    <details>
    <summary class="fs-5">後台導覽</summary>
    <ul class="list-unstyled d-flex flex-column gap-3 mt-3">
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="letter-space-md">商</span>品</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的商品</p>
        </li>
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="letter-space-md">訂</span>單</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的訂單</p>
        </li>
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="letter-space-md">文</span>章</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的網站公告、專欄文章、公益企劃</p>
        </li>
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b>優惠券</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的優惠券</p>
        </li>
    </ul>
    </details>
    <hr>
    <p class="lh-lg fs-7 mb-0">如果您遇上任何操作問題及錯誤，請聯絡：ataraxia528491@gmail.com</p>
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

        ...mapState(adminOrderStore, ['orders', 'unhandled']),

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

    async mounted() { this.getOrders(); },

};

</script>
