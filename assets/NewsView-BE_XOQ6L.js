import{m,a as _}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as w}from"./adminArticle-CyyjUXKn.js";import{u as p}from"./userArticle-DEkucGLv.js";import{C as y}from"./CategoryFilterBar-ikL8Ry_o.js";import{P as b}from"./PaginationComponent-B_WGgO4C.js";import{_ as P}from"./index-NKVcBUOc.js";import{A as o,Q as e,c as a,F as d,ao as x,aq as n,z as s,aH as C,al as v,ak as F}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as l}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-Bu4dq1WO.js";import"./sweetalert2@11.10.5-BAvl06kU.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./@vue_runtime-dom@3.4.19-DAqtRikk.js";import"./userProduct-DstgEp8V.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const S={components:{CategoryFilterBar:y,PaginationComponent:b},data(){return{filter:""}},computed:{...m(w,["categories"]),...m(p,["news","currentPage","totalPages"]),newsCategories(){return this.categories.網站公告.filter(t=>t!=="網站測試")},displayingNews(){return this.filter?this.news.filter(t=>t.category===this.filter):this.news}},methods:{..._(p,["getArticles","switchPage"]),switchFilter(t){this.filter=t}},mounted(){this.news.length||this.getArticles(),this.switchFilter(this.$route.query.category||"")}},k=t=>(v("data-v-ce87bbe8"),t=t(),F(),t),A={class:"h-100 bg-gray text-primary"},B={class:"container py-7"},N=k(()=>e("h2",{class:"text-center py-5 mb-7"},[e("b",null,"最新消息")],-1)),I={class:"mb-7"},L={class:"list-unstyled alert bg-white px-md-7 p-5 mb-7 d-flex flex-column gap-5"},V={class:"badge bg-primary fs-6 rounded-1"},q={class:"fs-7 mb-2"},D={class:"mb-0"},R={class:"d-flex justify-content-center"},$={key:1,class:"alert bg-white text-center"};function j(t,c,z,E,g,i){const f=n("CategoryFilterBar"),h=n("RouterLink"),u=n("PaginationComponent");return s(),o("div",A,[e("div",B,[N,e("div",I,[a(f,{filters:i.newsCategories,filter:g.filter,"total-title":"全部消息",onSwitchFilter:i.switchFilter},null,8,["filters","filter","onSwitchFilter"])]),i.displayingNews.length?(s(),o(d,{key:0},[e("ul",L,[(s(!0),o(d,null,x(i.displayingNews,r=>(s(),o("li",{key:r.id,class:"d-flex flex-md-row flex-column align-items-md-center gap-md-7 gap-3"},[e("div",null,[e("span",V,l(r.category),1)]),a(h,{class:"nav-link text-decoration-none",to:`/news/${r.id}`},{default:C(()=>[e("p",q,l(t.$calc.formatDate(r.create_at*1e3,"/")),1),e("p",D,l(r.title),1)]),_:2},1032,["to"])]))),128))]),e("div",R,[a(u,{current:t.currentPage.news,total:t.totalPages.news,onSwitchPage:c[0]||(c[0]=r=>t.switchPage(r,"news"))},null,8,["current","total"])])],64)):(s(),o("div",$,"這個分類目前沒有消息喔！"))])])}const ut=P(S,[["render",j],["__scopeId","data-v-ce87bbe8"]]);export{ut as default};
