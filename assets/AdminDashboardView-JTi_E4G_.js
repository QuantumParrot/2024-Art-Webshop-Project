import{h as p}from"./moment@2.30.1-Cl4UOzQZ.js";import{m as c,a as d}from"./pinia@2.1.7_vue@3.4.19-4NNq-WPh.js";import{a}from"./adminOrder-BHC5T7qO.js";import{_ as l}from"./index-Bci7hHNT.js";import{O as e,P as t,V as s,c as _,aH as h,F as f,aq as u,aj as r}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{P as n}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./loader-BKOny_iI.js";import"./alert-BD52YLeq.js";import"./sweetalert2@11.10.5-D1b63BCh.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BRsWHAsX.js";import"./vue@3.4.19-bS3wBxtn.js";import"./@vue_runtime-dom@3.4.19-DVfTC9pq.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-CIwtLcK9.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-CtCrC8gK.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cp1hpGuW.js";import"./vue-router@4.2.5_vue@3.4.19-CGkOaO3i.js";const g={data(){return{greeting:"您好"}},computed:{...c(a,["unhandled"])},methods:{...d(a,["getOrders"])},created(){const o=p().format("H");o>4&&o<11?this.greeting="早上好":o>10&&o<18?this.greeting="午安":this.greeting="晚上好"},mounted(){this.getOrders()}},k={class:"text-end fs-5 mb-6"},b={class:"card p-3"},w=t("h3",{class:"mb-5"},[t("span",{class:"section-title"},"訂單近況")],-1),x={key:0,class:"mb-0"},V={class:"fw-bold text-danger"},O=t("span",{class:"arrow-animation"},[t("span",{class:"arrow"},"→")],-1),y={key:1,class:"mb-0"};function B(o,N,S,$,i,A){const m=u("router-link");return r(),e(f,null,[t("p",k,n(i.greeting)+"，管理員！",1),t("section",b,[w,o.unhandled?(r(),e("p",x,[t("span",null,[s("有 "),t("span",V,n(o.unhandled),1),s(" 筆已付款的訂單尚未處理喔！")]),O,t("span",null,[_(m,{class:"text-info",to:"admin/order"},{default:h(()=>[s("前往訂單頁面")]),_:1})])])):(r(),e("p",y,"目前沒有新消息"))])],64)}const Y=l(g,[["render",B]]);export{Y as default};
