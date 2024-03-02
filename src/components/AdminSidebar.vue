<template>

<nav class="h-100 d-flex flex-column justify-content-between">
    <div style="height: calc(100vh - 38px)">
        <h2 class="text-center mb-7">後台管理</h2>
        <ul class="nav flex-column py-6">
            <li class="nav-item">
                <router-link class="nav-link" to="/admin">
                <i class="bi bi-pie-chart-fill me-3"></i>
                首頁</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/product">
                <i class="bi bi-box-seam-fill me-3"></i>
                商品</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/order">
                <i class="bi bi-file-earmark-text me-3"></i>
                訂單</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/article">
                <i class="bi bi-pencil-square me-3"></i>
                文章</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupon">
                <i class="bi bi-percent me-3"></i>
                優惠券</router-link>
            </li>
        </ul>
    </div>
    <div class="pt-4">
        <router-link to="/" v-slot="{ navigate }" custom>
            <button type="button" class="btn btn-outline-light me-3"
                    @click="navigate">查看前台</button>
        </router-link>
        <button type="button" class="btn btn-outline-highlight" @click="logout">登出</button>
    </div>
</nav>

</template>

<script>

import { mapActions } from 'pinia';

import adminAuthStore from '@/stores/adminAuth';

export default {

    methods: {

        ...mapActions(adminAuthStore, ['logout']),

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-link {

  color: $light;
  padding: 1rem;
  border-bottom: 1px dotted $secondary;

  &:hover {

    color: $primary;
    background-color: $light;

  }

  &.active {

    color: $primary;
    background-color: $light;

  }

}

</style>
