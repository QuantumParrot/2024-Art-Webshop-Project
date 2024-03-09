import{d as O,m as I,a as D}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{a as x}from"./axios@1.6.7-Di5RpEPX.js";import{l as H,a as N}from"./alert-dm0RMdUk.js";import{P as R}from"./PaginationComponent-CvvwYQA3.js";import{m as j}from"./modal-Nw3quRD0.js";import{U as F}from"./UploadForm-BRs8MUMM.js";import{m as v,l as E}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as T}from"./index-DzJG4CIs.js";import{aj as r,O as n,P as t,c as d,aH as S,aJ as b,F as w,ao as C,N as q,M as B,V as y,aq as _}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{P as f,n as c}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as z}from"./DeleteModal-GKkEgLt-.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import"./vue@3.4.19-CzIOYL8w.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-Djxe9Xmu.js";import"./clipboard@2.0.11-CIUMpgwV.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";var J={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:M,VITE_APP_PATH:V}=J,m=H(),g=N(),A=O("adminProduct",{state:()=>({products:[],filter:"全部",currentPage:1}),getters:{categories:({products:o})=>{const e=[];return o.forEach(i=>{e.includes(i.category)||e.push(i.category)}),e},tagsList:({products:o})=>{const e=[];return o.forEach(i=>{i.tags&&i.tags.forEach(u=>{e.includes(u)||e.push(u)})}),e.sort((i,u)=>i.length-u.length)},productsList:({products:o,filter:e})=>e==="全部"?o:o.filter(i=>i.category===e),totalPages:({productsList:o})=>Math.ceil(o.length/5),displaying:({productsList:o,currentPage:e})=>o.toSorted((u,s)=>u.price-s.price).filter((u,s)=>Math.floor(s/5)===e-1)},actions:{switchPage(o){this.currentPage=o},getProducts(){m.createLoader("get-products"),x.get(`${M}/api/${V}/admin/products/all`).then(o=>{const{products:e}=o.data;this.products=Object.values(e),this.totalPages===0&&this.switchFilter("全部"),this.currentPage>this.totalPages&&this.switchPage(1)}).catch(o=>g.errorAlert(o)).finally(()=>m.removeLoader("get-products"))},createProduct(o,e){m.createLoader("create-products"),x.post(`${M}/api/${V}/admin/product`,{data:o}).then(i=>{const{message:u}=i.data;g.toastAlert(u,"success"),e(),this.getProducts()}).catch(i=>g.errorAlert(i)).finally(()=>m.removeLoader("create-products"))},updateProduct(o,e){m.createLoader("update-products"),x.put(`${M}/api/${V}/admin/product/${o.id}`,{data:o}).then(i=>{g.toastAlert(i.data.message,"success"),e(),this.getProducts()}).catch(i=>g.errorAlert(i)).finally(()=>m.removeLoader("update-products"))},switchProductStatus(o){const e=o.is_enabled;m.createLoader("switch-product-status"),x.put(`${M}/api/${V}/admin/product/${o.id}`,{data:{...o,is_enabled:!o.is_enabled}}).then(()=>{g.toastAlert(`成功${e?"下架":"上架"}`,"success"),this.getProducts()}).catch(i=>g.errorAlert(i)).finally(()=>m.removeLoader("switch-product-status"))},deleteProduct(o,e){m.createLoader("delete-product"),x.delete(`${M}/api/${V}/admin/product/${o}`).then(()=>{g.toastAlert("我們懷念它 (´;ω;`)","success"),e(),this.getProducts()}).catch(i=>g.errorAlert(i)).finally(()=>m.removeLoader("delete-product"))},switchFilter(o){this.switchPage(1),this.filter=o}}}),W={components:{UploadForm:F},mixins:[j],props:["tempProduct"],data(){return{modal:"",title:"",tab:"content",product:{imagesUrl:[],tags:[]},uploadState:!1}},computed:{...I(A,["tagsList"])},watch:{tempProduct(){this.updateData()}},methods:{...D(A,["createProduct","updateProduct"]),...D(N,["toastAlert"]),updateData(){this.product=this.tempProduct,this.title=this.tempProduct.title;const{imagesUrl:o,tags:e}=this.tempProduct;this.product.imagesUrl=Array.isArray(o)?[...o]:[],this.product.tags=Array.isArray(e)?[...e]:[],this.tab="content"},addNewImage(o){this.product.imageUrl?(this.product.imagesUrl=this.product.imagesUrl.filter(e=>e),this.product.imagesUrl.push(o)):this.product.imageUrl=o},confirmUpdate(){this.product.imagesUrl=this.product.imagesUrl.filter(o=>o),this.product.tags=this.product.tags.filter(o=>o),this.product.id?this.updateProduct(this.product,this.hideModal):this.createProduct(this.product,this.hideModal)},updateState(o){this.uploadState=o}},mounted(){this.updateData()}},G={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},K={class:"modal-dialog modal-dialog-centered"},Q={class:"modal-content"},X={class:"modal-header"},Y={class:"mb-0"},Z=t("i",{class:"bi bi-x-circle-fill"},null,-1),tt=[Z],et={class:"modal-body"},st={class:"alert bg-gray"},ot=t("p",null,[y("欄位完成度（ "),t("span",{class:"text-danger"},"*"),y(" 為必填欄位 ）")],-1),lt={class:"row fw-bold"},it={class:"col"},rt=t("span",null,"名稱",-1),nt={class:"col"},dt=t("span",null,"別名",-1),ct={class:"col"},at=t("span",null,"規格",-1),ut={class:"col"},pt=t("span",null,"分類",-1),mt={class:"col"},_t=t("span",null,"單位",-1),ht={class:"col"},bt=t("span",null,"介紹",-1),gt={class:"col"},ft=t("span",null,"原價",-1),vt={class:"col"},yt=t("span",null,"售價",-1),wt={class:"col"},Pt=t("span",null,"主圖",-1),kt={class:"nav nav-pills flex-nowrap text-nowrap overflow-x-scroll bg-gray rounded-2 mb-3"},Ut={class:"nav-item flex-grow-1"},xt={class:"nav-item flex-grow-1"},Mt={class:"nav-item flex-grow-1"},Vt={class:"nav-item flex-grow-1"},St={class:"nav-item flex-grow-1"},qt={class:"alert border rounded-2"},Ct={class:"mb-3"},At=t("label",{class:"form-label is-required",for:"title"},"商品名稱",-1),Lt={class:"mb-3"},$t=t("label",{class:"form-label is-required",for:"subtitle"},"商品別名",-1),Et={class:"mb-3"},Dt=t("label",{class:"form-label is-required",for:"content"},"商品規格",-1),Tt={class:"row row-cols-2"},It={class:"col"},Nt=t("label",{class:"form-label is-required",for:"category"},"商品分類",-1),jt={class:"col"},Ft=t("label",{class:"form-label is-required",for:"unit"},"商品單位",-1),Bt={class:"mb-3"},Ot=t("label",{class:"form-label mb-3 is-required",for:"description"},"商品介紹",-1),Ht=t("label",{class:"form-label mb-3",for:"notes"},"商品備註",-1),Rt={class:"mb-3"},zt=t("div",{class:"flex-classic mb-2"},[t("label",{class:"is-required",for:"origin_price"},"商品原價"),t("span",{class:"fs-7 text-danger"}," 必須是大於零的整數")],-1),Jt={class:"mb-0"},Wt=t("div",{class:"flex-classic mb-2"},[t("label",{class:"is-required",for:"price"},"商品售價"),t("span",{class:"fs-7 text-danger"}," 必須是大於零的整數")],-1),Gt={class:"mb-3"},Kt=t("p",null,"商品標籤",-1),Qt={class:"row g-3 mb-3"},Xt=["onUpdate:modelValue"],Yt=["onClick"],Zt=t("i",{class:"bi bi-x-lg"},null,-1),te=[Zt],ee=t("p",null,"曾經使用過的標籤：",-1),se={class:"d-flex gap-2 flex-wrap"},oe=["onClick"],le={class:"badge p-2 bg-subtle text-primary fs-6"},ie={class:"mb-3"},re=t("h5",{class:"fw-bold mb-3"},"圖片設定",-1),ne=t("label",{class:"form-label is-required",for:"imageUrl"},"主圖網址",-1),de=["src","alt"],ce={key:0,class:"mb-3"},ae=t("p",null,"副圖網址",-1),ue={class:"row g-3"},pe=["onUpdate:modelValue"],me=["onClick"],_e=t("i",{class:"bi bi-x-lg"},null,-1),he=[_e],be=["src","alt"],ge=["disabled"],fe={class:"p-3 border rounded-2 mt-3"},ve=t("h5",{class:"fw-bold mb-3"},"上傳圖片",-1),ye={class:"modal-footer"},we=["disabled"];function Pe(o,e,i,u,s,h){const P=_("loading-overlay"),a=_("v-field"),L=_("upload-form"),$=_("v-form");return r(),n("div",G,[t("div",K,[d(P,{"is-loading":s.uploadState,"is-full":!1},null,8,["is-loading"]),t("div",Q,[t("div",X,[t("h4",Y,f(s.title?s.title:"新增商品"),1),t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:e[0]||(e[0]=(...k)=>o.hideModal&&o.hideModal(...k))},tt)]),d($,{onSubmit:h.confirmUpdate,ref:"form"},{default:S(({meta:k})=>[t("div",et,[t("div",st,[ot,t("div",lt,[t("div",it,[t("i",{class:c(["bi me-2",s.product.title?"bi-check-square text-success":"bi-square"])},null,2),rt]),t("div",nt,[t("i",{class:c(["bi me-2",s.product.subtitle?"bi-check-square text-success":"bi-square"])},null,2),dt]),t("div",ct,[t("i",{class:c(["bi me-2",s.product.content?"bi-check-square text-success":"bi-square"])},null,2),at]),t("div",ut,[t("i",{class:c(["bi me-2",s.product.category?"bi-check-square text-success":"bi-square"])},null,2),pt]),t("div",mt,[t("i",{class:c(["bi me-2",s.product.unit?"bi-check-square text-success":"bi-square"])},null,2),_t]),t("div",ht,[t("i",{class:c(["bi me-2",s.product.description?"bi-check-square text-success":"bi-square"])},null,2),bt]),t("div",gt,[t("i",{class:c(["bi me-2",s.product.origin_price?"bi-check-square text-success":"bi-square"])},null,2),ft]),t("div",vt,[t("i",{class:c(["bi me-2",s.product.price?"bi-check-square text-success":"bi-square"])},null,2),yt]),t("div",wt,[t("i",{class:c(["bi me-2",s.product.imageUrl?"bi-check-square text-success":"bi-square"])},null,2),Pt])])]),t("ul",kt,[t("li",Ut,[t("button",{type:"button",onClick:e[1]||(e[1]=l=>s.tab="content"),class:c(["w-100 nav-link",{active:s.tab==="content"}])}," 商品內容",2)]),t("li",xt,[t("button",{type:"button",onClick:e[2]||(e[2]=l=>s.tab="description"),class:c(["w-100 nav-link",{active:s.tab==="description"}])}," 商品介紹",2)]),t("li",Mt,[t("button",{type:"button",onClick:e[3]||(e[3]=l=>s.tab="price"),class:c(["w-100 nav-link",{active:s.tab==="price"}])}," 商品售價",2)]),t("li",Vt,[t("button",{type:"button",onClick:e[4]||(e[4]=l=>s.tab="tags"),class:c(["w-100 nav-link",{active:s.tab==="tags"}])}," 商品標籤",2)]),t("li",St,[t("button",{type:"button",onClick:e[5]||(e[5]=l=>s.tab="image"),class:c(["w-100 nav-link",{active:s.tab==="image"}])}," 商品圖片",2)])]),t("div",qt,[b(t("div",null,[t("div",Ct,[At,d(a,{type:"text",id:"title",class:"form-control",modelValue:s.product.title,"onUpdate:modelValue":e[6]||(e[6]=l=>s.product.title=l),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),t("div",Lt,[$t,d(a,{type:"text",id:"subtitle",class:"form-control",modelValue:s.product.subtitle,"onUpdate:modelValue":e[7]||(e[7]=l=>s.product.subtitle=l),modelModifiers:{trim:!0},name:"subtitle",rules:"required"},null,8,["modelValue"])]),t("div",Et,[Dt,d(a,{type:"text",id:"content",class:"form-control",modelValue:s.product.content,"onUpdate:modelValue":e[8]||(e[8]=l=>s.product.content=l),modelModifiers:{trim:!0},name:"content",rules:"required",placeholder:"商品的材質與尺寸"},null,8,["modelValue"])]),t("div",Tt,[t("div",It,[Nt,d(a,{type:"text",id:"category",class:"form-control",modelValue:s.product.category,"onUpdate:modelValue":e[9]||(e[9]=l=>s.product.category=l),modelModifiers:{trim:!0},name:"category",rules:"required"},null,8,["modelValue"])]),t("div",jt,[Ft,d(a,{type:"text",id:"unit",class:"form-control",modelValue:s.product.unit,"onUpdate:modelValue":e[10]||(e[10]=l=>s.product.unit=l),modelModifiers:{trim:!0},name:"unit",rules:"required"},null,8,["modelValue"])])])],512),[[v,s.tab==="content"]]),b(t("div",null,[t("div",Bt,[Ot,d(a,{id:"description",rows:"10",class:"form-control text-justify",modelValue:s.product.description,"onUpdate:modelValue":e[11]||(e[11]=l=>s.product.description=l),modelModifiers:{trim:!0},name:"description",rules:"required",as:"textarea"},null,8,["modelValue"])]),Ht,b(t("textarea",{id:"notes",rows:"3",class:"form-control text-justify","onUpdate:modelValue":e[12]||(e[12]=l=>s.product.notes=l),placeholder:"需要讓消費者知道的購買須知"},null,512),[[E,s.product.notes,void 0,{trim:!0}]])],512),[[v,s.tab==="description"]]),b(t("div",null,[t("div",Rt,[zt,d(a,{id:"origin_price",type:"number",min:"1",class:"form-control",modelValue:s.product.origin_price,"onUpdate:modelValue":e[13]||(e[13]=l=>s.product.origin_price=l),modelModifiers:{number:!0},name:"origin_price",rules:"required|integer|min_value:1"},null,8,["modelValue"])]),t("div",Jt,[Wt,d(a,{id:"price",type:"number",min:"1",class:"form-control",modelValue:s.product.price,"onUpdate:modelValue":e[14]||(e[14]=l=>s.product.price=l),modelModifiers:{number:!0},name:"price",rules:"required|integer|min_value:1"},null,8,["modelValue"])])],512),[[v,s.tab==="price"]]),b(t("div",null,[t("div",Gt,[Kt,t("div",Qt,[(r(!0),n(w,null,C(s.product.tags,(l,p)=>(r(),n("div",{class:"col-md-3 position-relative",key:l},[b(t("input",{type:"text",class:"form-control","onUpdate:modelValue":U=>s.product.tags[p]=U},null,8,Xt),[[E,s.product.tags[p]]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:U=>s.product.tags.splice(p,1)},te,8,Yt)]))),128))]),t("button",{type:"button",class:"btn btn-primary",onClick:e[15]||(e[15]=l=>s.product.tags.push(""))}," 新增標籤")]),ee,t("div",se,[(r(!0),n(w,null,C(o.tagsList,l=>(r(),n("button",{key:l,type:"button",class:"btn btn-origin",onClick:p=>s.product.tags.push(l)},[t("span",le,f(l),1)],8,oe))),128))])],512),[[v,s.tab==="tags"]]),b(t("div",null,[t("div",ie,[re,ne,d(a,{id:"imageUrl",type:"text",class:"form-control mb-3",modelValue:s.product.imageUrl,"onUpdate:modelValue":e[16]||(e[16]=l=>s.product.imageUrl=l),modelModifiers:{trim:!0},name:"imageUrl",rules:"required|url"},null,8,["modelValue"]),s.product.imageUrl?(r(),n("img",{key:0,src:s.product.imageUrl,alt:s.product.title},null,8,de)):q("",!0)]),s.product.imagesUrl.length?(r(),n("div",ce,[ae,t("div",ue,[(r(!0),n(w,null,C(s.product.imagesUrl,(l,p)=>(r(),n("div",{key:l,class:"col-md-6 position-relative"},[b(t("input",{type:"text",class:"form-control pe-5","onUpdate:modelValue":U=>s.product.imagesUrl[p]=U},null,8,pe),[[E,s.product.imagesUrl[p],void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:U=>s.product.imagesUrl.splice(p,1)},he,8,me),l?(r(),n("img",{key:0,class:"mt-3",src:l,alt:s.product.title},null,8,be)):q("",!0)]))),128))])])):q("",!0),t("button",{type:"button",class:"btn btn-primary",onClick:e[17]||(e[17]=l=>s.product.imagesUrl.push("")),disabled:s.product.imagesUrl.length>4}," 新增圖片",8,ge)],512),[[v,s.tab==="image"]])]),b(t("div",fe,[ve,s.product.imagesUrl.length<5?(r(),B(L,{key:0,"use-clipboard":!1,"upload-state":s.uploadState,onAddNewImage:h.addNewImage,onUpdateUploadState:h.updateState},null,8,["upload-state","onAddNewImage","onUpdateUploadState"])):q("",!0)],512),[[v,s.tab==="image"]])]),t("div",ye,[t("button",{type:"submit",class:"btn btn-primary",disabled:!k.valid},"確認更新",8,we),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[18]||(e[18]=(...l)=>o.hideModal&&o.hideModal(...l))},"取消")])]),_:1},8,["onSubmit"])])])],512)}const ke=T(W,[["render",Pe]]),Ue={components:{UploadForm:F},mixins:[j],data(){return{modal:"",uploadState:!1}},methods:{updateState(o){this.uploadState=o}}},xe={class:"modal fade",tabindex:"-1",ref:"modal"},Me={class:"modal-dialog modal-dialog-centered"},Ve={class:"modal-content"},Se={class:"modal-header"},qe=t("h4",{class:"mb-0"},"上傳圖片",-1),Ce=["disabled"],Ae=t("i",{class:"bi bi-x-circle-fill"},null,-1),Le=[Ae],$e={class:"modal-body"};function Ee(o,e,i,u,s,h){const P=_("upload-form");return r(),n("div",xe,[t("div",Me,[t("div",Ve,[t("div",Se,[qe,t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:e[0]||(e[0]=(...a)=>o.hideModal&&o.hideModal(...a)),disabled:s.uploadState},Le,8,Ce)]),t("div",$e,[d(P,{"use-clipboard":!0,"upload-state":s.uploadState,onUpdateUploadState:h.updateState},null,8,["upload-state","onUpdateUploadState"])])])])],512)}const De=T(Ue,[["render",Ee]]),Te={components:{PaginationComponent:R,AdminProductModal:ke,UploadModal:De,DeleteModal:z},data(){return{tempProduct:{}}},computed:{...I(A,["products","productsList","categories","filter","displaying","currentPage","totalPages"])},methods:{...D(A,["switchPage","switchFilter","getProducts","switchProductStatus","deleteProduct"]),openModal(o,e){this.tempProduct=o?{...o}:{is_enabled:!1},e==="delete"?this.$refs.deleteModal.showModal():this.$refs.productModal.showModal()}},created(){this.getProducts()}},Ie={class:"text-end mb-7"},Ne=t("h3",{class:"fs-2 mb-2"},"商品管理",-1),je={class:"text-muted"},Fe={class:"row justify-content-between gx-3 gy-3 gy-md-0 mb-4"},Be={class:"col-md-4"},Oe={class:"h-100 alert bg-gray flex-classic mb-0"},He=t("i",{class:"bi bi-plus-lg me-1"},null,-1),Re=t("i",{class:"bi bi-upload me-1"},null,-1),ze={class:"col-md-8"},Je={class:"h-100 alert bg-gray d-flex justify-content-end mb-0"},We={class:"d-flex justify-content-end mb-4"},Ge=["value"],Ke=t("option",{value:"全部"},"全部",-1),Qe=["value"],Xe={key:0,class:"table-responsive"},Ye={class:"table table-hover text-nowrap"},Ze=t("thead",null,[t("tr",null,[t("th",{scope:"col",width:"10%",class:"d-none d-md-table-cell"},"分類"),t("th",{scope:"col",width:"45%"},"名稱"),t("th",{scope:"col",width:"10%",class:"text-end"},"原價"),t("th",{scope:"col",width:"10%",class:"text-end"},"售價"),t("th",{scope:"col",width:"10%",class:"text-center"},"狀態"),t("th",{scope:"col",width:"15%",class:"text-center"},"管理")])],-1),ts={class:"align-middle"},es={class:"d-none d-md-table-cell"},ss={class:"badge bg-highlight text-dark py-2"},os=t("i",{class:"bi bi-box-arrow-up-right"},null,-1),ls={class:"text-end"},is={class:"text-end"},rs={class:"text-center"},ns={class:"form-switch"},ds=["checked","onChange"],cs={class:"text-center"},as={class:"d-flex flex-column gap-2"},us=["onClick"],ps=["onClick"],ms={key:1,class:"alert bg-gray"},_s=["src","alt"];function hs(o,e,i,u,s,h){const P=_("pagination-component"),a=_("router-link"),L=_("upload-modal"),$=_("admin-product-modal"),k=_("delete-modal");return r(),n(w,null,[t("div",Ie,[Ne,t("p",je,[t("span",null,"目前共有 "+f(o.products.length)+" 項商品，",1),t("span",null,f(o.products.filter(l=>l.is_enabled).length)+" 項上架中",1)])]),t("div",Fe,[t("div",Be,[t("div",Oe,[t("button",{type:"button",class:"w-100 btn btn-primary me-3",onClick:e[0]||(e[0]=l=>h.openModal())},[He,y(" 新增商品")]),t("button",{type:"button",class:"w-100 btn btn-primary",onClick:e[1]||(e[1]=(...l)=>o.$refs.uploadModal.showModal&&o.$refs.uploadModal.showModal(...l))},[Re,y(" 上傳圖片")])])]),t("div",ze,[t("div",Je,[d(P,{total:o.totalPages,current:o.currentPage,onSwitchPage:o.switchPage},null,8,["total","current","onSwitchPage"])])])]),t("div",We,[t("div",null,[t("select",{class:"form-select",value:o.filter,onChange:e[2]||(e[2]=l=>o.switchFilter(l.target.value))},[Ke,(r(!0),n(w,null,C(o.categories,l=>(r(),n("option",{key:l,value:l},f(l),9,Qe))),128))],40,Ge)])]),o.products.length?(r(),n("div",Xe,[t("table",Ye,[Ze,t("tbody",ts,[(r(!0),n(w,null,C(o.displaying,l=>(r(),n("tr",{key:l.id},[t("td",es,[t("span",ss,f(l.category),1)]),t("td",null,[l.is_enabled?(r(),B(a,{key:0,class:"text-info me-3",target:"_blank",to:`/product/${l.id}`},{default:S(()=>[os]),_:2},1032,["to"])):q("",!0),t("span",null,f(l.title),1)]),t("td",ls,"$ "+f(l.origin_price),1),t("td",is,"$ "+f(l.price),1),t("td",rs,[t("div",ns,[t("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:l.is_enabled,onChange:p=>o.switchProductStatus(l)},null,40,ds)])]),t("td",cs,[t("div",as,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:p=>h.openModal(l,"update")}," 編輯",8,us),t("button",{type:"button",class:"btn btn-outline-danger",onClick:p=>h.openModal(l,"delete")}," 刪除",8,ps)])])]))),128))])])])):(r(),n("div",ms,"還沒有任何商品！趕快建立一個吧！")),d(L,{ref:"uploadModal"},null,512),d($,{ref:"productModal","temp-product":s.tempProduct},null,8,["temp-product"]),d(k,{ref:"deleteModal",onDeleteTarget:e[3]||(e[3]=l=>o.deleteProduct(s.tempProduct.id,this.$refs.deleteModal.hideModal))},{title:S(()=>[y("確定刪除商品？")]),alert:S(()=>[y("這個操作無法復原喔！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:S(()=>[t("img",{class:"img-zoom-out mb-4",src:s.tempProduct.imageUrl,alt:s.tempProduct.title},null,8,_s)]),_:1},512)],64)}const Os=T(Te,[["render",hs]]);export{Os as default};
