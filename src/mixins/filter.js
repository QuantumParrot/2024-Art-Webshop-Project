export default {

    methods: {

        switchFilter(value) { this.filter = value; this.currentPage = 1; },

        switchPage(num) { this.currentPage = num; },

    },

};
