<template>

<div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center">
            <div class="modal-body p-4">
                <h4 class="mb-4"><slot name="title"></slot></h4>
                <p class="mb-4"><slot name="alert"></slot></p>
                <slot name="itemDetail"></slot>
                <div>
                    <button type="button" class="btn btn-outline-danger me-2"
                            @click="$emit('delete-target')">對啦對啦</button>
                    <button type="button" class="btn btn-primary"
                            @click="hideModal">考慮一下</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import modalMixins from '@/mixins/modal';

//

export default {

    mixins: [modalMixins],

    data() { return { modal: '' }; },

    emits: ['delete-target'],

};

</script>

<style>

.img-zoom-out {

  object-fit: cover;
  height: 300px;

}

</style>
