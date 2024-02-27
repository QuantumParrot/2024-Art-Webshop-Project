import{c as H}from"./calculator-BHGMByDI.js";import{m as U,P as B}from"./modal-cHtxAZDp.js";import{h as Y}from"./moment@2.30.1-Cl4UOzQZ.js";import{d as R,a as T,m as x}from"./pinia@2.1.7_vue@3.4.19-BaxWQ2Jo.js";import{a as v}from"./axios@1.6.7-Di5RpEPX.js";import{u as V,a as I}from"./alert-Dip58-jj.js";import{m as L,v as q,n as z}from"./@vue_runtime-dom@3.4.19-DVfTC9pq.js";import{_ as N}from"./index-CC7777Lp.js";import{aj as i,O as c,P as e,aJ as A,F as g,ao as C,V as _,N as S,al as F,ak as J,c as P,aH as w,aq as M}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{P as l,n as f,l as W}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as G}from"./DeleteModal-BtPsvS4R.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-aNy9Y6fu.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BRsWHAsX.js";import"./vue@3.4.19-bS3wBxtn.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./sweetalert2@11.10.5-D1b63BCh.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-CIwtLcK9.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-CtCrC8gK.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cp1hpGuW.js";import"./vue-router@4.2.5_vue@3.4.19-CGkOaO3i.js";var K={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:O,VITE_APP_PATH:k}=K,p=V(),h=I(),y=R("adminOrder",{state:()=>({orders:[],statesCode:{0:{title:"未確認款項",color:"#c62828"},1:{title:"已確認款項",color:"#ff6f00"},2:{title:"安排出貨中",color:"#1565c0"},3:{title:"商品配送中",color:"#00838f"},4:{title:"訂單已完成",color:"#388e3c"}},currentPage:1}),getters:{totalPages:({orders:t})=>Math.ceil(t.length/5),ordersList:({orders:t})=>t.map(s=>{if(s.message.startsWith('{"')){const o=JSON.parse(s.message);return{...s,message:o.message,project:o.project,state:parseInt(o.state,10)}}return{...s,project:s.project||"不指定",state:s.state||0}})},actions:{switchPage(t){this.currentPage=t},getOrders(){p.createLoader("get-orders"),v.get(`${O}/api/${k}/admin/orders`).then(t=>{this.orders=t.data.orders,this.switchPage(1)}).catch(t=>h.errorAlert(t)).finally(()=>p.removeLoader("get-orders"))},updateOrder(t,s){const{code:o,order:m}=t;p.setLoader(m.id),v.put(`${O}/api/${k}/admin/order/${m.id}`,{data:{...m,state:Number(o)}}).then(a=>{h.toastAlert(a.data.message,"success"),s(),this.getOrders()}).catch(a=>h.errorAlert(a)).finally(()=>p.setLoader(""))},deleteOrder(t,s){p.createLoader("delete-order"),v.delete(`${O}/api/${k}/admin/order/${t}`).then(()=>{h.toastAlert("我們懷念它 (´;ω;`)","success"),s(),this.getOrders()}).catch(o=>h.errorAlert(o)).finally(()=>p.removeLoader("delete-order"))},downTheDrain(){h.multiverseAlert(()=>{p.createLoader("tan-tiau"),v.delete(`${O}/api/${k}/admin/orders/all`).then(()=>{h.toastAlert("沒了 ... 都沒了 (´;ω;`)","success"),this.getOrders()}).catch(t=>h.errorAlert(t)).finally(()=>p.removeLoader("tan-tiau"))})}}}),Q={mixins:[U],props:["tempOrder"],data(){return{modal:"",tab:"content"}},computed:{...T(y,["statesCode"]),...T(V,["loadingTask"])},methods:{...x(y,["updateOrder"]),...x(I,["checkAlert"]),formatTime(t){return Y(t).format("YYYY/MM/DD HH:mm:ss")},preUpdate(t){const s=+t.target.value,o={code:s,order:this.tempOrder},m=()=>{this.updateOrder(o,this.hideModal)};if(s===4){const a={title:"確定完成訂單？",text:"提醒您，完成訂單之後就無法修改狀態囉！"};this.checkAlert(a,m,()=>{t.target.value=this.tempOrder.state})}else m()}}},r=t=>(F("data-v-4aad22c8"),t=t(),J(),t),X={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},Z={class:"modal-dialog modal-dialog-centered"},ee={class:"modal-content"},te={class:"modal-header"},se={class:"fs-5 mb-0"},oe=["disabled"],le=r(()=>e("i",{class:"bi bi-x-circle-fill"},null,-1)),ae=[le],re={class:"modal-body py-4"},ne={class:"nav nav-pills bg-light rounded-2 mb-3"},de={class:"nav-item flex-grow-1"},ie={class:"nav-item flex-grow-1"},ce={class:"table table-light"},me={class:"text-end"},pe={class:"fs-5 fw-bold"},he=r(()=>e("td",{colspan:"2"},"總計",-1)),_e={class:"text-end"},ue={class:"mb-0"},be=r(()=>e("span",null,"付款狀態：",-1)),ge=r(()=>e("span",{class:"badge bg-primary me-2"},"訂單成立日期",-1)),fe=r(()=>e("hr",null,null,-1)),ve=r(()=>e("span",{class:"badge bg-primary me-2"},"姓名",-1)),Oe=r(()=>e("hr",null,null,-1)),ke=r(()=>e("span",{class:"badge bg-primary me-2"},"電話",-1)),ye=r(()=>e("hr",null,null,-1)),Pe=r(()=>e("p",null,[e("span",{class:"badge bg-primary"},"地址")],-1)),we=r(()=>e("hr",null,null,-1)),Me=r(()=>e("p",null,[e("span",{class:"badge bg-primary"},"信箱")],-1)),Te=r(()=>e("hr",null,null,-1)),xe=r(()=>e("p",null,[e("span",{class:"badge bg-primary"},"贊助計畫")],-1)),Ae=r(()=>e("hr",null,null,-1)),Ce=r(()=>e("p",null,[e("span",{class:"badge bg-primary"},"留言")],-1)),Se={class:"pre-wrap mb-0"},$e={key:0,class:"modal-footer"},De={class:"alert bg-light d-flex align-items-center gap-3 text-nowrap mb-0"},Le={class:"d-flex align-items-center"},Ve={key:0,class:"spinner-border text-primary me-3",role:"status"},Ie=r(()=>e("span",null,"修改訂單狀態",-1)),Ne=["value","disabled"],Ee=["value"];function je(t,s,o,m,a,u){return i(),c("div",X,[e("div",Z,[e("div",ee,[e("div",te,[e("h4",se,l(o.tempOrder.id),1),e("button",{type:"button",class:"btn border-0 p-0 fs-4",disabled:!!t.loadingTask,onClick:s[0]||(s[0]=(...d)=>t.hideModal&&t.hideModal(...d))},ae,8,oe)]),e("div",re,[e("ul",ne,[e("li",de,[e("button",{type:"button",onClick:s[1]||(s[1]=d=>a.tab="content"),class:f(["w-100 nav-link",{active:a.tab==="content"}])}," 訂購商品",2)]),e("li",ie,[e("button",{type:"button",onClick:s[2]||(s[2]=d=>a.tab="info"),class:f(["w-100 nav-link",{active:a.tab==="info"}])}," 客戶資訊",2)])]),A(e("div",null,[e("table",ce,[e("tbody",null,[(i(!0),c(g,null,C(o.tempOrder.products,(d,b)=>(i(),c("tr",{key:b},[e("td",null,l(d.product.title),1),e("td",null,"× "+l(d.qty)+" "+l(d.product.unit),1),e("td",me,"NT$ "+l(d.total),1)]))),128))]),e("tfoot",pe,[e("tr",null,[he,e("td",_e,"NT$ "+l(o.tempOrder.total),1)])])]),e("p",ue,[be,e("span",{class:f(o.tempOrder.is_paid?"text-success":"text-danger")},l(o.tempOrder.is_paid?"已付款":"未付款"),3)])],512),[[L,a.tab==="content"]]),A(e("div",null,[e("p",null,[ge,_(" "+l(u.formatTime(o.tempOrder.create_at*1e3)),1)]),fe,e("p",null,[ve,_(" "+l(o.tempOrder.user.name),1)]),Oe,e("p",null,[ke,_(" "+l(o.tempOrder.user.tel),1)]),ye,Pe,e("p",null,l(o.tempOrder.user.address),1),we,Me,e("p",null,l(o.tempOrder.user.email),1),Te,xe,e("p",null,l(o.tempOrder.project),1),Ae,Ce,e("p",Se,l(o.tempOrder.message),1)],512),[[L,a.tab==="info"]])]),o.tempOrder.is_paid&&o.tempOrder.state!==4?(i(),c("div",$e,[e("div",De,[e("div",Le,[t.loadingTask===o.tempOrder.id?(i(),c("div",Ve)):S("",!0),Ie]),e("select",{class:"form-select",value:o.tempOrder.state,onChange:s[3]||(s[3]=(...d)=>u.preUpdate&&u.preUpdate(...d)),disabled:!!t.loadingTask},[(i(!0),c(g,null,C(t.statesCode,(d,b)=>(i(),c("option",{key:b,value:b},l(d.title),9,Ee))),128))],40,Ne)])])):S("",!0)])])],512)}const He=N(Q,[["render",je],["__scopeId","data-v-4aad22c8"]]),Ue={mixins:[H],components:{PaginationComponent:B,AdminOrderModal:He,DeleteModal:G},data(){return{tempOrder:{user:{},products:{}},deletePermission:!1}},computed:{...T(y,["ordersList","statesCode","currentPage","totalPages"])},methods:{...x(y,["getOrders","switchPage","deleteOrder","downTheDrain"]),openModal(t,s){this.tempOrder={...t},s==="check"?this.$refs.orderModal.showModal():this.$refs.deleteModal.showModal()}},mounted(){this.getOrders()}},Be={class:"text-end mb-7"},Ye=e("h3",{class:"fs-2 mb-2"},"訂單管理",-1),Re={class:"fs-6 text-muted"},qe={class:"alert bg-light flex-classic mb-5"},ze={class:"d-flex gap-2"},Fe={for:"unlock",class:"btn btn-outline-primary"},Je={class:"table-responsive"},We={class:"table table-hover text-nowrap"},Ge=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"日期"),e("th",{scope:"col",width:"40%"},"訂單"),e("th",{scope:"col",width:"30%",class:"d-none d-md-table-cell text-end"},"總額"),e("th",{scope:"col",width:"15%",class:"text-center"},"狀態"),e("th",{scope:"col",class:"text-center"},"刪除")])],-1),Ke={class:"align-middle"},Qe=["onClick"],Xe={class:"me-2"},Ze=e("i",{class:"bi bi-search"},null,-1),et={class:"d-none d-md-table-cell text-end"},tt={class:"text-center fw-bold"},st={class:"text-end"},ot=["disabled","onClick"],lt=e("i",{class:"bi bi-trash3-fill"},null,-1),at=[lt],rt={key:1,class:"alert bg-light"},nt={class:"mb-4"},dt={class:"text-muted"},it={class:"mt-3"},ct=e("b",null,"客戶姓名",-1),mt=e("b",null,"訂單總額",-1);function pt(t,s,o,m,a,u){const d=M("pagination-component"),b=M("admin-order-modal"),E=M("delete-modal");return i(),c(g,null,[e("div",Be,[Ye,e("p",Re,"目前共有 "+l(t.ordersList.length)+" 筆訂單",1)]),t.ordersList.length?(i(),c(g,{key:0},[e("div",qe,[e("div",ze,[A(e("input",{type:"checkbox",id:"unlock",class:"btn-check","onUpdate:modelValue":s[0]||(s[0]=n=>a.deletePermission=n)},null,512),[[q,a.deletePermission]]),e("label",Fe,[e("i",{class:f(["bi",a.deletePermission?"bi-unlock-fill":"bi-lock-fill"])},null,2)]),a.deletePermission?(i(),c("button",{key:0,type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=(...n)=>t.downTheDrain&&t.downTheDrain(...n))},"刪除所有訂單")):S("",!0)]),P(d,{current:t.currentPage,total:t.totalPages,onSwitchPage:t.switchPage},null,8,["current","total","onSwitchPage"])]),e("div",Je,[e("table",We,[Ge,e("tbody",Ke,[(i(!0),c(g,null,C(t.ordersList,n=>{var $,D;return i(),c("tr",{key:n.id},[e("td",null,l(t.formatDate(n.create_at*1e3,"/")),1),e("td",null,[e("span",{class:f(["badge me-3",n.is_paid?"bg-success":"bg-danger"])},l(n.is_paid?"已付款":"未付款"),3),e("a",{href:"#",onClick:z(j=>u.openModal(n,"check"),["prevent"])},[e("span",Xe,l(n.user.name),1),Ze],8,Qe)]),e("td",et,"NT$ "+l(n.total),1),e("td",tt,[e("span",{style:W({color:($=t.statesCode[n.state||0])==null?void 0:$.color})},l((D=t.statesCode[n.state||0])==null?void 0:D.title),5)]),e("td",st,[e("button",{type:"button",class:"btn btn-outline-danger",disabled:!a.deletePermission,onClick:j=>u.openModal(n,"delete")},at,8,ot)])])}),128))])])])],64)):(i(),c("div",rt,"沒有訂單記錄")),P(b,{ref:"orderModal","temp-order":a.tempOrder},null,8,["temp-order"]),P(E,{ref:"deleteModal",onDeleteTarget:s[2]||(s[2]=n=>t.deleteOrder(a.tempOrder.id,this.$refs.deleteModal.hideModal))},{title:w(()=>[_("確定刪除訂單！？")]),alert:w(()=>[_("這是客人的訂單欸！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:w(()=>[e("details",nt,[e("summary",null,[_("訂單編號："),e("span",dt,l(a.tempOrder.id),1)]),e("p",it,[ct,_("："+l(a.tempOrder.user.name),1)]),e("p",null,[mt,_("：NT$ "+l(a.tempOrder.total),1)])])]),_:1},512)],64)}const Et=N(Ue,[["render",pt]]);export{Et as default};
