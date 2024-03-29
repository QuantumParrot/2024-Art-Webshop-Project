<template>

<nav class="navbar navbar-expand-lg text-primary py-4 shadow-sm">
    <div class="container">
        <h1 class="ls-sm mb-0 order-1">
            <RouterLink class="title" to="/"><b>收藏家</b></RouterLink>
        </h1>
        <div class="flex-classic gap-2 order-2 order-lg-3">
            <RouterLink v-slot="{ navigate }" to="/checkout/carts" custom>
                <button
                    type="button" class="btn btn-primary position-relative"
                    @click="navigate">
                    <i class="bi bi-cart-fill"></i>
                    <span
                        class="position-absolute top-0 start-100
                        translate-middle p-1
                        bg-danger border border-white rounded-circle"
                        v-show="carts.length"></span>
                </button>
            </RouterLink>
            <RouterLink v-slot="{ navigate }" to="/member/order" custom>
                <button type="button" class="btn btn-outline-primary" @click="navigate">
                    <i class="bi bi-person-fill"></i>
                </button>
            </RouterLink>
            <button type="button" class="btn btn-primary d-lg-none" @click="toggle">
                <i class="bi bi-list"></i>
            </button>
        </div>
        <div class="navbar-collapse collapse flex-grow-0 order-3 order-lg-2" ref="collapse">
            <ul class="navbar-nav gap-3">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/news">最新消息</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/products">線上商城</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/articles">專欄文章</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<script>

import Collapse from 'bootstrap/js/dist/collapse';

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

        toggle() { this.collapse.toggle(); },

    },

    watch: {

        $route() { this.collapse.hide(); },

    },

    created() { this.getCarts(); },

    mounted() {

        this.collapse = new Collapse(this.$refs.collapse, { toggle: false });

    },

};

</script>

<style lang="scss" scoped>

@import '@/assets/variables';

.navbar {

  background-image: linear-gradient(180deg, $gray, white);

}

.title { text-decoration: none; }

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
