import{m as p,a as f}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{c as m}from"./userCart-DEOrSsSZ.js";import{u as b}from"./userOrder-BxU-zHmv.js";import{F as v}from"./FaqSection-DDOTf4or.js";import{S as g}from"./SubscriptionSection-CM60W9G7.js";import{_ as k}from"./index-NKVcBUOc.js";import{A as l,Q as t,P as y,O as c,aH as S,c as h,aq as r,z as o,K as w,t as x,al as C,ak as q}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{n as a}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-Bu4dq1WO.js";import"./sweetalert2@11.10.5-BAvl06kU.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./@vue_runtime-dom@3.4.19-DAqtRikk.js";import"./faq-BhEXVCpj.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const V={components:{FaqSection:v,SubscriptionSection:g},data(){return{step:0}},computed:{...p(m,["carts"]),...p(b,["tempOrder"])},methods:{...f(m,["getCarts"])},watch:{carts(s){this.$route.name==="front-checkout-carts"&&(this.step=s.length?1:0)},"$route.name":{handler(s){s==="front-checkout-form"?this.carts.length?this.step=2:this.$router.replace("/checkout/carts"):s==="front-checkout-order-pay"&&(this.tempOrder.id?(this.step=3,this.getCarts()):this.$router.replace("/checkout/carts"))},deep:!0,immediate:!0}}},e=s=>(C("data-v-655b0d62"),s=s(),q(),s),$={class:"h-100 bg-gray text-primary"},j={class:"container py-7"},B={key:0,class:"row justify-content-center"},F={class:"col-md-10"},I={class:"nav w-100 mb-7 align-items-center justify-content-xl-center justify-content-between gap-lg-6 gap-2"},O=e(()=>t("i",{class:"bi bi-1-square-fill",style:{"line-height":"1"}},null,-1)),A=e(()=>t("span",{class:"h6 mb-0"},"確認商品",-1)),N=[O,A],z=e(()=>t("div",{class:"d-md-block d-none"},[t("div",{class:"fs-4 px-2"},[t("span",{class:"text-highlight"},[t("i",{class:"bi bi-arrow-right"})])])],-1)),K=e(()=>t("i",{class:"bi bi-2-square-fill",style:{"line-height":"1"}},null,-1)),R=e(()=>t("span",{class:"h6 mb-0"},"填寫收件資料",-1)),D=[K,R],E=e(()=>t("div",{class:"d-md-block d-none"},[t("div",{class:"fs-4 px-2"},[t("span",{class:"text-highlight"},[t("i",{class:"bi bi-arrow-right"})])])],-1)),H=e(()=>t("i",{class:"bi bi-3-square-fill",style:{"line-height":"1"}},null,-1)),P=e(()=>t("span",{class:"h6 mb-0"},"完成付款",-1)),Q=[H,P],G={class:"row justify-content-center"},J={class:"col-md-10"};function L(s,M,T,U,i,W){const n=r("RouterView"),d=r("FaqSection"),_=r("SubscriptionSection");return o(),l("div",$,[t("div",j,[i.step!==0?(o(),l("div",B,[t("div",F,[t("div",I,[t("div",{class:a(["nav-item h2 mb-0 shadow-sm",{active:i.step===1}])},N,2),z,t("div",{class:a(["nav-item h2 mb-0 shadow-sm",{active:i.step===2}])},D,2),E,t("div",{class:a(["nav-item h2 mb-0 shadow-sm",{active:i.step===3}])},Q,2)])])])):y("",!0),t("div",G,[t("div",J,[s.$route.path==="checkout/form"?(o(),c(n,{key:0},{default:S(({Component:u})=>[(o(),c(w,null,[(o(),c(x(u)))],1024))]),_:1})):(o(),c(n,{key:1}))])])]),h(d,{types:["付款問題","取貨問題","訂單問題"]}),h(_)])}const qt=k(V,[["render",L],["__scopeId","data-v-655b0d62"]]);export{qt as default};
