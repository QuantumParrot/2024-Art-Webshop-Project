<script setup>

import { storeToRefs } from 'pinia';

//

import useLoaderStore from '@/stores/loader';

//

import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';

//

const { isLoading } = storeToRefs(useLoaderStore());

</script>

<template>

<LoadingOverlay :isLoading="isLoading" />

<div class="h-100 d-flex flex-column" style="min-height: 100vh;">
    <FrontNavbar />
    <main><RouterView /></main>
    <FrontFooter />
</div>

</template>

<style>

main {

  height: auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

}

</style>
