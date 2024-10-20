import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: () => import('../views/front/FrontLayoutView.vue'),
            children: [
                {
                    path: '',
                    name: 'front-index',
                    component: () => import('../views/front/IndexView.vue'),
                    meta: { title: '收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'about',
                    name: 'front-about',
                    component: () => import('../views/front/AboutView.vue'),
                    meta: { title: '關於我們 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'news',
                    name: 'front-news',
                    component: () => import('../views/front/NewsView.vue'),
                    meta: { title: '最新消息 - 收藏家｜藝術販售與推廣', refuseScrollTop: true },
                },
                {
                    path: 'news/:id',
                    name: 'front-news-detail',
                    component: () => import('../views/front/NewsDetailView.vue'),
                    meta: { title: '最新消息 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'articles',
                    name: 'front-articles',
                    component: () => import('../views/front/ArticlesView.vue'),
                    meta: { title: '專欄文章 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'article/:id',
                    name: 'front-article-detail',
                    component: () => import('../views/front/ArticleDetailView.vue'),
                    meta: { title: '專欄文章 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'products',
                    name: 'front-products',
                    component: () => import('../views/front/ProductsView.vue'),
                    meta: { title: '線上商城 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'product/:id',
                    name: 'front-product-detail',
                    component: () => import('../views/front/ProductDetailView.vue'),
                    meta: { title: '商品介紹 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'search',
                    name: 'front-search',
                    component: () => import('../views/front/SearchView.vue'),
                    meta: { title: '搜尋結果 - 收藏家｜藝術販售與推廣' },
                },
                {
                    path: 'checkout',
                    name: 'front-checkout',
                    component: () => import('../views/front/checkout/CheckoutLayoutView.vue'),
                    children: [
                        {
                            path: '',
                            name: 'front-checkout',
                            redirect: { name: 'front-checkout-carts' },
                        },
                        {
                            path: 'carts',
                            name: 'front-checkout-carts',
                            component: () => import('../views/front/checkout/CartsView.vue'),
                            meta: { title: '購物明細 - 收藏家｜藝術販售與推廣' },
                        },
                        {
                            path: 'form',
                            name: 'front-checkout-form',
                            component: () => import('../views/front/checkout/OrderFormView.vue'),
                            meta: { title: '填寫資訊 - 收藏家｜藝術販售與推廣' },
                        },
                        {
                            path: 'order',
                            name: 'front-checkout-order-pay',
                            component: () => import('../views/front/checkout/OrderPaymentView.vue'),
                            meta: { title: '訂單明細 - 收藏家｜藝術販售與推廣' },
                        },
                    ],
                },
                {
                    path: 'member',
                    name: 'front-member',
                    component: () => import('../views/front/member/MemberLayoutView.vue'),
                    children: [
                        {
                            path: '',
                            name: 'front-member',
                            redirect: { name: 'front-member-order-search' },
                        },
                        {
                            path: 'collection',
                            name: 'front-member-collection',
                            component: () => import('../views/front/member/CollectionView.vue'),
                            meta: { title: '我的收藏 - 收藏家｜藝術販售與推廣' },
                        },
                        {
                            path: 'order',
                            name: 'front-member-order-search',
                            component: () => import('../views/front/member/OrderSearchView.vue'),
                            meta: { title: '訂單查詢 - 收藏家｜藝術販售與推廣' },
                        },
                    ],
                },
            ],
        },
        {
            path: '/login',
            name: 'admin-login',
            component: () => import('../views/LoginView.vue'),
            meta: { title: '後台登入 - 收藏家' },
        },
        {
            path: '/admin',
            component: () => import('../views/admin/AdminLayoutView.vue'),
            children: [
                {
                    path: '',
                    name: 'admin-dashboard',
                    component: () => import('../views/admin/AdminDashboardView.vue'),
                    meta: { title: '後台首頁 - 後台 - 收藏家' },
                },
                {
                    path: 'product',
                    name: 'admin-product',
                    component: () => import('../views/admin/AdminProductView.vue'),
                    meta: { title: '商品管理 - 後台 - 收藏家' },
                },
                {
                    path: 'order',
                    name: 'admin-order',
                    component: () => import('../views/admin/AdminOrderView.vue'),
                    meta: { title: '訂單管理 - 後台 - 收藏家' },
                },
                {
                    path: 'coupon',
                    name: 'admin-coupon',
                    component: () => import('../views/admin/AdminCouponView.vue'),
                    meta: { title: '優惠券管理 - 後台 - 收藏家' },
                },
                {
                    path: 'article',
                    name: 'admin-article',
                    component: () => import('../views/admin/AdminArticleView.vue'),
                    meta: { title: '文章管理 - 後台 - 收藏家' },
                },
                {
                    path: 'article/:type',
                    name: 'admin-article-detail',
                    component: () => import('../views/admin/AdminArticleDetailView.vue'),
                    meta: { title: '文章 - 後台 - 收藏家' },
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/NotFoundView.vue'),
            meta: { title: '404 Not Found' },
        },
    ],

    linkExactActiveClass: 'active',

    scrollBehavior(to, from, savedPosition) {

        if (to.hash) { return { el: to.hash, top: 20 }; }

        if (savedPosition) { return savedPosition; }

        if (to.meta.refuseScrollTop) return false;

        return { top: 0, behavior: 'smooth' };

    },

});

router.beforeEach((to) => { document.title = to.meta.title || '收藏家'; });

export default router;
