import{v}from"./validation-C0VNgoV8.js";import{m as g,a as y}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{c as k}from"./userCart-DHDeZAmZ.js";import{u as x}from"./userOrder-A4bDEWTj.js";import{_ as w}from"./index-jIvyzYmV.js";import{O as q,aH as i,P as b,aq as r,z as m,Q as s,A as p,ao as S,F as z,W as u,c as a,al as C,ak as N}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as l,n as _}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-Bb6H8DPx.js";import"./sweetalert2@11.10.5-BAvl06kU.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./@vue_runtime-dom@3.4.19-DAqtRikk.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const O={mixins:[v],computed:{...g(k,["carts","sum"])},methods:{...y(x,["createOrder"])}},e=t=>(C("data-v-de347cd6"),t=t(),N(),t),V={class:"alert bg-white p-lg-7 p-5 shadow-sm mb-5"},B={class:"accordion mb-5","aria-expanded":"false"},I={class:"accordion-item overflow-hidden"},T=e(()=>s("div",{class:"accordion-header"},[s("button",{type:"button",class:"bg-gray accordion-button collapsed","aria-expanded":"false","data-bs-toggle":"collapse","data-bs-target":"#accordion"},[s("b",null,"查看訂單明細")])],-1)),$={class:"accordion-collapse collapse","aria-expanded":"false",id:"accordion"},j={class:"table-responsive px-lg-7 p-5 pb-0",style:{"max-height":"300px"}},F={class:"table table-hover text-nowrap mb-0"},P=e(()=>s("thead",null,[s("tr",null,[s("th",{scope:"col",width:"40%",class:"pb-3"},"項目"),s("th",{scope:"col",width:"30%",class:"text-end pb-3"},"數量"),s("th",{scope:"col",width:"30%",class:"text-end pb-3"},"小計")])],-1)),A={class:"align-middle"},D={class:"py-3"},E={class:"text-end"},H={class:"text-end"},L={key:0},M={colspan:"2",class:"py-3"},Q={class:"text-end text-danger"},W={class:"sticky-bottom"},G={colspan:"3",class:"text-end py-5 border-0"},J={class:"flex-classic fs-5"},K=e(()=>s("span",null,[s("b",null,"總計")],-1)),R={class:"p-md-7 p-5 border rounded-1"},U={class:"mb-5"},X=e(()=>s("label",{for:"name",class:"form-label is-required"},"收件人姓名",-1)),Y={class:"invalid-feedback"},Z={class:"mb-5"},ss=e(()=>s("label",{for:"tel",class:"form-label is-required"},"收件人手機",-1)),es={class:"invalid-feedback"},ts={class:"mb-5"},os=e(()=>s("label",{for:"email",class:"form-label is-required"},"收件人信箱",-1)),as={class:"invalid-feedback"},ls={class:"mb-5"},is=e(()=>s("label",{for:"address",class:"form-label is-required"},"收件人地址",-1)),ns={class:"invalid-feedback"},cs={class:"mb-5"},ds=e(()=>s("label",{for:"project",class:"form-label"},"選擇您想贊助的計劃",-1)),rs={class:"lh-lg fs-7 fw-bold mb-4"},ms=e(()=>s("span",null,"我們會將訂單的部分收益用來贊助公益團體，詳請可參考：",-1)),_s=e(()=>s("span",null,"（ 新分頁 ）",-1)),ps=e(()=>s("br",null,null,-1)),us=e(()=>s("span",null,"如果選擇不指定，代表您同意由我們自行分配款項",-1)),hs=e(()=>s("option",{value:"",selected:""},"不指定",-1)),bs=e(()=>s("option",{value:"野生動物救援計畫"},"野生動物救援計畫",-1)),fs=e(()=>s("option",{value:"海洋保育計畫"},"海洋保育計畫",-1)),vs=e(()=>s("option",{value:"社會關懷計畫"},"社會關懷計畫",-1)),gs=e(()=>s("label",{for:"message",class:"form-label"},"備註與留言",-1)),ys={class:"flex-classic"},ks=["onClick"],xs=e(()=>s("span",{class:"text-highlight"},[s("i",{class:"bi bi-caret-left-fill"})],-1)),ws=e(()=>s("button",{type:"submit",class:"btn btn-highlight rounded-1"}," 送出訂單",-1));function qs(t,Ss,zs,Cs,Ns,Os){const n=r("v-field"),c=r("error-message"),h=r("router-link"),f=r("v-form");return t.carts.length?(m(),q(f,{key:0,onSubmit:t.createOrder},{default:i(({errors:d})=>[s("div",V,[s("div",B,[s("div",I,[T,s("div",$,[s("div",j,[s("table",F,[P,s("tbody",A,[(m(!0),p(z,null,S(t.carts,o=>(m(),p("tr",{key:o.id},[s("td",D,l(o.product.title),1),s("td",E,l(o.qty),1),s("td",H,l(o.total),1)]))),128)),t.carts[0].coupon?(m(),p("tr",L,[s("td",M,[s("span",null,"優惠券："+l(t.carts[0].coupon.code),1)]),s("td",Q," － "+l(t.sum.total-t.sum.finalTotal),1)])):b("",!0)]),s("tfoot",W,[s("tr",null,[s("td",G,[s("div",J,[K,s("span",null,[u("NT＄"),s("b",null,l(t.sum.finalTotal),1)])])])])])])])])])]),s("div",R,[s("div",U,[X,a(n,{id:"name",type:"text",class:_(["form-control mb-3",{"is-invalid":d.name}]),name:"name",rules:"required"},null,8,["class"]),a(c,{name:"name"},{default:i(({message:o})=>[s("p",Y,l(t.localize(o,"name")),1)]),_:1})]),s("div",Z,[ss,a(n,{id:"tel",type:"tel",class:_(["form-control mb-3",{"is-invalid":d.tel}]),name:"tel",rules:t.isPhone},null,8,["class","rules"]),a(c,{name:"tel"},{default:i(({message:o})=>[s("p",es,l(t.localize(o,"tel")),1)]),_:1})]),s("div",ts,[os,a(n,{id:"email",type:"email",class:_(["form-control mb-3",{"is-invalid":d.email}]),name:"email",rules:"required|email"},null,8,["class"]),a(c,{name:"email"},{default:i(({message:o})=>[s("p",as,l(t.localize(o,"email")),1)]),_:1})]),s("div",ls,[is,a(n,{id:"address",type:"text",class:_(["form-control mb-3",{"is-invalid":d.address}]),name:"address",rules:"required"},null,8,["class"]),a(c,{name:"address"},{default:i(({message:o})=>[s("p",ns,l(t.localize(o,"address")),1)]),_:1})]),s("div",cs,[ds,s("p",rs,[ms,a(h,{class:"text-info",target:"_blank",to:"/about"},{default:i(()=>[u("公益計劃介紹")]),_:1}),_s,ps,us]),a(n,{id:"project",name:"project",as:"select",class:"form-select"},{default:i(()=>[hs,bs,fs,vs]),_:1})]),s("div",null,[gs,a(n,{id:"message",name:"message",rows:"5",class:"form-control",as:"textarea"})])])]),s("div",ys,[a(h,{to:"/checkout/carts"},{default:i(({navigate:o})=>[s("button",{type:"button",class:"btn btn-outline-secondary rounded-1",onClick:o},[xs,u(" 上一步")],8,ks)]),_:1}),ws])]),_:1},8,["onSubmit"])):b("",!0)}const oe=w(O,[["render",qs],["__scopeId","data-v-de347cd6"]]);export{oe as default};
