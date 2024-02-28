/* eslint-disable indent */

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({

  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'front-index',
          component: () => import('../views/front/IndexView.vue'),
        },
        {
          path: 'about',
          name: 'front-about',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: 'articles',
          name: 'front-articles',
          component: () => import('../views/front/ArticlesView.vue'),
        },
        {
          path: 'article/:id',
          name: 'front-article-detail',
          component: () => import('../views/front/ArticleDetailView.vue'),
        },
        {
          path: 'products',
          name: 'front-products',
          component: () => import('../views/front/ProductsView.vue'),
        },
        {
          path: 'product/:id',
          name: 'front-product-detail',
          component: () => import('../views/front/ProductDetailView.vue'),
        },
        {
          path: 'carts',
          name: 'front-carts',
          component: () => import('../views/front/CartsView.vue'),
        },
        {
          path: 'order',
          name: 'front-order-search',
          component: () => import('../views/front/OrderSearchView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'admin-login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: () => import('../views/admin/AdminDashboardView.vue'),
        },
        {
          path: 'product',
          name: 'admin-product',
          component: () => import('../views/admin/AdminProductView.vue'),
        },
        {
          path: 'order',
          name: 'admin-order',
          component: () => import('../views/admin/AdminOrderView.vue'),
        },
        {
          path: 'coupon',
          name: 'admin-coupon',
          component: () => import('../views/admin/AdminCouponView.vue'),
        },
        {
          path: 'article',
          name: 'admin-article',
          component: () => import('../views/admin/AdminArticleView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],

  linkExactActiveClass: 'active',

  scrollBehavior() { return { top: 0 }; },

});

export default router;
