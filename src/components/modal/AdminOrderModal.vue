<template>

<div class="modal modal-lg fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="fs-5 mb-0">{{ tempOrder.id }}</h4>
                <button type="button" class="btn border-0 p-0 fs-4" :disabled="!!loadingTask"
                        @click="hideModal">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <div class="modal-body py-4">
                <ul class="nav nav-pills bg-gray rounded-2 mb-3">
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'content'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'content' }">
                    訂購商品</button>
                    </li>
                    <li class="nav-item flex-grow-1">
                    <button type="button" @click="tab = 'info'"
                            class="w-100 nav-link" :class="{ 'active': tab === 'info' }">
                    客戶資訊</button>
                    </li>
                </ul>
                <div v-show="tab === 'content'">
                    <table class="table table-light align-middle">
                        <tbody>
                            <template v-for="(item, key) in tempOrder.products" :key="key">
                            <tr>
                            <td>{{ item.product.title }}</td>
                            <td>× {{ item.qty }} {{ item.product.unit }}</td>
                            <td class="text-end">
                                <div class="flex-classic">
                                <span>NT＄</span>
                                <span :class="{ 'text-decoration-line-through': item.coupon }">
                                {{ item.total }}</span>
                                </div>
                            </td>
                            </tr>
                            <tr v-if="item.coupon">
                            <td colspan="2" class="fs-7">優惠券：{{ item.coupon.code }}</td>
                            <td>
                                <div class="flex-classic">
                                <span>NT＄</span>
                                <span><b>{{ item.final_total }}</b></span>
                                </div>
                            </td>
                            </tr>
                            </template>
                        </tbody>
                        <tfoot class="fs-5 fw-bold">
                        <tr>
                        <td colspan="2" class="py-3">總計</td>
                        <td class="text-end">NT＄{{ tempOrder.total }}</td>
                        </tr>
                        </tfoot>
                    </table>
                    <p class="mb-0">
                    <span>付款狀態：</span>
                    <span :class="tempOrder.is_paid ? 'text-success' : 'text-danger'">
                    {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                    </span>
                    </p>
                </div>
                <div v-show="tab === 'info'">
                    <p>
                    <span class="badge bg-primary me-2">訂單成立日期</span>
                    {{ $calc.formatTime(tempOrder.create_at * 1000) }}
                    </p>
                    <hr>
                    <p>
                    <span class="badge bg-primary me-2">姓名</span>
                    {{ tempOrder.user.name }}
                    </p>
                    <hr>
                    <p>
                    <span class="badge bg-primary me-2">電話</span>
                    {{ tempOrder.user.tel }}
                    </p>
                    <hr>
                    <p><span class="badge bg-primary">地址</span></p>
                    <p>{{ tempOrder.user.address }}</p>
                    <hr>
                    <p><span class="badge bg-primary">信箱</span></p>
                    <p>{{ tempOrder.user.email }}</p>
                    <hr>
                    <p><span class="badge bg-primary">贊助計畫</span></p>
                    <p>{{ tempOrder.project }}</p>
                    <hr>
                    <p><span class="badge bg-primary">留言</span></p>
                    <p class="pre-wrap mb-0">{{ tempOrder.message }}</p>
                </div>
            </div>
            <div class="modal-footer" v-if="tempOrder.is_paid && tempOrder.state !== 4">
                <div class="alert bg-gray d-flex align-items-center gap-3 text-nowrap mb-0">
                    <div class="d-flex align-items-center">
                        <div v-if="loadingTask === tempOrder.id"
                             class="spinner-border text-primary me-3" role="status">
                        </div>
                        <span>修改訂單狀態</span>
                    </div>
                    <select class="form-select" :value="tempOrder.state" @change="preUpdate"
                            :disabled="!!loadingTask">
                        <template v-for="(state, code) in statesCode" :key="code">
                            <option :value="code">{{ state.title }}</option>
                        </template>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

// 需要優化的地方：執行 preUpdate 的流程

import modalMixins from '@/mixins/modal';

//

import { mapState, mapActions } from 'pinia';

import adminOrderStore from '@/stores/adminOrder';

import loaderStore from '@/stores/loader';

import alertStore from '@/stores/alert';

//

export default {

    mixins: [modalMixins],

    props: ['tempOrder'],

    data() { return { modal: '', tab: 'content' }; },

    computed: {

        ...mapState(adminOrderStore, ['statesCode']),

        ...mapState(loaderStore, ['loadingTask']),

    },

    methods: {

        ...mapActions(adminOrderStore, ['updateOrder']),

        ...mapActions(alertStore, ['checkAlert']),

        preUpdate(e) {

            const code = +e.target.value;

            const data = { code, order: this.tempOrder };

            const fn = () => { this.updateOrder(data, this.hideModal); };

            if (code === 4) {

                const config = { title: '確定完成訂單？', text: '提醒您，完成訂單之後就無法修改狀態囉！' };

                this.checkAlert(config, fn, () => { e.target.value = this.tempOrder.state; });

            } else { fn(); }

        },

    },

};

</script>

<style lang="scss" scoped>

.badge {

  font-size: 1rem;
  padding: 0.5rem;

}

</style>
