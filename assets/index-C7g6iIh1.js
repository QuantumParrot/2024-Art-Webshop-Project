/* empty css                               *//* empty css                          */import{c as R}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{c as y}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{d as T,c as V,F as A,b,E as I}from"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import{r as h}from"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import{l as w,s as Y,z as k}from"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import{a as $}from"./axios@1.6.7-Di5RpEPX.js";import{p as M}from"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import{V as B}from"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import{h as u}from"./moment@2.30.1-Cl4UOzQZ.js";import{L as x}from"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import{z as v,O as g,aH as F,Q as d,aq as L}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{c as S,a as N}from"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import{a as C}from"./aos@2.3.4-DSOO8Lb4.js";import{m as z}from"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();function W(t,r="-"){return u(t).format(`YYYY${r}MM${r}DD`)}function j(t,r="-"){return u(t).format(`YYYY${r}MM${r}DD A h:mm:ss`)}function q(t="-"){return u().format(`YYYY${t}MM${t}DD`)}function U(){return parseInt(new Date().getTime()/1e3,10)}function H(t){const r=u(t).format("YYYYMMDD");return u(r,"YYYYMMDD").fromNow()}function K(t){return t>=1e6?`約 ${+(t/1e6).toFixed(2)} MB`:t>=1e3?`約 ${+(t/1e3).toFixed(2)} KB`:`${t} bytes`}const Q=Object.freeze(Object.defineProperty({__proto__:null,convertByteUnit:K,formatDate:W,formatTime:j,fromNow:H,now:U,today:q},Symbol.toStringTag,{value:"Module"})),O=(t,r)=>{const a=t.__vccOpts||t;for(const[m,o]of r)a[m]=o;return a},G={components:{Loading:x},props:{isLoading:{type:Boolean,required:!0},isFull:{type:Boolean,default:!0},opacity:{type:Number,default:.5},backgroundColor:{type:String,default:"#757575"}},data(){return{loading:!1}},watch:{isLoading(){this.loading=this.isLoading}},mounted(){this.loading=this.isLoading}},J=d("div",{class:"spinner"},[d("div",{class:"double-bounce1"}),d("div",{class:"double-bounce2"})],-1);function X(t,r,a,m,o,i){const n=L("Loading");return v(),g(n,{active:o.loading,"onUpdate:active":r[0]||(r[0]=s=>o.loading=s),"is-full-page":a.isFull,"z-index":1060,"background-color":a.backgroundColor,opacity:a.opacity},{default:F(()=>[J]),_:1},8,["active","is-full-page","background-color","opacity"])}const Z=O(G,[["render",X]]),tt="modulepreload",et=function(t){return"/2024-Art-Webshop-Project/"+t},E={},e=function(r,a,m){let o=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link");o=Promise.all(a.map(n=>{if(n=et(n),n in E)return;E[n]=!0;const s=n.endsWith(".css"),D=s?'[rel="stylesheet"]':"";if(!!m)for(let l=i.length-1;l>=0;l--){const _=i[l];if(_.href===n&&(!s||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${D}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":tt,s||(p.as="script",p.crossOrigin=""),p.href=n,document.head.appendChild(p),s)return new Promise((l,_)=>{p.addEventListener("load",l),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}return o.then(()=>r()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},f=S({history:N(),routes:[{path:"/",component:()=>e(()=>import("./HomeView-DqYLjlVv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])),children:[{path:"",name:"front-index",component:()=>e(()=>import("./IndexView-4coixhH2.js"),__vite__mapDeps([29,1,2,3,4,5,30,13,6,7,8,9,10,31,32,33,34,35,14,15,16,17,18,19,20,21,22,23,24,25,36,27,28])),meta:{title:"收藏家｜藝術販售與推廣"}},{path:"about",name:"front-about",component:()=>e(()=>import("./AboutView-Bnzxqgi-.js"),__vite__mapDeps([37,33,1,2,3,4,5,30,13,6,7,8,9,10,31,14,15,16,17,18,19,20,21,22,23,24,25,38,27,28])),meta:{title:"關於我們 - 收藏家｜藝術販售與推廣"}},{path:"news",name:"front-news",component:()=>e(()=>import("./NewsView-D4mPtdeU.js"),__vite__mapDeps([39,40,5,3,4,41,1,2,42,13,6,7,8,9,10,30,31,43,44,45,46,14,15,16,17,18,19,20,21,22,23,24,25,47,27,28])),meta:{title:"最新消息 - 收藏家｜藝術販售與推廣",refuseScrollTop:!0}},{path:"news/:id",name:"front-news-detail",component:()=>e(()=>import("./NewsDetailView-BbiVXl6F.js"),__vite__mapDeps([48,1,2,3,4,5,30,13,6,7,8,9,10,31,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"最新消息 - 收藏家｜藝術販售與推廣"}},{path:"articles",name:"front-articles",component:()=>e(()=>import("./ArticlesView-BZDgOs_c.js"),__vite__mapDeps([49,40,5,3,4,41,1,2,42,13,6,7,8,9,10,30,31,44,45,34,35,14,15,16,17,18,19,20,21,22,23,24,25,50,27,28])),meta:{title:"專欄文章 - 收藏家｜藝術販售與推廣"}},{path:"article/:id",name:"front-article-detail",component:()=>e(()=>import("./ArticleDetailView-PZe9IaTK.js"),__vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,30,13,31,52,12,53,34,35,14,15,16,17,18,19,20,21,22,23,24,25,54,27,28])),meta:{title:"專欄文章 - 收藏家｜藝術販售與推廣"}},{path:"products",name:"front-products",component:()=>e(()=>import("./ProductsView-BndSAVHX.js"),__vite__mapDeps([55,1,2,3,4,5,31,13,6,7,8,9,10,12,52,53,44,45,34,35,14,15,16,17,18,19,20,21,22,23,24,25,56,27,28])),meta:{title:"線上商城 - 收藏家｜藝術販售與推廣"}},{path:"product/:id",name:"front-product-detail",component:()=>e(()=>import("./ProductDetailView-CSIp4HBT.js"),__vite__mapDeps([57,1,2,3,4,5,31,13,6,7,8,9,10,12,52,53,14,15,16,17,18,19,20,21,22,23,24,25,58,27,28])),meta:{title:"商品介紹 - 收藏家｜藝術販售與推廣"}},{path:"search",name:"front-search",component:()=>e(()=>import("./SearchView-BciUtUBj.js"),__vite__mapDeps([59,1,2,3,4,5,31,13,6,7,8,9,10,52,12,53,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"搜尋結果 - 收藏家｜藝術販售與推廣"}},{path:"checkout",name:"front-checkout",component:()=>e(()=>import("./CheckoutView-B4UF5X15.js"),__vite__mapDeps([60,1,2,3,4,5,12,13,6,7,8,9,10,61,32,33,34,35,14,15,16,17,18,19,20,21,22,23,24,25,62,27,28])),children:[{path:"",name:"front-checkout",redirect:{name:"front-checkout-carts"}},{path:"carts",name:"front-checkout-carts",component:()=>e(()=>import("./CartsView-BBpbhlP2.js"),__vite__mapDeps([63,1,2,3,4,5,6,7,8,9,10,12,13,46,14,15,16,17,18,19,20,21,22,23,24,25,64,27,28])),meta:{title:"購物明細 - 收藏家｜藝術販售與推廣"}},{path:"form",name:"front-checkout-form",component:()=>e(()=>import("./OrderFormView-Fh9MZxnc.js"),__vite__mapDeps([65,66,1,2,3,4,5,12,13,6,7,8,9,10,61,14,15,16,17,18,19,20,21,22,23,24,25,67,27,28])),meta:{title:"填寫資訊 - 收藏家｜藝術販售與推廣"}},{path:"order",name:"front-checkout-order-pay",component:()=>e(()=>import("./OrderPaymentView-wmFkSqjM.js"),__vite__mapDeps([68,1,2,3,4,5,61,13,6,7,8,9,10,12,69,70,71,72,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"訂單明細 - 收藏家｜藝術販售與推廣"}}]},{path:"member",name:"front-member",component:()=>e(()=>import("./MemberView-DyYFKZgq.js"),__vite__mapDeps([73,5,3,4,10,1,2,14,15,16,13,17,18,19,8,9,20,21,22,23,24,25,74,27,28])),children:[{path:"",name:"front-member",redirect:{name:"front-member-order-search"}},{path:"collection",name:"front-member-collection",component:()=>e(()=>import("./CollectionView-BlkZWSrU.js"),__vite__mapDeps([75,1,2,3,4,5,31,13,6,7,8,9,10,52,12,53,44,45,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"我的收藏 - 收藏家｜藝術販售與推廣"}},{path:"order",name:"front-member-order-search",component:()=>e(()=>import("./OrderSearchView-BvMqwa6p.js"),__vite__mapDeps([76,69,1,2,3,4,5,61,13,6,7,8,9,10,12,70,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"訂單查詢 - 收藏家｜藝術販售與推廣"}}]}]},{path:"/login",name:"admin-login",component:()=>e(()=>import("./LoginView-C4aGPIVo.js"),__vite__mapDeps([77,66,1,2,3,4,5,78,13,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23,24,25,79,27,28])),meta:{title:"後台登入 - 收藏家"}},{path:"/admin",component:()=>e(()=>import("./AdminView-eZ7I7_ko.js"),__vite__mapDeps([80,1,2,3,4,5,78,13,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23,24,25,81,27,28])),children:[{path:"",name:"admin-dashboard",component:()=>e(()=>import("./AdminDashboardView-Gt2UrfCP.js"),__vite__mapDeps([82,20,1,2,3,4,5,70,13,6,7,8,9,10,14,15,16,17,18,19,21,22,23,24,25,27,28])),meta:{title:"後台首頁 - 後台 - 收藏家"}},{path:"product",name:"admin-product",component:()=>e(()=>import("./AdminProductView-B1MFVGVB.js"),__vite__mapDeps([83,1,2,3,4,5,13,6,7,8,9,10,44,45,84,11,85,71,72,86,87,14,15,16,17,18,19,20,21,22,23,24,25,88,27,28])),meta:{title:"商品管理 - 後台 - 收藏家"}},{path:"order",name:"admin-order",component:()=>e(()=>import("./AdminOrderView-hcCAt0Ji.js"),__vite__mapDeps([89,44,10,5,3,4,45,84,11,8,9,1,2,70,13,6,7,86,87,14,15,16,17,18,19,20,21,22,23,24,25,90,27,28])),meta:{title:"訂單管理 - 後台 - 收藏家"}},{path:"coupon",name:"admin-coupon",component:()=>e(()=>import("./AdminCouponView-C3P3pWpq.js"),__vite__mapDeps([91,1,2,3,4,5,13,6,7,8,9,10,84,11,44,45,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"優惠券管理 - 後台 - 收藏家"}},{path:"article",name:"admin-article",component:()=>e(()=>import("./AdminArticleView-ByJOCJLR.js"),__vite__mapDeps([92,1,2,3,4,5,42,13,6,7,8,9,10,44,45,14,15,16,17,18,19,20,21,22,23,24,25,93,27,28])),meta:{title:"文章管理 - 後台 - 收藏家"}},{path:"article/:type",name:"admin-article-detail",component:()=>e(()=>import("./AdminArticleDetailView-LGMbVb-J.js"),__vite__mapDeps([94,8,9,10,5,3,4,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,1,2,42,13,6,7,85,71,72,14,15,16,17,18,19,20,21,22,23,24,25,27,28])),meta:{title:"文章 - 後台 - 收藏家"}}]},{path:"/:pathMatch(.*)*",component:()=>e(()=>import("./NotFoundView-D08ItKV4.js"),__vite__mapDeps([127,10,5,3,4,1,2,14,15,16,13,17,18,19,8,9,20,21,22,23,24,25,128,27,28])),meta:{title:"404 Not Found"}}],linkExactActiveClass:"active",scrollBehavior(t,r,a){return t.hash?{el:t.hash,top:20}:a||(t.meta.refuseScrollTop?!1:{top:0,behavior:"smooth"})}});f.beforeEach(t=>{document.title=t.meta.title||"收藏家"});const ot={mounted(){C.init()}};function rt(t,r,a,m,o,i){const n=L("RouterView");return v(),g(n)}const nt=O(ot,[["render",rt]]);Object.keys(h).forEach(t=>T(t,h[t]));V({generateMessage:w({zhTW:k}),validateOnInput:!0});Y("zhTW");const c=R(nt);c.config.globalProperties.$calc={...Q};const P=y();P.use(({store:t})=>{const r=t;r.router=z(f)});c.component("VForm",A);c.component("VField",b);c.component("ErrorMessage",I);c.component("LottiePlayer",B);c.component("LoadingOverlay",Z);c.use(P);c.use(f);c.use(M,$);c.mount("#app");export{O as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView-DqYLjlVv.js","assets/pinia@2.1.7_vue@3.4.19-BGrtT45R.js","assets/vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js","assets/@vue_reactivity@3.4.19-Ddpy7v_1.js","assets/@vue_shared@3.4.19-Bk7MlA8B.js","assets/@vue_runtime-core@3.4.19-CKRBtKAL.js","assets/alert-Dw2Xe9FX.js","assets/sweetalert2@11.10.5-Csd-Z1-j.js","assets/@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js","assets/vue@3.4.19-C3VIO2t_.js","assets/@vue_runtime-dom@3.4.19-Jk3xLe3-.js","assets/bootstrap@5.3.2_@popperjs_core@2.11.8-CaSxFkTE.js","assets/userCart-B29TuF3F.js","assets/axios@1.6.7-Di5RpEPX.js","assets/vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js","assets/@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js","assets/@vee-validate_i18n@4.12.5-DXNnfMG0.js","assets/vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js","assets/vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js","assets/lottie-web@5.12.2-DrG9waUi.js","assets/moment@2.30.1-Cl4UOzQZ.js","assets/vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js","assets/vue-loading-overlay@6.0.4_vue@3.4-nP5dPYjw.css","assets/vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js","assets/aos@2.3.4-DSOO8Lb4.js","assets/aos@2.3-B0a9OMnn.css","assets/HomeView-DzvaYK2A.css","assets/bootstrap-icons@1.11-Caw20t6A.css","assets/animate.css@4.1-B-gXXBrj.css","assets/IndexView-4coixhH2.js","assets/userArticle-CsUAow0B.js","assets/userProduct-hXqBbad6.js","assets/FaqSection-Do2r2FWB.js","assets/faq-BM1uFYWD.js","assets/SubscriptionSection-C7cUhf4c.js","assets/SubscriptionSection-1lPWkbv_.css","assets/IndexView-BitF_9kA.css","assets/AboutView-Bnzxqgi-.js","assets/AboutView-Brs8yLCr.css","assets/NewsView-D4mPtdeU.js","assets/CategoryFilterBar-BMHNrxHS.js","assets/CategoryFilterBar-CXw7zBSw.css","assets/adminArticle-DrdDTXcf.js","assets/swiper@11.0.7-Bu6r0fLX.js","assets/PaginationComponent-DKkSzRbz.js","assets/PaginationComponent-B3vNJobx.css","assets/sleep-cat-CaUVF19w.js","assets/NewsView-Dfxf1H0p.css","assets/NewsDetailView-BbiVXl6F.js","assets/ArticlesView-BZDgOs_c.js","assets/ArticlesView-DrGr_3io.css","assets/ArticleDetailView-PZe9IaTK.js","assets/ProductCard-BFNDaQhK.js","assets/ProductCard-sYWlp8NN.css","assets/ArticleDetailView-CZdzYxWJ.css","assets/ProductsView-BndSAVHX.js","assets/ProductsView-CK7pNK6i.css","assets/ProductDetailView-CSIp4HBT.js","assets/ProductDetailView-Drwja_w3.css","assets/SearchView-BciUtUBj.js","assets/CheckoutView-B4UF5X15.js","assets/userOrder-RtD7d9aW.js","assets/CheckoutView-DNn8m-BV.css","assets/CartsView-BBpbhlP2.js","assets/CartsView-BxZM2XYb.css","assets/OrderFormView-Fh9MZxnc.js","assets/validation-C0VNgoV8.js","assets/OrderFormView-BLR3Aykg.css","assets/OrderPaymentView-wmFkSqjM.js","assets/OrderTemplate-DsKsVvw3.js","assets/adminOrder-DN7mKqm9.js","assets/ClipboardComponent-BZ82M7ns.js","assets/clipboard@2.0.11-Bt85-y58.js","assets/MemberView-DyYFKZgq.js","assets/MemberView-Bn__5DKc.css","assets/CollectionView-BlkZWSrU.js","assets/OrderSearchView-BvMqwa6p.js","assets/LoginView-C4aGPIVo.js","assets/adminAuth-Z5eyCC7e.js","assets/LoginView-DUnbStxP.css","assets/AdminView-eZ7I7_ko.js","assets/AdminView-C9lvJDbm.css","assets/AdminDashboardView-Gt2UrfCP.js","assets/AdminProductView-B1MFVGVB.js","assets/modal-C9K-cvng.js","assets/UploadForm-DpG1WQXj.js","assets/DeleteModal-DcvZlpqm.js","assets/DeleteModal-Bd8R7glJ.css","assets/AdminProductView-BiVR9PfW.css","assets/AdminOrderView-hcCAt0Ji.js","assets/AdminOrderView-Djuop_30.css","assets/AdminCouponView-C3P3pWpq.js","assets/AdminArticleView-ByJOCJLR.js","assets/AdminArticleView-BFI48O7Z.css","assets/AdminArticleDetailView-LGMbVb-J.js","assets/@ckeditor_ckeditor5-editor-classic@41.1.0-DFiPxcQg.js","assets/@ckeditor_ckeditor5-ui@41.1.0-CaWR9jcj.js","assets/@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js","assets/lodash-es@4.17.21-C5qYGfgy.js","assets/@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js","assets/@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js","assets/@ckeditor_ckeditor5-engine@41.1-5cC3u8C8.css","assets/color-parse@1.4.2-BwuI8Xag.js","assets/color-name@1.1.4-Bu07Fsda.js","assets/color-convert@2.0.1-DXsnUphg.js","assets/vanilla-colorful@0.7.2-PEGE98j7.js","assets/@ckeditor_ckeditor5-ui@41.1-BaT2Lgoq.css","assets/@ckeditor_ckeditor5-watchdog@41.1.0-B5W-sfM8.js","assets/@ckeditor_ckeditor5-editor-classic@41.1-2PJk5Hat.css","assets/@ckeditor_ckeditor5-essentials@41.1.0-BklXeAa0.js","assets/@ckeditor_ckeditor5-clipboard@41.1.0-Da6NMJSf.js","assets/@ckeditor_ckeditor5-widget@41.1.0-Cjabx6aj.js","assets/@ckeditor_ckeditor5-typing@41.1.0-DSIargVI.js","assets/@ckeditor_ckeditor5-enter@41.1.0-CzFUQWGc.js","assets/@ckeditor_ckeditor5-widget@41.1-vPmh9-Lp.css","assets/@ckeditor_ckeditor5-clipboard@41.1-BqsvgXxQ.css","assets/@ckeditor_ckeditor5-select-all@41.1.0-sQ3_C3Bb.js","assets/@ckeditor_ckeditor5-undo@41.1.0-D8hkqxbB.js","assets/@ckeditor_ckeditor5-basic-styles@41.1.0-C8iLLuLe.js","assets/@ckeditor_ckeditor5-basic-styles@41.1-CzuLU9pV.css","assets/@ckeditor_ckeditor5-link@41.1.0-D-XtOYes.js","assets/@ckeditor_ckeditor5-link@41.1-ATR9SAv1.css","assets/@ckeditor_ckeditor5-heading@41.1.0-POzahyi3.js","assets/@ckeditor_ckeditor5-paragraph@41.1.0-BH1E5uZh.js","assets/@ckeditor_ckeditor5-heading@41.1-DWPkZoLh.css","assets/@ckeditor_ckeditor5-font@41.1.0-Czd5RpMt.js","assets/@ckeditor_ckeditor5-font@41.1-BpuA6PDS.css","assets/NotFoundView-D08ItKV4.js","assets/NotFoundView-CmzbGLkF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
