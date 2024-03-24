<template>

<nav aria-label="page navigation">
    <ul class="w-100 pagination mb-0">
        <li>
            <a
            href="#" @click.prevent="switchPage(current - 1)"
            class="prev-link" :class="{ 'disabled': current - 1 < 1 }">
            &laquo;</a>
        </li>
        <template v-for="i in total" :key="i">
        <li>
            <a
            href="#" @click.prevent="switchPage(i)"
            class="page-link" :class="{ 'active': current === i }">
            {{ i }}</a>
        </li>
        </template>
        <li>
            <a
            href="#" @click.prevent="switchPage(current + 1)"
            class="next-link" :class="{ 'disabled': current + 1 > total }">
            &raquo;</a>
        </li>
    </ul>
</nav>

</template>

<script>

export default {

    props: {

        current: { required: true },

        total: { required: true },

        scrollToTop: { default: true },

    },

    methods: {

        switchPage(num) {

            if (this.scrollToTop) { window.scrollTo(0, 0, 'smooth'); }

            this.$emit('switch-page', num);

        },

    },

};

</script>

<style lang="scss" scoped>

@import '../assets/_variables.scss';

.pagination {

  display: flex;
  gap: .5rem;

}

.prev-link, .next-link {

  display: block;
  text-decoration: none;
  width: 32px; height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  padding-bottom: .25rem;

  &.disabled {

    pointer-events: none;
    color: $gray-500;

  }

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
    pointer-events: none;

  }

}

@media (max-width: 576px) {

  nav {

    overflow-x: scroll;
    padding: .25rem;
    margin: 0 -0.25rem;

  }

}

</style>
