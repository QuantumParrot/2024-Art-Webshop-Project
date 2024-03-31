import{m as v,a as y}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{u as w}from"./userProduct-DvVBjULb.js";import{c as P}from"./userCart-x-FpTMdM.js";import{l as z}from"./alert-8GdQBstY.js";import{_ as C}from"./index-DzDiKqeM.js";import{z as n,A as d,Q as t,al as M,ak as q,aJ as h,c as u,aH as b,F as p,ao as _,P as k,V as j,aq as x,W as f,O as N}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{m as I,l as V,n as L}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{P as l,n as r}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";const U={data(){return{modal:""}},props:["image"],methods:{showModal(){this.modal.showModal()},hideModal(){this.modal.close()},initImage(){this.$nextTick(()=>{const{naturalWidth:s}=this.$refs.image;s<800?this.$refs.image.style.width="100%":this.$refs.image.style.width=s})}},watch:{image(){this.initImage()}},mounted(){this.modal=this.$refs.modal}},A=s=>(M("data-v-09f993c2"),s=s(),q(),s),B={class:"bg-white rounded-2 shadow pt-0",ref:"modal"},E={class:"sticky-top bg-white d-flex justify-content-end py-3"},R=A(()=>t("i",{class:"bi bi-x-circle-fill"},null,-1)),D=[R],Z={class:"d-flex overflow-scroll"},F=["src"];function W(s,o,g,S,i,c){return n(),d("dialog",B,[t("div",E,[t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:o[0]||(o[0]=(...m)=>c.hideModal&&c.hideModal(...m))},D)]),t("div",Z,[t("img",{src:g.image,alt:"zoom-in-image",ref:"image"},null,8,F)])],512)}const H=C(U,[["render",W],["__scopeId","data-v-09f993c2"]]),J={components:{ZoomImageModal:H},data(){return{transition:!0,frame:"",frameSetting:{wooden:"frame-wooden",golden:"frame-golden",dark:"frame-dark",baroque:"frame-baroque"},mainImage:"",quantity:1,zoomImage:""}},computed:{...v(w,["product","relatedProducts"]),...v(z,["isLoading","loadingTask"]),displayImages(){const{imageUrl:s,imagesUrl:o}=this.product;return Array.isArray(o)?[s,...o]:[s]}},watch:{"$route.params":{handler(){this.getProduct(this.$route.params.id)},deep:!0},product(){this.getRelatedProducts(this.product),this.mainImage=this.product.imageUrl,this.quantity=1,this.frame="",this.transition=!1,window.scrollTo(0,0,"smooth")},quantity(s){Number.isInteger(s)?s<1&&(this.quantity=1):this.quantity=Math.floor(this.quantity)}},methods:{...y(w,["getProduct","getRelatedProducts"]),...y(P,["addToCart"]),openModal(){this.zoomImage=this.mainImage,this.$refs.zoomImageModal.showModal()}},mounted(){this.getProduct(this.$route.params.id)}},a=s=>(M("data-v-e9e9bfb5"),s=s(),q(),s),O={class:"h-100 bg-gray text-primary"},Q={class:"container py-7"},G={class:"d-flex justify-content-center"},K={class:"mb-5",style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},X={class:"breadcrumb flex-nowrap text-nowrap overflow-x-scroll"},Y={class:"breadcrumb-item"},tt={class:"breadcrumb-item"},st={class:"breadcrumb-item"},et={class:"d-md-block d-none breadcrumb-item active","aria-current":"page"},ot={class:"mb-5"},it=["src","alt"],at={class:"bg-light rounded-2 p-3 mb-5 d-flex gap-3 overflow-x-scroll"},lt=["src","alt","onClick"],nt={class:"overflow-x-scroll"},dt={key:0,class:"frames d-flex flex-nowrap text-nowrap mb-5"},rt=a(()=>t("b",null,"無畫框",-1)),ct=[rt],mt=a(()=>t("b",null,"極簡黑",-1)),pt=[mt],ut=a(()=>t("b",null,"淺木紋",-1)),bt=[ut],ht=a(()=>t("b",null,"典雅金",-1)),_t=[ht],ft=a(()=>t("b",null,"巴洛克",-1)),gt=[ft],vt={class:"text-black mb-5"},yt={class:"mb-0"},wt=a(()=>t("hr",null,null,-1)),kt={class:"row g-5 mb-5"},xt={class:"col-xl-7 order-xl-1 order-2"},It={class:"h-100 d-flex flex-column"},Ct={class:"flex-grow-1 alert bg-light p-5 mb-5"},Mt={class:"h-100 border border-gray rounded-2 p-5 pb-6 d-flex flex-column justify-content-between"},qt=a(()=>t("h3",{class:"lh-lg fs-4 text-dark fw-bold mb-5"},[t("span",{class:"section-title"},"關於它的故事")],-1)),St={class:"lh-lg pre-wrap text-justify mb-6"},$t=a(()=>t("p",{class:"fs-7 mb-5"},"點選下方標籤，搜尋相關作品：",-1)),Tt={class:"d-flex gap-2 flex-nowrap text-nowrap overflow-scroll"},Pt=a(()=>t("div",{class:"alert bg-light p-5 mb-0"},[t("p",{class:"lh-lg mb-0"},[t("i",{class:"bi bi-c-circle me-1"}),t("span",null,[f("圖片與文字參考資料請參閱："),t("a",{target:"_blank",href:"https://www.notion.so/9f522b0de5c2413c8090249c96bd692a?v=5b0f1f1c376f4b468a56aaec87a97c8a"},"本站索引")])])],-1)),zt={class:"col-xl-5 order-xl-2 order-1"},jt={class:"sticky-sidebar"},Nt={class:"alert bg-light p-5 mb-5"},Vt=a(()=>t("h4",{class:"fs-5 text-dark fw-bold mb-4"},"購買須知",-1)),Lt={class:"lh-lg pre-wrap text-justify mb-0"},Ut={class:"alert bg-light p-5 mb-5"},At={class:"mb-5"},Bt={class:"text-nowrap overflow-x-scroll"},Et=a(()=>t("span",{class:"fs-6 badge bg-primary px-3 py-2 me-2"},"規格",-1)),Rt={class:"text-nowrap overflow-x-scroll"},Dt=a(()=>t("span",{class:"fs-6 badge bg-primary px-3 py-2 me-2"},"單位",-1)),Zt={class:"alert bg-white p-5 mb-0"},Ft={class:"fs-5 fw-bold mb-5"},Wt=a(()=>t("span",null,"NT＄",-1)),Ht={class:"text-muted text-decoration-line-through"},Jt=a(()=>t("span",{class:"arrow-animation"},[t("span",{class:"arrow"}," → ")],-1)),Ot={class:"row g-3"},Qt={class:"col-sm-8"},Gt={class:"input-group"},Kt=["disabled"],Xt=a(()=>t("i",{class:"bi bi-dash"},null,-1)),Yt=[Xt],ts=a(()=>t("i",{class:"bi bi-plus"},null,-1)),ss=[ts],es={class:"col-sm-4 text-end"},os=["disabled"],is={class:"spinner-border spinner-border-sm me-2",role:"status"},as=a(()=>t("span",{class:"visually-hidden"},"Loading...",-1)),ls=[as],ns=j('<div class="alert bg-light p-5 mb-0" data-v-e9e9bfb5><div class="row g-3" data-v-e9e9bfb5><div class="col-sm-4" data-v-e9e9bfb5><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-e9e9bfb5><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-e9e9bfb5><i class="bi bi-truck fs-3" data-v-e9e9bfb5></i></div><span data-v-e9e9bfb5>專業物流配送</span></div></div><div class="col-sm-4" data-v-e9e9bfb5><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-e9e9bfb5><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-e9e9bfb5><i class="bi bi-7-circle fs-3" data-v-e9e9bfb5></i></div><span data-v-e9e9bfb5>七天鑑賞期</span></div></div><div class="col-sm-4" data-v-e9e9bfb5><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-e9e9bfb5><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-e9e9bfb5><i class="bi bi-recycle fs-3" data-v-e9e9bfb5></i></div><span data-v-e9e9bfb5>採用環保包裝</span></div></div></div></div>',1),ds={class:"alert bg-white p-5"},rs=a(()=>t("h4",{class:"text-center mb-5"},"為您推薦",-1)),cs={class:"row g-5"},ms=["onClick"],ps={class:"card"},us=["src","alt"],bs={class:"card-body py-5 flex-classic"},hs={class:"fs-6 fw-bold mb-0"},_s={class:"mb-0"};function fs(s,o,g,S,i,c){const m=x("RouterLink"),$=x("ZoomImageModal");return n(),d(p,null,[h(t("div",O,[t("div",Q,[t("div",G,[t("div",null,[t("nav",K,[t("ol",X,[t("li",Y,[u(m,{to:"/"},{default:b(()=>[f("首頁")]),_:1})]),t("li",tt,[u(m,{to:"/products"},{default:b(()=>[f("商品列表")]),_:1})]),t("li",st,[u(m,{to:`/products?category=${s.product.category}`},{default:b(()=>[t("span",null,l(s.product.category),1)]),_:1},8,["to"])]),t("li",et,[t("span",null,l(s.product.title),1)])])]),t("div",ot,[t("img",{class:r(["main-img",i.frame?i.frameSetting[i.frame]:""]),src:i.mainImage,alt:s.product.title,width:"600",onClick:o[0]||(o[0]=(...e)=>c.openModal&&c.openModal(...e))},null,10,it)]),t("div",at,[(n(!0),d(p,null,_(c.displayImages,e=>(n(),d("img",{key:e,class:r(["display-img",{"opacity-50":e!==i.mainImage}]),src:e,alt:s.product.title,onClick:T=>i.mainImage=e},null,10,lt))),128))]),t("div",nt,[s.product.category==="複製油畫"?(n(),d("div",dt,[t("button",{type:"button",class:r(["fs-7 btn btn-outline-primary",{active:i.frame===""}]),onClick:o[1]||(o[1]=e=>i.frame="")},ct,2),t("button",{type:"button",class:r(["fs-7 btn btn-outline-primary",{active:i.frame==="dark"}]),onClick:o[2]||(o[2]=e=>i.frame="dark")},pt,2),t("button",{type:"button",class:r(["fs-7 btn btn-outline-primary",{active:i.frame==="wooden"}]),onClick:o[3]||(o[3]=e=>i.frame="wooden")},bt,2),t("button",{type:"button",class:r(["fs-7 btn btn-outline-primary",{active:i.frame==="golden"}]),onClick:o[4]||(o[4]=e=>i.frame="golden")},_t,2),t("button",{type:"button",class:r(["fs-7 btn btn-outline-primary",{active:i.frame==="baroque"}]),onClick:o[5]||(o[5]=e=>i.frame="baroque")},gt,2)])):k("",!0)]),t("h2",vt,l(s.product.title),1),t("p",yt,l(s.product.subtitle),1)])]),wt,t("div",kt,[t("div",xt,[t("div",It,[t("div",Ct,[t("div",Mt,[t("div",null,[qt,t("div",St,[t("span",null,l(s.product.description),1)])]),t("div",null,[$t,t("div",Tt,[(n(!0),d(p,null,_(s.product.tags,e=>(n(),N(m,{key:e,to:`/search?keyword=${e}`,target:"_blank",class:"tag badge fs-6 py-2"},{default:b(()=>[t("span",null,l(e),1)]),_:2},1032,["to"]))),128))])])])]),Pt])]),t("div",zt,[t("div",jt,[t("div",Nt,[Vt,t("p",Lt,l(s.product.notes||"無"),1)]),t("div",Ut,[t("div",At,[t("p",Bt,[Et,t("span",null,l(s.product.content),1)]),t("p",Rt,[Dt,t("span",null,"一"+l(s.product.unit),1)])]),t("div",Zt,[t("p",Ft,[Wt,s.product.origin_price>s.product.price?(n(),d(p,{key:0},[t("span",Ht,l(s.product.origin_price),1),Jt],64)):k("",!0),t("span",null,l(s.product.price),1)]),t("div",Ot,[t("div",Qt,[t("div",Gt,[t("button",{type:"button",class:"btn btn-secondary input-group-text",onClick:o[6]||(o[6]=e=>this.quantity-=1),disabled:i.quantity<=1},Yt,8,Kt),h(t("input",{type:"number",class:"form-control text-center",min:"1","onUpdate:modelValue":o[7]||(o[7]=e=>i.quantity=e)},null,512),[[V,i.quantity,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-secondary input-group-text",onClick:o[8]||(o[8]=e=>this.quantity+=1)},ss)])]),t("div",es,[t("button",{type:"button",class:"w-100 btn btn-primary",onClick:o[9]||(o[9]=e=>s.addToCart(s.product.id,i.quantity)),disabled:!!s.loadingTask},[h(t("div",is,ls,512),[[I,s.loadingTask]]),t("span",null,l(s.loadingTask?"加入中":"加入購物車"),1)],8,os)])])])]),ns])])]),t("div",ds,[rs,t("div",cs,[(n(!0),d(p,null,_(s.relatedProducts,e=>(n(),d("div",{key:e.id,class:"col-md-4"},[t("a",{href:"#",class:"text-decoration-none",onClick:L(T=>s.$router.push(`/product/${e.id}`),["prevent"])},[t("div",ps,[t("img",{class:"card-img-top",src:e.imageUrl,alt:e.title},null,8,us),t("div",bs,[t("h5",hs,l(e.title),1),t("p",_s,"NT$ "+l(e.price),1)])])],8,ms)]))),128))])])])],512),[[I,!i.transition]]),u($,{image:i.zoomImage,ref:"zoomImageModal"},null,8,["image"])],64)}const Fs=C(J,[["render",fs],["__scopeId","data-v-e9e9bfb5"]]);export{Fs as default};
