import{h as _}from"./moment@2.30.1-Cl4UOzQZ.js";import{m as f,a as b}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as p}from"./adminOrder-BaPiT8XO.js";import{_ as x}from"./index-BwfWFV4r.js";import{A as i,Q as s,W as a,c as n,aH as d,F as g,V as u,aq as y,z as l}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as o,n as m}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-Dw2Xe9FX.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";const w={data(){return{greeting:"您好"}},computed:{...f(p,["refactorOrders","unhandled"]),unhandled(){return this.refactorOrders.filter(t=>t.is_paid&&t.state===0).length},expired(){return this.refactorOrders.filter(r=>!r.is_paid).filter(r=>this.$calc.fromNow(r.create_at*1e3).match(/\d+/)[0]>7).length},unprepared(){return this.refactorOrders.filter(t=>t.is_paid&&t.state===1).length}},methods:{...b(p,["getOrders"])},created(){const t=_().format("H");t>4&&t<11?this.greeting="早上好":t>10&&t<18?this.greeting="午安":this.greeting="晚上好"},async mounted(){this.getOrders()}},v={class:"text-end fs-5 mb-lg-7 mb-5"},k={class:"card px-4 py-5 mb-5 lh-lg"},O=s("h3",{class:"mb-6"},[s("span",{class:"section-title"},"訂單近況")],-1),V={class:"row gy-4"},N={class:"col-md-4"},S={class:"h-100 card bg-light border-0"},j={key:0},A=s("h4",{class:"fs-5 mb-5"},[s("b",null,"未付款訂單")],-1),B={class:"fw-bold text-danger"},C={class:"mb-0"},z=s("span",{class:"arrow-animation"},[s("span",{class:"arrow"},"→")],-1),D={key:1,class:"text-center mb-0"},F={class:"col-md-4"},H={class:"h-100 card bg-light border-0"},L={key:0},R=s("h4",{class:"fs-5 mb-5"},[s("b",null,"未確認訂單")],-1),q={class:"fw-bold text-danger"},E={class:"mb-0"},P=s("span",{class:"arrow-animation"},[s("span",{class:"arrow"},"→")],-1),Q={key:1,class:"text-center mb-0"},T={class:"col-md-4"},W={class:"h-100 card bg-light border-0"},G={key:0},I=s("h4",{class:"fs-5 mb-5"},[s("b",null,"未出貨訂單")],-1),J={class:"fw-bold text-danger"},K={class:"mb-0"},M=s("span",{class:"arrow-animation"},[s("span",{class:"arrow"},"→")],-1),U={key:1,class:"mb-0"},X=u('<section class="alert bg-light"><details><summary class="fs-5">後台導覽</summary><ul class="list-unstyled d-flex flex-column gap-3 mt-3"><li class="d-flex flex-column flex-md-row"><p class="mb-md-0"><b><span class="ls-md">商</span>品</b><i class="bi bi-caret-right-fill text-highlight mx-2"></i></p><p class="mb-0">管理您的商品</p></li><li class="d-flex flex-column flex-md-row"><p class="mb-md-0"><b><span class="ls-md">訂</span>單</b><i class="bi bi-caret-right-fill text-highlight mx-2"></i></p><p class="mb-0">管理您的訂單</p></li><li class="d-flex flex-column flex-md-row"><p class="mb-md-0"><b><span class="ls-md">文</span>章</b><i class="bi bi-caret-right-fill text-highlight mx-2"></i></p><p class="mb-0">管理您的網站公告、專欄文章、公益企劃</p></li><li class="d-flex flex-column flex-md-row"><p class="mb-md-0"><b>優惠券</b><i class="bi bi-caret-right-fill text-highlight mx-2"></i></p><p class="mb-0">管理您的優惠券</p></li></ul></details><hr><p class="lh-lg fs-7 mb-0">如果您遇上任何操作問題及錯誤，請聯絡：ataraxia528491@gmail.com</p></section>',1);function Y(t,r,Z,$,h,e){const c=y("RouterLink");return l(),i(g,null,[s("p",v,o(h.greeting)+"，管理員！",1),s("section",k,[O,s("div",V,[s("div",N,[s("div",S,[s("div",{class:m(["h-100 d-flex flex-column justify-content-center px-4 py-5",{"align-items-center":!e.expired}])},[e.expired?(l(),i("div",j,[A,s("p",null,[a("有 "),s("span",B,o(e.expired),1),a(" 筆訂單逾期未付款")]),s("p",C,[z,n(c,{class:"text-info",to:"admin/order?paid=0"},{default:d(()=>[a(" 前往處理 ")]),_:1})])])):(l(),i("p",D,"目前沒有未付款的訂單"))],2)])]),s("div",F,[s("div",H,[s("div",{class:m(["h-100 d-flex flex-column justify-content-center px-4 py-5",{"align-items-center":!e.unhandled}])},[e.unhandled?(l(),i("div",L,[R,s("p",null,[a("有 "),s("span",q,o(e.unhandled),1),a(" 筆訂單已付款")]),s("p",E,[P,n(c,{class:"text-info",to:"admin/order?paid=1&state=0"},{default:d(()=>[a(" 前往處理 ")]),_:1})])])):(l(),i("p",Q,"目前沒有未確認訂單"))],2)])]),s("div",T,[s("div",W,[s("div",{class:m(["h-100 d-flex flex-column justify-content-center px-4 py-5",{"align-items-md-center":!e.unprepared}])},[e.unprepared?(l(),i("div",G,[I,s("p",null,[a("有 "),s("span",J,o(e.unprepared),1),a(" 筆訂單尚未出貨")]),s("p",K,[M,n(c,{class:"text-info",to:"admin/order?paid=1&state=1"},{default:d(()=>[a(" 前往處理 ")]),_:1})])])):(l(),i("p",U,"目前沒有未出貨訂單"))],2)])])])]),X],64)}const Vs=x(w,[["render",Y]]);export{Vs as default};
