<template>

<LoadingOverlay :isLoading="isLoading" />

<div class="h-100 d-flex flex-column" style="min-height: 100vh;">
    <FrontNavbar />
    <main><RouterView /></main>
    <FrontFooter />
    <ScrollTopButton />
</div>

</template>

<script>

import { mapState } from 'pinia';

import loaderStore from '@/stores/loader';

//

import FrontNavbar from '@/components/FrontNavbar.vue';

import FrontFooter from '@/components/FrontFooter.vue';

import ScrollTopButton from '@/components/ScrollTopButton.vue';

//

export default {

    components: { FrontNavbar, FrontFooter, ScrollTopButton },

    computed: {

        ...mapState(loaderStore, ['isLoading']),

    },

};

</script>

<style>

main {

  height: auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

}

</style>
