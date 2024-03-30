<template>

<dialog class="bg-white rounded-2 shadow pt-0" ref="modal">
    <div class="sticky-top bg-white d-flex justify-content-end py-3">
        <button
            type="button" class="btn border-0 p-0 fs-4"
            @click="hideModal">
            <i class="bi bi-x-circle-fill"></i>
        </button>
    </div>
    <div class="d-flex overflow-scroll">
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

            this.$nextTick(() => {

                const { naturalWidth } = this.$refs.image;

                if (naturalWidth < 800) {

                    this.$refs.image.style.width = '100%';

                } else {

                    this.$refs.image.style.width = naturalWidth;

                }

            });

        },

    },

    watch: {

        image() { this.initImage(); },

    },

    mounted() { this.modal = this.$refs.modal; },

};

</script>

<style scoped>

dialog {

  max-width: 800px;
  width: calc(100vw - 24px);

}

img { max-width: none; }

</style>
