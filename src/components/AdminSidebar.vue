<template>

<nav class="h-100 d-flex flex-column justify-content-between">
    <div class="sidebar">
        <h2 class="text-center mb-lg-7 mb-5">後台管理</h2>
        <ul class="nav bg-primary">
            <li class="nav-item flex-grow-1">
                <router-link class="nav-link" to="/admin">
                    <i class="text-highlight bi bi-pie-chart-fill me-4"></i>
                    <span>首頁</span>
                </router-link>
            </li>
            <li class="nav-item flex-grow-1">
                <router-link class="nav-link" to="/admin/product">
                    <i class="text-highlight bi bi-box-seam-fill me-4"></i>
                    <span>商品</span>
                </router-link>
            </li>
            <li class="nav-item flex-grow-1">
                <router-link class="nav-link" to="/admin/order">
                    <i class="text-highlight bi bi-file-earmark-text me-4"></i>
                    <span>訂單</span>
                </router-link>
            </li>
            <li class="nav-item flex-grow-1">
                <router-link class="nav-link" to="/admin/article">
                    <i class="text-highlight bi bi-pencil-square me-4"></i>
                    <span>文章</span>
                </router-link>
            </li>
            <li class="nav-item flex-grow-1">
                <router-link class="nav-link" to="/admin/coupon">
                    <i class="text-highlight bi bi-percent me-4"></i>
                    <span>優惠券</span>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="nav-footer flex-classic">
        <router-link to="/" target="_blank" class="w-100 btn btn-outline-light rounded-0">
        <i class="bi bi-house-door me-3"></i>
        <span>前台</span>
        </router-link>
        <button type="button" class="w-100 btn btn-outline-highlight rounded-0"
                @click="logout">
        <i class="bi bi-box-arrow-right me-3"></i>
        <span>登出</span>
        </button>
    </div>
</nav>

</template>

<script>

import { mapActions } from 'pinia';

import adminAuthStore from '@/stores/adminAuth';

export default {

    methods: { ...mapActions(adminAuthStore, ['logout']) },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-link {

    color: $light;
    padding: 1.5rem;
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

.btn { margin: 0 -1px -1px 0; }

nav { min-height: calc(100vh - 38px); }

.sidebar .nav { flex-direction: column; padding: 2rem 0; }

@media (max-width: 991px) {

    nav { min-height: auto; }

    .sidebar .nav {

        width: 100%;

        position: fixed;
        right: 0; bottom: 0;
        z-index: 2000;

        padding: 0;

        flex-direction: row;
        align-items: center;

    }

    .nav-link { text-align: center; padding: 1rem; }

    .bi { display: none; }

    .nav-footer { text-align: center; }

}

</style>
