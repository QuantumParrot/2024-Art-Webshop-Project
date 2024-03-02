import{m as u,a as b}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{u as v}from"./userProduct-tBM786bC.js";import{u as _}from"./userCart-CwJ9JZ01.js";import{l as f}from"./loader-CArRiQTv.js";import{l as y,m as w}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as k}from"./index-CeaPsIIs.js";import{O as r,P as t,F as c,ao as x,N as m,V as p,aJ as h,U as C,aj as d,al as q,ak as S}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{n as l,P as n}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./alert-C5k3uZHZ.js";import"./sweetalert2@11.10.5-BCnrvazC.js";import"./@ckeditor_ckeditor5-vue@5.1.0-CegNn2NB.js";import"./vue@3.4.19-CdjQKHui.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DG0Fkrwv.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";const I={data(){return{frame:"",frameSetting:{wooden:"frame-wooden",golden:"frame-golden",dark:"frame-dark"},mainImage:"",quantity:1}},computed:{...u(v,["product"]),...u(f,["isLoading","loadingTask"]),displayImages(){const{imageUrl:s,imagesUrl:e}=this.product;return Array.isArray(e)?[s,...e]:[s]}},watch:{product(){this.mainImage=this.product.imageUrl,this.quantity=1},quantity(s){Number.isInteger(s)?s<1&&(this.quantity=1):this.quantity=Math.floor(this.quantity)}},methods:{...b(v,["getProduct"]),...b(_,["addToCart"])},mounted(){this.getProduct(this.$route.params.id)}},a=s=>(q("data-v-636ce216"),s=s(),S(),s),T={class:"h-100 bg-gray text-primary"},N={class:"container py-7"},V={class:"d-flex justify-content-center"},j=["src","alt"],P={class:"bg-light rounded-2 p-3 mb-5 d-flex gap-3"},U=["src","alt","onClick"],L={key:0,class:"d-flex gap-3 mb-5"},A={class:"text-black mb-5"},B={class:"mb-0"},D=a(()=>t("hr",null,null,-1)),F={class:"row g-5"},M={class:"col-xl-7 order-xl-1 order-2"},z={class:"alert bg-light p-5 mb-5"},E={class:"border border-gray rounded-2 p-5"},J=a(()=>t("h3",{class:"fs-4 text-dark fw-bold mb-5"},[t("span",{class:"section-title"},"關於它的故事")],-1)),O={class:"lh-lg pre-wrap text-justify"},G=a(()=>t("div",{class:"alert bg-light p-5"},[t("p",{class:"lh-lg mb-0"},[t("i",{class:"bi bi-c-circle me-1"}),p(" 商品的圖片與文字出處請參閱："),t("a",{target:"_blank",href:"https://www.notion.so/9f522b0de5c2413c8090249c96bd692a?v=5b0f1f1c376f4b468a56aaec87a97c8a"},"本站索引")])],-1)),H={class:"col-xl-5 order-xl-2 order-1"},K={class:"sticky-sidebar"},Q={class:"alert bg-light p-5 mb-5"},R={class:"text-nowrap overflow-scroll"},W=a(()=>t("span",{class:"fs-6 badge bg-primary px-3 py-2 me-2"},"規格",-1)),X={class:"text-nowrap overflow-scroll"},Y=a(()=>t("span",{class:"fs-6 badge bg-primary px-3 py-2 me-2"},"單位",-1)),Z={class:"alert bg-white p-5 mb-0"},$={class:"fs-5 fw-bold mb-5"},tt=a(()=>t("span",null,"NT＄",-1)),st={class:"text-muted text-decoration-line-through"},et=a(()=>t("span",{class:"arrow-animation"},[t("span",{class:"arrow"},"→")],-1)),ot={class:"row g-3"},it={class:"col-sm-8"},at={class:"input-group"},nt=["disabled"],rt=a(()=>t("i",{class:"bi bi-dash"},null,-1)),dt=[rt],lt=a(()=>t("i",{class:"bi bi-plus"},null,-1)),ct=[lt],mt={class:"col-sm-4 text-end"},pt=["disabled"],ut={role:"status",class:"spinner-border spinner-border-sm me-2"},bt=a(()=>t("span",{class:"visually-hidden"},"Loading...",-1)),vt=[bt],ht=C('<div class="alert bg-light p-5" data-v-636ce216><div class="row g-3" data-v-636ce216><div class="col-sm-4" data-v-636ce216><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-636ce216><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-636ce216><i class="bi bi-truck fs-3" data-v-636ce216></i></div><span data-v-636ce216>專業物流配送</span></div></div><div class="col-sm-4" data-v-636ce216><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-636ce216><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-636ce216><i class="bi bi-7-circle fs-3" data-v-636ce216></i></div><span data-v-636ce216>七天鑑賞期</span></div></div><div class="col-sm-4" data-v-636ce216><div class="d-flex flex-sm-column justify-content-sm-center align-items-center" data-v-636ce216><div class="bg-white rounded-pill shadow-sm px-3 py-2 mb-sm-3 me-sm-0 me-3" data-v-636ce216><i class="bi bi-recycle fs-3" data-v-636ce216></i></div><span data-v-636ce216>採用環保包裝</span></div></div></div></div>',1);function gt(s,e,_t,ft,o,g){return d(),r("div",T,[t("div",N,[s.isLoading?m("",!0):(d(),r(c,{key:0},[t("div",V,[t("div",null,[t("img",{class:l(["main-img mb-5",o.frame?o.frameSetting[o.frame]:""]),src:o.mainImage,alt:s.product.title,width:"500"},null,10,j),t("div",P,[(d(!0),r(c,null,x(g.displayImages,i=>(d(),r("img",{key:i,class:l(["display-img",{"opacity-50":i!==s.product.imageUrl}]),src:i,alt:s.product.title,onClick:yt=>o.mainImage=i},null,10,U))),128))]),s.product.category==="複製油畫"?(d(),r("div",L,[t("button",{type:"button",class:l(["btn btn-outline-primary",{active:o.frame===""}]),onClick:e[0]||(e[0]=i=>o.frame="")}," 不加框",2),t("button",{type:"button",class:l(["btn btn-outline-primary",{active:o.frame==="dark"}]),onClick:e[1]||(e[1]=i=>o.frame="dark")}," 黑",2),t("button",{type:"button",class:l(["btn btn-outline-primary",{active:o.frame==="wooden"}]),onClick:e[2]||(e[2]=i=>o.frame="wooden")}," 淺木",2),t("button",{type:"button",class:l(["btn btn-outline-primary",{active:o.frame==="golden"}]),onClick:e[3]||(e[3]=i=>o.frame="golden")}," 金",2)])):m("",!0),t("h2",A,n(s.product.title),1),t("p",B,n(s.product.subtitle),1)])]),D,t("div",F,[t("div",M,[t("div",z,[t("div",E,[J,t("div",O,n(s.product.description),1)])]),G]),t("div",H,[t("div",K,[t("div",Q,[t("div",null,[t("p",R,[W,p(" "+n(s.product.content),1)]),t("p",X,[Y,p(" 一"+n(s.product.unit),1)])]),t("div",Z,[t("p",$,[tt,s.product.origin_price>s.product.price?(d(),r(c,{key:0},[t("span",st,n(s.product.origin_price),1),et],64)):m("",!0),t("span",null,n(s.product.price),1)]),t("div",ot,[t("div",it,[t("div",at,[t("button",{type:"button",class:"btn btn-secondary input-group-text",onClick:e[4]||(e[4]=i=>this.quantity--),disabled:o.quantity<1},dt,8,nt),h(t("input",{type:"number",class:"form-control text-center",min:"1","onUpdate:modelValue":e[5]||(e[5]=i=>o.quantity=i)},null,512),[[y,o.quantity,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-secondary input-group-text",onClick:e[6]||(e[6]=i=>this.quantity++)},ct)])]),t("div",mt,[t("button",{type:"button",class:"w-100 btn btn-primary",onClick:e[7]||(e[7]=i=>s.addToCart(s.product.id,o.quantity)),disabled:!!s.loadingTask},[h(t("div",ut,vt,512),[[w,s.loadingTask]]),t("span",null,n(s.loadingTask?"加入中 ...":"加入購物車"),1)],8,pt)])])])]),ht])])])],64))])])}const Gt=k(I,[["render",gt],["__scopeId","data-v-636ce216"]]);export{Gt as default};
