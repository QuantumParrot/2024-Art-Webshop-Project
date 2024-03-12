import{m as h,a as $}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{l as x}from"./alert-dm0RMdUk.js";import{C as w}from"./bootstrap@5.3.2_@popperjs_core@2.11.8-Djxe9Xmu.js";import{c as u}from"./userCart-BE0r8f0t.js";import{m as C}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as d}from"./index-DYnlkhxx.js";import{aj as _,O as p,P as t,c as o,aH as i,V as n,aJ as y,aq as r,al as S,ak as N,U as V,F}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import"./vue@3.4.19-CzIOYL8w.js";import"./axios@1.6.7-Di5RpEPX.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";import"./aos@2.3.4-DDXLjS56.js";const I={data(){return{collapse:""}},computed:{...h(u,["carts"])},methods:{...$(u,["getCarts"]),toggle(){this.collapse.toggle()}},watch:{$route(){this.collapse.hide()}},created(){this.getCarts()},mounted(){this.collapse=new w(this.$refs.collapse,{toggle:!1})}},m=e=>(S("data-v-5d474703"),e=e(),N(),e),L={class:"navbar navbar-expand-lg text-primary py-4 shadow-sm"},P={class:"container"},j={class:"letter-space-sm mb-0 order-1"},B={class:"flex-classic gap-2 order-2 order-lg-3"},T=m(()=>t("i",{class:"bi bi-list"},null,-1)),A=[T],G=["onClick"],H=m(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),q={class:"position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle"},D=["onClick"],E=m(()=>t("i",{class:"bi bi-person-fill"},null,-1)),J=[E],O={class:"navbar-collapse collapse flex-grow-0 order-3 order-lg-2",ref:"collapse"},Q={class:"navbar-nav gap-3"},U={class:"nav-item"},W={class:"nav-item"},z={class:"nav-item"},K={class:"nav-item"};function M(e,c,f,b,v,l){const s=r("router-link");return _(),p("nav",L,[t("div",P,[t("h1",j,[o(s,{class:"title-link",to:"/"},{default:i(()=>[n("收藏家")]),_:1})]),t("div",B,[t("button",{type:"button",class:"btn btn-outline-primary d-lg-none",onClick:c[0]||(c[0]=(...a)=>l.toggle&&l.toggle(...a))},A),o(s,{to:"/checkout/carts",custom:""},{default:i(({navigate:a})=>[t("button",{type:"button",class:"btn btn-primary position-relative",onClick:a},[H,y(t("span",q,null,512),[[C,e.carts.length]])],8,G)]),_:1}),o(s,{to:"/member/order",custom:""},{default:i(({navigate:a})=>[t("button",{type:"button",class:"btn btn-outline-primary",onClick:a},J,8,D)]),_:1})]),t("div",O,[t("ul",Q,[t("li",U,[o(s,{class:"nav-link",to:"/news"},{default:i(()=>[n("最新消息")]),_:1})]),t("li",W,[o(s,{class:"nav-link",to:"/about"},{default:i(()=>[n("關於我們")]),_:1})]),t("li",z,[o(s,{class:"nav-link",to:"/products"},{default:i(()=>[n("線上商城")]),_:1})]),t("li",K,[o(s,{class:"nav-link",to:"/articles"},{default:i(()=>[n("專欄文章")]),_:1})])])],512)])])}const R=d(I,[["render",M],["__scopeId","data-v-5d474703"]]),X={},Y={class:"mt-auto bg-primary text-light"},Z=V('<div class="container py-4"><div class="flex-classic"><h2 class="font-dancing mb-0">The Global Collector</h2><a class="fs-2" target="_blank" href="https://github.com/QuantumParrot/2024-Art-Webshop-Project"><i class="bi bi-github"></i></a></div></div><div class="bg-dark py-2 text-white text-center fs-7"><i class="bi bi-c-circle me-2"></i><span>2024 The Global Collector Studio｜Non-Commercial Side Project</span></div>',2),tt=[Z];function ot(e,c){return _(),p("footer",Y,tt)}const st=d(X,[["render",ot]]),et={components:{FrontNavbar:R,FrontFooter:st},computed:{...h(x,["isLoading"])}},at={class:"h-100 d-flex flex-column"};function it(e,c,f,b,v,l){const s=r("loading-overlay"),a=r("front-navbar"),g=r("router-view"),k=r("front-footer");return _(),p(F,null,[o(s,{isLoading:e.isLoading},null,8,["isLoading"]),t("div",at,[o(a),t("main",null,[o(g)]),o(k)])],64)}const It=d(et,[["render",it]]);export{It as default};
