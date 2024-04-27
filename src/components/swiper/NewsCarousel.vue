<template>

<swiper-container
    :slides-per-view="1" :slides-per-group="1" :centered-slides="true"
    :pagination="true" :pagination-clickable="true"
    :autoplay="true"
    >
    <template v-for="news in data" :key="news.id">
        <swiper-slide lazy="true">
            <div class="slide-content">
                <img
                    :src="news.image" :alt="news.title"
                    class="w-100 object-fit-cover"
                    loading="true">
            </div>
            <div class="slide-title fs-5 py-3">
                <RouterLink class="text-decoration-none" :to="`/news/${news.id}`">
                    <b>{{ news.title }}</b>
                </RouterLink>
            </div>
        </swiper-slide>
    </template>
</swiper-container>

</template>

<script>

import { register } from 'swiper/element/bundle';

export default {

    props: ['data'],

    mounted() { register(); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

::part(container) {

  --swiper-theme-color: #424242;
  padding-bottom: 3rem;

}

.slide-content {

  height: 400px;

  img {

    height: 100%;
    object-position: 50% 60%;

  }

}

.slide-title {

  background-color: $primary;
  text-align: center;
  color: $light;

}

</style>
