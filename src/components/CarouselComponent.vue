<template>

<swiper-container
    :slides-per-view="1" :slides-per-group="1" :centered-slides="true"
    :pagination="true" :pagination-clickable="true"
    :autoplay="true"
    >
<slot></slot>
</swiper-container>

</template>

<script>

import { register } from 'swiper/element/bundle';

export default {

    mounted() { register(); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

::part(container) {

  --swiper-theme-color: #424242;
  padding-bottom: 3rem;

}

</style>
