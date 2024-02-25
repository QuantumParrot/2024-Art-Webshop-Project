import moment from 'moment';

export default {

    methods: {

        // 時間

        formatDate(time, d = '-') { return moment(time).format(`YYYY${d}MM${d}DD`); },

        today(d = '-') { return moment().format(`YYYY${d}MM${d}DD`); },

        now() { return parseInt(new Date().getTime() / 1000, 10); },

        // 數學不會就是不會

    },

};
