import{m as c,a as h}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as _}from"./alert-9WsjHxyk.js";import{u as n}from"./userArticle-DWdr0wi6.js";import{S as f}from"./SubscriptionSection-Dr4bX6nK.js";import{m as g,n as v}from"./@vue_runtime-dom@3.4.19-DAqtRikk.js";import{_ as b}from"./index-qANNvTn4.js";import{aJ as y,A as r,Q as t,W as l,P as w,F as B,ao as F,c as d,aH as x,aq as m,z as a}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as o,l as D}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-BAvl06kU.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nKXmQdRT.js";import"./vue@3.4.19-DAUBsDVh.js";import"./axios@1.6.7-Di5RpEPX.js";import"./userProduct-DCBWQa0S.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-BfItuFlz.js";import"./lottie-web@5.12.2-CU4Beet5.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cjw3eg2V.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-Cu9ud2ZH.js";const j={data(){return{authors:[{column:"趣聞錄",image:"https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710014511552.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=W0m3orlvXqlkZpxFmG%2FHfaBpnJ%2FwjI33W%2B5L4U9EYtaZtgyMDUpjurp3GvfFqJrvNMPNcKff8cL3jXH5%2Fqd0Bw0vyV2D%2FwydoqnDof3hGDf10dVzGhDkLRxzy8qIhKmiUXoSslHqOMq0l1R26a3f%2BeM4PQXZOquADyz%2FH8DucBiZ%2BzKcqNl%2BI3kZBcEjn%2F64jQJlpChQanzY3aSvmarc1Dttz60d6EzZ2X5QVQQCdoxo%2BNJl1HVyj8sp3sSPuwbur31jJGGjMAB8%2BDC%2F7Otyt1FZPq3nvFT7jaHSwVRYPvJyrwE%2B70NJwC7E%2FLBe3aKoA8mcIrbBYvMEHMEclzGoBw%3D%3D",name:"左",description:"住在全糖市⋯⋯不是，台南市的業餘歷史愛好者，只要一杯檸檬紅茶就能在電腦桌前待一整天。"},{column:"藝術辭典",image:"https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1710014338997.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DgRW9WzPGfado5bru1tiw%2FXVBK4A4LyIquug93tpHeU3iIm7aK3OPlTQpqc2LPxU098G%2BI%2Bqvi2czR0%2FbFJCu8dq%2BAj1OtMJaFfTT2qEiPHy9ogr4OUGMWn8B5xV2Y4wMF6%2FbOsTi9VmZDX5I%2BjaJ2Gc%2FkNcy5n5Fw0QHaFKTkXKwwsUrhkiUc4z7pxipyP5g%2BRcTP3Vjo%2BxLs3XDhiEMcxsckFVP1b0oynm%2BIKEjdW5CYdOw1NUiZd%2FbdLxOtpliKUs%2BhOi6hd8Z5qJOukUesYb67ADzLOPC%2Fdout297ckr%2B%2F8meEhDB3jj7OweLo8e1RjJl88EKwVPFuD0k2ALfg%3D%3D",name:"Zoey",description:"兼任小學美術老師的補教業人員，熱愛畫畫，但是只會水彩和粉蠟筆。目前正在積極學習油畫和電繪技巧。"}]}}},k={mixins:[j],components:{SubscriptionSection:f},computed:{...c(n,["article","relatedProducts"]),...c(_,["isLoading"]),author(){return this.authors.find(s=>s.column===this.article.author)}},watch:{"$route.params.id":{handler(s){this.getArticle(s)},deep:!0}},methods:{...h(n,["getArticle","getRelatedProducts"])},mounted(){this.getArticle(this.$route.params.id)}},P={class:"h-100 bg-gray text-primary"},S={class:"container py-7"},z={class:"bg-white rounded-2 p-md-7 p-5 shadow"},L={class:"p-3 border rounded-2"},q={class:"text-center mb-6"},A={class:"h2 fw-bold lh-lg py-3 border-bottom mb-3"},V=["src","alt"],E={class:"row justify-content-center mb-3"},M={class:"col-xl-6 col-md-8 mb-2"},G=["innerHTML"],H={class:"border-top py-6"},J={key:0,class:"row justify-content-center"},O={class:"col-xl-6 col-md-8"},C=t("h4",{class:"text-center mb-6"},[t("b",null,"作者介紹")],-1),I={class:"row gy-3"},N={class:"col-sm-3"},U={class:"d-flex justify-content-center"},K={class:"col-sm-9"},T={class:"h-100 d-flex flex-column justify-content-center"},Z={class:"fs-6 mb-3"},R={class:"fs-7 mb-0"},Q={class:"border-top py-6"},X=t("h4",{class:"text-center mb-6"},[t("b",null,"為您推薦")],-1),$={class:"row g-5"},W=["onClick"],Y={class:"card"},tt=["src","alt"],st={class:"card-body py-5 flex-classic"},ot={class:"fs-6 fw-bold mb-0"},et={class:"mb-0"},it={class:"text-center mb-3"};function rt(s,at,ct,nt,lt,i){const p=m("RouterLink"),u=m("SubscriptionSection");return y((a(),r("div",P,[t("div",S,[t("div",z,[t("div",L,[t("div",q,[t("h3",A,o(s.article.title),1),t("p",null,[t("span",null,o(s.$calc.formatDate(s.article.create_at*1e3)),1),t("span",null,"｜專欄："+o(s.article.author),1)]),t("img",{class:"article-img",src:s.article.image,alt:s.article.title},null,8,V)]),t("div",E,[t("div",M,[t("div",{class:"text-justify",innerHTML:s.article.content},null,8,G)])]),t("div",H,[i.author?(a(),r("div",J,[t("div",O,[C,t("div",I,[t("div",N,[t("div",U,[t("div",{class:"author-img",style:D({backgroundImage:`url(${i.author.image})`})},null,4)])]),t("div",K,[t("div",T,[t("h5",Z,[t("b",null,o(s.article.author),1),l("｜"+o(i.author.name),1)]),t("p",R,o(i.author.description),1)])])])])])):w("",!0)]),t("div",Q,[X,t("div",$,[(a(!0),r(B,null,F(s.relatedProducts,e=>(a(),r("div",{class:"col-md-4",key:e.id},[t("a",{class:"text-decoration-none",href:"#",onClick:v(dt=>s.$router.push(`/product/${e.id}`),["prevent"])},[t("div",Y,[t("img",{class:"card-img-top",src:e.imageUrl,alt:e.title},null,8,tt),t("div",st,[t("h5",ot,o(e.title),1),t("p",et,"NT$ "+o(e.price),1)])])],8,W)]))),128))])]),t("div",it,[d(p,{class:"fw-bold text-info",to:"/articles"},{default:x(()=>[l("回文章列表")]),_:1})])])])]),d(u)],512)),[[g,!s.isLoading]])}const Ht=b(k,[["render",rt]]);export{Ht as default};