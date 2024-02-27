import{c as N}from"./calculator-BHGMByDI.js";import{m as V,P as L}from"./modal-DAYTWpTV.js";import{h as A}from"./moment@2.30.1-Cl4UOzQZ.js";import{a as O,m as y}from"./pinia@2.1.7_vue@3.4.19-BaxWQ2Jo.js";import{a as g}from"./adminOrder-CIvg_MRc.js";import{l as I,a as U}from"./alert-se1nEnsJ.js";import{m as T,v as Y,n as B}from"./@vue_runtime-dom@3.4.19-DVfTC9pq.js";import{_ as D}from"./index-6yln5vpf.js";import{aj as r,O as c,P as e,aJ as w,F as h,ao as M,V as m,N as C,al as H,ak as j,c as f,aH as v,aq as k}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{P as s,n as u,l as q}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as z}from"./DeleteModal--QVIzXpi.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-aNy9Y6fu.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BRsWHAsX.js";import"./vue@3.4.19-bS3wBxtn.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-D1b63BCh.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-CIwtLcK9.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-CtCrC8gK.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cp1hpGuW.js";import"./vue-router@4.2.5_vue@3.4.19-CGkOaO3i.js";const F={mixins:[V],props:["tempOrder"],data(){return{modal:"",tab:"content"}},computed:{...O(g,["statesCode"]),...O(I,["loadingTask"])},methods:{...y(g,["updateOrder"]),...y(U,["checkAlert"]),formatTime(t){return A(t).format("YYYY/MM/DD HH:mm:ss")},preUpdate(t){const o=+t.target.value,l={code:o,order:this.tempOrder},b=()=>{this.updateOrder(l,this.hideModal)};if(o===4){const n={title:"確定完成訂單？",text:"提醒您，完成訂單之後就無法修改狀態囉！"};this.checkAlert(n,b,()=>{t.target.value=this.tempOrder.state})}else b()}}},a=t=>(H("data-v-4aad22c8"),t=t(),j(),t),E={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},J={class:"modal-dialog modal-dialog-centered"},G={class:"modal-content"},K={class:"modal-header"},Q={class:"fs-5 mb-0"},R=["disabled"],W=a(()=>e("i",{class:"bi bi-x-circle-fill"},null,-1)),X=[W],Z={class:"modal-body py-4"},ee={class:"nav nav-pills bg-light rounded-2 mb-3"},te={class:"nav-item flex-grow-1"},se={class:"nav-item flex-grow-1"},oe={class:"table table-light"},le={class:"text-end"},ne={class:"fs-5 fw-bold"},ae=a(()=>e("td",{colspan:"2"},"總計",-1)),de={class:"text-end"},ie={class:"mb-0"},re=a(()=>e("span",null,"付款狀態：",-1)),ce=a(()=>e("span",{class:"badge bg-primary me-2"},"訂單成立日期",-1)),me=a(()=>e("hr",null,null,-1)),pe=a(()=>e("span",{class:"badge bg-primary me-2"},"姓名",-1)),_e=a(()=>e("hr",null,null,-1)),he=a(()=>e("span",{class:"badge bg-primary me-2"},"電話",-1)),ue=a(()=>e("hr",null,null,-1)),be=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"地址")],-1)),ge=a(()=>e("hr",null,null,-1)),fe=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"信箱")],-1)),ve=a(()=>e("hr",null,null,-1)),ke=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"贊助計畫")],-1)),Oe=a(()=>e("hr",null,null,-1)),ye=a(()=>e("p",null,[e("span",{class:"badge bg-primary"},"留言")],-1)),we={class:"pre-wrap mb-0"},Me={key:0,class:"modal-footer"},Ce={class:"alert bg-light d-flex align-items-center gap-3 text-nowrap mb-0"},xe={class:"d-flex align-items-center"},Pe={key:0,class:"spinner-border text-primary me-3",role:"status"},Te=a(()=>e("span",null,"修改訂單狀態",-1)),De=["value","disabled"],Se=["value"];function $e(t,o,l,b,n,p){return r(),c("div",E,[e("div",J,[e("div",G,[e("div",K,[e("h4",Q,s(l.tempOrder.id),1),e("button",{type:"button",class:"btn border-0 p-0 fs-4",disabled:!!t.loadingTask,onClick:o[0]||(o[0]=(...i)=>t.hideModal&&t.hideModal(...i))},X,8,R)]),e("div",Z,[e("ul",ee,[e("li",te,[e("button",{type:"button",onClick:o[1]||(o[1]=i=>n.tab="content"),class:u(["w-100 nav-link",{active:n.tab==="content"}])}," 訂購商品",2)]),e("li",se,[e("button",{type:"button",onClick:o[2]||(o[2]=i=>n.tab="info"),class:u(["w-100 nav-link",{active:n.tab==="info"}])}," 客戶資訊",2)])]),w(e("div",null,[e("table",oe,[e("tbody",null,[(r(!0),c(h,null,M(l.tempOrder.products,(i,_)=>(r(),c("tr",{key:_},[e("td",null,s(i.product.title),1),e("td",null,"× "+s(i.qty)+" "+s(i.product.unit),1),e("td",le,"NT$ "+s(i.total),1)]))),128))]),e("tfoot",ne,[e("tr",null,[ae,e("td",de,"NT$ "+s(l.tempOrder.total),1)])])]),e("p",ie,[re,e("span",{class:u(l.tempOrder.is_paid?"text-success":"text-danger")},s(l.tempOrder.is_paid?"已付款":"未付款"),3)])],512),[[T,n.tab==="content"]]),w(e("div",null,[e("p",null,[ce,m(" "+s(p.formatTime(l.tempOrder.create_at*1e3)),1)]),me,e("p",null,[pe,m(" "+s(l.tempOrder.user.name),1)]),_e,e("p",null,[he,m(" "+s(l.tempOrder.user.tel),1)]),ue,be,e("p",null,s(l.tempOrder.user.address),1),ge,fe,e("p",null,s(l.tempOrder.user.email),1),ve,ke,e("p",null,s(l.tempOrder.project),1),Oe,ye,e("p",we,s(l.tempOrder.message),1)],512),[[T,n.tab==="info"]])]),l.tempOrder.is_paid&&l.tempOrder.state!==4?(r(),c("div",Me,[e("div",Ce,[e("div",xe,[t.loadingTask===l.tempOrder.id?(r(),c("div",Pe)):C("",!0),Te]),e("select",{class:"form-select",value:l.tempOrder.state,onChange:o[3]||(o[3]=(...i)=>p.preUpdate&&p.preUpdate(...i)),disabled:!!t.loadingTask},[(r(!0),c(h,null,M(t.statesCode,(i,_)=>(r(),c("option",{key:_,value:_},s(i.title),9,Se))),128))],40,De)])])):C("",!0)])])],512)}const Ne=D(F,[["render",$e],["__scopeId","data-v-4aad22c8"]]),Ve={mixins:[N],components:{PaginationComponent:L,AdminOrderModal:Ne,DeleteModal:z},data(){return{tempOrder:{user:{},products:{}},deletePermission:!1}},computed:{...O(g,["ordersList","statesCode","currentPage","totalPages"])},methods:{...y(g,["getOrders","switchPage","deleteOrder","downTheDrain"]),openModal(t,o){this.tempOrder={...t},o==="check"?this.$refs.orderModal.showModal():this.$refs.deleteModal.showModal()}},mounted(){this.ordersList.length||this.getOrders()}},Le={class:"text-end mb-7"},Ae=e("h3",{class:"fs-2 mb-2"},"訂單管理",-1),Ie={class:"text-muted"},Ue={class:"alert bg-light flex-classic mb-5"},Ye={class:"d-flex gap-2"},Be={for:"unlock",class:"btn btn-outline-primary"},He={class:"table-responsive"},je={class:"table table-hover text-nowrap"},qe=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"日期"),e("th",{scope:"col",width:"40%"},"訂單"),e("th",{scope:"col",width:"30%",class:"d-none d-md-table-cell text-end"},"總額"),e("th",{scope:"col",width:"15%",class:"text-center"},"狀態"),e("th",{scope:"col",class:"text-center"},"刪除")])],-1),ze={class:"align-middle"},Fe=["onClick"],Ee={class:"me-2"},Je=e("i",{class:"bi bi-search"},null,-1),Ge={class:"d-none d-md-table-cell text-end"},Ke={class:"text-center fw-bold"},Qe={class:"text-end"},Re=["disabled","onClick"],We=e("i",{class:"bi bi-trash3-fill"},null,-1),Xe=[We],Ze={key:1,class:"alert bg-light"},et={class:"mb-4"},tt={class:"text-muted"},st={class:"mt-3"},ot=e("b",null,"客戶姓名",-1),lt=e("b",null,"訂單總額",-1);function nt(t,o,l,b,n,p){const i=k("pagination-component"),_=k("admin-order-modal"),S=k("delete-modal");return r(),c(h,null,[e("div",Le,[Ae,e("p",Ie,"目前共有 "+s(t.ordersList.length)+" 筆訂單",1)]),t.ordersList.length?(r(),c(h,{key:0},[e("div",Ue,[e("div",Ye,[w(e("input",{type:"checkbox",id:"unlock",class:"btn-check","onUpdate:modelValue":o[0]||(o[0]=d=>n.deletePermission=d)},null,512),[[Y,n.deletePermission]]),e("label",Be,[e("i",{class:u(["bi",n.deletePermission?"bi-unlock-fill":"bi-lock-fill"])},null,2)]),n.deletePermission?(r(),c("button",{key:0,type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=(...d)=>t.downTheDrain&&t.downTheDrain(...d))},"刪除所有訂單")):C("",!0)]),f(i,{current:t.currentPage,total:t.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])]),e("div",He,[e("table",je,[qe,e("tbody",ze,[(r(!0),c(h,null,M(t.ordersList,d=>{var x,P;return r(),c("tr",{key:d.id},[e("td",null,s(t.formatDate(d.create_at*1e3,"/")),1),e("td",null,[e("span",{class:u(["badge me-3",d.is_paid?"bg-success":"bg-danger"])},s(d.is_paid?"已付款":"未付款"),3),e("a",{href:"#",onClick:B($=>p.openModal(d,"check"),["prevent"])},[e("span",Ee,s(d.user.name),1),Je],8,Fe)]),e("td",Ge,"NT$ "+s(d.total),1),e("td",Ke,[e("span",{style:q({color:(x=t.statesCode[d.state||0])==null?void 0:x.color})},s((P=t.statesCode[d.state||0])==null?void 0:P.title),5)]),e("td",Qe,[e("button",{type:"button",class:"btn btn-outline-danger",disabled:!n.deletePermission,onClick:$=>p.openModal(d,"delete")},Xe,8,Re)])])}),128))])])])],64)):(r(),c("div",Ze,"沒有訂單記錄")),f(_,{ref:"orderModal","temp-order":n.tempOrder},null,8,["temp-order"]),f(S,{ref:"deleteModal",onDeleteTarget:o[2]||(o[2]=d=>t.deleteOrder(n.tempOrder.id,this.$refs.deleteModal.hideModal))},{title:v(()=>[m("確定刪除訂單！？")]),alert:v(()=>[m("這是客人的訂單欸！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:v(()=>[e("details",et,[e("summary",null,[m("訂單編號："),e("span",tt,s(n.tempOrder.id),1)]),e("p",st,[ot,m("："+s(n.tempOrder.user.name),1)]),e("p",null,[lt,m("：NT$ "+s(n.tempOrder.total),1)])])]),_:1},512)],64)}const $t=D(Ve,[["render",nt]]);export{$t as default};
