<template>

<dialog class="bg-white rounded-2 shadow pt-0" ref="modal">
    <div class="sticky-top bg-white d-flex justify-content-end py-3">
        <button
            type="button" class="btn border-0 p-0 fs-4"
            @click="hideModal">
            <i class="bi bi-x-circle-fill"></i>
        </button>
    </div>
    <div class="d-flex justify-content-center overflow-scroll">
        <img :src="image" alt="zoom-in-image" ref="image">
    </div>
</dialog>

</template>

<script>

export default {

    data() {

        return { modal: '' };

    },

    props: ['image'],

    methods: {

        showModal() { this.modal.showModal(); },

        hideModal() { this.modal.close(); },

        initImage() {

            const { naturalWidth, naturalHeight } = this.$refs.image;

            this.$refs.image.style.width = naturalWidth;
            this.$refs.image.style.height = naturalHeight;

        },

    },

    mounted() { this.modal = this.$refs.modal; },

};

</script>

<style scoped>

img { max-width: none; }

</style>
