<template>

<nav class="navbar navbar-expand-lg bg-white py-4">
    <div class="container">
        <h1 class="mb-0 order-1">
            <router-link class="title-link" to="/">收藏家</router-link>
        </h1>
        <div class="flex-classic gap-2 order-2 order-lg-3">
            <button type="button"
                    class="btn btn-outline-primary d-lg-none"
                    @click="toggleNavbar">
            <i class="bi bi-list"></i>
            </button>
            <router-link v-slot="{ navigate }" to="/carts" custom>
            <button type="button" class="btn btn-primary position-relative" @click="navigate">
                <i class="bi bi-cart-fill"></i>
                <span class="position-absolute top-0 start-100
                             translate-middle p-1
                             bg-danger border border-white rounded-circle"
                             v-show="carts.length"></span>
            </button>
            </router-link>
            <router-link v-slot="{ navigate }" to="/order" custom>
            <button type="button" class="btn btn-outline-primary" @click="navigate">
                <i class="bi bi-search"></i>
            </button>
            </router-link>
        </div>
        <div class="navbar-collapse flex-grow-0 order-3 order-lg-2" ref="collapse">
            <ul class="navbar-nav gap-3">
                <li class="nav-item">
                <router-link class="nav-link" to="/news">最新消息</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/about">關於我們</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/products">線上商城</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/articles">專欄文章</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<script>

import { Collapse } from 'bootstrap/dist/js/bootstrap';

//

import { mapState, mapActions } from 'pinia';

import cartStore from '@/stores/userCart';

export default {

    data() {

        return { collapse: '' };

    },

    computed: {

        ...mapState(cartStore, ['carts']),

    },

    methods: {

        ...mapActions(cartStore, ['getCarts']),

        toggleNavbar() { this.collapse.toggle(); },

    },

    watch: {

        $route() { this.collapse.hide(); },

    },

    created() { this.getCarts(); },

    mounted() {

        this.collapse = new Collapse(this.$refs.collapse);

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/variables';

.navbar { box-shadow: 0 3px 5px 5px white; }

.title-link { text-decoration: none; }

.nav-link {

    color: $primary;

    &.active, &:hover { font-weight: bold; color: $orange-700; }

}

@media (max-width: 991px) {

    .navbar-collapse {

        padding-top: 1.25rem;

        .nav { flex-direction: column; }

        .nav-link { padding-left: 0; }

    }

}

</style>
