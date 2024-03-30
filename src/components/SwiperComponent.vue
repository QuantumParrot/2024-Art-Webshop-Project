<template>

<swiper-container
    :slides-per-view="1" :slides-per-group="1" :centered-slides="true"
    :pagination="true" :pagination-clickable="true"
    :autoplay="true"
    >
    <template v-for="news in data" :key="news.id">
        <swiper-slide>
            <div
                class="slide-content" :style="{ backgroundImage: `url(${news.image})` }"
                :alt="news.title">
            </div>
            <h3 class="slide-title fs-5 py-3 mb-0"><b>{{ news.title }}</b></h3>
        </swiper-slide>
    </template>
</swiper-container>

</template>

<script>

import { register } from 'swiper/element/bundle';

register();

export default {

    props: ['data'],

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

::part(container) { padding-bottom: 3rem; }

::part(bullet-active) { background-color: $primary; }

.slide-content {

  background-repeat: no-repeat;
  background-position: center 60%;
  background-size: cover;
  height: 400px;

}

.slide-title {

  background-color: $primary;
  text-align: center;
  color: $light;

}

</style>
