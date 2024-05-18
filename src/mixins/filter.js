// 前台：消息列表、商品列表、文章列表
// 後台：都有

// 主分支沒有提供 filter / currentPage 而是由各個元件自行建立，目前看來兩種做法沒有太大差異

export default {

    data() {

        return { filter: '', currentPage: 1 };

    },

    methods: {

        switchFilter(value) { this.filter = value; this.currentPage = 1; },

        switchPage(num) { this.currentPage = num; },

    },

};
