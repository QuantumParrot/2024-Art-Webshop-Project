<template>

<p class="text-end fs-5 mb-lg-7 mb-5">{{ greeting }}，管理員！</p>

<section class="card px-4 py-5 mb-5 lh-lg">
    <h3 class="mb-6">
        <span class="section-title base">訂單近況</span>
    </h3>
    <div class="row gy-4">
        <div class="col-md-4">
            <div class="h-100 card bg-light border-0">
                <div class="h-100 d-flex flex-column justify-content-center px-4 py-5"
                :class="{ 'align-items-center': !expired }">
                    <div v-if="expired">
                        <h4 class="fs-5 mb-5"><b>未付款訂單</b></h4>
                        <p>有 <span class="fw-bold text-danger">{{ expired }}</span> 筆訂單逾期未付款</p>
                        <p class="mb-0">
                            <span class="arrow-animation"><span class="arrow">→</span></span>
                            <RouterLink class="text-info" to="admin/order?paid=0">
                            前往處理
                            </RouterLink>
                        </p>
                    </div>
                    <p class="text-center mb-0" v-else>目前沒有未付款訂單</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="h-100 card bg-light border-0">
                <div class="h-100 d-flex flex-column justify-content-center px-4 py-5"
                :class="{ 'align-items-center': !unhandled }">
                    <div v-if="unhandled">
                        <h4 class="fs-5 mb-5"><b>未確認訂單</b></h4>
                        <p>有 <span class="fw-bold text-danger">{{ unhandled }}</span> 筆訂單已付款</p>
                        <p class="mb-0">
                            <span class="arrow-animation"><span class="arrow">→</span></span>
                            <RouterLink class="text-info" to="admin/order?paid=1&state=0">
                            前往處理
                            </RouterLink>
                        </p>
                    </div>
                    <p class="text-center mb-0" v-else>目前沒有未確認訂單</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="h-100 card bg-light border-0">
                <div class="h-100 d-flex flex-column justify-content-center px-4 py-5"
                :class="{ 'align-items-md-center': !unprepared }">
                    <div v-if="unprepared">
                        <h4 class="fs-5 mb-5"><b>未出貨訂單</b></h4>
                        <p>有 <span class="fw-bold text-danger">{{ unprepared }}</span> 筆訂單尚未出貨</p>
                        <p class="mb-0">
                            <span class="arrow-animation"><span class="arrow">→</span></span>
                            <RouterLink class="text-info" to="admin/order?paid=1&state=1">
                            前往處理
                            </RouterLink>
                        </p>
                    </div>
                    <p class="text-center mb-0" v-else>目前沒有未出貨訂單</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="alert bg-light">
    <details>
    <summary class="fs-5">後台導覽</summary>
    <ul class="list-unstyled d-flex flex-column gap-3 mt-3">
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="ls-md">商</span>品</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的商品</p>
        </li>
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="ls-md">訂</span>單</b>
                <i class="bi bi-caret-right-fill text-highlight mx-2"></i>
            </p>
            <p class="mb-0">管理您的訂單</p>
        </li>
        <li class="d-flex flex-column flex-md-row">
            <p class="mb-md-0">
                <b><span class="ls-md">文</span>章</b>
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

        ...mapState(adminOrderStore, ['refactorOrders']),

        unhandled() {

            return this.refactorOrders.filter((o) => o.is_paid && o.state === 0).length;

        },

        expired() {

            const unpaid = this.refactorOrders.filter((o) => !o.is_paid);

            const now = this.$calc.now();

            return unpaid.filter((o) => now - o.create_at > 518400).length;

        },

        unprepared() {

            return this.refactorOrders.filter((o) => o.is_paid && o.state === 1).length;

        },

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
