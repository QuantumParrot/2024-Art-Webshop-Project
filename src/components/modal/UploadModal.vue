<template>

<div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="mb-0">上傳圖片</h4>
                <button type="button"
                        class="btn border-0 p-0 fs-4"
                        @click="hideModal" :disabled="uploadState">
                <i class="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <div class="modal-body">
                <upload-form
                   :use-clipboard="true"
                   :upload-state="uploadState"
                   @update-upload-state="updateState" />
            </div>
        </div>
    </div>
</div>

</template>

<script>

import modalMixins from '@/mixins/modal';

//

import UploadForm from '../UploadForm.vue';

//

export default {

    components: { UploadForm },

    mixins: [modalMixins],

    data() { return { modal: '', uploadState: false }; },

    methods: {

        updateState(state) { this.uploadState = state; },

    },

};

</script>
