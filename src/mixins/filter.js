export default {

    data() {

        return { filter: '', currentPage: 1 };

    },

    methods: {

        switchFilter(value) { this.filter = value; },

        switchPage(num) { this.currentPage = num; },

    },

};
