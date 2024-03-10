<template>

<div class="text-end mb-7">
    <h3 class="fs-2 mb-2">訂單管理</h3>
    <p class="text-muted">目前共有 {{ refactorOrders.length }} 筆訂單</p>
</div>

<template v-if="refactorOrders.length">

<div class="alert bg-gray flex-classic mb-5">
    <div class="d-flex gap-2">
    <input type="checkbox" id="unlock" class="btn-check" v-model="deletePermission">
    <label for="unlock" class="btn btn-outline-primary">
    <i class="bi" :class="deletePermission ? 'bi-unlock-fill' : 'bi-lock-fill'"></i>
    </label>
    <button type="button" class="btn btn-danger" v-if="deletePermission"
            @click="downTheDrain">刪除所有訂單</button>
    </div>
    <pagination-component
        :current="currentPage" :total="pagination.total_pages"
        @switch-page="switchPage" />
</div>

<div class="d-flex justify-content-end mb-4">
    <div>
        <select class="form-select" :value="timeAscending"
                @change="(e) => switchFilter('timeAscending', +e.target.value)">
        <option :value="1">由舊到新</option>
        <option :value="0">由新到舊</option>
        </select>
    </div>
</div>

<div class="table-responsive">
    <table class="table table-hover text-nowrap">
        <thead>
            <tr>
            <th scope="col" width="10%">日期</th>
            <th scope="col" width="40%">訂單</th>
            <th scope="col" width="30%" class="d-none d-md-table-cell text-end">總額</th>
            <th scope="col" width="15%" class="text-center">狀態</th>
            <th scope="col" class="text-center">刪除</th>
            </tr>
        </thead>
        <tbody class="align-middle">
            <template v-for="order in displaying" :key="order.id">
                <tr>
                    <td>{{ $calc.formatDate(order.create_at * 1000, '/') }}</td>
                    <td>
                    <span class="badge me-3" :class="order.is_paid ? 'bg-success' : 'bg-danger'">
                    {{ order.is_paid ? '已付款' : '未付款' }}
                    </span>
                    <a href="#" @click.prevent="openModal(order, 'check')">
                        <span class="me-2">{{ order.user.name }}</span>
                        <i class="bi bi-search"></i>
                    </a>
                    </td>
                    <td class="d-none d-md-table-cell text-end">NT$ {{ order.total }}</td>
                    <td class="text-center fw-bold">
                        <span :style="{ color: statesCode[order.state || 0]?.color }">
                        {{ statesCode[order.state || 0]?.title }}</span>
                    </td>
                    <td class="text-end">
                    <button type="button" class="btn btn-outline-danger"
                            :disabled="!deletePermission" @click="openModal(order, 'delete')">
                    <i class="bi bi-trash3-fill"></i></button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</div>

</template>

<div class="alert bg-gray" v-else>沒有訂單記錄</div>

<admin-order-modal ref="orderModal" :temp-order="tempOrder" />

<delete-modal ref="deleteModal"
              @delete-target="deleteOrder(tempOrder.id, this.$refs.deleteModal.hideModal)">

<template #title>確定刪除訂單！？</template>
<template #alert>這是客人的訂單欸！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)</template>
<template #itemDetail>
<details class="mb-4">
<summary>訂單編號：<span class="text-muted">{{ tempOrder.id }}</span></summary>
<p class="mt-3"><b>客戶姓名</b>：{{ tempOrder.user.name }}</p>
<p><b>訂單總額</b>：NT$ {{ tempOrder.total }}</p>
</details>
</template>

</delete-modal>

</template>

<script>

import PaginationComponent from '@/components/PaginationComponent.vue';

import AdminOrderModal from '@/components/modal/AdminOrderModal.vue';

import DeleteModal from '@/components/modal/DeleteModal.vue';

//

import { mapState, mapActions } from 'pinia';

import adminOrderStore from '@/stores/adminOrder';

//

export default {

    components: { PaginationComponent, AdminOrderModal, DeleteModal },

    data() {

        return {

            tempOrder: { user: {}, products: {} },
            deletePermission: false,

        };

    },

    computed: {

        ...mapState(adminOrderStore, ['refactorOrders', 'currentPage', 'displaying', 'statesCode', 'pagination', 'timeAscending']),

    },

    methods: {

        ...mapActions(adminOrderStore, ['getOrders', 'switchPage', 'deleteOrder', 'downTheDrain', 'switchFilter']),

        openModal(order, type) {

            this.tempOrder = { ...order, total: +(order.total.toFixed(0)) };

            if (type === 'check') {

                this.$refs.orderModal.showModal();

            } else { this.$refs.deleteModal.showModal(); }

        },

    },

    mounted() {

        if (!this.refactorOrders.length) { this.getOrders(); }

    },

};

</script>
