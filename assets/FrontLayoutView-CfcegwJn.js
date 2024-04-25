import{m as u,a as k}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as y}from"./alert-Dw2Xe9FX.js";import{C as w}from"./bootstrap@5.3.2_@popperjs_core@2.11.8-CaSxFkTE.js";import{c as b}from"./userCart-B29TuF3F.js";import{m as $}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as p}from"./index-TqJ5F-GX.js";import{z as _,A as m,Q as t,c as s,aH as i,aJ as F,W as c,aq as n,al as C,ak as L,V as S,F as V}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./axios@1.6.7-Di5RpEPX.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const N={data(){return{collapse:""}},computed:{...u(b,["carts"])},methods:{...k(b,["getCarts"]),toggle(){this.collapse.toggle()}},watch:{$route(){this.collapse.hide()}},created(){this.getCarts()},mounted(){this.collapse=new w(this.$refs.collapse,{toggle:!1})}},l=e=>(C("data-v-7991e56a"),e=e(),L(),e),I={class:"navbar navbar-expand-lg text-primary py-4 shadow-sm"},R={class:"container"},B={class:"ls-sm mb-0 order-1"},A=l(()=>t("b",null,"收藏家",-1)),O={class:"flex-classic gap-2 order-2 order-lg-3"},q=["onClick"],z=l(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),D={class:"position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle"},E=["onClick"],H=l(()=>t("i",{class:"bi bi-person-fill"},null,-1)),J=[H],Q=l(()=>t("i",{class:"bi bi-list"},null,-1)),T=[Q],W={class:"navbar-collapse collapse flex-grow-0 order-3 order-lg-2",ref:"collapse"},j={class:"navbar-nav gap-3"},G={class:"nav-item"},K={class:"nav-item"},M={class:"nav-item"},P={class:"nav-item"};function U(e,r,h,g,f,d){const o=n("RouterLink");return _(),m("nav",I,[t("div",R,[t("h1",B,[s(o,{class:"title",to:"/"},{default:i(()=>[A]),_:1})]),t("div",O,[s(o,{to:"/checkout/carts",custom:""},{default:i(({navigate:a})=>[t("button",{type:"button",class:"btn btn-primary position-relative",onClick:a},[z,F(t("span",D,null,512),[[$,e.carts.length]])],8,q)]),_:1}),s(o,{to:"/member/order",custom:""},{default:i(({navigate:a})=>[t("button",{type:"button",class:"btn btn-outline-primary",onClick:a},J,8,E)]),_:1}),t("button",{type:"button",class:"btn btn-primary d-lg-none",onClick:r[0]||(r[0]=(...a)=>d.toggle&&d.toggle(...a))},T)]),t("div",W,[t("ul",j,[t("li",G,[s(o,{class:"nav-link",to:"/products"},{default:i(()=>[c("線上商城")]),_:1})]),t("li",K,[s(o,{class:"nav-link",to:"/news"},{default:i(()=>[c("最新消息")]),_:1})]),t("li",M,[s(o,{class:"nav-link",to:"/articles"},{default:i(()=>[c("專欄文章")]),_:1})]),t("li",P,[s(o,{class:"nav-link",to:"/about"},{default:i(()=>[c("關於我們")]),_:1})])])],512)])])}const X=p(N,[["render",U],["__scopeId","data-v-7991e56a"]]),Y={},Z={class:"mt-auto bg-primary text-light"},tt=S('<div class="container py-4"><div class="flex-classic"><h2 class="h1 ls-sm mb-0"><b>收藏家</b></h2><div class="d-flex align-items-center gap-2"><a href="#" target="_blank" alt="twitter/x" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-twitter-x"></i></a><a href="#" target="_blank" alt="instagram" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-instagram"></i></a><a href="#" target="_blank" alt="line" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-line"></i></a></div></div></div><div class="bg-dark py-2 text-white text-center fs-7"><i class="bi bi-c-circle me-2"></i><span>2024 收藏家工作室｜個人作品，不做商用</span></div>',2),st=[tt];function ot(e,r){return _(),m("footer",Z,st)}const et=p(Y,[["render",ot]]),at={components:{FrontNavbar:X,FrontFooter:et},computed:{...u(y,["isLoading"])}},it={class:"h-100 d-flex flex-column"};function nt(e,r,h,g,f,d){const o=n("LoadingOverlay"),a=n("FrontNavbar"),v=n("RouterView"),x=n("FrontFooter");return _(),m(V,null,[s(o,{isLoading:e.isLoading},null,8,["isLoading"]),t("div",it,[s(a),t("main",null,[s(v)]),s(x)])],64)}const Vt=p(at,[["render",nt]]);export{Vt as default};
