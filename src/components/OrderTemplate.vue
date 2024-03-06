<template>

<div class="card p-2">
    <div class="border rounded-2 p-5">
        <p><b class="p-title">訂單編號</b>：{{ order.id }}</p>
        <p><b class="p-title">訂購日期</b>：
        <span>{{ $calc.formatTime(order.create_at * 1000) }}</span></p>
        <details class="mb-3">
            <summary><b class="p-title">訂購人資訊</b>（ 展開查看詳細 ）</summary>
            <ul class="list-unstyled
                       bg-light p-3 rounded-1 mt-3 lh-lg">
                <li class="mb-2"><b>姓名</b>：{{ order.user.name }}</li>
                <li class="mb-2"><b>電話</b>：{{ order.user.tel }}</li>
                <li class="mb-2">
                    <p class="mb-2"><b>地址</b>：</p>
                    <p class="mb-2">{{ order.user.address }}</p>
                </li>
                <li class="mb-2"><b>信箱</b>：{{ order.user.email }}</li>
                <li class="mb-2"><b>選擇贊助的專案</b>：{{ order.project }}</li>
                <li>
                    <p class="mb-2"><b>您的留言</b>：</p>
                    <p class="mb-0">{{ order.message }}</p>
                </li>
            </ul>
        </details>
        <p><b class="p-title mb-0">訂購品項</b>：</p>
        <div class="table-responsive">
            <table class="table text-nowrap">
                <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col" width="20%"></th>
                <th scope="col" width="10%"></th>
                <th scope="col" width="20%"></th>
                </tr>
                </thead>
                <tbody class="align-middle">
                <template v-for="(item, key) in order.products" :key="key">
                <tr>
                    <td class="ps-0 py-3">{{ item.product.title }}</td>
                    <td>
                    {{ item.qty }} {{ item.product.unit }}</td>
                    <td>
                    <span class="arrow-animation">
                    <span class="arrow">→</span>
                    </span>
                    </td>
                    <td class="pe-0 text-end">
                        <div class="flex-classic">
                            <span>NT$</span>
                            <span :class="{ 'text-decoration-line-through': item.coupon }">
                            {{ item.total }}</span>
                        </div>
                    </td>
                </tr>
                <tr v-if="item.coupon">
                    <td colspan="3" class="fs-7 ps-0 py-3">優惠券折扣</td>
                    <td class="pe-0 text-end">
                        <div class="flex-classic">
                            <span>NT$</span>
                            <span><b>{{ +(item.final_total.toFixed(0)) }}</b></span>
                        </div>
                    </td>
                </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                <td colspan="5" class="px-0 py-3">
                    <div class="flex-classic">
                    <p class="mb-0">
                    <strong>總計：</strong>NT$ {{ order.total }}
                    </p>
                    <button type="button" class="btn btn-highlight"
                            @click="payOrder(order.id)" v-if="!order.is_paid">
                    付款去</button>
                    </div>
                </td>
                </tr>
                </tfoot>
            </table>
            <p class="d-flex align-items-center">
                <span><b class="p-title">付款狀態</b>：</span>
                <span class="me-2" :class="order.is_paid ? 'text-success' : 'text-danger'">
                {{ order.is_paid ? '已付款' : '未付款' }}
                </span>
            </p>
            <p class="mb-0">
                <span><b class="p-title">出貨狀態</b>：</span>
                <span :style="{ 'color': statesCode[order.state].color }">
                {{ statesCode[order.state].title }}</span>
            </p>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userOrderStore from '@/stores/userOrder';

import adminOrderStore from '@/stores/adminOrder';

export default {

    props: ['order'],

    computed: {

        ...mapState(adminOrderStore, ['statesCode']),

    },

    methods: {

        ...mapActions(userOrderStore, ['payOrder']),

    },

};

</script>
