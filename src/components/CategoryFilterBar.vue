<template>

<ul class="nav">
    <li class="nav-item">
        <a href="#" class="nav-link" :class="{ 'active': filter === '' }"
           @click.prevent="switchFilter('')">全部</a>
    </li>
    <template v-for="item in filters" :key="item">
    <li class="nav-item">
        <a href="#" class="nav-link" :class="{ 'active': filter === item }"
           @click.prevent="switchFilter(item)">{{ item }}</a>
    </li>
    </template>
</ul>

</template>

<script>

export default {

    props: ['filters', 'filter'],

    emits: ['switch-filter'],

    methods: {

        switchFilter(value) { this.$emit('switch-filter', value); },

    },

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

    &.active, &:hover {

        background-color: $primary;
        color: $light;
        font-weight: bold;

    }

}

</style>
