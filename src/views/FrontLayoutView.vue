<template>

<LoadingOverlay :isLoading="isLoading" />

<div class="h-100 d-flex flex-column">
    <FrontNavbar />
    <main><RouterView /></main>
    <FrontFooter />
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

<style>

main { flex-grow: 1; }

</style>
