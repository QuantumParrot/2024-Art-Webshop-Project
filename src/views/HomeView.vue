<template>

<loading-overlay :isLoading="isLoading"></loading-overlay>

<div class="h-100">
<front-navbar/>
<main class="main">
    <router-view></router-view>
</main>
<front-footer />
</div>

</template>

<script>

import { mapState } from 'pinia';

import loaderStore from '@/stores/loader';

//

import FrontNavbar from '@/components/FrontNavbar.vue';

import FrontFooter from '@/components/FrontFooter.vue';

//

export default {

    components: { FrontNavbar, FrontFooter },

    computed: {

        ...mapState(loaderStore, ['isLoading']),

    },

};

</script>
