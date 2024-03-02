import{d as A,m as _,a as w}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{a as m}from"./axios@1.6.7-Di5RpEPX.js";import{l as N}from"./loader-CArRiQTv.js";import{a as V}from"./alert-C5k3uZHZ.js";import{a as E}from"./adminOrder-Bw7h_oBc.js";import{_ as j}from"./index-CeaPsIIs.js";import{P as e,n as h,l as C}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{O as l,P as s,c as u,aH as I,F as b,V as r,ao as k,N as f,aq as y,aj as i}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-BCnrvazC.js";import"./@ckeditor_ckeditor5-vue@5.1.0-CegNn2NB.js";import"./vue@3.4.19-CdjQKHui.js";import"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DG0Fkrwv.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";var L={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const n=N(),c=V(),{VITE_APP_SITE:g,VITE_APP_PATH:v}=L,O=A("userOrder",{state:()=>({order:{}}),actions:{getOrder(t,o){n.createLoader("get-single-order"),m.get(`${g}/api/${v}/order/${t}`).then(p=>{const{order:d}=p.data;d!==null?this.refactorOrder(d):c.toastAlert("查無此訂單","error")}).finally(()=>{n.removeLoader("get-single-order"),o()})},createOrder(){},refactorOrder(t){if(t.message.startsWith('{"')){const o=JSON.parse(t.message);this.order={...t,message:o.message,state:+o.state,project:o.project}}else this.order={...t,state:t.state||0,project:t.project||"不指定"}},payOrder(t){n.createLoader("pay-order"),m.post(`${g}/api/${v}/pay/${t}`).then(()=>{const o={title:"謝謝您！",text:"我們將立即為您出貨，敬請耐心等待等候！",icon:"success"};c.modalAlert(o),this.getOrder(t)}).catch(o=>c.errorAlert(o)).finally(()=>n.removeLoader("pay-order"))}}}),B={computed:{..._(O,["order"]),..._(E,["statesCode"])},methods:{...w(O,["getOrder","payOrder"]),submitOrderId({id:t},{resetForm:o}){this.getOrder(t,o)}}},D={class:"h-100 bg-secondary text-white"},q={class:"container py-7"},H={class:"row justify-content-center"},R={class:"col-md-6"},z=s("h3",{class:"h2 mb-7"},[s("i",{class:"bi bi-search me-2"}),r(" 查詢訂單進度 ")],-1),F=s("label",{for:"search",class:"mb-5"},"請輸入訂單編號：",-1),W={class:"input-group mb-5"},G=s("button",{type:"submit",class:"btn btn-primary"},[s("i",{class:"bi bi-search"})],-1),J=s("details",{class:"alert bg-light text-primary mb-5"},[s("summary",null,"可供使用的範例"),s("ul",{class:"list-unstyled mt-4 mb-0"},[s("li",null,"-Nr_GNNyiZSiTAKt9xTw")])],-1),K=s("p",{class:"mb-5"},"您的搜尋結果：",-1),M={class:"card p-2"},U={class:"border rounded-2 p-5"},Z=s("b",{class:"p-title"},"訂單編號",-1),x=s("b",{class:"p-title"},"訂購日期",-1),Q={class:"mb-3"},X=s("summary",null,[s("b",{class:"p-title"},"訂購人資訊"),r("（ 展開查看詳細 ）")],-1),Y={class:"list-unstyled mt-3"},ss={class:"mb-2"},ts=s("b",null,"姓名",-1),es={class:"mb-2"},os=s("b",null,"電話",-1),rs={class:"mb-2"},as=s("p",{class:"mb-2"},[s("b",null,"地址"),r("：")],-1),ls={class:"mb-2"},is={class:"mb-2"},ns=s("b",null,"信箱",-1),ds={class:"mb-2"},cs=s("b",null,"選擇贊助的專案",-1),ps=s("p",{class:"mb-2"},[s("b",null,"您的留言：")],-1),_s={class:"mb-2"},ms=s("p",null,[s("b",{class:"p-title mb-0"},"訂購品項"),r("：")],-1),hs={class:"table-responsive"},us={class:"table text-nowrap"},bs=s("thead",null,[s("tr",null,[s("th",{scope:"col"}),s("th",{scope:"col",width:"20%"}),s("th",{scope:"col",width:"10%"}),s("th",{scope:"col",width:"20%"})])],-1),fs={class:"align-middle"},ys={class:"ps-0"},gs=s("td",null,[s("span",{class:"arrow-animation"},[s("span",{class:"arrow"},"→")])],-1),vs={class:"pe-0 text-end"},Os={class:"flex-classic"},Ss=s("span",null,"NT$",-1),$s={colspan:"5",class:"px-0 py-3"},Ps={class:"flex-classic"},Ts={class:"mb-0"},As=s("strong",null,"總計：",-1),ws={class:"d-flex align-items-center"},Ns=s("span",null,[s("b",{class:"p-title"},"付款狀態"),r("：")],-1),Vs={class:"mb-0"},Es=s("span",null,[s("b",{class:"p-title"},"出貨狀態"),r("：")],-1);function js(t,o,p,d,Cs,S){const $=y("v-field"),P=y("v-form");return i(),l("div",D,[s("div",q,[s("div",H,[s("div",R,[z,F,u(P,{onSubmit:S.submitOrderId},{default:I(({errors:a})=>[s("div",W,[u($,{id:"search",type:"text",class:h(["form-control",{"is-invalid":a.id}]),name:"id",rules:"required","validate-on-change":!0},null,8,["class"]),G])]),_:1},8,["onSubmit"]),J,t.order.id?(i(),l(b,{key:0},[K,s("div",M,[s("div",U,[s("p",null,[Z,r("："+e(t.order.id),1)]),s("p",null,[x,r("： "),s("span",null,e(t.$calc.formatTime(t.order.create_at*1e3)),1)]),s("details",Q,[X,s("ul",Y,[s("li",ss,[ts,r("："+e(t.order.user.name),1)]),s("li",es,[os,r("："+e(t.order.user.tel),1)]),s("li",rs,[as,s("p",ls,e(t.order.user.address),1)]),s("li",is,[ns,r("："+e(t.order.user.email),1)]),s("li",ds,[cs,r("："+e(t.order.project),1)]),s("li",null,[ps,s("p",_s,e(t.order.message),1)])])]),ms,s("div",hs,[s("table",us,[bs,s("tbody",fs,[(i(!0),l(b,null,k(t.order.products,(a,T)=>(i(),l("tr",{key:T},[s("td",ys,e(a.product.title),1),s("td",null,e(a.qty)+" "+e(a.product.unit),1),gs,s("td",vs,[s("div",Os,[Ss,s("span",null,e(a.total),1)])])]))),128))]),s("tfoot",null,[s("tr",null,[s("td",$s,[s("div",Ps,[s("p",Ts,[As,r("NT$ "+e(t.order.total),1)]),t.order.is_paid?f("",!0):(i(),l("button",{key:0,type:"button",class:"btn btn-highlight",onClick:o[0]||(o[0]=a=>t.payOrder(t.order.id))}," 付款去"))])])])])]),s("p",ws,[Ns,s("span",{class:h(["me-2",t.order.is_paid?"text-success":"text-danger"])},e(t.order.is_paid?"已付款":"未付款"),3)]),s("p",Vs,[Es,s("span",{style:C({color:t.statesCode[t.order.state].color})},e(t.statesCode[t.order.state].title),5)])])])])],64)):f("",!0)])])])])}const tt=j(B,[["render",js]]);export{tt as default};
