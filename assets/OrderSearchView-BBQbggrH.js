import{o as u}from"./OrderTemplate-mmT-BSS9.js";import{m as b,a as h}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{u as m}from"./userOrder-u8rQ-Avl.js";import{_ as f}from"./index-DYnlkhxx.js";import{O as i,c as o,aH as y,F as a,N as v,P as t,aq as e,aj as n}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{n as N}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./adminOrder-n5oZBe-t.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-dm0RMdUk.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import"./vue@3.4.19-CzIOYL8w.js";import"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./userCart-BE0r8f0t.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";import"./aos@2.3.4-DDXLjS56.js";const O={components:{orderTemplate:u},computed:{...b(m,["order"])},methods:{...h(m,["getOrder","payOrder"]),submitOrderId({id:r},{resetForm:s}){this.getOrder(r,s)}}},g=t("h3",{class:"h2 mb-7"},[t("i",{class:"bi bi-search me-3"}),t("span",null,"查詢訂單進度")],-1),S=t("label",{for:"search",class:"mb-5"},"請輸入訂單編號：",-1),x={class:"input-group mb-5"},w=t("button",{type:"submit",class:"btn btn-primary"},[t("i",{class:"bi bi-search"})],-1),C=t("details",{class:"alert bg-light text-primary mb-5"},[t("summary",null,"可供測試的範例"),t("ul",{class:"list-unstyled mt-4 mb-0"},[t("li",{class:"mb-3"},"-Nr_GNNyiZSiTAKt9xTw"),t("li",null,"-NsI1R_8ZLLjqPwoERMF")])],-1),V=t("p",{class:"mb-5"},"您的訂單：",-1);function k(r,s,q,B,F,p){const l=e("v-field"),c=e("v-form"),d=e("order-template");return n(),i(a,null,[g,S,o(c,{onSubmit:p.submitOrderId},{default:y(({errors:_})=>[t("div",x,[o(l,{id:"search",type:"text",class:N(["form-control",{"is-invalid":_.id}]),name:"id",rules:"required","validate-on-change":!0},null,8,["class"]),w])]),_:1},8,["onSubmit"]),C,r.order.id?(n(),i(a,{key:0},[V,o(d,{order:r.order},null,8,["order"])],64)):v("",!0)],64)}const st=f(O,[["render",k]]);export{st as default};
