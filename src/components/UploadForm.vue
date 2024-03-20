<template>

<p class="fs-7 text-danger">僅限 JPG、JPEG 與 PNG 格式，檔案大小限制為 3MB 以下。</p>
<form method="post" enctype="multipart/form-data" ref="form">
    <input
        type="file" name="file-to-upload" class="form-control mb-3"
        @change="confirmUpload"
        ref="file">
    <div class="alert bg-gray overflow-scroll" v-if="image.name">
        <p class="fw-bold">檔案資訊</p>
        <p>檔案名稱：{{ image.name }}</p>
        <p>檔案大小：{{ $calc.convertByteUnit(image.size) }}</p>
        <p class="mb-0">檔案格式：{{ image.type }}</p>
    </div>
    <button
        type="submit" class="btn btn-primary"
        @click.prevent="upload" :disabled="disabled || isUploading">
        <span
            class="spinner-border spinner-border-sm me-2"
            role="status" aria-hidden="true"
            v-show="isUploading"></span>
        <span v-text="isUploading ? '上傳中，請稍候' : '確認上傳'"></span>
    </button>
</form>

<template v-if="useClipboard">
<div class="alert bg-gray mt-3" v-if="imageUrl">
    <p>複製圖片網址：</p>
    <ClipboardComponent :value="imageUrl" />
    <img class="mt-3" :src="imageUrl" alt="uploaded-image-preview">
</div>
</template>

</template>

<script>

import { mapActions } from 'pinia';

import alertStore from '@/stores/alert';

//

import ClipboardComponent from './ClipboardComponent.vue';

//

const { VITE_APP_SITE, VITE_APP_PATH } = import.meta.env;

export default {

    components: { ClipboardComponent },

    props: ['useClipboard', 'disabled', 'uploadState'],

    emits: ['update-upload-state', 'add-new-image'],

    data() {

        return { image: {}, isUploading: false, imageUrl: '' };

    },

    methods: {

        ...mapActions(alertStore, ['errorAlert', 'uploadAlert']),

        confirmUpload() {

            if (this.$refs.file.files.length) {

                // 只負責顯示檔案相關資訊，驗證是按下確認之後才開始

                const file = this.$refs.file.files[0];
                this.image = file;

            } else { this.reset(); }

        },

        upload() {

            const result = this.uploadAlert(this.image);

            if (result) {

                this.isUploading = true;
                const formData = new FormData();
                formData.append('file-to-upload', this.image);

                this.$http.post(`${VITE_APP_SITE}/api/${VITE_APP_PATH}/admin/upload`, formData)
                    .then((res) => {

                        const { imageUrl } = res.data;
                        this.imageUrl = imageUrl;
                        this.reset();

                    })
                    .catch((error) => this.errorAlert(error))
                    .finally(() => { this.isUploading = false; });

            }

        },

        reset() {

            this.$refs.form.reset();
            this.image = {};

        },

        updateState(state) { this.$emit('update-upload-state', state); },

        addNewImage(image) { this.$emit('add-new-image', image); },

    },

    watch: {

        isUploading(current) { this.updateState(current); },

        imageUrl(current) { if (current) { this.addNewImage(current); } },

    },

    mounted() { this.isUploading = this.uploadState; },

};

</script>
