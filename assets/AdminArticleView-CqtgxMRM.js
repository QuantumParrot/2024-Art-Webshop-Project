import{m as U,a as A}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{a as w}from"./adminArticle-EIjgrAK5.js";import{l as D,a as T}from"./alert-dm0RMdUk.js";import{b as H}from"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import{m as N}from"./modal-Nw3quRD0.js";import{C as L}from"./@ckeditor_ckeditor5-editor-classic@41.1.0-DQ_N5H6B.js";import{E as B}from"./@ckeditor_ckeditor5-essentials@41.1.0-5FjulPPz.js";import{B as F,I as j}from"./@ckeditor_ckeditor5-basic-styles@41.1.0-CjQsVZus.js";import"./@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js";import"./@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js";import"./@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js";import"./@ckeditor_ckeditor5-ui@41.1.0-D8zEL7-J.js";import"./color-convert@2.0.1-CFYumGoF.js";import{L as O}from"./@ckeditor_ckeditor5-link@41.1.0-ibo78IJR.js";import"./@ckeditor_ckeditor5-widget@41.1.0-DVCYQBVz.js";import"./@ckeditor_ckeditor5-clipboard@41.1.0-p8v1EZ-3.js";import{H as R}from"./@ckeditor_ckeditor5-heading@41.1.0-CQLh8lSF.js";import"./@ckeditor_ckeditor5-paragraph@41.1.0-Bp1DsM-Y.js";import{F as z}from"./@ckeditor_ckeditor5-font@41.1.0-BR8V9Fdy.js";import{U as J}from"./UploadForm-CkCYR_5Q.js";import{m as y,l as W,v as G,n as S}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as I}from"./index-CJ6JDZAo.js";import{aj as r,O as a,P as t,c as n,aH as K,aJ as f,N as k,F as g,ao as P,aq as u,al as Q,ak as X}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{P as c,n as h}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{P as Y}from"./PaginationComponent-jfmP1345.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./vue@3.4.19-CzIOYL8w.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-Djxe9Xmu.js";import"./@ckeditor_ckeditor5-watchdog@41.1.0-B5W-sfM8.js";import"./lodash-es@4.17.21-C5qYGfgy.js";import"./@ckeditor_ckeditor5-typing@41.1.0-DSIargVI.js";import"./@ckeditor_ckeditor5-enter@41.1.0-CzFUQWGc.js";import"./@ckeditor_ckeditor5-select-all@41.1.0-DGA0skm5.js";import"./@ckeditor_ckeditor5-undo@41.1.0-DkM_cYjH.js";import"./color-parse@1.4.2-DGPb9ZuT.js";import"./color-name@1.1.4-Crn8g2QY.js";import"./vanilla-colorful@0.7.2-PEGE98j7.js";import"./ClipboardComponent-DLf-m6qG.js";import"./clipboard@2.0.11-CIUMpgwV.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";import"./aos@2.3.4-DDXLjS56.js";const b=["mb-3"],Z={options:[{model:"paragraph",view:{name:"p",classes:["fs-6",...b]},title:"paragraph"},{model:"heading1",view:{name:"h2",classes:["fs-2",...b]},title:"bootstrap - H2"},{model:"heading2",view:{name:"h3",classes:["fs-3",...b]},title:"bootstrap - H3"},{model:"heading3",view:{name:"h4",classes:["fs-4",...b]},title:"bootstrap - H4"},{model:"heading4",view:{name:"h5",classes:["fs-5",...b]},title:"bootstrap - H5"},{model:"text",view:{name:"p",classes:["fs-7",...b]},title:"small text"}]},$={data(){return{editor:L,editorConfig:{plugins:[B,F,j,O,R,z],toolbar:{items:["undo","redo","|","heading","bold","italic","fontSize","fontFamily","fontColor","|","link"]},link:{decorators:{openInNewTab:{mode:"manual",defaultValue:!0,attributes:{target:"_blank",rel:"noopener noreferrer"},label:"是否另開新視窗"}}},heading:Z}}}},tt={mixins:[N,$],components:{ckeditor:H.component,UploadForm:J},props:["type","tempArticle"],data(){return{tab:"setting",article:{},uploadState:!1}},computed:{...U(w,["categories"]),createAt:{get(){return this.$calc.formatDate(this.article.create_at*1e3)},set(i){this.article.create_at=new Date(i).getTime()/1e3}}},methods:{...A(w,["createArticle","updateArticle"]),updateData(){this.article=this.tempArticle,this.article.tag=Array.isArray(this.tempArticle.tag)?this.tempArticle.tag:[],this.type==="網站公告"&&(this.article.author="收藏家工作室")},confirmUpdate(){this.type==="公益計劃"&&(this.article.content="無"),this.type==="網站公告"&&(this.article.description="無"),this.article.tag=this.article.tag.filter(i=>i),this.article.type=this.type,this.article.id?this.updateArticle(this.article,this.hideModal):this.createArticle(this.article,this.hideModal)},addNewImage(i){this.article.image=i},updateUploadState(i){this.uploadState=i}},watch:{tempArticle(){this.updateData()}},mounted(){this.updateData()}},et={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},ot={class:"modal-dialog modal-dialog-centered"},it={class:"modal-content"},lt={class:"modal-header flex-classic"},st={class:"mb-0"},rt=t("i",{class:"bi bi-x-circle-fill"},null,-1),at=[rt],nt={class:"modal-body"},ct={class:"nav nav-pills bg-gray rounded-2 mb-3"},dt={class:"nav-item flex-grow-1"},mt={class:"nav-item flex-grow-1"},pt={class:"nav-item flex-grow-1"},ut={class:"mb-5"},ht={class:"form-label is-required",for:"title"},_t={class:"mb-5"},ft={class:"row row-cols-2"},bt={class:"col"},gt={class:"form-label is-required",for:"author"},vt={class:"col"},yt=t("label",{class:"form-label is-required",for:"create_at"},[t("span",null,"發表日期")],-1),kt={key:0,class:"mb-5"},At=t("label",{for:"link",class:"form-label is-required"},"網站連結",-1),wt={key:1,class:"mb-5"},Vt=t("label",{for:"description",class:"form-label is-required"},"摘要",-1),Ct=t("label",{for:"category",class:"form-label is-required"},[t("span",null,"分類")],-1),xt={id:"categories"},St=["value"],Pt={class:"mb-5"},Mt=t("p",null,"標籤",-1),Ut=t("p",{class:"fs-7 text-muted"},"選擇和商品一致的標籤，就能向客戶推薦相關商品喔！",-1),It={class:"row gy-3 mb-3"},qt=["onUpdate:modelValue"],Et=["onClick"],Dt=t("i",{class:"bi bi-x-lg"},null,-1),Tt=[Dt],Ht={class:"mb-5"},Nt=t("label",{class:"form-label is-required",for:"image"},"圖片",-1),Lt=["href"],Bt=["src","alt"],Ft=t("hr",null,null,-1),jt=t("hr",null,null,-1),Ot=t("p",{class:"is-required"},"詳細內容",-1),Rt={class:"modal-footer justify-content-between align-items-center"},zt={class:"form-check"},Jt=t("label",{class:"form-label mb-0",for:"isPublic"}," 是否公開",-1),Wt=["disabled"];function Gt(i,o,m,q,e,d){const V=u("loading-overlay"),p=u("v-field"),s=u("upload-form"),v=u("ckeditor"),E=u("v-form");return r(),a("div",et,[t("div",ot,[n(V,{"is-loading":e.uploadState,"is-full":!1},null,8,["is-loading"]),t("div",it,[t("div",lt,[t("h4",st,c(m.type),1),t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:o[0]||(o[0]=(...C)=>i.hideModal&&i.hideModal(...C))},at)]),n(E,{onSubmit:d.confirmUpdate,ref:"form"},{default:K(({meta:C})=>[t("div",nt,[t("ul",ct,[t("li",dt,[t("button",{type:"button",onClick:o[1]||(o[1]=l=>e.tab="setting"),class:h(["w-100 nav-link",{active:e.tab==="setting"}])}," 設定",2)]),t("li",mt,[t("button",{type:"button",onClick:o[2]||(o[2]=l=>e.tab="category"),class:h(["w-100 nav-link",{active:e.tab==="category"}])}," 分類",2)]),t("li",pt,[t("button",{type:"button",onClick:o[3]||(o[3]=l=>e.tab="image"),class:h(["w-100 nav-link",{active:e.tab==="image"}])}," 圖片",2)])]),f(t("div",null,[t("div",ut,[t("label",ht,[t("span",null,c(m.type==="公益計劃"?"組織名稱":"標題"),1)]),n(p,{id:"title",type:"text",class:"form-control",modelValue:e.article.title,"onUpdate:modelValue":o[4]||(o[4]=l=>e.article.title=l),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),t("div",_t,[t("div",ft,[t("div",bt,[t("label",gt,[t("span",null,c(m.type==="公益計劃"?"完整法人名稱":"作者"),1)]),n(p,{id:"author",type:"text",class:"form-control",modelValue:e.article.author,"onUpdate:modelValue":o[5]||(o[5]=l=>e.article.author=l),modelModifiers:{trim:!0},name:"author",rules:"required"},null,8,["modelValue"])]),t("div",vt,[yt,n(p,{id:"create_at",type:"date",class:"form-control",modelValue:d.createAt,"onUpdate:modelValue":o[6]||(o[6]=l=>d.createAt=l),name:"create_at",rules:"required"},null,8,["modelValue"])])])]),m.type==="公益計劃"?(r(),a("div",kt,[At,n(p,{id:"link",type:"text",class:"form-control",modelValue:e.article.link,"onUpdate:modelValue":o[7]||(o[7]=l=>e.article.link=l),modelModifiers:{trim:!0},name:"link",rules:"required|url",placeholder:"請提供該組織的官方連結，讓使用者可以透過連結拜訪"},null,8,["modelValue"])])):k("",!0),m.type!=="網站公告"?(r(),a("div",wt,[Vt,n(p,{id:"title",rows:"3",class:"form-control",modelValue:e.article.description,"onUpdate:modelValue":o[8]||(o[8]=l=>e.article.description=l),modelModifiers:{trim:!0},name:"description",as:"textarea"},null,8,["modelValue"])])):k("",!0)],512),[[y,e.tab==="setting"]]),f(t("div",null,[t("div",{class:h({"mb-5":m.type!=="公益計劃"})},[Ct,n(p,{id:"category",class:"form-control",list:"categories",modelValue:e.article.category,"onUpdate:modelValue":o[9]||(o[9]=l=>e.article.category=l),modelModifiers:{trim:!0},name:"category",rules:"required"},null,8,["modelValue"]),t("datalist",xt,[(r(!0),a(g,null,P(i.categories[m.type],l=>(r(),a("option",{key:l,value:l},c(l),9,St))),128))])],2),f(t("div",Pt,[Mt,Ut,t("div",It,[(r(!0),a(g,null,P(e.article.tag,(l,x)=>(r(),a("div",{class:"col-md-3 position-relative",key:l},[f(t("input",{type:"text",class:"form-control","onUpdate:modelValue":M=>e.article.tag[x]=M},null,8,qt),[[W,e.article.tag[x]]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:M=>e.article.tag.splice(x,1)},Tt,8,Et)]))),128))]),t("button",{type:"button",class:"btn btn-primary",onClick:o[10]||(o[10]=l=>e.article.tag.push(""))}," 新增標籤")],512),[[y,m.type==="專欄文章"]])],512),[[y,e.tab==="category"]]),f(t("div",null,[t("div",Ht,[Nt,n(p,{id:"image",type:"text",class:"form-control",modelValue:e.article.image,"onUpdate:modelValue":o[11]||(o[11]=l=>e.article.image=l),modelModifiers:{trim:!0},name:"image",rules:"required|url"},null,8,["modelValue"]),e.article.image?(r(),a("a",{key:0,target:"_blank",href:e.article.image},[t("img",{class:"object-fit-cover mt-3","max-height":"250",src:e.article.image,alt:e.article.title},null,8,Bt)],8,Lt)):k("",!0)]),Ft,n(s,{"use-clipboard":!1,"upload-state":e.uploadState,disabled:e.article.image,onAddNewImage:d.addNewImage,onUpdateUploadState:d.updateUploadState},null,8,["upload-state","disabled","onAddNewImage","onUpdateUploadState"])],512),[[y,e.tab==="image"]]),m.type!=="公益計劃"?(r(),a(g,{key:0},[jt,Ot,n(v,{editor:i.editor,config:i.editorConfig,modelValue:e.article.content,"onUpdate:modelValue":o[12]||(o[12]=l=>e.article.content=l)},null,8,["editor","config","modelValue"])],64)):k("",!0)]),t("div",Rt,[t("div",zt,[f(t("input",{id:"isPublic",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[13]||(o[13]=l=>e.article.isPublic=l)},null,512),[[G,e.article.isPublic]]),Jt]),t("div",null,[t("button",{type:"submit",class:"btn btn-primary me-2",disabled:!C.valid},"確認更新",8,Wt),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[14]||(o[14]=(...l)=>i.hideModal&&i.hideModal(...l))},"取消")])])]),_:1},8,["onSubmit"])])])],512)}const Kt=I(tt,[["render",Gt]]);var Qt={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:Xt,VITE_APP_PATH:Yt}=Qt,Zt={components:{AdminArticleModal:Kt,PaginationComponent:Y},data(){return{filter:"網站公告",currentPage:1,tempArticle:{}}},computed:{...U(w,["articles","article"]),displayingArticles(){return this.articles.filter(i=>i.type===this.filter)},totalPages(){return Math.ceil(this.displayingArticles.length/5)}},methods:{...A(w,["getArticles","getArticle","deleteArticle","switchArticleStatus"]),...A(D,["createLoader","removeLoader"]),...A(T,["errorAlert"]),openModal(i){i?this.getArticle(i):this.tempArticle={isPublic:!1,create_at:this.$calc.now()},this.$refs.articleModal.showModal()},getArticle(i){this.createLoader("get-single-article"),this.$http.get(`${Xt}/api/${Yt}/admin/article/${i}`).then(o=>{this.tempArticle=o.data.article}).catch(o=>this.errorAlert(o)).finally(()=>this.removeLoader("get-single-article"))}},created(){this.articles.length||this.getArticles()}},_=i=>(Q("data-v-e0b9c08e"),i=i(),X(),i),$t={class:"lh-lg nav nav-tabs nav-fill mb-3 border-bottom"},te={class:"nav-item"},ee=_(()=>t("b",null,"網站公告",-1)),oe=[ee],ie={class:"nav-item"},le=_(()=>t("b",null,"專欄文章",-1)),se=[le],re={class:"nav-item"},ae=_(()=>t("b",null,"公益計劃",-1)),ne=[ae],ce={class:"text-end mb-3"},de={class:"text-muted"},me={class:"alert bg-gray flex-classic mb-6"},pe={key:0,class:"table-responsive"},ue={class:"table table-hover text-nowrap"},he=_(()=>t("th",{scope:"col",width:"10%"},"日期",-1)),_e=_(()=>t("th",{scope:"col",width:"10%"},"分類",-1)),fe={scope:"col",width:"50%"},be=_(()=>t("th",{scope:"col",width:"15%",class:"text-center"},"狀態",-1)),ge=_(()=>t("th",{scope:"col",width:"15%",class:"text-center"},"處理",-1)),ve={class:"align-middle"},ye={class:"badge bg-highlight text-dark py-2"},ke={class:"fw-bold mb-2"},Ae={class:"text-muted fs-7"},we={class:"text-center"},Ve={class:"form-switch"},Ce=["checked","onChange"],xe={class:"text-center"},Se={class:"d-flex flex-column gap-2"},Pe=["onClick"],Me=["onClick"],Ue={key:1,class:"alert bg-gray"};function Ie(i,o,m,q,e,d){const V=u("pagination-component"),p=u("admin-article-modal");return r(),a(g,null,[t("ul",$t,[t("li",te,[t("a",{href:"#",class:h(["nav-link py-3",{active:e.filter==="網站公告"}]),onClick:o[0]||(o[0]=S(s=>e.filter="網站公告",["prevent"]))},oe,2)]),t("li",ie,[t("a",{href:"#",class:h(["nav-link py-3",{active:e.filter==="專欄文章"}]),onClick:o[1]||(o[1]=S(s=>e.filter="專欄文章",["prevent"]))},se,2)]),t("li",re,[t("a",{href:"#",class:h(["nav-link py-3",{active:e.filter==="公益計劃"}]),onClick:o[2]||(o[2]=S(s=>e.filter="公益計劃",["prevent"]))},ne,2)])]),t("div",ce,[t("p",de,"目前共有 "+c(d.displayingArticles.length)+" 篇"+c(e.filter),1)]),t("div",me,[t("div",null,[t("button",{type:"button",class:"btn btn-highlight",onClick:o[3]||(o[3]=s=>d.openModal())},"新增"+c(e.filter),1)]),n(V,{current:e.currentPage,total:d.totalPages,onSwitchPage:i.getArticles},null,8,["current","total","onSwitchPage"])]),i.articles.length?(r(),a("div",pe,[t("table",ue,[t("thead",null,[t("tr",null,[he,_e,t("th",fe,c(e.filter),1),be,ge])]),t("tbody",ve,[(r(!0),a(g,null,P(d.displayingArticles,s=>(r(),a("tr",{key:s.id},[t("td",null,c(i.$calc.formatDate(s.create_at*1e3,"/")),1),t("td",null,[t("span",ye,c(s.category),1)]),t("td",null,[t("p",ke,c(s.title),1),t("span",Ae,"作者｜"+c(s.author),1)]),t("td",we,[t("div",Ve,[t("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:s.isPublic,onChange:v=>i.switchArticleStatus(s)},null,40,Ce)])]),t("td",xe,[t("div",Se,[t("button",{type:"button",class:"w-100 btn btn-outline-secondary",onClick:v=>d.openModal(s.id)}," 編輯",8,Pe),t("button",{type:"button",class:"w-100 btn btn-outline-danger",onClick:v=>i.deleteArticle(s.id,s.title)}," 刪除",8,Me)])])]))),128))])])])):(r(),a("div",Ue,"還沒有任何文章！趕快新增一篇吧！")),n(p,{ref:"articleModal",type:e.filter,"temp-article":e.tempArticle},null,8,["type","temp-article"])],64)}const Io=I(Zt,[["render",Ie],["__scopeId","data-v-e0b9c08e"]]);export{Io as default};
