<template>

<div class="fixed-bottom d-flex justify-content-end">
    <button
        type="button"
        class="btn-scroll-top btn btn-sm btn-primary
        border-2 border-secondary rounded-circle shadow py-1 m-3"
        ref="backTopBtn" @click.prevent="$scrollTop">
        <i class="bi bi-arrow-up"></i>
    </button>
</div>

</template>

<script>

export default {

    data() {

        return {

            height: 0,

        };

    },

    methods: {

        watchScroll() {

            const { documentElement, body } = document;

            // document.body --> Safari

            // document.documentElement --> Chrome, Firefox, IE and Opera

            if (documentElement.scrollTop > this.height || body.scrollTop > this.height) {

                this.$refs.backTopBtn.style.opacity = '1';

            } else { this.$refs.backTopBtn.style.opacity = '0'; }

        },

    },

    mounted() {

        this.$refs.backTopBtn.style.opacity = '0';
        this.height = window.innerHeight / 2;
        window.addEventListener('scroll', this.watchScroll);

    },

    unmounted() { window.removeEventListener('scroll', this.watchScroll); },

};

</script>

<style lang="scss" scoped>

.btn-scroll-top { transition: opacity .75s ease; }

</style>
