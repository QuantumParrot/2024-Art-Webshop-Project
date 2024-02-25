<template>

<p class="text-end fs-5 mb-5">{{ greeting }}，管理員！</p>

</template>

<script>

import moment from 'moment';

export default {

    data() {

        return { greeting: '您好' };

    },

    created() {

        const now = moment().format('H');

        if (now > 4 && now < 11) {

            this.greeting = '早上好';

        } else if (now > 10 && now < 18) {

            this.greeting = '午安';

        } else {

            this.greeting = '晚上好';

        }

    },

};

</script>
