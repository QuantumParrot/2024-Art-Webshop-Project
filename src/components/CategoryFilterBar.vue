<template>

<ul class="nav flex-nowrap">
    <li class="nav-item">
        <a href="#" class="nav-link" :class="{ 'active': filter === '' }"
        @click.prevent="switchFilter('')">
        {{ innerWidth > 508 ? totalTitle : totalTitle.slice(0, 2) }}</a>
    </li>
    <template v-for="item in filters" :key="item">
    <li class="nav-item">
        <a href="#" class="nav-link" :class="{ 'active': filter === item }"
        @click.prevent="switchFilter(item)">
        {{ innerWidth > 508 ? item : item.slice(0, 2) }}</a>
    </li>
    </template>
</ul>

</template>

<script>

export default {

    props: {

        filters: { required: true },

        filter: { required: true },

        totalTitle: { type: String, default: '全部' },

    },

    emits: ['switch-filter'],

    data() { return { innerWidth: '' }; },

    methods: {

        switchFilter(value) { this.$emit('switch-filter', value); },

        resizeWindow(e) { this.innerWidth = e.target.innerWidth; },

    },

    mounted() {

        this.innerWidth = window.innerWidth;

        window.addEventListener('resize', this.resizeWindow);

    },

    unmounted() { window.removeEventListener('resize', this.resizeWindow); },

};

</script>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

  flex-grow: 1;

  border: 1px solid $primary;

  margin: 0 -1px -1px 0;

  &:first-child { border-radius: .25rem 0 0 .25rem; }

  &:last-child { border-radius: 0 .25rem .25rem 0; }

  overflow: hidden;

}

.nav-link {

  text-align: center;
  background-color: $gray;

  &.active, &:hover {

    background-color: $primary;
    color: $light;
    font-weight: bold;

  }

}

</style>
