<template>

<div class="input-group">
    <input type="text" class="form-control" id="clipboard-content" :value="value" readonly>
    <span
        class="input-group-text" data-clipboard-target="#clipboard-content"
        ref="trigger">
        <button type="button" class="btn-origin" @click="alert">
            <i class="bi bi-copy"></i>
        </button>
    </span>
</div>

</template>

<script>

import ClipboardJS from 'clipboard';

//

import { mapActions } from 'pinia';

import alertStore from '@/stores/alert';

//

export default {

    props: ['value'],

    data() { return { clipboard: '' }; },

    methods: {

        ...mapActions(alertStore, ['toastAlert']),

        alert() { this.toastAlert('成功複製！', 'success'); },

    },

    mounted() { this.clipboard = new ClipboardJS(this.$refs.trigger); },

};

</script>
