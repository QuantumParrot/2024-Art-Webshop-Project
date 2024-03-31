import{C as v,f as N}from"./CategoryFilterBar-DJjUzyBr.js";import{m as f,a as S}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as F}from"./adminArticle-C6ZNp5cg.js";import{u as h}from"./userArticle-B4cy3BXT.js";import{r as $}from"./swiper@11.0.7-Bu6r0fLX.js";import{_ as g}from"./index-DzDiKqeM.js";import{z as r,A as s,F as m,ao as w,Q as e,c as a,aH as y,aq as n,P as L,al as A,ak as B}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{l as I,P as d}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{P as D}from"./PaginationComponent-BRTWCxiu.js";import{s as R}from"./sleep-cat-CaUVF19w.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-8GdQBstY.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import"./userProduct-DvVBjULb.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";$();const V={props:["data"]},M={"slides-per-view":1,"slides-per-group":1,"centered-slides":!0,pagination:!0,"pagination-clickable":!0,autoplay:!0},q=["alt"],z={class:"slide-title fs-5 py-3"};function J(t,l,_,P,p,o){const u=n("RouterLink");return r(),s("swiper-container",M,[(r(!0),s(m,null,w(_.data,i=>(r(),s("swiper-slide",{key:i.id},[e("div",{class:"slide-content",style:I({backgroundImage:`url(${i.image})`}),alt:i.title},null,12,q),e("div",z,[a(u,{class:"text-decoration-none",to:`/news/${i.id}`},{default:y(()=>[e("b",null,d(i.title),1)]),_:2},1032,["to"])])]))),128))])}const O=g(V,[["render",J],["__scopeId","data-v-1a6ff19b"]]),j={components:{NewsCarousel:O,CategoryFilterBar:v,PaginationComponent:D},mixins:[N],data(){return{sleepCatJSON:R,filter:"",currentPage:1}},computed:{...f(F,["categories"]),...f(h,["news"]),newsCategories(){return this.categories.網站公告.filter(t=>t!=="網站測試")},currentNews(){return this.filter?this.news.filter(t=>t.category===this.filter):this.news},totalPages(){return Math.ceil(this.currentNews.length/10)},displayingNews(){return this.currentNews.filter((t,l)=>Math.floor(l/10)+1===this.currentPage)},carousel(){return this.news.filter((t,l)=>l<3)}},methods:{...S(h,["getArticles","switchPage"])},mounted(){this.news.length||this.getArticles(),this.switchFilter(this.$route.query.category||"")}},b=t=>(A("data-v-ead17bf8"),t=t(),B(),t),E={class:"h-100 bg-gray text-primary"},H={class:"container py-7"},Q=b(()=>e("h2",{class:"text-center py-5 mb-7"},[e("b",null,"最新消息")],-1)),G={class:"mb-7"},K={class:"mb-7"},T={class:"list-unstyled alert bg-white px-md-7 p-5 mb-7 d-flex flex-column gap-5"},U={class:"badge bg-primary fs-6 rounded-1"},W={class:"fs-7 mb-2"},X={class:"mb-0"},Y={key:0,class:"d-flex justify-content-center"},Z=b(()=>e("div",{class:"alert px-md-7 p-5 mb-0 bg-white text-center"},"這個分類目前沒有消息喔！",-1));function tt(t,l,_,P,p,o){const u=n("NewsCarousel"),i=n("CategoryFilterBar"),x=n("RouterLink"),C=n("PaginationComponent"),k=n("LottiePlayer");return r(),s("div",E,[e("div",H,[Q,e("div",G,[a(u,{data:o.carousel},null,8,["data"])]),e("div",K,[a(i,{filters:o.newsCategories,filter:p.filter,"total-title":"全部消息",onSwitchFilter:t.switchFilter},null,8,["filters","filter","onSwitchFilter"])]),o.displayingNews.length?(r(),s(m,{key:0},[e("ul",T,[(r(!0),s(m,null,w(o.displayingNews,c=>(r(),s("li",{key:c.id,class:"d-flex flex-md-row flex-column align-items-md-center gap-md-7 gap-3"},[e("div",null,[e("span",U,d(c.category),1)]),a(x,{class:"nav-link text-decoration-none",to:`/news/${c.id}`},{default:y(()=>[e("p",W,d(t.$calc.formatDate(c.create_at*1e3,"/")),1),e("p",X,d(c.title),1)]),_:2},1032,["to"])]))),128))]),o.totalPages>1?(r(),s("div",Y,[a(C,{current:p.currentPage,total:o.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])])):L("",!0)],64)):(r(),s(m,{key:1},[Z,a(k,{animationData:p.sleepCatJSON,height:250},null,8,["animationData"])],64))])])}const Bt=g(j,[["render",tt],["__scopeId","data-v-ead17bf8"]]);export{Bt as default};