import{m as g,a as x}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as S}from"./alert-FxGjjVMx.js";import{C as T}from"./bootstrap@5.3.2_@popperjs_core@2.11.8-KhBVZdoU.js";import{c as f}from"./userCart-C8xJhx1c.js";import{m as L,n as C}from"./@vue_runtime-dom@3.4.19-BGeaY8D6.js";import{_ as d}from"./index-eQ3mQE3r.js";import{z as p,A as _,Q as t,c as s,aH as i,aJ as F,W as c,aq as r,al as v,ak as $,V as B,F as I}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./sweetalert2@11.10.5-Bw9zh6VB.js";import"./@ckeditor_ckeditor5-vue@5.1.0-CfTehzvT.js";import"./vue@3.4.19-B_XG1K6M.js";import"./axios@1.6.7-Di5RpEPX.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-CVoitIQD.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const V={data(){return{collapse:""}},computed:{...g(f,["carts"])},methods:{...x(f,["getCarts"]),toggle(){this.collapse.toggle()}},watch:{$route(){this.collapse.hide()}},created(){this.getCarts()},mounted(){this.collapse=new T(this.$refs.collapse,{toggle:!1})}},m=o=>(v("data-v-c858325e"),o=o(),$(),o),N={class:"navbar navbar-expand-lg text-primary py-4 shadow-sm"},E={class:"container"},R={class:"ls-sm mb-0 order-1"},A=m(()=>t("b",null,"收藏家",-1)),H={class:"flex-classic gap-2 order-2 order-lg-3"},O=["onClick"],X=m(()=>t("i",{class:"bi bi-cart-fill"},null,-1)),j={class:"position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle"},q=["onClick"],z=m(()=>t("i",{class:"bi bi-person-fill"},null,-1)),D=[z],J=m(()=>t("i",{class:"bi bi-list"},null,-1)),M=[J],Q={class:"navbar-collapse collapse flex-grow-0 order-3 order-lg-2",ref:"collapse"},W={class:"navbar-nav gap-3"},G={class:"nav-item"},K={class:"nav-item"},P={class:"nav-item"},U={class:"nav-item"};function Y(o,a,h,b,u,l){const e=r("RouterLink");return p(),_("nav",N,[t("div",E,[t("h1",R,[s(e,{class:"title",to:"/"},{default:i(()=>[A]),_:1})]),t("div",H,[s(e,{to:"/checkout/carts",custom:""},{default:i(({navigate:n})=>[t("button",{type:"button",class:"btn btn-primary position-relative","aria-label":"購物車",onClick:n},[X,F(t("span",j,null,512),[[L,o.carts.length]])],8,O)]),_:1}),s(e,{to:"/member/order",custom:""},{default:i(({navigate:n})=>[t("button",{type:"button",class:"btn btn-outline-primary","aria-label":"個人收藏／訂單查詢",onClick:n},D,8,q)]),_:1}),t("button",{type:"button",class:"btn btn-primary d-lg-none","aria-label":"線上商城／最新消息／專欄文章／關於我們",onClick:a[0]||(a[0]=(...n)=>l.toggle&&l.toggle(...n))},M)]),t("div",Q,[t("ul",W,[t("li",G,[s(e,{class:"nav-link",to:"/products"},{default:i(()=>[c("線上商城")]),_:1})]),t("li",K,[s(e,{class:"nav-link",to:"/news"},{default:i(()=>[c("最新消息")]),_:1})]),t("li",P,[s(e,{class:"nav-link",to:"/articles"},{default:i(()=>[c("專欄文章")]),_:1})]),t("li",U,[s(e,{class:"nav-link",to:"/about"},{default:i(()=>[c("關於我們")]),_:1})])])],512)])])}const Z=d(V,[["render",Y],["__scopeId","data-v-c858325e"]]),tt={},ot={class:"mt-auto bg-primary text-light"},st=B('<div class="container py-4"><div class="flex-classic"><h2 class="h1 ls-sm mb-0"><b>收藏家</b></h2><div class="d-flex align-items-center gap-2"><a href="#" target="_blank" alt="Twitter/X" aria-label="Twitter/X" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-twitter-x"></i></a><a href="#" target="_blank" alt="Instagram" aria-label="Instagram" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-instagram"></i></a><a href="#" target="_blank" alt="Line" aria-label="Line" class="btn btn-light rounded-circle px-2 py-1"><i class="bi bi-line"></i></a></div></div></div><div class="bg-dark py-2 text-white text-center fs-7"><i class="bi bi-c-circle me-2"></i><span>2024 收藏家工作室｜個人作品，不做商用</span></div>',2),et=[st];function at(o,a){return p(),_("footer",ot,et)}const nt=d(tt,[["render",at]]),it={data(){return{height:0}},methods:{watchScroll(){const{documentElement:o,body:a}=document;o.scrollTop>this.height||a.scrollTop>this.height?this.$refs.backTopBtn.style.opacity="1":this.$refs.backTopBtn.style.opacity="0"}},mounted(){this.$refs.backTopBtn.style.opacity="0",this.height=window.innerHeight/2,window.addEventListener("scroll",this.watchScroll)},unmounted(){window.removeEventListener("scroll",this.watchScroll)}},rt=o=>(v("data-v-82c8f738"),o=o(),$(),o),lt={class:"fixed-bottom d-flex justify-content-end"},ct=rt(()=>t("i",{class:"bi bi-arrow-up"},null,-1)),dt=[ct];function pt(o,a,h,b,u,l){return p(),_("div",lt,[t("button",{type:"button",class:"btn-scroll-top btn btn-sm btn-primary border-2 border-secondary rounded-circle shadow py-1 m-3",ref:"backTopBtn",onClick:a[0]||(a[0]=C((...e)=>o.$scrollTop&&o.$scrollTop(...e),["prevent"]))},dt,512)])}const _t=d(it,[["render",pt],["__scopeId","data-v-82c8f738"]]),mt={components:{FrontNavbar:Z,FrontFooter:nt,ScrollTopButton:_t},computed:{...g(S,["isLoading"])}},ht={class:"h-100 d-flex flex-column",style:{"min-height":"100vh"}};function bt(o,a,h,b,u,l){const e=r("LoadingOverlay"),n=r("FrontNavbar"),w=r("RouterView"),y=r("FrontFooter"),k=r("ScrollTopButton");return p(),_(I,null,[s(e,{isLoading:o.isLoading},null,8,["isLoading"]),t("div",ht,[s(n),t("main",null,[s(w)]),s(y),s(k)])],64)}const Ot=d(mt,[["render",bt]]);export{Ot as default};