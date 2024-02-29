<template>

<Loading
    v-model:active="loading"
    :is-full-page="isFull" :z-index="1060" :background-color="'#757575'">
    <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
    </div>
</Loading>

</template>

<script>

import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';

export default {

    components: { Loading },

    props: {

        isLoading: {

            type: Boolean, required: true,

        },

        isFull: {

            type: Boolean,
            default: true,

        },

    },

    data() {

        return { loading: false };

    },

    watch: {

        isLoading() { this.loading = this.isLoading; },

    },

    mounted() { this.loading = this.isLoading; },

};

</script>

<style>

/* src: https://tobiasahlin.com/spinkit/ */

.spinner {

  width: 80px; height: 80px;
  position: relative;
  margin: 100px auto;

}

.double-bounce1, .double-bounce2 {

  width: 100%; height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0; left: 0;
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;

}

.double-bounce2 {

  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;

}

@-webkit-keyframes sk-bounce {

  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }

}

@keyframes sk-bounce {

  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }

}

</style>
