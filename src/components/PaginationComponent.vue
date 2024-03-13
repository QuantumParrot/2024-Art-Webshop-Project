<template>

<nav aria-label="page navigation">
    <ul class="pagination mb-0">
        <li>
        <a href="#" @click.prevent="switchPage(current - 1)"
           class="page-link" :class="{ 'disabled': current - 1 < 1 }">
        &laquo;</a>
        </li>
        <template v-for="i in total" :key="i">
            <li>
            <a href="#" @click.prevent="switchPage(i)"
               class="page-link" :class="{ 'active': current === i }">
            {{ i }}</a>
            </li>
        </template>
        <li>
        <a href="#" @click.prevent="switchPage(current + 1)"
           class="page-link" :class="{ 'disabled': current + 1 > total }">
        &raquo;</a>
        </li>
    </ul>
</nav>

</template>

<script>

export default {

    props: ['current', 'total'],

    methods: {

        switchPage(num) {

            window.scrollTo(0, 0, 'smooth');

            this.$emit('switch-page', num);

        },

    },

};

</script>

<style lang="scss">

@import '../assets/_variables.scss';

.pagination {

  display: flex;
  gap: .5rem;

}

.page-link {

  display: block;
  background-color: white;
  color: $primary;
  width: 32px; height: 32px;
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {

    background-color: $primary;
    color: white;
    font-weight: bold;

  }

  &.disabled {

    pointer-events: none;
    background-color: $gray-400;
    color: black;

  }

}

</style>
