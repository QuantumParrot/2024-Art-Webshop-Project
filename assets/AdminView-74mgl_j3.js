import{a as p,m}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as r}from"./adminAuth-TOpSrDmJ.js";import{l as x}from"./alert-Bu4dq1WO.js";import{_ as h}from"./index-NKVcBUOc.js";import{z as d,A as _,Q as t,c as i,aH as n,aq as a,al as k,ak as w,P as $,F as L}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-BAvl06kU.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./@vue_runtime-dom@3.4.19-DAqtRikk.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const y={methods:{...p(r,["logout"])}},o=s=>(k("data-v-e082669c"),s=s(),w(),s),S={class:"h-100 d-flex flex-column justify-content-between"},A={class:"sidebar"},V=o(()=>t("h2",{class:"text-center mb-lg-7 mb-5"},"後台管理",-1)),C={class:"nav bg-primary"},I={class:"nav-item flex-grow-1"},R=o(()=>t("i",{class:"text-highlight bi bi-pie-chart-fill me-4"},null,-1)),B=o(()=>t("span",null,"首頁",-1)),N={class:"nav-item flex-grow-1"},q=o(()=>t("i",{class:"text-highlight bi bi-box-seam-fill me-4"},null,-1)),F=o(()=>t("span",null,"商品",-1)),O={class:"nav-item flex-grow-1"},j=o(()=>t("i",{class:"text-highlight bi bi-file-earmark-text me-4"},null,-1)),z=o(()=>t("span",null,"訂單",-1)),E={class:"nav-item flex-grow-1"},H=o(()=>t("i",{class:"text-highlight bi bi-pencil-square me-4"},null,-1)),P=o(()=>t("span",null,"文章",-1)),Q={class:"nav-item flex-grow-1"},D=o(()=>t("i",{class:"text-highlight bi bi-percent me-4"},null,-1)),G=o(()=>t("span",null,"優惠券",-1)),J={class:"nav-footer flex-classic"},K=o(()=>t("i",{class:"bi bi-house-door me-3"},null,-1)),M=o(()=>t("span",null,"前台",-1)),T=o(()=>t("i",{class:"bi bi-box-arrow-right me-3"},null,-1)),U=o(()=>t("span",null,"登出",-1)),W=[T,U];function X(s,l,u,g,b,f){const e=a("RouterLink");return d(),_("nav",S,[t("div",A,[V,t("ul",C,[t("li",I,[i(e,{class:"nav-link",to:"/admin"},{default:n(()=>[R,B]),_:1})]),t("li",N,[i(e,{class:"nav-link",to:"/admin/product"},{default:n(()=>[q,F]),_:1})]),t("li",O,[i(e,{class:"nav-link",to:"/admin/order"},{default:n(()=>[j,z]),_:1})]),t("li",E,[i(e,{class:"nav-link",to:"/admin/article"},{default:n(()=>[H,P]),_:1})]),t("li",Q,[i(e,{class:"nav-link",to:"/admin/coupon"},{default:n(()=>[D,G]),_:1})])])]),t("div",J,[i(e,{to:"/",target:"_blank",class:"w-100 btn btn-outline-light rounded-0"},{default:n(()=>[K,M]),_:1}),t("button",{type:"button",class:"w-100 btn btn-outline-highlight rounded-0",onClick:l[0]||(l[0]=(...c)=>s.logout&&s.logout(...c))},W)])])}const Y=h(y,[["render",X],["__scopeId","data-v-e082669c"]]),Z={components:{AdminSidebar:Y},computed:{...m(r,["isLogin"]),...m(x,["isLoading"])},methods:{...p(r,["checkLogin"])},created(){this.checkLogin()}},tt={key:0,class:"container-fluid h-100"},ot={class:"row h-100"},st={class:"col-lg-3 bg-primary text-white"},it={class:"sticky-top h-100 px-2 py-4",style:{"max-height":"100vh"}},et={class:"col-lg-9 pb-lg-0 pb-7"},nt={class:"h-100 px-2 py-4"};function at(s,l,u,g,b,f){const e=a("LoadingOverlay"),c=a("AdminSidebar"),v=a("RouterView");return d(),_(L,null,[i(e,{isLoading:s.isLoading},null,8,["isLoading"]),s.isLogin?(d(),_("div",tt,[t("div",ot,[t("div",st,[t("div",it,[i(c)])]),t("div",et,[t("div",nt,[i(v)])])])])):$("",!0)],64)}const Bt=h(Z,[["render",at]]);export{Bt as default};
