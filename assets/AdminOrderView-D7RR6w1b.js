import{P as D}from"./PaginationComponent-BSNQdtp4.js";import{m as A}from"./modal-BexZxidR.js";import{m as $,a as P}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as v}from"./adminOrder-BAjVahDA.js";import{l as N,a as B}from"./alert-Bb6H8DPx.js";import{m as M,v as V,n as I}from"./@vue_runtime-dom@3.4.19-DAqtRikk.js";import{_ as S}from"./index-jIvyzYmV.js";import{z as r,A as c,Q as e,aJ as C,F as h,ao as y,P as f,W as m,al as Q,ak as U,c as O,aH as w,aq as k}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as s,n as _,l as z}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as E}from"./DeleteModal-CSZHAuE6.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-Bc1vvLaR.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-BAvl06kU.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const R={mixins:[A],props:["tempOrder"],data(){return{modal:"",tab:"content"}},computed:{...$(v,["statesCode"]),...$(N,["loadingTask"])},methods:{...P(v,["updateOrder"]),...P(B,["checkAlert"]),preUpdate(t){const o=+t.target.value,n={code:o,order:this.tempOrder},g=()=>{this.updateOrder(n,this.hideModal)};if(o===4){const i={title:"確定完成訂單？",text:"提醒您，完成訂單之後就無法修改狀態囉！"};this.checkAlert(i,g,()=>{t.target.value=this.tempOrder.state})}else g()}}},a=t=>(Q("data-v-68b4fc2c"),t=t(),U(),t),j={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},q={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content"},J={class:"modal-header"},L={class:"fs-5 mb-0"},W=["disabled"],G=a(()=>e("i",{class:"bi bi-x-circle-fill"},null,-1)),K=[G],X={class:"modal-body py-4"},Y={class:"nav nav-pills bg-gray rounded-2 mb-3"},Z={class:"nav-item flex-grow-1"},ee={class:"nav-item flex-grow-1"},te={class:"table table-light align-middle"},se={class:"text-end"},oe={class:"flex-classic"},le=a(()=>e("span",null,"NT＄",-1)),ne={key:0},ie={colspan:"2",class:"fs-7"},ae={class:"flex-classic"},de=a(()=>e("span",null,"NT＄",-1)),re={class:"fs-5 fw-bold"},ce=a(()=>e("td",{colspan:"2",class:"py-3"},"總計",-1)),me={class:"text-end"},pe={class:"mb-0"},_e=a(()=>e("span",null,"付款狀態：",-1)),he=a(()=>e("span",{class:"badge bg-primary me-2"},"訂單成立日期",-1)),ue=a(()=>e("hr",null,null,-1)),be=a(()=>e("span",{class:"badge bg-primary me-2"},"姓名",-1)),ge=a(()=>e("hr",null,null,-1)),fe=a(()=>e("span",{class:"badge bg-primary me-2"},"電話",-1)),ve=a(()=>e("hr",null,null,-1)),ye=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"地址")],-1)),Oe=a(()=>e("hr",null,null,-1)),we=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"信箱")],-1)),ke=a(()=>e("hr",null,null,-1)),$e=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"贊助計畫")],-1)),Pe=a(()=>e("hr",null,null,-1)),Ce=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"留言")],-1)),xe={class:"pre-wrap mb-0"},Me={key:0,class:"modal-footer"},Se={class:"alert bg-gray d-flex align-items-center gap-3 text-nowrap mb-0"},Te={class:"d-flex align-items-center"},Fe={key:0,class:"spinner-border text-primary me-3",role:"status"},De=a(()=>e("span",null,"修改訂單狀態",-1)),Ae=["value","disabled"],Ne=["value"];function Be(t,o,n,g,i,u){return r(),c("div",j,[e("div",q,[e("div",H,[e("div",J,[e("h4",L,s(n.tempOrder.id),1),e("button",{type:"button",class:"btn border-0 p-0 fs-4",disabled:!!t.loadingTask,onClick:o[0]||(o[0]=(...d)=>t.hideModal&&t.hideModal(...d))},K,8,W)]),e("div",X,[e("ul",Y,[e("li",Z,[e("button",{type:"button",onClick:o[1]||(o[1]=d=>i.tab="content"),class:_(["w-100 nav-link",{active:i.tab==="content"}])}," 訂購商品",2)]),e("li",ee,[e("button",{type:"button",onClick:o[2]||(o[2]=d=>i.tab="info"),class:_(["w-100 nav-link",{active:i.tab==="info"}])}," 客戶資訊",2)])]),C(e("div",null,[e("table",te,[e("tbody",null,[(r(!0),c(h,null,y(n.tempOrder.products,(d,p)=>(r(),c(h,{key:p},[e("tr",null,[e("td",null,s(d.product.title),1),e("td",null,"× "+s(d.qty)+" "+s(d.product.unit),1),e("td",se,[e("div",oe,[le,e("span",{class:_({"text-decoration-line-through":d.coupon})},s(d.total),3)])])]),d.coupon?(r(),c("tr",ne,[e("td",ie,"優惠券："+s(d.coupon.code),1),e("td",null,[e("div",ae,[de,e("span",null,[e("b",null,s(d.final_total),1)])])])])):f("",!0)],64))),128))]),e("tfoot",re,[e("tr",null,[ce,e("td",me,"NT＄"+s(n.tempOrder.total),1)])])]),e("p",pe,[_e,e("span",{class:_(n.tempOrder.is_paid?"text-success":"text-danger")},s(n.tempOrder.is_paid?"已付款":"未付款"),3)])],512),[[M,i.tab==="content"]]),C(e("div",null,[e("p",null,[he,m(" "+s(t.$calc.formatTime(n.tempOrder.create_at*1e3)),1)]),ue,e("p",null,[be,m(" "+s(n.tempOrder.user.name),1)]),ge,e("p",null,[fe,m(" "+s(n.tempOrder.user.tel),1)]),ve,ye,e("p",null,s(n.tempOrder.user.address),1),Oe,we,e("p",null,s(n.tempOrder.user.email),1),ke,$e,e("p",null,s(n.tempOrder.project),1),Pe,Ce,e("p",xe,s(n.tempOrder.message),1)],512),[[M,i.tab==="info"]])]),n.tempOrder.is_paid&&n.tempOrder.state!==4?(r(),c("div",Me,[e("div",Se,[e("div",Te,[t.loadingTask===n.tempOrder.id?(r(),c("div",Fe)):f("",!0),De]),e("select",{class:"form-select",value:n.tempOrder.state,onChange:o[3]||(o[3]=(...d)=>u.preUpdate&&u.preUpdate(...d)),disabled:!!t.loadingTask},[(r(!0),c(h,null,y(t.statesCode,(d,p)=>(r(),c("option",{key:p,value:p},s(d.title),9,Ne))),128))],40,Ae)])])):f("",!0)])])],512)}const Ve=S(R,[["render",Be],["__scopeId","data-v-68b4fc2c"]]),Ie={components:{PaginationComponent:D,AdminOrderModal:Ve,DeleteModal:E},data(){return{tempOrder:{user:{},products:{}},deletePermission:!1}},computed:{...$(v,["refactorOrders","filterOrders","displaying","currentPage","totalPages","statesCode","stateOptions","timeAscending","isPaid","orderState"])},methods:{...P(v,["getOrders","switchPage","deleteOrder","downTheDrain","switchFilter"]),openModal(t,o){this.tempOrder={...t,total:+t.total.toFixed(0)},o==="check"?this.$refs.orderModal.showModal():this.$refs.deleteModal.showModal()},changeFilterByQuery(t){(t.paid||t.state)&&(this.switchFilter("isPaid",+t.paid||2),this.switchFilter("orderState",+t.state))}},watch:{"$route.query":{handler(t){this.changeFilterByQuery(t)},deep:!0},totalPages(t){t<this.currentPage&&this.switchPage(1)},isPaid(t){t||this.switchFilter("orderState",5)}},mounted(){this.refactorOrders.length||this.getOrders(),this.changeFilterByQuery(this.$route.query)}},Qe={class:"lh-lg text-end mb-6"},Ue=e("h3",{class:"fs-2 mb-3"},"ORDERS｜訂單",-1),ze={class:"text-muted"},Ee={class:"alert bg-gray flex-classic mb-5"},Re={class:"d-flex gap-2"},je={for:"unlock",class:"btn btn-outline-primary"},qe={class:"d-flex flex-md-row flex-column gap-3 mb-5"},He={class:"d-flex align-items-center text-nowrap"},Je=e("label",{for:"time",class:"form-label mb-0 me-3"},[e("b",null,"建立時間")],-1),Le=["value"],We=e("option",{value:1},"由舊到新",-1),Ge=e("option",{value:0},"由新到舊",-1),Ke=[We,Ge],Xe={class:"d-flex align-items-center text-nowrap"},Ye=e("label",{for:"paid",class:"form-label mb-0 me-3"},[e("b",null,"付款狀態")],-1),Ze=["value"],et=e("option",{value:2,selected:""},"全部",-1),tt=e("option",{value:1},"已付款",-1),st=e("option",{value:0},"未付款",-1),ot=[et,tt,st],lt={class:"d-flex align-items-center text-nowrap"},nt=e("label",{for:"delivery",class:"form-label mb-0 me-3"},[e("b",null,"出貨狀態")],-1),it=["value"],at=e("option",{value:5,selected:""},"全部",-1),dt=["value"],rt={key:0,class:"table-responsive"},ct={class:"table table-hover text-nowrap"},mt=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"日期"),e("th",{scope:"col",width:"40%"},"訂單"),e("th",{scope:"col",width:"30%",class:"d-none d-md-table-cell text-end"},"總額"),e("th",{scope:"col",width:"15%",class:"text-center"},"狀態"),e("th",{scope:"col",class:"text-center"},"刪除")])],-1),pt={class:"align-middle"},_t=["onClick"],ht={class:"me-2"},ut=e("i",{class:"bi bi-search"},null,-1),bt={class:"d-none d-md-table-cell text-end"},gt={class:"text-center fw-bold"},ft={class:"text-end"},vt=["disabled","onClick"],yt=e("i",{class:"bi bi-trash3-fill"},null,-1),Ot=[yt],wt={key:1,class:"alert bg-gray"},kt={class:"mb-4"},$t={class:"text-muted"},Pt={class:"mt-3"},Ct=e("b",null,"客戶姓名",-1),xt=e("b",null,"訂單總額",-1);function Mt(t,o,n,g,i,u){const d=k("pagination-component"),p=k("admin-order-modal"),T=k("delete-modal");return r(),c(h,null,[e("div",Qe,[Ue,e("p",ze,"目前共有 "+s(t.refactorOrders.length)+" 筆訂單",1)]),e("div",Ee,[e("div",Re,[C(e("input",{type:"checkbox",id:"unlock",class:"btn-check","onUpdate:modelValue":o[0]||(o[0]=l=>i.deletePermission=l)},null,512),[[V,i.deletePermission]]),e("label",je,[e("i",{class:_(["bi",i.deletePermission?"bi-unlock-fill":"bi-lock-fill"])},null,2)]),i.deletePermission?(r(),c("button",{key:0,type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=(...l)=>t.downTheDrain&&t.downTheDrain(...l))},"刪除所有訂單")):f("",!0)]),O(d,{current:t.currentPage,total:t.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])]),e("div",qe,[e("div",He,[Je,e("select",{class:"form-select",id:"time",value:t.timeAscending,onChange:o[2]||(o[2]=l=>t.switchFilter("timeAscending",+l.target.value))},Ke,40,Le)]),e("div",Xe,[Ye,e("select",{class:"form-select",id:"paid",value:t.isPaid,onChange:o[3]||(o[3]=l=>t.switchFilter("isPaid",+l.target.value))},ot,40,Ze)]),e("div",lt,[nt,e("select",{class:"form-select",id:"delivery",value:t.orderState,onChange:o[4]||(o[4]=l=>t.switchFilter("orderState",+l.target.value))},[at,(r(!0),c(h,null,y(t.stateOptions,l=>{var b;return r(),c("option",{key:l,value:l},s((b=t.statesCode[l])==null?void 0:b.title),9,dt)}),128))],40,it)])]),t.displaying.length?(r(),c("div",rt,[e("table",ct,[mt,e("tbody",pt,[(r(!0),c(h,null,y(t.displaying,l=>{var b,x;return r(),c("tr",{key:l.id},[e("td",null,s(t.$calc.formatDate(l.create_at*1e3,"/")),1),e("td",null,[e("span",{class:_(["badge me-3",l.is_paid?"bg-success":"bg-danger"])},s(l.is_paid?"已付款":"未付款"),3),e("a",{href:"#",onClick:I(F=>u.openModal(l,"check"),["prevent"])},[e("span",ht,s(l.user.name),1),ut],8,_t)]),e("td",bt,"NT$ "+s(l.total),1),e("td",gt,[e("span",{style:z({color:(b=t.statesCode[l.state||0])==null?void 0:b.color})},s((x=t.statesCode[l.state||0])==null?void 0:x.title),5)]),e("td",ft,[e("button",{type:"button",class:"btn btn-outline-danger",disabled:!i.deletePermission,onClick:F=>u.openModal(l,"delete")},Ot,8,vt)])])}),128))])])])):(r(),c("div",wt,"沒有訂單記錄")),O(p,{ref:"orderModal","temp-order":i.tempOrder},null,8,["temp-order"]),O(T,{ref:"deleteModal",onDeleteTarget:o[5]||(o[5]=l=>t.deleteOrder(i.tempOrder.id,this.$refs.deleteModal.hideModal))},{title:w(()=>[m("確定刪除訂單！？")]),alert:w(()=>[m("這是客人的訂單欸！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:w(()=>[e("details",kt,[e("summary",null,[m("訂單編號："),e("span",$t,s(i.tempOrder.id),1)]),e("p",Pt,[Ct,m("："+s(i.tempOrder.user.name),1)]),e("p",null,[xt,m("：NT$ "+s(i.tempOrder.total),1)])])]),_:1},512)],64)}const ls=S(Ie,[["render",Mt]]);export{ls as default};
