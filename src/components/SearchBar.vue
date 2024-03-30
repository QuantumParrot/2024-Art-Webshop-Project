<template>

<div class="position-relative">
    <input
        type="text" class="form-control" v-model.trim="keyword"
        placeholder="輸入您想搜尋的關鍵字"
        @keyup.enter="search">
    <button
        type="button" class="btn btn-inline" :class="{ 'disabled': !keyword }"
        @click="search">
        <i class="bi bi-search"></i>
    </button>
</div>

</template>

<script>

export default {

    data() {

        return { keyword: '' };

    },

    methods: {

        search() {

            if (this.keyword) { this.$router.push(`/search?keyword=${this.keyword}`); }

        },

    },

};

</script>

<style lang="scss" scoped>

.btn-inline { right: .75rem; }

</style>
