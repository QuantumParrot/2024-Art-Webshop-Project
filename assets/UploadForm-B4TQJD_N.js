import{a as f}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{a as h}from"./alert-Bb6H8DPx.js";import{C as _}from"./ClipboardComponent-BBQxkYtA.js";import{n as g,m as U}from"./@vue_runtime-dom@3.4.19-DAqtRikk.js";import{_ as b}from"./index-jIvyzYmV.js";import{z as r,A as l,Q as t,P as p,aJ as P,F as c,c as v,aq as A}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as n}from"./@vue_shared@3.4.19-Bk7MlA8B.js";var y={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:w,VITE_APP_PATH:S}=y,C={components:{ClipboardComponent:_},props:["useClipboard","disabled","uploadState"],emits:["update-upload-state","add-new-image"],data(){return{image:{},isUploading:!1,imageUrl:""}},methods:{...f(h,["errorAlert","uploadAlert"]),confirmUpload(){if(this.$refs.file.files.length){const e=this.$refs.file.files[0];this.image=e}else this.reset()},upload(){if(this.uploadAlert(this.image)){this.isUploading=!0;const o=new FormData;o.append("file-to-upload",this.image),this.$http.post(`${w}/api/${S}/admin/upload`,o).then(a=>{const{imageUrl:d}=a.data;this.imageUrl=d,this.reset()}).catch(a=>this.errorAlert(a)).finally(()=>{this.isUploading=!1})}},reset(){this.$refs.form.reset(),this.image={}},updateState(e){this.$emit("update-upload-state",e)},addNewImage(e){this.$emit("add-new-image",e)}},watch:{isUploading(e){this.updateState(e)},imageUrl(e){e&&this.addNewImage(e)}},mounted(){this.isUploading=this.uploadState}},E=t("p",{class:"fs-7 text-danger"},"僅限 JPG、JPEG 與 PNG 格式，檔案大小限制為 3MB 以下。",-1),I={method:"post",enctype:"multipart/form-data",ref:"form"},T={key:0,class:"alert bg-gray overflow-scroll"},V=t("p",{class:"fw-bold"},"檔案資訊",-1),x={class:"mb-0"},D=["disabled"],k={class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},B=["textContent"],N={key:0,class:"alert bg-gray mt-3"},F=t("p",null,"複製圖片網址：",-1),G=["src"];function J(e,o,a,d,s,i){const u=A("clipboard-component");return r(),l(c,null,[E,t("form",I,[t("input",{type:"file",name:"file-to-upload",class:"form-control mb-3",onChange:o[0]||(o[0]=(...m)=>i.confirmUpload&&i.confirmUpload(...m)),ref:"file"},null,544),s.image.name?(r(),l("div",T,[V,t("p",null,"檔案名稱："+n(s.image.name),1),t("p",null,"檔案大小："+n(e.$calc.convertByteUnit(s.image.size)),1),t("p",x,"檔案格式："+n(s.image.type),1)])):p("",!0),t("button",{type:"submit",class:"btn btn-primary",onClick:o[1]||(o[1]=g((...m)=>i.upload&&i.upload(...m),["prevent"])),disabled:a.disabled||s.isUploading},[P(t("span",k,null,512),[[U,s.isUploading]]),t("span",{textContent:n(s.isUploading?"上傳中，請稍候":"確認上傳")},null,8,B)],8,D)],512),a.useClipboard?(r(),l(c,{key:0},[s.imageUrl?(r(),l("div",N,[F,v(u,{value:s.imageUrl},null,8,["value"]),t("img",{class:"mt-3",src:s.imageUrl,alt:"uploaded-image-preview"},null,8,G)])):p("",!0)],64)):p("",!0)],64)}const L=b(C,[["render",J]]);export{L as U};
