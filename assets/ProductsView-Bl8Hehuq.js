import{m as p,a as u}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{u as _}from"./userProduct-DvVBjULb.js";import{c as V}from"./userCart-x-FpTMdM.js";import{l as x}from"./alert-8GdQBstY.js";import{P as q,u as f}from"./ProductCard-DBAWVWzD.js";import{P as L}from"./PaginationComponent-BI6gOsGY.js";import{S as N}from"./SubscriptionSection-CBlYc2A8.js";import{l as T,w as z}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as k}from"./index-jdcySpcM.js";import{z as a,A as i,aJ as A,Q as o,al as S,ak as v,c as n,aH as g,F as y,ao as w,P,aq as l}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{n as m,P as D}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";const K={data(){return{keyword:""}},methods:{search(){this.keyword&&this.$router.push(`/search?keyword=${this.keyword}`)}}},R=t=>(S("data-v-c7622b11"),t=t(),v(),t),j={class:"position-relative"},E=R(()=>o("i",{class:"bi bi-search"},null,-1)),H=[E];function J(t,e,C,$,d,c){return a(),i("div",j,[A(o("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=s=>d.keyword=s),placeholder:"輸入您想搜尋的關鍵字",onKeyup:e[1]||(e[1]=z((...s)=>c.search&&c.search(...s),["enter"]))},null,544),[[T,d.keyword,void 0,{trim:!0}]]),o("button",{type:"button",class:m(["btn btn-inline",{disabled:!d.keyword}]),onClick:e[2]||(e[2]=(...s)=>c.search&&c.search(...s))},H,2)])}const M=k(K,[["render",J],["__scopeId","data-v-c7622b11"]]),Q={components:{ProductCard:q,PaginationComponent:L,SubscriptionSection:N,SearchBar:M},computed:{...p(_,["displaying","currentPage","totalPages","categories","filter"]),...p(f,["collection"]),...p(x,["loadingTask"])},watch:{"$route.query":{handler(t){this.switchFilter(t.category||"")},deep:!0},products(){this.getCollection()},collection:{handler(){this.updateCollection()},deep:!0}},methods:{...u(f,["getCollection","updateCollection"]),...u(_,["getProducts","switchFilter","switchPage"]),...u(V,["addToCart"])},mounted(){this.getProducts(),this.switchFilter(this.$route.query.category||"")}},b=t=>(S("data-v-0c65e699"),t=t(),v(),t),U={key:0,class:"h-100 bg-gray text-primary"},G={class:"container py-7"},O={class:"flex-classic py-5 mb-7"},W=b(()=>o("h2",null,[o("b",null,"線上商城")],-1)),X={class:"nav flex-column flex-md-row mb-7"},Y={class:"nav-item"},Z=b(()=>o("span",null,"全部商品",-1)),tt={class:"row g-6 list-unstyled mb-7"},ot={key:0,class:"d-flex justify-content-center"};function et(t,e,C,$,d,c){const s=l("SearchBar"),h=l("RouterLink"),B=l("ProductCard"),I=l("PaginationComponent"),F=l("SubscriptionSection");return t.displaying.length?(a(),i("div",U,[o("div",G,[o("div",O,[W,n(s)]),o("ul",X,[o("li",Y,[n(h,{to:"/products",class:m(["nav-link",{"link-active":!t.filter}])},{default:g(()=>[Z]),_:1},8,["class"])]),(a(!0),i(y,null,w(t.categories,r=>(a(),i("li",{key:r,class:"nav-item"},[n(h,{to:`/products?category=${r}`,class:m(["nav-link",{"link-active":t.filter===r}])},{default:g(()=>[o("span",null,D(r),1)]),_:2},1032,["to","class"])]))),128))]),o("ul",tt,[(a(!0),i(y,null,w(t.displaying,r=>(a(),i("li",{key:r.id,class:"col-xl-4 col-md-6"},[n(B,{product:r},null,8,["product"])]))),128))]),t.totalPages>1?(a(),i("div",ot,[n(I,{current:t.currentPage,total:t.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])])):P("",!0)]),n(F)])):P("",!0)}const qt=k(Q,[["render",et],["__scopeId","data-v-0c65e699"]]);export{qt as default};
