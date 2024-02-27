<template>

<nav class="bg-white py-4">
    <div class="container">
        <div class="flex-classic">
            <div>
                <h1><router-link class="title" to="/">收藏家</router-link></h1>
            </div>
            <ul class="nav">
                <li class="nav-item">
                <router-link class="nav-link" to="/announcement">最新消息</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/about">關於我們</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/products">商品一覽</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/articles">專欄文章</router-link>
                </li>
            </ul>
            <div class="flex-classic gap-2">
                <router-link v-slot="{ navigate }" to="/carts" custom>
                <button type="button" class="btn btn-primary" @click="navigate">
                    <i class="bi bi-cart-fill"></i>
                </button>
                </router-link>
                <router-link v-slot="{ navigate }" to="/order" custom>
                <button type="button" class="btn btn-outline-primary" @click="navigate">
                    <i class="bi bi-search"></i>
                </button>
                </router-link>
            </div>
        </div>
    </div>
</nav>

</template>

<style lang="scss">

@import '@/assets/variables';

.title { text-decoration: none; }

.nav-link { color: $primary }

</style>
