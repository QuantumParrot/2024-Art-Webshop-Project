import{d as B,m as I,a as D}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{a as x}from"./axios@1.6.7-Di5RpEPX.js";import{l as O,a as N}from"./alert-dm0RMdUk.js";import{P as H}from"./PaginationComponent-QuSp7tSl.js";import{m as j}from"./modal-5DUSpYR6.js";import{U as F}from"./UploadForm-DGYaKHeN.js";import{m as y,l as E}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as T}from"./index-oiU3jX8y.js";import{aj as n,O as d,P as t,c,aH as C,aJ as h,F as w,ao as S,N as q,M as R,V as P,aq as f}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{P as g,n as a}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{D as z}from"./DeleteModal-DcHVWqHq.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import"./vue@3.4.19-CzIOYL8w.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-Djxe9Xmu.js";import"./clipboard@2.0.11-CIUMpgwV.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";var J={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:M,VITE_APP_PATH:V}=J,m=O(),b=N(),A=B("adminProduct",{state:()=>({products:[],filter:"全部",currentPage:1}),getters:{categories:({products:o})=>{const e=[];return o.forEach(i=>{e.includes(i.category)||e.push(i.category)}),e},tagsList:({products:o})=>{const e=[];return o.forEach(i=>{i.tags&&i.tags.forEach(p=>{e.includes(p)||e.push(p)})}),e.sort((i,p)=>i.length-p.length)},productsList:({products:o,filter:e})=>e==="全部"?o:o.filter(i=>i.category===e),totalPages:({productsList:o})=>Math.ceil(o.length/5),displaying:({productsList:o,currentPage:e})=>o.toSorted((p,s)=>p.price-s.price).filter((p,s)=>Math.floor(s/5)===e-1)},actions:{switchPage(o){this.currentPage=o},getProducts(){m.createLoader("get-products"),x.get(`${M}/api/${V}/admin/products/all`).then(o=>{const{products:e}=o.data;this.products=Object.values(e),this.totalPages===0&&this.switchFilter("全部"),this.currentPage>this.totalPages&&this.switchPage(1)}).catch(o=>b.errorAlert(o)).finally(()=>m.removeLoader("get-products"))},createProduct(o,e){m.createLoader("create-products"),x.post(`${M}/api/${V}/admin/product`,{data:o}).then(i=>{const{message:p}=i.data;b.toastAlert(p,"success"),e(),this.getProducts()}).catch(i=>b.errorAlert(i)).finally(()=>m.removeLoader("create-products"))},updateProduct(o,e){m.createLoader("update-products"),x.put(`${M}/api/${V}/admin/product/${o.id}`,{data:o}).then(i=>{b.toastAlert(i.data.message,"success"),e(),this.getProducts()}).catch(i=>b.errorAlert(i)).finally(()=>m.removeLoader("update-products"))},switchProductStatus(o){const e=o.is_enabled;m.createLoader("switch-product-status"),x.put(`${M}/api/${V}/admin/product/${o.id}`,{data:{...o,is_enabled:!o.is_enabled}}).then(()=>{b.toastAlert(`成功${e?"下架":"上架"}`,"success"),this.getProducts()}).catch(i=>b.errorAlert(i)).finally(()=>m.removeLoader("switch-product-status"))},deleteProduct(o,e){m.createLoader("delete-product"),x.delete(`${M}/api/${V}/admin/product/${o}`).then(()=>{b.toastAlert("我們懷念它 (´;ω;`)","success"),e(),this.getProducts()}).catch(i=>b.errorAlert(i)).finally(()=>m.removeLoader("delete-product"))},switchFilter(o){this.switchPage(1),this.filter=o}}}),W={components:{UploadForm:F},mixins:[j],props:["tempProduct"],data(){return{modal:"",title:"",tab:"content",product:{imagesUrl:[],tags:[]},uploadState:!1}},computed:{...I(A,["tagsList"])},watch:{tempProduct(){this.updateData()}},methods:{...D(A,["createProduct","updateProduct"]),...D(N,["toastAlert"]),updateData(){this.product=this.tempProduct,this.title=this.tempProduct.title;const{imagesUrl:o,tags:e}=this.tempProduct;this.product.imagesUrl=Array.isArray(o)?[...o]:[],this.product.tags=Array.isArray(e)?[...e]:[],this.tab="content"},addNewImage(o){this.product.imageUrl?(this.product.imagesUrl=this.product.imagesUrl.filter(e=>e),this.product.imagesUrl.push(o)):this.product.imageUrl=o},confirmUpdate(){this.product.imagesUrl=this.product.imagesUrl.filter(o=>o),this.product.tags=this.product.tags.filter(o=>o),this.product.id?this.updateProduct(this.product,this.hideModal):this.createProduct(this.product,this.hideModal)},updateState(o){this.uploadState=o}},mounted(){this.updateData()}},G={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},K={class:"modal-dialog modal-dialog-centered"},Q={class:"modal-content"},X={class:"modal-header"},Y={class:"mb-0"},Z=t("i",{class:"bi bi-x-circle-fill"},null,-1),tt=[Z],et={class:"modal-body"},st={class:"alert bg-gray"},ot=t("p",null,[P("欄位完成度（ "),t("span",{class:"text-danger"},"*"),P(" 為必填欄位 ）")],-1),lt={class:"row fw-bold"},it={class:"col"},rt=t("span",null,"名稱",-1),nt={class:"col"},dt=t("span",null,"別名",-1),ct={class:"col"},at=t("span",null,"規格",-1),ut={class:"col"},pt=t("span",null,"分類",-1),mt={class:"col"},_t=t("span",null,"單位",-1),ht={class:"col"},bt=t("span",null,"介紹",-1),gt={class:"col"},ft=t("span",null,"原價",-1),vt={class:"col"},yt=t("span",null,"售價",-1),Pt={class:"col"},wt=t("span",null,"主圖",-1),kt={class:"nav nav-pills flex-nowrap text-nowrap overflow-x-scroll bg-gray rounded-2 mb-3"},Ut={class:"nav-item flex-grow-1"},xt={class:"nav-item flex-grow-1"},Mt={class:"nav-item flex-grow-1"},Vt={class:"nav-item flex-grow-1"},St={class:"nav-item flex-grow-1"},qt={class:"alert border rounded-2"},Ct={class:"mb-3"},At=t("label",{class:"form-label is-required",for:"title"},"商品名稱",-1),Lt={class:"mb-3"},$t=t("label",{class:"form-label is-required",for:"subtitle"},"商品別名",-1),Et={class:"mb-3"},Dt=t("label",{class:"form-label is-required",for:"content"},"商品規格",-1),Tt={class:"row row-cols-2"},It={class:"col"},Nt=t("label",{class:"form-label is-required",for:"category"},"商品分類",-1),jt={class:"col"},Ft=t("label",{class:"form-label is-required",for:"unit"},"商品單位",-1),Bt={class:"mb-3"},Ot=t("label",{class:"form-label mb-3 is-required",for:"description"},"商品介紹",-1),Ht=t("label",{class:"form-label mb-3",for:"notes"},"商品備註",-1),Rt={class:"mb-3"},zt=t("div",{class:"flex-classic mb-2"},[t("label",{class:"is-required",for:"origin_price"},"商品原價"),t("span",{class:"fs-7 text-danger"}," 必須是大於零的整數")],-1),Jt={class:"mb-0"},Wt=t("div",{class:"flex-classic mb-2"},[t("label",{class:"is-required",for:"price"},"商品售價"),t("span",{class:"fs-7 text-danger"}," 必須是大於零的整數")],-1),Gt=t("p",null,"商品標籤",-1),Kt={class:"d-flex gap-2 flex-wrap mb-3"},Qt=["onClick"],Xt={class:"badge p-2 bg-subtle text-primary fs-6"},Yt={class:"row g-3 mb-3"},Zt=["onUpdate:modelValue"],te=["onClick"],ee=t("i",{class:"bi bi-x-lg"},null,-1),se=[ee],oe={class:"mb-3"},le=t("h5",{class:"fw-bold mb-3"},"圖片設定",-1),ie=t("label",{class:"form-label is-required",for:"imageUrl"},"主圖網址",-1),re=["src","alt"],ne={key:0,class:"mb-3"},de=t("p",null,"副圖網址",-1),ce={class:"row g-3"},ae=["onUpdate:modelValue"],ue=["onClick"],pe=t("i",{class:"bi bi-x-lg"},null,-1),me=[pe],_e=["src","alt"],he=["disabled"],be={class:"p-3 border rounded-2 mt-3"},ge=t("h5",{class:"fw-bold mb-3"},"上傳圖片",-1),fe={class:"modal-footer"},ve=["disabled"];function ye(o,e,i,p,s,_){const k=f("loading-overlay"),u=f("v-field"),L=f("upload-form"),$=f("v-form");return n(),d("div",G,[t("div",K,[c(k,{"is-loading":s.uploadState,"is-full":!1},null,8,["is-loading"]),t("div",Q,[t("div",X,[t("h4",Y,g(s.title?s.title:"新增商品"),1),t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:e[0]||(e[0]=(...r)=>o.hideModal&&o.hideModal(...r))},tt)]),c($,{onSubmit:_.confirmUpdate,ref:"form"},{default:C(({meta:r})=>[t("div",et,[t("div",st,[ot,t("div",lt,[t("div",it,[t("i",{class:a(["bi me-2",s.product.title?"bi-check-square text-success":"bi-square"])},null,2),rt]),t("div",nt,[t("i",{class:a(["bi me-2",s.product.subtitle?"bi-check-square text-success":"bi-square"])},null,2),dt]),t("div",ct,[t("i",{class:a(["bi me-2",s.product.content?"bi-check-square text-success":"bi-square"])},null,2),at]),t("div",ut,[t("i",{class:a(["bi me-2",s.product.category?"bi-check-square text-success":"bi-square"])},null,2),pt]),t("div",mt,[t("i",{class:a(["bi me-2",s.product.unit?"bi-check-square text-success":"bi-square"])},null,2),_t]),t("div",ht,[t("i",{class:a(["bi me-2",s.product.description?"bi-check-square text-success":"bi-square"])},null,2),bt]),t("div",gt,[t("i",{class:a(["bi me-2",s.product.origin_price?"bi-check-square text-success":"bi-square"])},null,2),ft]),t("div",vt,[t("i",{class:a(["bi me-2",s.product.price?"bi-check-square text-success":"bi-square"])},null,2),yt]),t("div",Pt,[t("i",{class:a(["bi me-2",s.product.imageUrl?"bi-check-square text-success":"bi-square"])},null,2),wt])])]),t("ul",kt,[t("li",Ut,[t("button",{type:"button",onClick:e[1]||(e[1]=l=>s.tab="content"),class:a(["w-100 nav-link",{active:s.tab==="content"}])}," 商品內容",2)]),t("li",xt,[t("button",{type:"button",onClick:e[2]||(e[2]=l=>s.tab="description"),class:a(["w-100 nav-link",{active:s.tab==="description"}])}," 商品介紹",2)]),t("li",Mt,[t("button",{type:"button",onClick:e[3]||(e[3]=l=>s.tab="price"),class:a(["w-100 nav-link",{active:s.tab==="price"}])}," 商品售價",2)]),t("li",Vt,[t("button",{type:"button",onClick:e[4]||(e[4]=l=>s.tab="tags"),class:a(["w-100 nav-link",{active:s.tab==="tags"}])}," 商品標籤",2)]),t("li",St,[t("button",{type:"button",onClick:e[5]||(e[5]=l=>s.tab="image"),class:a(["w-100 nav-link",{active:s.tab==="image"}])}," 商品圖片",2)])]),t("div",qt,[h(t("div",null,[t("div",Ct,[At,c(u,{type:"text",id:"title",class:"form-control",modelValue:s.product.title,"onUpdate:modelValue":e[6]||(e[6]=l=>s.product.title=l),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),t("div",Lt,[$t,c(u,{type:"text",id:"subtitle",class:"form-control",modelValue:s.product.subtitle,"onUpdate:modelValue":e[7]||(e[7]=l=>s.product.subtitle=l),modelModifiers:{trim:!0},name:"subtitle",rules:"required"},null,8,["modelValue"])]),t("div",Et,[Dt,c(u,{type:"text",id:"content",class:"form-control",modelValue:s.product.content,"onUpdate:modelValue":e[8]||(e[8]=l=>s.product.content=l),modelModifiers:{trim:!0},name:"content",rules:"required",placeholder:"商品的材質與尺寸"},null,8,["modelValue"])]),t("div",Tt,[t("div",It,[Nt,c(u,{type:"text",id:"category",class:"form-control",modelValue:s.product.category,"onUpdate:modelValue":e[9]||(e[9]=l=>s.product.category=l),modelModifiers:{trim:!0},name:"category",rules:"required"},null,8,["modelValue"])]),t("div",jt,[Ft,c(u,{type:"text",id:"unit",class:"form-control",modelValue:s.product.unit,"onUpdate:modelValue":e[10]||(e[10]=l=>s.product.unit=l),modelModifiers:{trim:!0},name:"unit",rules:"required"},null,8,["modelValue"])])])],512),[[y,s.tab==="content"]]),h(t("div",null,[t("div",Bt,[Ot,c(u,{id:"description",rows:"10",class:"form-control text-justify",modelValue:s.product.description,"onUpdate:modelValue":e[11]||(e[11]=l=>s.product.description=l),modelModifiers:{trim:!0},name:"description",rules:"required",as:"textarea"},null,8,["modelValue"])]),Ht,h(t("textarea",{id:"notes",rows:"3",class:"form-control text-justify","onUpdate:modelValue":e[12]||(e[12]=l=>s.product.notes=l),placeholder:"需要讓消費者知道的購買須知"},null,512),[[E,s.product.notes,void 0,{trim:!0}]])],512),[[y,s.tab==="description"]]),h(t("div",null,[t("div",Rt,[zt,c(u,{id:"origin_price",type:"number",min:"1",class:"form-control",modelValue:s.product.origin_price,"onUpdate:modelValue":e[13]||(e[13]=l=>s.product.origin_price=l),modelModifiers:{number:!0},name:"origin_price",rules:"required|integer|min_value:1"},null,8,["modelValue"])]),t("div",Jt,[Wt,c(u,{id:"price",type:"number",min:"1",class:"form-control",modelValue:s.product.price,"onUpdate:modelValue":e[14]||(e[14]=l=>s.product.price=l),modelModifiers:{number:!0},name:"price",rules:"required|integer|min_value:1"},null,8,["modelValue"])])],512),[[y,s.tab==="price"]]),h(t("div",null,[t("div",null,[Gt,t("div",Kt,[(n(!0),d(w,null,S(o.tagsList,l=>(n(),d("button",{type:"button",key:l,class:"btn btn-origin",onClick:v=>s.product.tags.push(l)},[t("span",Xt,g(l),1)],8,Qt))),128))]),t("div",Yt,[(n(!0),d(w,null,S(s.product.tags,(l,v)=>(n(),d("div",{class:"col-md-3 position-relative",key:l},[h(t("input",{type:"text",class:"form-control","onUpdate:modelValue":U=>s.product.tags[v]=U},null,8,Zt),[[E,s.product.tags[v]]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:U=>s.product.tags.splice(v,1)},se,8,te)]))),128))]),t("button",{type:"button",class:"btn btn-primary",onClick:e[15]||(e[15]=l=>s.product.tags.push(""))}," 新增標籤")])],512),[[y,s.tab==="tags"]]),h(t("div",null,[t("div",oe,[le,ie,c(u,{id:"imageUrl",type:"text",class:"form-control mb-3",modelValue:s.product.imageUrl,"onUpdate:modelValue":e[16]||(e[16]=l=>s.product.imageUrl=l),modelModifiers:{trim:!0},name:"imageUrl",rules:"required|url"},null,8,["modelValue"]),s.product.imageUrl?(n(),d("img",{key:0,src:s.product.imageUrl,alt:s.product.title},null,8,re)):q("",!0)]),s.product.imagesUrl.length?(n(),d("div",ne,[de,t("div",ce,[(n(!0),d(w,null,S(s.product.imagesUrl,(l,v)=>(n(),d("div",{key:l,class:"col-md-6 position-relative"},[h(t("input",{type:"text",class:"form-control pe-5","onUpdate:modelValue":U=>s.product.imagesUrl[v]=U},null,8,ae),[[E,s.product.imagesUrl[v],void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:U=>s.product.imagesUrl.splice(v,1)},me,8,ue),l?(n(),d("img",{key:0,class:"mt-3",src:l,alt:s.product.title},null,8,_e)):q("",!0)]))),128))])])):q("",!0),t("button",{type:"button",class:"btn btn-primary",onClick:e[17]||(e[17]=l=>s.product.imagesUrl.push("")),disabled:s.product.imagesUrl.length>4}," 新增圖片",8,he)],512),[[y,s.tab==="image"]])]),h(t("div",be,[ge,s.product.imagesUrl.length<5?(n(),R(L,{key:0,"use-clipboard":!1,"upload-state":s.uploadState,onAddNewImage:_.addNewImage,onUpdateUploadState:_.updateState},null,8,["upload-state","onAddNewImage","onUpdateUploadState"])):q("",!0)],512),[[y,s.tab==="image"]])]),t("div",fe,[t("button",{type:"submit",class:"btn btn-primary",disabled:!r.valid},"確認更新",8,ve),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[18]||(e[18]=(...l)=>o.hideModal&&o.hideModal(...l))},"取消")])]),_:1},8,["onSubmit"])])])],512)}const Pe=T(W,[["render",ye]]),we={components:{UploadForm:F},mixins:[j],data(){return{modal:"",uploadState:!1}},methods:{updateState(o){this.uploadState=o}}},ke={class:"modal fade",tabindex:"-1",ref:"modal"},Ue={class:"modal-dialog modal-dialog-centered"},xe={class:"modal-content"},Me={class:"modal-header"},Ve=t("h4",{class:"mb-0"},"上傳圖片",-1),Se=["disabled"],qe=t("i",{class:"bi bi-x-circle-fill"},null,-1),Ce=[qe],Ae={class:"modal-body"};function Le(o,e,i,p,s,_){const k=f("upload-form");return n(),d("div",ke,[t("div",Ue,[t("div",xe,[t("div",Me,[Ve,t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:e[0]||(e[0]=(...u)=>o.hideModal&&o.hideModal(...u)),disabled:s.uploadState},Ce,8,Se)]),t("div",Ae,[c(k,{"use-clipboard":!0,"upload-state":s.uploadState,onUpdateUploadState:_.updateState},null,8,["upload-state","onUpdateUploadState"])])])])],512)}const $e=T(we,[["render",Le]]),Ee={components:{PaginationComponent:H,AdminProductModal:Pe,UploadModal:$e,DeleteModal:z},data(){return{tempProduct:{}}},computed:{...I(A,["products","productsList","categories","filter","displaying","currentPage","totalPages"])},methods:{...D(A,["switchPage","switchFilter","getProducts","switchProductStatus","deleteProduct"]),openModal(o,e){this.tempProduct=o?{...o}:{is_enabled:!1},e==="delete"?this.$refs.deleteModal.showModal():this.$refs.productModal.showModal()}},created(){this.getProducts()}},De={class:"text-end mb-7"},Te=t("h3",{class:"fs-2 mb-2"},"商品管理",-1),Ie={class:"text-muted"},Ne={class:"row justify-content-between gx-3 gy-3 gy-md-0 mb-4"},je={class:"col-md-4"},Fe={class:"h-100 alert bg-gray flex-classic mb-0"},Be=t("i",{class:"bi bi-plus-lg me-1"},null,-1),Oe=t("i",{class:"bi bi-upload me-1"},null,-1),He={class:"col-md-8"},Re={class:"h-100 alert bg-gray d-flex justify-content-end mb-0"},ze={class:"d-flex justify-content-end mb-4"},Je=["value"],We=t("option",{value:"全部"},"全部",-1),Ge=["value"],Ke={key:0,class:"table-responsive"},Qe={class:"table table-hover text-nowrap"},Xe=t("thead",null,[t("tr",null,[t("th",{scope:"col",width:"10%",class:"d-none d-md-table-cell"},"分類"),t("th",{scope:"col",width:"45%"},"名稱"),t("th",{scope:"col",width:"10%",class:"text-end"},"原價"),t("th",{scope:"col",width:"10%",class:"text-end"},"售價"),t("th",{scope:"col",width:"10%",class:"text-center"},"狀態"),t("th",{scope:"col",width:"15%",class:"text-center"},"管理")])],-1),Ye={class:"align-middle"},Ze={class:"d-none d-md-table-cell"},ts={class:"badge bg-highlight text-dark py-2"},es={class:"text-end"},ss={class:"text-end"},os={class:"text-center"},ls={class:"form-switch"},is=["checked","onChange"],rs={class:"text-center"},ns={class:"d-flex flex-column gap-2"},ds=["onClick"],cs=["onClick"],as={key:1,class:"alert bg-gray"},us=["src","alt"];function ps(o,e,i,p,s,_){const k=f("pagination-component"),u=f("upload-modal"),L=f("admin-product-modal"),$=f("delete-modal");return n(),d(w,null,[t("div",De,[Te,t("p",Ie,[t("span",null,"目前共有 "+g(o.products.length)+" 項商品，",1),t("span",null,g(o.products.filter(r=>r.is_enabled).length)+" 項上架中",1)])]),t("div",Ne,[t("div",je,[t("div",Fe,[t("button",{type:"button",class:"w-100 btn btn-primary me-3",onClick:e[0]||(e[0]=r=>_.openModal())},[Be,P(" 新增商品")]),t("button",{type:"button",class:"w-100 btn btn-primary",onClick:e[1]||(e[1]=(...r)=>o.$refs.uploadModal.showModal&&o.$refs.uploadModal.showModal(...r))},[Oe,P(" 上傳圖片")])])]),t("div",He,[t("div",Re,[c(k,{total:o.totalPages,current:o.currentPage,onSwitchPage:o.switchPage},null,8,["total","current","onSwitchPage"])])])]),t("div",ze,[t("div",null,[t("select",{class:"form-select",value:o.filter,onChange:e[2]||(e[2]=r=>o.switchFilter(r.target.value))},[We,(n(!0),d(w,null,S(o.categories,r=>(n(),d("option",{key:r,value:r},g(r),9,Ge))),128))],40,Je)])]),o.products.length?(n(),d("div",Ke,[t("table",Qe,[Xe,t("tbody",Ye,[(n(!0),d(w,null,S(o.displaying,r=>(n(),d("tr",{key:r.id},[t("td",Ze,[t("span",ts,g(r.category),1)]),t("td",null,g(r.title),1),t("td",es,"$ "+g(r.origin_price),1),t("td",ss,"$ "+g(r.price),1),t("td",os,[t("div",ls,[t("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:r.is_enabled,onChange:l=>o.switchProductStatus(r)},null,40,is)])]),t("td",rs,[t("div",ns,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:l=>_.openModal(r,"update")}," 編輯",8,ds),t("button",{type:"button",class:"btn btn-outline-danger",onClick:l=>_.openModal(r,"delete")}," 刪除",8,cs)])])]))),128))])])])):(n(),d("div",as,"還沒有任何商品！趕快建立一個吧！")),c(u,{ref:"uploadModal"},null,512),c(L,{ref:"productModal","temp-product":s.tempProduct},null,8,["temp-product"]),c($,{ref:"deleteModal",onDeleteTarget:e[3]||(e[3]=r=>o.deleteProduct(s.tempProduct.id,this.$refs.deleteModal.hideModal))},{title:C(()=>[P("確定刪除商品？")]),alert:C(()=>[P("這個操作無法復原喔！你要確定欸！(ﾟдﾟ≡ﾟдﾟ)")]),itemDetail:C(()=>[t("img",{class:"img-zoom-out mb-4",src:s.tempProduct.imageUrl,alt:s.tempProduct.title},null,8,us)]),_:1},512)],64)}const js=T(Ee,[["render",ps]]);export{js as default};
