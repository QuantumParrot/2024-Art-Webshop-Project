<template>

<ul class="nav flex-nowrap">
    <li class="nav-item">
        <router-link :to="$route.path"
            class="nav-link" :class="{ 'nav-active': current === '' }">
        <span>{{ innerWidth > 508 ? total : total.slice(0, 2) }}</span>
        </router-link>
    </li>
    <template v-for="item in category" :key="item">
    <li class="nav-item">
        <router-link :to="`${$route.path}?category=${item}`"
            class="nav-link" :class="{ 'nav-active': current === item }">
        <span>{{ innerWidth > 508 ? item : item.slice(0, 2) }}</span>
        </router-link>
    </li>
    </template>
</ul>

</template>

<script>

export default {

    props: {

        category: { required: true },

        current: { required: true },

        total: { type: String, default: '全部' },

    },

    emits: ['switch-category'],

    data() { return { innerWidth: '' }; },

    methods: {

        switchCategory(value) { this.$emit('switch-category', value); },

        resizeWindow(e) { this.innerWidth = e.target.innerWidth; },

    },

    watch: {

        '$route.query.category': {

            handler(n) { this.switchCategory(n || ''); },

            deep: true,

        },

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

}

.nav-link {

  text-align: center;
  background-color: $gray;

  &.nav-active, &:hover {

    background-color: $primary;
    color: $light;
    font-weight: bold;

  }

}

</style>
