<template>

<div class="input-group">
    <input type="text" class="form-control" id="clipboard-content" :value="value" readonly>
    <span class="input-group-text"
          data-clipboard-target="#clipboard-content" ref="trigger">
    <button type="button" class="btn-origin"><i class="bi bi-copy"></i></button>
    </span>
</div>

</template>

<script>

import ClipboardJS from 'clipboard';

export default {

    props: ['value'],

    data() { return { clipboard: '' }; },

    mounted() { this.clipboard = new ClipboardJS(this.$refs.trigger); },

};

</script>
