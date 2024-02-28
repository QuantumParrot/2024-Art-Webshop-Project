<template>

<div class="h-100 bg-primary text-white">
    <div class="container py-7">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="h2 mb-5">
                    <i class="bi bi-search me-2"></i>
                    查詢訂單進度
                </h3>
                <label for="search" class="mb-4">請輸入訂單編號：</label>
                <v-form v-slot="{ errors }" @submit="submitOrderId">
                    <div class="input-group mb-5">
                        <v-field
                            id="search" type="text"
                            class="form-control" :class="{ 'is-invalid': errors['id'] }"
                            name="id" rules="required">
                        </v-field>
                        <button type="submit" class="btn btn-light">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </v-form>
                <template v-if="tempOrder?.id">
                    <p class="mb-5">您的搜尋結果：</p>
                    <div class="card p-2">
                        <div class="border rounded-2 p-5">
                            <p><b class="p-title">訂單編號</b>：{{ tempOrder.id }}</p>
                            <p><b class="p-title">訂購日期</b>：
                            <span>{{ $calc.formatTime(tempOrder.create_at * 1000) }}</span></p>
                            <details class="mb-3">
                                <summary><b class="p-title">訂購人資訊</b>（ 展開查看詳細 ）</summary>
                                <ul class="list-unstyled mt-3">
                                    <li class="mb-2"><b>姓名</b>：{{ tempOrder.user.name }}</li>
                                    <li class="mb-2"><b>電話</b>：{{ tempOrder.user.tel }}</li>
                                    <li class="mb-2">
                                        <p class="mb-2"><b>地址</b>：</p>
                                        <p class="mb-2">{{ tempOrder.user.address }}</p>
                                    </li>
                                    <li class="mb-2"><b>信箱</b>：{{ tempOrder.user.email }}</li>
                                    <li class="mb-2"><b>選擇贊助的專案</b>：{{ tempOrder.project }}</li>
                                    <li>
                                        <p class="mb-2"><b>您的留言：</b></p>
                                        <p class="mb-2">{{ tempOrder.message }}</p>
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
                                    <template v-for="(item, key) in tempOrder.products" :key="key">
                                    <tr>
                                        <td class="ps-0">{{ item.product.title }}</td>
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
                                            <span>{{ item.total }}</span>
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
                                            <strong>總計：</strong>NT$ {{ tempOrder.total }}
                                            </p>
                                            <button type="button" v-if="!tempOrder.is_paid"
                                                    class="btn btn-highlight"
                                                    @click="payOrder(tempOrder.id)">
                                            付款去</button>
                                            </div>
                                        </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <p class="d-flex align-items-center">
                                    <span><b class="p-title">付款狀態</b>：</span>
                                    <span class="me-2" :class="tempOrder.is_paid ?
                                          'text-success' : 'text-danger'">
                                    {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                                    </span>
                                </p>
                                <p class="mb-0">
                                    <span><b class="p-title">出貨狀態</b>：</span>
                                    <span :style="{ 'color':
                                          statesCode[tempOrder.state].color }">
                                    {{ statesCode[tempOrder.state].title }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import userOrderStore from '@/stores/userOrder';

import adminOrderStore from '@/stores/adminOrder';

export default {

    computed: {

        ...mapState(userOrderStore, ['tempOrder']),

        ...mapState(adminOrderStore, ['statesCode']),

    },

    methods: {

        ...mapActions(userOrderStore, ['getOrder', 'payOrder']),

        submitOrderId({ id }, { resetForm }) {

            this.getOrder(id, resetForm);

        },

    },

};

</script>
