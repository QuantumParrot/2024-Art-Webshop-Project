import{C as b,f as C}from"./CategoryFilterBar-Csl_uqTM.js";import{m as d,a as S}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as w}from"./adminArticle-C6ZNp5cg.js";import{u as _}from"./userArticle-B4cy3BXT.js";import{P as x}from"./PaginationComponent-BJXtRWBF.js";import{S as P}from"./SubscriptionSection-D08snb9c.js";import{_ as v}from"./index-DqD5Z8wM.js";import{A as e,Q as t,c as n,F as k,ao as F,P as A,aq as a,z as r,aH as B,al as I,ak as V}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as c}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-8GdQBstY.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import"./userProduct-DvVBjULb.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";const L={components:{CategoryFilterBar:b,PaginationComponent:x,SubscriptionSection:P},mixins:[C],data(){return{filter:"",currentPage:1}},computed:{...d(w,["categories"]),...d(_,["columns"]),currentCols(){return this.filter?this.columns.filter(o=>o.category===this.filter):this.columns},totalPages(){return Math.ceil(this.currentCols.length/6)},displayingColumns(){return this.currentCols.filter((o,m)=>Math.floor(m/6)+1===this.currentPage)}},methods:{...S(_,["getArticles"])},mounted(){this.columns.length||this.getArticles(),this.switchFilter(this.$route.query.category||"")}},l=o=>(I("data-v-4e21020c"),o=o(),V(),o),M={class:"h-100 bg-gray text-primary"},N={class:"container py-7"},j=l(()=>t("h2",{class:"text-center py-5 mb-7"},[t("b",null,"專欄文章")],-1)),q={class:"mb-7"},D={key:0,class:"row g-5 list-unstyled mb-7"},R={class:"h-100 card border-0"},z=["src","alt"],E={class:"card-body d-flex flex-column"},H={class:"text-nowrap overflow-x-scroll"},Q={class:"fs-5 fw-bold mb-4"},$={class:"section-title"},G={class:"fs-6 mb-4"},J={class:"flex-grow-1 text-secondary text-justify mb-4"},K={class:"text-end"},O=["onClick"],T=l(()=>t("span",{class:"arrow-animation"},[t("span",{class:"arrow text-light"},[t("i",{class:"bi bi-caret-right-fill"})])],-1)),U=l(()=>t("span",null,"繼續閱讀",-1)),W=[T,U],X={key:1,class:"alert text-center py-7"},Y={key:2,class:"d-flex justify-content-center"};function Z(o,m,tt,ot,p,i){const u=a("CategoryFilterBar"),h=a("RouterLink"),f=a("PaginationComponent"),g=a("SubscriptionSection");return r(),e("div",M,[t("div",N,[j,t("div",q,[n(u,{filters:o.categories.專欄文章,filter:p.filter,onSwitchFilter:o.switchFilter},null,8,["filters","filter","onSwitchFilter"])]),i.displayingColumns.length?(r(),e("ul",D,[(r(!0),e(k,null,F(i.displayingColumns,s=>(r(),e("li",{key:s.id,class:"col-xl-4 col-md-6"},[t("div",R,[t("img",{class:"card-img-top",src:s.image,alt:s.title},null,8,z),t("div",E,[t("div",H,[t("h4",Q,[t("span",$,c(s.title),1)]),t("h5",G,[t("span",null,c(o.$calc.formatDate(s.create_at*1e3)),1),t("span",null,"｜專欄："+c(s.author),1)])]),t("p",J,c(s.description),1),t("div",K,[n(h,{to:`/article/${s.id}`,custom:""},{default:B(({navigate:y})=>[t("button",{type:"button",class:"btn-slider btn-navigate ps-2 pe-4",onClick:y},W,8,O)]),_:2},1032,["to"])])])])]))),128))])):(r(),e("div",X,"這個分類目前沒有文章喔！")),i.totalPages>1?(r(),e("div",Y,[n(f,{current:p.currentPage,total:i.totalPages,onSwitchPage:o.switchPage},null,8,["current","total","onSwitchPage"])])):A("",!0)]),n(g)])}const Lt=v(L,[["render",Z],["__scopeId","data-v-4e21020c"]]);export{Lt as default};
