<template>

<loading-overlay :isLoading="isLoading"></loading-overlay>

<div class="container-fluid h-100" v-if="isLogin">
    <div class="row h-100">
        <div class="col-lg-3 bg-primary text-white">
        <div class="sticky-top h-100 px-2 py-4" style="max-height: 100vh;">
            <admin-sidebar />
        </div>
        </div>
        <div class="col-lg-9 pb-lg-0 pb-7">
        <div class="h-100 px-2 py-4">
            <router-view />
        </div>
        </div>
    </div>
</div>

</template>

<script>

import { mapState, mapActions } from 'pinia';

import adminAuthStore from '@/stores/adminAuth';

import loaderStore from '@/stores/loader';

//

import AdminSidebar from '@/components/AdminSidebar.vue';

//

export default {

    components: { AdminSidebar },

    computed: {

        ...mapState(adminAuthStore, ['isLogin']), ...mapState(loaderStore, ['isLoading']),

    },

    methods: {

        ...mapActions(adminAuthStore, ['checkLogin']),

    },

    created() { this.checkLogin(); },

};

</script>
