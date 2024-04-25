<template>
    <Vue3Lottie :animationData="json" :height="height" />
</template>

<script>

import { Vue3Lottie } from 'vue3-lottie';

export default {

    components: { Vue3Lottie },

    props: {

        json: { required: true },

        height: { default: 250 },

    },

};

</script>
