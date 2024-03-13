import{m as S,a as b}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{a as f}from"./adminArticle-IzjbntiE.js";import{l as E,a as I}from"./alert-dm0RMdUk.js";import{b as D}from"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import{m as T}from"./modal-Nw3quRD0.js";import{C as H}from"./@ckeditor_ckeditor5-editor-classic@41.1.0-DQ_N5H6B.js";import{E as N}from"./@ckeditor_ckeditor5-essentials@41.1.0-5FjulPPz.js";import{B as L,I as B}from"./@ckeditor_ckeditor5-basic-styles@41.1.0-CjQsVZus.js";import"./@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js";import"./@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js";import"./@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js";import"./@ckeditor_ckeditor5-ui@41.1.0-D8zEL7-J.js";import"./color-convert@2.0.1-CFYumGoF.js";import{L as F}from"./@ckeditor_ckeditor5-link@41.1.0-ibo78IJR.js";import"./@ckeditor_ckeditor5-widget@41.1.0-DVCYQBVz.js";import"./@ckeditor_ckeditor5-clipboard@41.1.0-p8v1EZ-3.js";import{H as j}from"./@ckeditor_ckeditor5-heading@41.1.0-CQLh8lSF.js";import"./@ckeditor_ckeditor5-paragraph@41.1.0-Bp1DsM-Y.js";import{F as O}from"./@ckeditor_ckeditor5-font@41.1.0-BR8V9Fdy.js";import{U as R}from"./UploadForm-Dna5nbSA.js";import{m as w,l as z,v as J}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as M}from"./index-CJUq1A7p.js";import{aj as n,O as c,P as t,c as s,aH as C,aJ as u,F as A,ao as P,N as W,aq as m}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{n as k,P as _}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{P as G}from"./PaginationComponent-4_Ogzq_q.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./vue@3.4.19-CzIOYL8w.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-Djxe9Xmu.js";import"./@ckeditor_ckeditor5-watchdog@41.1.0-B5W-sfM8.js";import"./lodash-es@4.17.21-C5qYGfgy.js";import"./@ckeditor_ckeditor5-typing@41.1.0-DSIargVI.js";import"./@ckeditor_ckeditor5-enter@41.1.0-CzFUQWGc.js";import"./@ckeditor_ckeditor5-select-all@41.1.0-DGA0skm5.js";import"./@ckeditor_ckeditor5-undo@41.1.0-DkM_cYjH.js";import"./color-parse@1.4.2-DGPb9ZuT.js";import"./color-name@1.1.4-Crn8g2QY.js";import"./vanilla-colorful@0.7.2-PEGE98j7.js";import"./ClipboardComponent-DQcxTBcW.js";import"./clipboard@2.0.11-CIUMpgwV.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";import"./aos@2.3.4-DDXLjS56.js";const p=["mb-3"],K={options:[{model:"paragraph",view:{name:"p",classes:["fs-6",...p]},title:"paragraph"},{model:"heading1",view:{name:"h2",classes:["fs-2",...p]},title:"bootstrap - H2"},{model:"heading2",view:{name:"h3",classes:["fs-3",...p]},title:"bootstrap - H3"},{model:"heading3",view:{name:"h4",classes:["fs-4",...p]},title:"bootstrap - H4"},{model:"heading4",view:{name:"h5",classes:["fs-5",...p]},title:"bootstrap - H5"},{model:"text",view:{name:"p",classes:["fs-7",...p]},title:"small text"}]},Q={data(){return{editor:H,editorConfig:{plugins:[N,L,B,F,j,O],toolbar:{items:["undo","redo","|","heading","bold","italic","fontSize","fontFamily","fontColor","|","link"]},link:{decorators:{openInNewTab:{mode:"manual",defaultValue:!0,attributes:{target:"_blank",rel:"noopener noreferrer"},label:"是否另開新視窗"}}},heading:K}}}},X={mixins:[T,Q],components:{ckeditor:D.component,UploadForm:R},props:["tempArticle"],data(){return{tab:"setting",article:{},uploadState:!1}},computed:{...S(f,["categories"]),createAt:{get(){return this.$calc.formatDate(this.article.create_at*1e3)},set(l){this.article.create_at=new Date(l).getTime()/1e3}}},methods:{...b(f,["createArticle","updateArticle"]),updateData(){this.article=this.tempArticle,this.article.tag=Array.isArray(this.tempArticle.tag)?this.tempArticle.tag:[]},confirmUpdate(){this.article.tag=this.article.tag.filter(l=>l),this.article.id?this.updateArticle(this.article,this.hideModal):this.createArticle(this.article,this.hideModal)},addNewImage(l){this.article.image=l},updateUploadState(l){this.uploadState=l}},watch:{tempArticle(){this.updateData()}},mounted(){this.updateData()}},Y={class:"modal modal-lg fade",tabindex:"-1",ref:"modal"},Z={class:"modal-dialog modal-dialog-centered"},$={class:"modal-content"},tt={class:"modal-header justify-content-end"},et=t("i",{class:"bi bi-x-circle-fill"},null,-1),ot=[et],lt={class:"modal-body"},it={class:"nav nav-pills bg-gray rounded-2 mb-3"},st={class:"nav-item flex-grow-1"},at={class:"nav-item flex-grow-1"},rt={class:"nav-item flex-grow-1"},nt={class:"mb-3"},ct=t("label",{class:"form-label is-required",for:"title"},"文章標題",-1),dt={class:"mb-3"},mt=t("label",{class:"form-label is-required",for:"description"},"文章摘要",-1),pt={class:"mb-3"},ut={class:"row row-cols-2"},_t={class:"col"},ht=t("label",{class:"form-label is-required",for:"author"},"文章作者",-1),bt={class:"col"},ft=t("label",{class:"form-label is-required",for:"create_at"},[t("span",null,"發表日期")],-1),gt={class:"mb-3"},vt=t("label",{for:"link",class:"form-label"},"文章連結",-1),yt={class:"mb-3"},wt={class:"row row-cols-2"},kt={class:"col"},At=t("label",{class:"form-label is-required",for:"type"},"文章類型",-1),Vt=t("option",{value:"",disabled:""},"請選擇文章類型",-1),Ct=t("option",{value:"網站公告"},"網站公告",-1),St=t("option",{value:"專欄文章"},"專欄文章",-1),Mt=t("option",{value:"公益計劃"},"公益計劃",-1),Pt={class:"col"},xt=t("label",{class:"form-label is-required",for:"category"},[t("span",null,"文章分類")],-1),Ut={class:"mb-3"},qt=t("p",null,"標籤",-1),Et={class:"row gy-3 mb-3"},It=["onUpdate:modelValue"],Dt=["onClick"],Tt=t("i",{class:"bi bi-x-lg"},null,-1),Ht=[Tt],Nt={class:"mb-3"},Lt=t("label",{class:"form-label is-required",for:"image"},"文章圖片",-1),Bt=["src","alt"],Ft=t("hr",null,null,-1),jt=t("hr",null,null,-1),Ot=t("p",{class:"is-required"},"文章內容",-1),Rt={class:"modal-footer justify-content-between align-items-center"},zt={class:"form-check"},Jt=t("label",{class:"form-label",for:"isPublic"}," 是否公開",-1),Wt=["disabled"];function Gt(l,o,x,U,e,d){const g=m("loading-overlay"),r=m("v-field"),a=m("upload-form"),h=m("ckeditor"),q=m("v-form");return n(),c("div",Y,[t("div",Z,[s(g,{"is-loading":e.uploadState,"is-full":!1},null,8,["is-loading"]),t("div",$,[t("div",tt,[t("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:o[0]||(o[0]=(...v)=>l.hideModal&&l.hideModal(...v))},ot)]),s(q,{onSubmit:d.confirmUpdate,ref:"form"},{default:C(({meta:v})=>[t("div",lt,[t("ul",it,[t("li",st,[t("button",{type:"button",onClick:o[1]||(o[1]=i=>e.tab="setting"),class:k(["w-100 nav-link",{active:e.tab==="setting"}])}," 文章設定",2)]),t("li",at,[t("button",{type:"button",onClick:o[2]||(o[2]=i=>e.tab="category"),class:k(["w-100 nav-link",{active:e.tab==="category"}])}," 文章分類",2)]),t("li",rt,[t("button",{type:"button",onClick:o[3]||(o[3]=i=>e.tab="image"),class:k(["w-100 nav-link",{active:e.tab==="image"}])}," 文章圖片",2)])]),u(t("div",null,[t("div",nt,[ct,s(r,{id:"title",type:"text",class:"form-control",modelValue:e.article.title,"onUpdate:modelValue":o[4]||(o[4]=i=>e.article.title=i),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),t("div",dt,[mt,s(r,{id:"title",rows:"3",class:"form-control",modelValue:e.article.description,"onUpdate:modelValue":o[5]||(o[5]=i=>e.article.description=i),modelModifiers:{trim:!0},name:"description",as:"textarea"},null,8,["modelValue"])]),t("div",pt,[t("div",ut,[t("div",_t,[ht,s(r,{id:"author",type:"text",class:"form-control",modelValue:e.article.author,"onUpdate:modelValue":o[6]||(o[6]=i=>e.article.author=i),modelModifiers:{trim:!0},name:"author",rules:"required"},null,8,["modelValue"])]),t("div",bt,[ft,s(r,{id:"create_at",type:"date",class:"form-control",modelValue:d.createAt,"onUpdate:modelValue":o[7]||(o[7]=i=>d.createAt=i),name:"create_at",rules:"required"},null,8,["modelValue"])])])]),t("div",gt,[vt,s(r,{id:"link",type:"text",class:"form-control",modelValue:e.article.link,"onUpdate:modelValue":o[8]||(o[8]=i=>e.article.link=i),modelModifiers:{trim:!0},name:"link"},null,8,["modelValue"])])],512),[[w,e.tab==="setting"]]),u(t("div",null,[t("div",yt,[t("div",wt,[t("div",kt,[At,s(r,{id:"type",class:"form-select",modelValue:e.article.type,"onUpdate:modelValue":o[9]||(o[9]=i=>e.article.type=i),name:"type",rules:"required",as:"select"},{default:C(()=>[Vt,Ct,St,Mt]),_:1},8,["modelValue"])]),t("div",Pt,[xt,s(r,{id:"category",class:"form-control",modelValue:e.article.category,"onUpdate:modelValue":o[10]||(o[10]=i=>e.article.category=i),modelModifiers:{trim:!0},name:"category",rules:"required"},null,8,["modelValue"])])])]),t("div",Ut,[qt,t("div",Et,[(n(!0),c(A,null,P(e.article.tag,(i,y)=>(n(),c("div",{class:"col-md-3 position-relative",key:i},[u(t("input",{type:"text",class:"form-control","onUpdate:modelValue":V=>e.article.tag[y]=V},null,8,It),[[z,e.article.tag[y]]]),t("button",{type:"button",class:"btn btn-origin btn-inline",onClick:V=>e.article.tag.splice(y,1)},Ht,8,Dt)]))),128))]),t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=i=>e.article.tag.push(""))}," 新增標籤")])],512),[[w,e.tab==="category"]]),u(t("div",null,[t("div",Nt,[Lt,s(r,{id:"image",type:"text",class:"form-control",modelValue:e.article.image,"onUpdate:modelValue":o[12]||(o[12]=i=>e.article.image=i),modelModifiers:{trim:!0},name:"image",rules:"required|url"},null,8,["modelValue"]),e.article.image?(n(),c("img",{key:0,class:"mt-3",src:e.article.image,alt:e.article.title},null,8,Bt)):W("",!0)]),Ft,s(a,{"use-clipboard":!1,"upload-state":e.uploadState,disabled:e.article.image,onAddNewImage:d.addNewImage,onUpdateUploadState:d.updateUploadState},null,8,["upload-state","disabled","onAddNewImage","onUpdateUploadState"])],512),[[w,e.tab==="image"]]),jt,Ot,s(h,{editor:l.editor,config:l.editorConfig,modelValue:e.article.content,"onUpdate:modelValue":o[13]||(o[13]=i=>e.article.content=i)},null,8,["editor","config","modelValue"])]),t("div",Rt,[t("div",zt,[u(t("input",{id:"isPublic",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[14]||(o[14]=i=>e.article.isPublic=i)},null,512),[[J,e.article.isPublic]]),Jt]),t("div",null,[t("button",{type:"submit",class:"btn btn-primary me-2",disabled:!v.valid},"確認更新",8,Wt),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[15]||(o[15]=(...i)=>l.hideModal&&l.hideModal(...i))},"取消")])])]),_:1},8,["onSubmit"])])])],512)}const Kt=M(X,[["render",Gt]]);var Qt={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:Xt,VITE_APP_PATH:Yt}=Qt,Zt={components:{AdminArticleModal:Kt,PaginationComponent:G},data(){return{tempArticle:{}}},computed:{...S(f,["articles","article","pagination"])},methods:{...b(f,["getArticles","getArticle","deleteArticle","switchArticleStatus"]),...b(E,["createLoader","removeLoader"]),...b(I,["errorAlert"]),openModal(l){l?this.getArticle(l):this.tempArticle={isPublic:!1,create_at:this.$calc.now()},this.$refs.articleModal.showModal()},getArticle(l){this.createLoader("get-single-article"),this.$http.get(`${Xt}/api/${Yt}/admin/article/${l}`).then(o=>{this.tempArticle=o.data.article}).catch(o=>this.errorAlert(o)).finally(()=>this.removeLoader("get-single-article"))}},mounted(){this.getArticles()}},$t={class:"text-end mb-7"},te=t("h3",{class:"fs-2 mb-2"},"文章",-1),ee={class:"text-muted"},oe={class:"alert bg-gray flex-classic mb-5"},le={key:0,class:"table-responsive"},ie={class:"table table-hover text-nowrap"},se=t("thead",null,[t("tr",null,[t("th",{scope:"col",width:"10%"},"日期"),t("th",{scope:"col",width:"10%"},"分類"),t("th",{scope:"col",width:"50%"},"文章"),t("th",{scope:"col",width:"15%",class:"text-center"},"狀態"),t("th",{scope:"col",width:"15%",class:"text-center"},"處理")])],-1),ae={class:"align-middle"},re={class:"badge bg-highlight text-dark py-2"},ne={class:"fw-bold mb-2"},ce={class:"text-muted fs-7"},de={class:"text-center"},me={class:"form-switch"},pe=["checked","onChange"],ue={class:"text-center"},_e={class:"d-flex flex-column gap-2"},he=["onClick"],be=["onClick"],fe={key:1,class:"alert bg-gray"};function ge(l,o,x,U,e,d){const g=m("pagination-component"),r=m("admin-article-modal");return n(),c(A,null,[t("div",$t,[te,t("p",ee,"目前共有 "+_(l.articles.length)+" 篇文章 (꜆꜄꜆ ˙꒳˙)꜆꜄꜆ｵﾗｵﾗｵﾗｵﾗ",1)]),t("div",oe,[t("div",null,[t("button",{type:"button",class:"btn btn-highlight",onClick:o[0]||(o[0]=a=>d.openModal())},"新增文章")]),s(g,{current:l.pagination.current_page,total:l.pagination.total_pages,onSwitchPage:l.getArticles},null,8,["current","total","onSwitchPage"])]),l.articles.length?(n(),c("div",le,[t("table",ie,[se,t("tbody",ae,[(n(!0),c(A,null,P(l.articles,a=>(n(),c("tr",{key:a.id},[t("td",null,_(l.$calc.formatDate(a.create_at*1e3,"/")),1),t("td",null,[t("span",re,_(a.type),1)]),t("td",null,[t("p",ne,_(a.title),1),t("span",ce,"作者｜"+_(a.author),1)]),t("td",de,[t("div",me,[t("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:a.isPublic,onChange:h=>l.switchArticleStatus(a)},null,40,pe)])]),t("td",ue,[t("div",_e,[t("button",{type:"button",class:"w-100 btn btn-outline-secondary",onClick:h=>d.openModal(a.id)}," 編輯",8,he),t("button",{type:"button",class:"w-100 btn btn-outline-danger",onClick:h=>l.deleteArticle(a.id,a.title)}," 刪除",8,be)])])]))),128))])])])):(n(),c("div",fe,"還沒有任何文章！趕快新增一篇吧！")),s(r,{ref:"articleModal","temp-article":e.tempArticle},null,8,["temp-article"])],64)}const go=M(Zt,[["render",ge]]);export{go as default};
