/* empty css                               *//* empty css                          */import{c as y}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{c as D}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{d as V,c as A,F as T,b,E as I}from"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import{r as h}from"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import{l as k,s as w,z as $}from"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import{a as M}from"./axios@1.6.7-Di5RpEPX.js";import{p as B}from"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import{V as Y}from"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import{h as d}from"./moment@2.30.1-Cl4UOzQZ.js";import{L as x}from"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import{z as v,O as g,aH as F,Q as u,aq as L}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{c as S,a as C}from"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import{a as z}from"./aos@2.3.4-DSOO8Lb4.js";import{m as N}from"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();function W(t,n="-"){return d(t).format(`YYYY${n}MM${n}DD`)}function j(t,n="-"){return d(t).format(`YYYY${n}MM${n}DD A h:mm:ss`)}function q(t="-"){return d().format(`YYYY${t}MM${t}DD`)}function U(){return parseInt(new Date().getTime()/1e3,10)}function H(t){return t>=1048576?`約 ${+(t/1048576).toFixed(2)} MB`:t>=1024?`約 ${+(t/1024).toFixed(2)} KB`:`${t} bytes`}const K=Object.freeze(Object.defineProperty({__proto__:null,convertByteUnit:H,formatDate:W,formatTime:j,now:U,today:q},Symbol.toStringTag,{value:"Module"})),O=(t,n)=>{const a=t.__vccOpts||t;for(const[m,o]of n)a[m]=o;return a},Q={components:{Loading:x},props:{isLoading:{type:Boolean,required:!0},isFull:{type:Boolean,default:!0},opacity:{type:Number,default:.5},backgroundColor:{type:String,default:"#757575"}},data(){return{loading:!1}},watch:{isLoading(){this.loading=this.isLoading}},mounted(){this.loading=this.isLoading}},G=u("div",{class:"spinner"},[u("div",{class:"double-bounce1"}),u("div",{class:"double-bounce2"})],-1);function J(t,n,a,m,o,i){const r=L("Loading");return v(),g(r,{active:o.loading,"onUpdate:active":n[0]||(n[0]=s=>o.loading=s),"is-full-page":a.isFull,"z-index":1060,"background-color":a.backgroundColor,opacity:a.opacity},{default:F(()=>[G]),_:1},8,["active","is-full-page","background-color","opacity"])}const X=O(Q,[["render",J]]),Z="modulepreload",tt=function(t){return"/2024-Art-Webshop-Project/"+t},E={},e=function(n,a,m){let o=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link");o=Promise.all(a.map(r=>{if(r=tt(r),r in E)return;E[r]=!0;const s=r.endsWith(".css"),R=s?'[rel="stylesheet"]':"";if(!!m)for(let l=i.length-1;l>=0;l--){const _=i[l];if(_.href===r&&(!s||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${R}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":Z,s||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),s)return new Promise((l,_)=>{p.addEventListener("load",l),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})}))}return o.then(()=>n()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})},f=S({history:C(),routes:[{path:"/",component:()=>e(()=>import("./HomeView-DbTDiCzX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])),children:[{path:"",name:"front-index",component:()=>e(()=>import("./IndexView-1Su6Gu-_.js"),__vite__mapDeps([29,1,2,3,4,5,30,13,6,7,8,9,10,31,32,33,34,35,14,15,16,17,18,19,20,21,22,23,24,25,36,27,28])),meta:{title:"收藏家｜藝術販售與推廣"}},{path:"about",name:"front-about",component:()=>e(()=>import("./AboutView-D1xfHfod.js"),__vite__mapDeps([37,33,1,2,3,4,5,30,13,6,7,8,9,10,31,14,15,16,17,18,19,20,21,22,23,24,25,38,27,28])),meta:{title:"關於我們 - 收藏家｜藝術販售與推廣"}},{path:"news",name:"front-news",component:()=>e(()=>import("./NewsView-P4PxbuDu.js"),__vite__mapDeps([39,40,5,3,4,41,1,2,42,13,6,7,8,9,10,30,31,43,44,14,15,16,17,18,19,20,21,22,23,24,25,45,27,28])),meta:{title:"最新消息 - 收藏家｜藝術販售與推廣"}},{path:"news/:id",name:"front-news-detail",component:()=>e(()=>import("./NewsDetailView-CZk6jSw8.js"),__vite__mapDeps([46,1,2,3,4,5,30,13,6,7,8,9,10,31,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"最新消息 - 收藏家｜藝術販售與推廣"}},{path:"articles",name:"front-articles",component:()=>e(()=>import("./ArticlesView-DPSTQUin.js"),__vite__mapDeps([47,40,5,3,4,41,1,2,42,13,6,7,8,9,10,30,31,43,44,34,35,14,15,16,17,18,19,20,21,22,23,24,25,48,27,28])),meta:{title:"專欄文章 - 收藏家｜藝術販售與推廣"}},{path:"article/:id",name:"front-article-detail",component:()=>e(()=>import("./ArticleDetailView-CKQhsc0z.js"),__vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,30,13,31,34,35,14,15,16,17,18,19,20,21,22,23,24,25,50,27,28])),meta:{title:"專欄文章 - 收藏家｜藝術販售與推廣"}},{path:"products",name:"front-products",component:()=>e(()=>import("./ProductsView-Bl8Hehuq.js"),__vite__mapDeps([51,1,2,3,4,5,31,13,6,7,8,9,10,12,52,53,43,44,34,35,14,15,16,17,18,19,20,21,22,23,24,25,54,27,28])),meta:{title:"線上商城 - 收藏家｜藝術販售與推廣"}},{path:"product/:id",name:"front-product-detail",component:()=>e(()=>import("./ProductDetailView-3LrI1Prx.js"),__vite__mapDeps([55,1,2,3,4,5,31,13,6,7,8,9,10,12,14,15,16,17,18,19,20,21,22,23,24,25,56,27,28])),meta:{title:"商品介紹 - 收藏家｜藝術販售與推廣"}},{path:"search",name:"front-search",component:()=>e(()=>import("./SearchView-5c-_yB7N.js"),__vite__mapDeps([57,1,2,3,4,5,31,13,6,7,8,9,10,52,12,53,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"搜尋結果 - 收藏家｜藝術販售與推廣"}},{path:"checkout",name:"front-checkout",component:()=>e(()=>import("./CheckoutView-DOpGKgbM.js"),__vite__mapDeps([58,1,2,3,4,5,12,13,6,7,8,9,10,59,32,33,34,35,14,15,16,17,18,19,20,21,22,23,24,25,60,27,28])),children:[{path:"",name:"front-checkout",redirect:{name:"front-checkout-carts"}},{path:"carts",name:"front-checkout-carts",component:()=>e(()=>import("./CartsView-B0k8yyrk.js"),__vite__mapDeps([61,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,62,27,28])),meta:{title:"購物明細 - 收藏家｜藝術販售與推廣"}},{path:"form",name:"front-checkout-form",component:()=>e(()=>import("./OrderFormView-CIJM6-C2.js"),__vite__mapDeps([63,64,1,2,3,4,5,12,13,6,7,8,9,10,59,14,15,16,17,18,19,20,21,22,23,24,25,65,27,28])),meta:{title:"填寫資訊 - 收藏家｜藝術販售與推廣"}},{path:"order",name:"front-checkout-order-pay",component:()=>e(()=>import("./OrderPaymentView-CJRBo-Tp.js"),__vite__mapDeps([66,1,2,3,4,5,59,13,6,7,8,9,10,12,67,68,69,70,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"訂單明細 - 收藏家｜藝術販售與推廣"}}]},{path:"member",name:"front-member",component:()=>e(()=>import("./MemberView-iRydMQig.js"),__vite__mapDeps([71,5,3,4,10,1,2,14,15,16,13,17,18,19,8,9,20,21,22,23,24,25,72,27,28])),children:[{path:"",name:"front-member",redirect:{name:"front-member-order-search"}},{path:"collection",name:"front-member-collection",component:()=>e(()=>import("./CollectionView-DfE-iJxM.js"),__vite__mapDeps([73,1,2,3,4,5,31,13,6,7,8,9,10,52,12,53,43,44,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"我的收藏 - 收藏家｜藝術販售與推廣"}},{path:"order",name:"front-member-order-search",component:()=>e(()=>import("./OrderSearchView-DpzR2Ilt.js"),__vite__mapDeps([74,67,1,2,3,4,5,59,13,6,7,8,9,10,12,68,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"訂單查詢 - 收藏家｜藝術販售與推廣"}}]}]},{path:"/login",name:"admin-login",component:()=>e(()=>import("./LoginView-a-zvMRZW.js"),__vite__mapDeps([75,64,1,2,3,4,5,76,13,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23,24,25,77,27,28])),meta:{title:"後台登入 - 收藏家"}},{path:"/admin",component:()=>e(()=>import("./AdminView-P8D9zoCq.js"),__vite__mapDeps([78,1,2,3,4,5,76,13,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23,24,25,79,27,28])),children:[{path:"",name:"admin-dashboard",component:()=>e(()=>import("./AdminDashboardView-C81h9HjI.js"),__vite__mapDeps([80,20,1,2,3,4,5,68,13,6,7,8,9,10,14,15,16,17,18,19,21,22,23,24,25,27,28])),meta:{title:"後台首頁 - 後台 - 收藏家"}},{path:"product",name:"admin-product",component:()=>e(()=>import("./AdminProductView-1WGPVu4d.js"),__vite__mapDeps([81,1,2,3,4,5,13,6,7,8,9,10,43,44,82,11,83,69,70,84,85,14,15,16,17,18,19,20,21,22,23,24,25,86,27,28])),meta:{title:"商品管理 - 後台 - 收藏家"}},{path:"order",name:"admin-order",component:()=>e(()=>import("./AdminOrderView-CSaTp-oa.js"),__vite__mapDeps([87,43,10,5,3,4,44,82,11,8,9,1,2,68,13,6,7,84,85,14,15,16,17,18,19,20,21,22,23,24,25,88,27,28])),meta:{title:"訂單管理 - 後台 - 收藏家"}},{path:"coupon",name:"admin-coupon",component:()=>e(()=>import("./AdminCouponView-BjO8N5SJ.js"),__vite__mapDeps([89,1,2,3,4,5,13,6,7,8,9,10,82,11,43,44,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"優惠券管理 - 後台 - 收藏家"}},{path:"article",name:"admin-article",component:()=>e(()=>import("./AdminArticleView-CG9T0PTX.js"),__vite__mapDeps([90,1,2,3,4,5,42,13,6,7,8,9,10,43,44,14,15,16,17,18,19,20,21,22,23,24,25,91,27,28])),meta:{title:"文章管理 - 後台 - 收藏家"}},{path:"article/:type",name:"admin-article-detail",component:()=>e(()=>import("./AdminArticleDetailView-niiSGq16.js"),__vite__mapDeps([92,8,9,10,5,3,4,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,1,2,42,13,6,7,83,69,70,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"文章 - 後台 - 收藏家"}}]},{path:"/:pathMatch(.*)*",component:()=>e(()=>import("./NotFoundView-egK6xkf6.js"),__vite__mapDeps([125,10,5,3,4,1,2,14,15,16,13,17,18,19,8,9,20,21,22,23,24,25,126,27,28])),meta:{title:"404 Not Found"}}],linkExactActiveClass:"active",scrollBehavior(t,n,a){return t.hash?{el:t.hash,top:20}:a||{top:0,behavior:"smooth"}}});f.beforeEach(t=>{document.title=t.meta.title||"收藏家"});const et={mounted(){z.init()}};function ot(t,n,a,m,o,i){const r=L("RouterView");return v(),g(r)}const rt=O(et,[["render",ot]]);Object.keys(h).forEach(t=>V(t,h[t]));A({generateMessage:k({zhTW:$}),validateOnInput:!0});w("zhTW");const c=y(rt);c.config.globalProperties.$calc={...K};const P=D();P.use(({store:t})=>{const n=t;n.router=N(f)});c.component("VForm",T);c.component("VField",b);c.component("ErrorMessage",I);c.component("LottiePlayer",Y);c.component("LoadingOverlay",X);c.use(P);c.use(f);c.use(B,M);c.mount("#app");export{O as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-DbTDiCzX.js","assets/pinia@2.1.7_vue@3.4.19-BGrtT45R.js","assets/vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js","assets/@vue_reactivity@3.4.19-Ddpy7v_1.js","assets/@vue_shared@3.4.19-Bk7MlA8B.js","assets/@vue_runtime-core@3.4.19-CKRBtKAL.js","assets/alert-8GdQBstY.js","assets/sweetalert2@11.10.5-Csd-Z1-j.js","assets/@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js","assets/vue@3.4.19-C3VIO2t_.js","assets/@vue_runtime-dom@3.4.19-Jk3xLe3-.js","assets/bootstrap@5.3.2_@popperjs_core@2.11.8-CaSxFkTE.js","assets/userCart-x-FpTMdM.js","assets/axios@1.6.7-Di5RpEPX.js","assets/vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js","assets/@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js","assets/@vee-validate_i18n@4.12.5-DXNnfMG0.js","assets/vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js","assets/vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js","assets/lottie-web@5.12.2-DrG9waUi.js","assets/moment@2.30.1-Cl4UOzQZ.js","assets/vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js","assets/vue-loading-overlay@6.0.4_vue@3.4-nP5dPYjw.css","assets/vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js","assets/aos@2.3.4-DSOO8Lb4.js","assets/aos@2.3-B0a9OMnn.css","assets/HomeView-BSv3KKHK.css","assets/bootstrap-icons@1.11-Caw20t6A.css","assets/animate.css@4.1-B-gXXBrj.css","assets/IndexView-1Su6Gu-_.js","assets/userArticle-B4cy3BXT.js","assets/userProduct-DvVBjULb.js","assets/FaqSection-CLUV1UIy.js","assets/faq-BM1uFYWD.js","assets/SubscriptionSection-CBlYc2A8.js","assets/SubscriptionSection-1lPWkbv_.css","assets/IndexView-CKcARlFH.css","assets/AboutView-D1xfHfod.js","assets/AboutView-Brs8yLCr.css","assets/NewsView-P4PxbuDu.js","assets/CategoryFilterBar--7xj95LQ.js","assets/CategoryFilterBar-CXw7zBSw.css","assets/adminArticle-DNRT_V1-.js","assets/PaginationComponent-BI6gOsGY.js","assets/PaginationComponent-B3vNJobx.css","assets/NewsView-B7jZejtN.css","assets/NewsDetailView-CZk6jSw8.js","assets/ArticlesView-DPSTQUin.js","assets/ArticlesView-BK8BfyrF.css","assets/ArticleDetailView-CKQhsc0z.js","assets/ArticleDetailView-CZdzYxWJ.css","assets/ProductsView-Bl8Hehuq.js","assets/ProductCard-DBAWVWzD.js","assets/ProductCard-C2uQPA5x.css","assets/ProductsView-CgD8eQpg.css","assets/ProductDetailView-3LrI1Prx.js","assets/ProductDetailView-7FGwhYaW.css","assets/SearchView-5c-_yB7N.js","assets/CheckoutView-DOpGKgbM.js","assets/userOrder-lAOfnWC4.js","assets/CheckoutView-DNn8m-BV.css","assets/CartsView-B0k8yyrk.js","assets/CartsView-Dswq-9jU.css","assets/OrderFormView-CIJM6-C2.js","assets/validation-C0VNgoV8.js","assets/OrderFormView-BLR3Aykg.css","assets/OrderPaymentView-CJRBo-Tp.js","assets/OrderTemplate-BaJtTvqn.js","assets/adminOrder-DQ3nxFDl.js","assets/ClipboardComponent-CUn7i6N5.js","assets/clipboard@2.0.11-Bt85-y58.js","assets/MemberView-iRydMQig.js","assets/MemberView-DzYrsm3W.css","assets/CollectionView-DfE-iJxM.js","assets/OrderSearchView-DpzR2Ilt.js","assets/LoginView-a-zvMRZW.js","assets/adminAuth-BQihDUOY.js","assets/LoginView-DUnbStxP.css","assets/AdminView-P8D9zoCq.js","assets/AdminView-C9lvJDbm.css","assets/AdminDashboardView-C81h9HjI.js","assets/AdminProductView-1WGPVu4d.js","assets/modal-C9K-cvng.js","assets/UploadForm-kyUIcUNN.js","assets/DeleteModal-Dac3byJc.js","assets/DeleteModal-Bd8R7glJ.css","assets/AdminProductView-CV1NYH51.css","assets/AdminOrderView-CSaTp-oa.js","assets/AdminOrderView-Djuop_30.css","assets/AdminCouponView-BjO8N5SJ.js","assets/AdminArticleView-CG9T0PTX.js","assets/AdminArticleView-BxtPNmfV.css","assets/AdminArticleDetailView-niiSGq16.js","assets/@ckeditor_ckeditor5-editor-classic@41.1.0-DFiPxcQg.js","assets/@ckeditor_ckeditor5-ui@41.1.0-CaWR9jcj.js","assets/@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js","assets/lodash-es@4.17.21-C5qYGfgy.js","assets/@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js","assets/@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js","assets/@ckeditor_ckeditor5-engine@41.1-5cC3u8C8.css","assets/color-parse@1.4.2-BwuI8Xag.js","assets/color-name@1.1.4-Bu07Fsda.js","assets/color-convert@2.0.1-DXsnUphg.js","assets/vanilla-colorful@0.7.2-PEGE98j7.js","assets/@ckeditor_ckeditor5-ui@41.1-BaT2Lgoq.css","assets/@ckeditor_ckeditor5-watchdog@41.1.0-B5W-sfM8.js","assets/@ckeditor_ckeditor5-editor-classic@41.1-2PJk5Hat.css","assets/@ckeditor_ckeditor5-essentials@41.1.0-BklXeAa0.js","assets/@ckeditor_ckeditor5-clipboard@41.1.0-Da6NMJSf.js","assets/@ckeditor_ckeditor5-widget@41.1.0-Cjabx6aj.js","assets/@ckeditor_ckeditor5-typing@41.1.0-DSIargVI.js","assets/@ckeditor_ckeditor5-enter@41.1.0-CzFUQWGc.js","assets/@ckeditor_ckeditor5-widget@41.1-vPmh9-Lp.css","assets/@ckeditor_ckeditor5-clipboard@41.1-BqsvgXxQ.css","assets/@ckeditor_ckeditor5-select-all@41.1.0-sQ3_C3Bb.js","assets/@ckeditor_ckeditor5-undo@41.1.0-D8hkqxbB.js","assets/@ckeditor_ckeditor5-basic-styles@41.1.0-C8iLLuLe.js","assets/@ckeditor_ckeditor5-basic-styles@41.1-CzuLU9pV.css","assets/@ckeditor_ckeditor5-link@41.1.0-D-XtOYes.js","assets/@ckeditor_ckeditor5-link@41.1-ATR9SAv1.css","assets/@ckeditor_ckeditor5-heading@41.1.0-POzahyi3.js","assets/@ckeditor_ckeditor5-paragraph@41.1.0-BH1E5uZh.js","assets/@ckeditor_ckeditor5-heading@41.1-DWPkZoLh.css","assets/@ckeditor_ckeditor5-font@41.1.0-Czd5RpMt.js","assets/@ckeditor_ckeditor5-font@41.1-BpuA6PDS.css","assets/NotFoundView-egK6xkf6.js","assets/NotFoundView-DRrsnwx6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
