import{b as I}from"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import{C as F}from"./@ckeditor_ckeditor5-editor-classic@41.1.0-DFiPxcQg.js";import{E as T}from"./@ckeditor_ckeditor5-essentials@41.1.0-BklXeAa0.js";import{B as M,I as D}from"./@ckeditor_ckeditor5-basic-styles@41.1.0-C8iLLuLe.js";import"./@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js";import"./@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js";import"./@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js";import"./@ckeditor_ckeditor5-ui@41.1.0-CaWR9jcj.js";import"./color-convert@2.0.1-DXsnUphg.js";import{L}from"./@ckeditor_ckeditor5-link@41.1.0-D-XtOYes.js";import"./@ckeditor_ckeditor5-widget@41.1.0-Cjabx6aj.js";import"./@ckeditor_ckeditor5-clipboard@41.1.0-Da6NMJSf.js";import{H}from"./@ckeditor_ckeditor5-heading@41.1.0-POzahyi3.js";import"./@ckeditor_ckeditor5-paragraph@41.1.0-BH1E5uZh.js";import{F as N}from"./@ckeditor_ckeditor5-font@41.1.0-Czd5RpMt.js";import{m as B,a as y}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as w}from"./adminArticle-DrdDTXcf.js";import{l as R,a as z}from"./alert-Dw2Xe9FX.js";import{U as j}from"./UploadForm-DucXUfFn.js";import{m as _,v as A,l as O}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as W}from"./index-TqJ5F-GX.js";import{A as r,Q as e,c as s,aH as x,F as b,aq as p,z as a,W as U,aJ as c,P as u,ao as S}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{n as V,P as f}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue@3.4.19-C3VIO2t_.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./@ckeditor_ckeditor5-watchdog@41.1.0-B5W-sfM8.js";import"./lodash-es@4.17.21-C5qYGfgy.js";import"./@ckeditor_ckeditor5-typing@41.1.0-DSIargVI.js";import"./@ckeditor_ckeditor5-enter@41.1.0-CzFUQWGc.js";import"./@ckeditor_ckeditor5-select-all@41.1.0-sQ3_C3Bb.js";import"./@ckeditor_ckeditor5-undo@41.1.0-D8hkqxbB.js";import"./color-parse@1.4.2-BwuI8Xag.js";import"./color-name@1.1.4-Bu07Fsda.js";import"./vanilla-colorful@0.7.2-PEGE98j7.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./axios@1.6.7-Di5RpEPX.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./ClipboardComponent-CjhYSj5Q.js";import"./clipboard@2.0.11-Bt85-y58.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const m=["mb-3"],J={options:[{model:"paragraph",view:{name:"p",classes:["fs-6",...m]},title:"paragraph"},{model:"heading1",view:{name:"h2",classes:["fs-2",...m]},title:"bootstrap - H2"},{model:"heading2",view:{name:"h3",classes:["fs-3",...m]},title:"bootstrap - H3"},{model:"heading3",view:{name:"h4",classes:["fs-4",...m]},title:"bootstrap - H4"},{model:"heading4",view:{name:"h5",classes:["fs-5",...m]},title:"bootstrap - H5"},{model:"text",view:{name:"p",classes:["fs-7",...m]},title:"small text"}]},Q={data(){return{editor:F,editorConfig:{plugins:[T,M,D,L,H,N],toolbar:{items:["undo","redo","|","heading","bold","italic","fontSize","fontFamily","fontColor","|","link"]},link:{decorators:{openInNewTab:{mode:"manual",defaultValue:!0,attributes:{target:"_blank",rel:"noopener noreferrer"},label:"是否另開新視窗"}}},heading:J}}}};var G={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:K,VITE_APP_PATH:X}=G,Y={mixins:[Q],components:{ckeditor:I.component,UploadForm:j},data(){return{tab:"setting",article:{},type:"",uploadState:!1}},computed:{...B(w,["categories"]),createAt:{get(){return this.$calc.formatDate(this.article.create_at*1e3)},set(l){this.article.create_at=new Date(l).getTime()/1e3}}},methods:{...y(w,["createArticle","updateArticle"]),...y(R,["createLoader","removeLoader"]),...y(z,["errorAlert"]),getArticle(l){this.createLoader("get-single-article"),this.$http.get(`${K}/api/${X}/admin/article/${l}`).then(o=>{const{article:g}=o.data;this.article=g,this.type=g.type}).catch(o=>this.errorAlert(o)).finally(()=>this.removeLoader("get-single-article"))},updateData(){this.article.tag=Array.isArray(this.article.tag)?[...this.article.tag]:[],this.type==="網站公告"&&(this.article.author="收藏家工作室")},confirmUpdate(){this.type==="公益計劃"&&(this.article.content="無"),this.type==="網站公告"&&(this.article.description="無"),this.article.tag=this.article.tag.filter(l=>l),this.article.type=this.type,this.article.id?this.updateArticle(this.article):this.createArticle(this.article)},addNewImage(l){this.article.image=l},updateUploadState(l){this.uploadState=l}},watch:{article(){this.updateData()}},mounted(){this.type=this.$route.params.type,this.$route.query.id?this.getArticle(this.$route.query.id):this.article={isPublic:!1,create_at:this.$calc.now()}}},Z={class:"nav nav-pills bg-gray rounded-2 mb-7"},$={class:"nav-item flex-grow-1"},ee={class:"nav-item flex-grow-1"},te={class:"nav-item flex-grow-1"},oe={class:"d-flex align-items-end gap-2 mb-7"},ie={class:"mb-0"},le={class:"mb-5"},se={class:"form-label is-required",for:"title"},re={class:"mb-5"},ae={class:"row row-cols-2"},ne={class:"col"},ce={class:"form-label is-required",for:"author"},me={class:"col"},de=e("label",{class:"form-label is-required",for:"create_at"},[e("span",null,"發表日期")],-1),pe={key:0,class:"mb-5"},ue=e("label",{for:"link",class:"form-label is-required"},"網站連結",-1),fe={key:1,class:"mb-5"},he=e("label",{for:"description",class:"form-label is-required"},"摘要",-1),_e={key:2,class:"form-check mb-5"},be=e("label",{for:"recommend",class:"form-label"},"是否需要推薦商品",-1),ge=e("p",{class:"fs-7 text-muted"},"建議：新聞專欄不需要推薦商品喔！",-1),ve={class:"mb-5"},ye=e("label",{for:"category",class:"form-label is-required"},[e("span",null,"分類")],-1),Ve={id:"categories"},ke=["value"],we={class:"mb-5"},Ae=e("p",null,"標籤",-1),xe=e("p",{class:"fs-7 text-muted"},"選擇和商品一致的標籤，就能向客戶推薦相關商品喔！",-1),Ue={class:"row gy-3 mb-3"},Se=["onUpdate:modelValue"],Pe=["onClick"],qe=e("i",{class:"bi bi-x-lg"},null,-1),Ce=[qe],Ee={class:"mb-5"},Ie=e("label",{class:"form-label is-required",for:"image"},"圖片",-1),Fe=["href"],Te=["src","alt"],Me=e("hr",null,null,-1),De=e("hr",null,null,-1),Le=e("p",{class:"is-required"},"詳細內容",-1),He=e("hr",null,null,-1),Ne={class:"alert bg-light flex-classic mt-5 mb-0"},Be={class:"form-check"},Re=e("label",{class:"form-label mb-0",for:"isPublic"},"是否公開",-1),ze=["disabled"];function je(l,o,g,Oe,t,d){const P=p("RouterLink"),n=p("VField"),q=p("UploadForm"),C=p("ckeditor"),E=p("VForm");return a(),r(b,null,[e("ul",Z,[e("li",$,[e("button",{type:"button",onClick:o[0]||(o[0]=h=>t.tab="setting"),class:V(["w-100 nav-link",{active:t.tab==="setting"}])}," 設定",2)]),e("li",ee,[e("button",{type:"button",onClick:o[1]||(o[1]=h=>t.tab="category"),class:V(["w-100 nav-link",{active:t.tab==="category"}])}," 分類",2)]),e("li",te,[e("button",{type:"button",onClick:o[2]||(o[2]=h=>t.tab="image"),class:V(["w-100 nav-link",{active:t.tab==="image"}])}," 圖片",2)])]),s(E,{onSubmit:d.confirmUpdate,ref:"form"},{default:x(({meta:h})=>[e("div",oe,[e("h4",ie,[e("b",null,f(t.article.id?"編輯":"新增")+f(t.type),1)]),U("/ "),s(P,{to:"/admin/article",class:"text-info"},{default:x(()=>[U("回文章管理列表")]),_:1})]),c(e("div",null,[e("div",le,[e("label",se,[e("span",null,f(t.type==="公益計劃"?"組織名稱":"標題"),1)]),s(n,{id:"title",type:"text",class:"form-control",modelValue:t.article.title,"onUpdate:modelValue":o[3]||(o[3]=i=>t.article.title=i),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),e("div",re,[e("div",ae,[e("div",ne,[e("label",ce,[e("span",null,f(t.type==="公益計劃"?"完整法人名稱":"作者"),1)]),s(n,{id:"author",type:"text",class:"form-control",modelValue:t.article.author,"onUpdate:modelValue":o[4]||(o[4]=i=>t.article.author=i),modelModifiers:{trim:!0},name:"author",rules:"required"},null,8,["modelValue"])]),e("div",me,[de,s(n,{id:"create_at",type:"date",class:"form-control",modelValue:d.createAt,"onUpdate:modelValue":o[5]||(o[5]=i=>d.createAt=i),name:"create_at",rules:"required"},null,8,["modelValue"])])])]),t.type==="公益計劃"?(a(),r("div",pe,[ue,s(n,{id:"link",type:"text",class:"form-control",modelValue:t.article.link,"onUpdate:modelValue":o[6]||(o[6]=i=>t.article.link=i),modelModifiers:{trim:!0},name:"link",rules:"required|url",placeholder:"請提供該組織的官方連結，讓使用者可以透過連結拜訪"},null,8,["modelValue"])])):u("",!0),t.type!=="網站公告"?(a(),r("div",fe,[he,s(n,{id:"title",rows:"4",class:"form-control",modelValue:t.article.description,"onUpdate:modelValue":o[7]||(o[7]=i=>t.article.description=i),modelModifiers:{trim:!0},name:"description",as:"textarea"},null,8,["modelValue"])])):u("",!0),t.type==="專欄文章"?(a(),r("div",_e,[c(e("input",{type:"checkbox",id:"recommend",class:"form-check-input","onUpdate:modelValue":o[8]||(o[8]=i=>t.article.recommend=i)},null,512),[[A,t.article.recommend]]),be,ge])):u("",!0)],512),[[_,t.tab==="setting"]]),c(e("div",null,[e("div",ve,[ye,s(n,{id:"category",class:"form-control",list:"categories",modelValue:t.article.category,"onUpdate:modelValue":o[9]||(o[9]=i=>t.article.category=i),modelModifiers:{trim:!0},name:"category",rules:"required"},null,8,["modelValue"]),e("datalist",Ve,[(a(!0),r(b,null,S(l.categories[t.type],i=>(a(),r("option",{key:i,value:i},f(i),9,ke))),128))])]),c(e("div",we,[Ae,xe,e("div",Ue,[(a(!0),r(b,null,S(t.article.tag,(i,v)=>(a(),r("div",{class:"col-md-3 position-relative",key:i},[c(e("input",{type:"text",class:"form-control","onUpdate:modelValue":k=>t.article.tag[v]=k},null,8,Se),[[O,t.article.tag[v]]]),e("button",{type:"button",class:"btn btn-origin btn-inline",onClick:k=>t.article.tag.splice(v,1)},Ce,8,Pe)]))),128))]),e("button",{type:"button",class:"btn btn-primary",onClick:o[10]||(o[10]=i=>t.article.tag.push(""))}," 新增標籤")],512),[[_,t.type==="專欄文章"]])],512),[[_,t.tab==="category"]]),c(e("div",null,[e("div",Ee,[Ie,s(n,{id:"image",type:"text",class:"form-control",modelValue:t.article.image,"onUpdate:modelValue":o[11]||(o[11]=i=>t.article.image=i),modelModifiers:{trim:!0},name:"image",rules:"required|url"},null,8,["modelValue"]),t.article.image?(a(),r("a",{key:0,target:"_blank",href:t.article.image},[e("img",{class:"object-fit-cover mt-3","max-height":"250",src:t.article.image,alt:t.article.title},null,8,Te)],8,Fe)):u("",!0)]),Me,s(q,{"use-clipboard":!1,"upload-state":t.uploadState,disabled:t.article.image,onAddNewImage:d.addNewImage,onUpdateUploadState:d.updateUploadState},null,8,["upload-state","disabled","onAddNewImage","onUpdateUploadState"])],512),[[_,t.tab==="image"]]),t.type!=="公益計劃"?(a(),r(b,{key:0},[De,Le,s(C,{editor:l.editor,config:l.editorConfig,modelValue:t.article.content,"onUpdate:modelValue":o[12]||(o[12]=i=>t.article.content=i),modelModifiers:{trim:!0}},null,8,["editor","config","modelValue"])],64)):u("",!0),He,e("div",Ne,[e("div",Be,[c(e("input",{id:"isPublic",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[13]||(o[13]=i=>t.article.isPublic=i)},null,512),[[A,t.article.isPublic]]),Re]),e("button",{type:"submit",class:"btn btn-primary",disabled:!h.valid},"確認更新 ",8,ze)])]),_:1},8,["onSubmit"])],64)}const Ht=W(Y,[["render",je]]);export{Ht as default};
