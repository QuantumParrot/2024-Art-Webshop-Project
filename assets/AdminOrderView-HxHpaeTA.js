import{P as D}from"./PaginationComponent-CzHGTpLD.js";import{m as F}from"./modal-C9K-cvng.js";import{m as $,a as P}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as v}from"./adminOrder-B_8L1kxa.js";import{l as A,a as B}from"./alert-Dw2Xe9FX.js";import{m as x,v as I,n as V}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as N}from"./index-BJHema64.js";import{z as r,A as c,Q as e,aJ as C,F as _,ao as y,P as g,al as Q,ak as U,c as O,aH as w,aq as k,W as b}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as o,n as p,l as q}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as z}from"./DeleteModal-DGhNjK5E.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-CaSxFkTE.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const E={mixins:[F],props:["tempOrder"],data(){return{modal:"",tab:"content"}},computed:{...$(v,["statesCode"]),...$(A,["loadingTask"])},methods:{...P(v,["updateOrder"]),...P(B,["checkAlert"]),preUpdate(t){const s=+t.target.value,n={code:s,order:this.tempOrder},f=()=>{this.updateOrder(n,this.hideModal)};if(s===4){const a={title:"確定完成訂單？",text:"提醒您，完成訂單之後就無法修改狀態囉！"};this.checkAlert(a,f,()=>{t.target.value=this.tempOrder.state})}else f()}}},i=t=>(Q("data-v-f00d4627"),t=t(),U(),t),R={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},j={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content"},J={class:"modal-header"},L={class:"fs-5 mb-0"},W=["disabled"],G=i(()=>e("i",{class:"bi bi-x-circle-fill"},null,-1)),K=[G],X={class:"modal-body py-4"},Y={class:"nav nav-pills bg-gray rounded-2 mb-3"},Z={class:"nav-item flex-grow-1"},ee={class:"nav-item flex-grow-1"},te={class:"table table-light align-middle"},se={class:"text-end"},oe={class:"flex-classic"},le=i(()=>e("span",null,"NT＄",-1)),ne={key:0},ae={colspan:"2",class:"fs-7"},ie={class:"flex-classic"},de=i(()=>e("span",null,"NT＄",-1)),re={class:"fs-5 fw-bold"},ce=i(()=>e("td",{colspan:"2",class:"py-3"},"總計",-1)),me={class:"text-end"},pe={class:"mb-0"},_e=i(()=>e("span",null,"付款狀態：",-1)),ue=i(()=>e("span",{class:"badge bg-primary me-2"},"訂單成立日期",-1)),he=i(()=>e("hr",null,null,-1)),be=i(()=>e("span",{class:"badge bg-primary me-2"},"姓名",-1)),ge=i(()=>e("hr",null,null,-1)),fe=i(()=>e("span",{class:"badge bg-primary me-2"},"電話",-1)),ve=i(()=>e("hr",null,null,-1)),ye=i(()=>e("p",null,[e("span",{class:"badge bg-primary"},"地址")],-1)),Oe=i(()=>e("hr",null,null,-1)),we=i(()=>e("p",null,[e("span",{class:"badge bg-primary"},"信箱")],-1)),ke=i(()=>e("hr",null,null,-1)),$e=i(()=>e("p",null,[e("span",{class:"badge bg-primary"},"贊助計畫")],-1)),Pe=i(()=>e("hr",null,null,-1)),Ce=i(()=>e("p",null,[e("span",{class:"badge bg-primary"},"留言")],-1)),Me={class:"pre-wrap mb-0"},xe={key:0,class:"modal-footer"},Ne={class:"alert bg-gray d-flex align-items-center gap-3 text-nowrap mb-0"},Se={class:"d-flex align-items-center"},Te={key:0,class:"spinner-border text-primary me-3",role:"status"},De=i(()=>e("span",null,"修改訂單狀態",-1)),Fe=["value","disabled"],Ae=["value"];function Be(t,s,n,f,a,u){return r(),c("div",R,[e("div",j,[e("div",H,[e("div",J,[e("h4",L,o(n.tempOrder.id),1),e("button",{type:"button",class:"btn border-0 p-0 fs-4",disabled:!!t.loadingTask,onClick:s[0]||(s[0]=(...d)=>t.hideModal&&t.hideModal(...d))},K,8,W)]),e("div",X,[e("ul",Y,[e("li",Z,[e("button",{type:"button",onClick:s[1]||(s[1]=d=>a.tab="content"),class:p(["w-100 nav-link",{active:a.tab==="content"}])}," 訂購商品",2)]),e("li",ee,[e("button",{type:"button",onClick:s[2]||(s[2]=d=>a.tab="info"),class:p(["w-100 nav-link",{active:a.tab==="info"}])}," 客戶資訊",2)])]),C(e("div",null,[e("table",te,[e("tbody",null,[(r(!0),c(_,null,y(n.tempOrder.products,(d,m)=>(r(),c(_,{key:m},[e("tr",null,[e("td",null,o(d.product.title),1),e("td",null,"× "+o(d.qty)+" "+o(d.product.unit),1),e("td",se,[e("div",oe,[le,e("span",{class:p({"text-decoration-line-through":d.coupon})},o(d.total),3)])])]),d.coupon?(r(),c("tr",ne,[e("td",ae,"優惠券："+o(d.coupon.code),1),e("td",null,[e("div",ie,[de,e("span",null,[e("b",null,o(d.final_total),1)])])])])):g("",!0)],64))),128))]),e("tfoot",re,[e("tr",null,[ce,e("td",me,"NT＄ "+o(n.tempOrder.total),1)])])]),e("p",pe,[_e,e("span",{class:p(n.tempOrder.is_paid?"text-success":"text-danger")},o(n.tempOrder.is_paid?"已付款":"未付款"),3)])],512),[[x,a.tab==="content"]]),C(e("div",null,[e("p",null,[ue,e("span",null,o(t.$calc.formatTime(n.tempOrder.create_at*1e3)),1)]),he,e("p",null,[be,e("span",null,o(n.tempOrder.user.name),1)]),ge,e("p",null,[fe,e("span",null,o(n.tempOrder.user.tel),1)]),ve,ye,e("p",null,o(n.tempOrder.user.address),1),Oe,we,e("p",null,o(n.tempOrder.user.email),1),ke,$e,e("p",null,o(n.tempOrder.project),1),Pe,Ce,e("p",Me,o(n.tempOrder.message),1)],512),[[x,a.tab==="info"]])]),n.tempOrder.is_paid&&n.tempOrder.state!==4?(r(),c("div",xe,[e("div",Ne,[e("div",Se,[t.loadingTask===n.tempOrder.id?(r(),c("div",Te)):g("",!0),De]),e("select",{class:"form-select",value:n.tempOrder.state,onChange:s[3]||(s[3]=(...d)=>u.preUpdate&&u.preUpdate(...d)),disabled:!!t.loadingTask},[(r(!0),c(_,null,y(t.statesCode,(d,m)=>(r(),c("option",{key:m,value:m},o(d.title),9,Ae))),128))],40,Fe)])])):g("",!0)])])],512)}const Ie=N(E,[["render",Be],["__scopeId","data-v-f00d4627"]]),Ve={components:{PaginationComponent:D,AdminOrderModal:Ie,DeleteModal:z},data(){return{tempOrder:{user:{},products:{}},deletePermission:!1}},computed:{...$(v,["refactorOrders","filterOrders","displaying","currentPage","totalPages","statesCode","stateOptions","timeAscending","isPaid","orderState"])},methods:{...P(v,["getOrders","switchPage","deleteOrder","downTheDrain","switchFilter"]),openModal(t,s){this.tempOrder={...t,total:+t.total.toFixed(0)},s==="check"?this.$refs.orderModal.showModal():this.$refs.deleteModal.showModal()},changeFilterByQuery(t){const s=Number.parseInt(+t.paid,10),n=Number.parseInt(+t.state,10);this.switchFilter("isPaid",Number.isNaN(s)?2:s),this.switchFilter("orderState",Number.isNaN(n)?5:n)}},watch:{"$route.query":{handler(t){this.changeFilterByQuery(t)},deep:!0},totalPages(t){t<this.currentPage&&this.switchPage(1)},isPaid(t){t||this.switchFilter("orderState",5)}},mounted(){this.refactorOrders.length||this.getOrders(),this.changeFilterByQuery(this.$route.query)}},Qe={class:"lh-lg text-end mb-lg-6"},Ue=e("h3",{class:"fs-2 mb-3"},"ORDERS｜訂單",-1),qe={class:"text-muted"},ze={class:"alert bg-gray flex-classic mb-5"},Ee={class:"d-flex gap-2"},Re={for:"unlock",class:"btn btn-outline-primary"},je={class:"d-flex flex-md-row flex-column gap-3 mb-5"},He={class:"d-flex align-items-center text-nowrap"},Je=e("label",{for:"time",class:"form-label mb-0 me-3"},[e("b",null,"建立時間")],-1),Le=["value"],We=e("option",{value:1},"由舊到新",-1),Ge=e("option",{value:0},"由新到舊",-1),Ke=[We,Ge],Xe={class:"d-flex align-items-center text-nowrap"},Ye=e("label",{for:"paid",class:"form-label mb-0 me-3"},[e("b",null,"付款狀態")],-1),Ze=["value"],et=e("option",{value:2,selected:""},"全部",-1),tt=e("option",{value:1},"已付款",-1),st=e("option",{value:0},"未付款",-1),ot=[et,tt,st],lt={class:"d-flex align-items-center text-nowrap"},nt=e("label",{for:"delivery",class:"form-label mb-0 me-3"},[e("b",null,"出貨狀態")],-1),at=["value"],it=e("option",{value:5,selected:""},"全部",-1),dt=["value"],rt={key:0,class:"table-responsive"},ct={class:"table table-hover text-nowrap"},mt=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"日期"),e("th",{scope:"col",width:"40%"},"訂單"),e("th",{scope:"col",width:"30%",class:"d-none d-md-table-cell text-end"},"總額"),e("th",{scope:"col",width:"15%",class:"text-center"},"狀態"),e("th",{scope:"col",class:"text-center"},"刪除")])],-1),pt={class:"align-middle"},_t=["onClick"],ut={class:"me-2"},ht=e("i",{class:"bi bi-search"},null,-1),bt={key:0},gt={class:"text-muted"},ft={class:"d-none d-md-table-cell text-end"},vt={class:"text-center fw-bold"},yt={class:"text-end"},Ot=["disabled","onClick"],wt=e("i",{class:"bi bi-trash3-fill"},null,-1),kt=[wt],$t={key:1,class:"alert bg-gray"},Pt={class:"mb-4"},Ct={class:"text-muted"},Mt={class:"mt-3"},xt=e("b",null,"客戶姓名",-1),Nt=e("b",null,"訂單總額",-1);function St(t,s,n,f,a,u){const d=k("PaginationComponent"),m=k("AdminOrderModal"),S=k("DeleteModal");return r(),c(_,null,[e("div",Qe,[Ue,e("p",qe,"目前共有 "+o(t.refactorOrders.length)+" 筆訂單",1)]),e("div",ze,[e("div",Ee,[C(e("input",{type:"checkbox",id:"unlock",class:"btn-check","onUpdate:modelValue":s[0]||(s[0]=l=>a.deletePermission=l)},null,512),[[I,a.deletePermission]]),e("label",Re,[e("i",{class:p(["bi",a.deletePermission?"bi-unlock-fill":"bi-lock-fill"])},null,2)]),a.deletePermission?(r(),c("button",{key:0,type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=(...l)=>t.downTheDrain&&t.downTheDrain(...l))},"刪除所有訂單 ")):g("",!0)]),O(d,{current:t.currentPage,total:t.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])]),e("div",je,[e("div",He,[Je,e("select",{class:"form-select",id:"time",value:t.timeAscending,onChange:s[2]||(s[2]=l=>t.switchFilter("timeAscending",+l.target.value))},Ke,40,Le)]),e("div",Xe,[Ye,e("select",{class:"form-select",id:"paid",value:t.isPaid,onChange:s[3]||(s[3]=l=>t.switchFilter("isPaid",+l.target.value))},ot,40,Ze)]),e("div",lt,[nt,e("select",{class:"form-select",id:"delivery",value:t.orderState,onChange:s[4]||(s[4]=l=>t.switchFilter("orderState",+l.target.value))},[it,(r(!0),c(_,null,y(t.stateOptions,l=>{var h;return r(),c("option",{key:l,value:l},o((h=t.statesCode[l])==null?void 0:h.title),9,dt)}),128))],40,at)])]),t.displaying.length?(r(),c("div",rt,[e("table",ct,[mt,e("tbody",pt,[(r(!0),c(_,null,y(t.displaying,l=>{var h,M;return r(),c("tr",{key:l.id},[e("td",null,o(t.$calc.formatDate(l.create_at*1e3,"/")),1),e("td",null,[e("span",{class:p(["badge me-3",l.is_paid?"bg-success":"bg-danger"])},o(l.is_paid?"已付款":"未付款"),3),e("a",{href:"#",class:"me-2",onClick:V(T=>u.openModal(l,"check"),["prevent"])},[e("span",ut,o(l.user.name),1),ht],8,_t),l.is_paid?g("",!0):(r(),c("span",bt,[e("i",gt,o(t.$calc.fromNow(l.create_at*1e3)),1)]))]),e("td",ft,"NT$ "+o(l.total),1),e("td",vt,[e("span",{style:q({color:(h=t.statesCode[l.state||0])==null?void 0:h.color})},o((M=t.statesCode[l.state||0])==null?void 0:M.title),5)]),e("td",yt,[e("button",{type:"button",class:"btn btn-outline-danger",disabled:!a.deletePermission,onClick:T=>u.openModal(l,"delete")},kt,8,Ot)])])}),128))])])])):(r(),c("div",$t,"沒有訂單記錄")),O(m,{ref:"orderModal","temp-order":a.tempOrder},null,8,["temp-order"]),O(S,{ref:"deleteModal",onDeleteTarget:s[5]||(s[5]=l=>t.deleteOrder(a.tempOrder.id,this.$refs.deleteModal.hideModal))},{title:w(()=>[b("確定刪除訂單！？")]),alert:w(()=>[b("這是客人的訂單欸！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:w(()=>[e("details",Pt,[e("summary",null,[b("訂單編號："),e("span",Ct,o(a.tempOrder.id),1)]),e("p",Mt,[xt,b("："+o(a.tempOrder.user.name),1)]),e("p",null,[Nt,b("：NT$ "+o(a.tempOrder.total),1)])])]),_:1},512)],64)}const ss=N(Ve,[["render",St]]);export{ss as default};