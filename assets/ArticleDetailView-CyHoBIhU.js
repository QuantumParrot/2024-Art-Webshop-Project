import{m as c,a as l}from"./pinia@2.1.7_vue@3.4.19-4NNq-WPh.js";import{u as s}from"./userArticle-Bvp47lai.js";import{_ as n}from"./index-kzKWix_k.js";import{O as r,P as t,c as m,aH as d,N as p,aq as _,aj as i,V as h}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{P as o}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./loader-BKOny_iI.js";import"./alert-C8z9YHNp.js";import"./sweetalert2@11.10.5-szm5w3W2.js";import"./@ckeditor_ckeditor5-vue@5.1.0-CfUo4zCs.js";import"./vue@3.4.19-dGbATgA4.js";import"./@vue_runtime-dom@3.4.19-DVfTC9pq.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-CIwtLcK9.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-CtCrC8gK.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Ds2EadH1.js";import"./vue-router@4.2.5_vue@3.4.19-CGkOaO3i.js";const u={computed:{...c(s,["article"])},methods:{...l(s,["getArticle"])},mounted(){this.getArticle(this.$route.params.id)}},f={class:"h-100 bg-gray text-primary"},b={class:"container py-7"},g={key:0,class:"bg-white rounded-2 p-md-7 p-5 shadow"},v={class:"p-3 border rounded-2"},y={class:"text-center mb-6"},w={class:"h2 fw-bold lh-lg py-3 border-bottom mb-3"},V=["src","alt"],$={class:"row justify-content-center mb-3"},k={class:"col-lg-6 col-md-8"},A=["innerHTML"],N=t("div",{class:"border-top py-6 mb-0"},[t("h4",{class:"text-center fw-bold"},"相關商品")],-1),j={class:"text-center mb-3"};function x(e,B,C,D,H,S){const a=_("router-link");return i(),r("div",f,[t("div",b,[e.article.id?(i(),r("div",g,[t("div",v,[t("div",y,[t("h3",w,o(e.article.title),1),t("p",null,[t("span",null,o(e.$calc.formatDate(e.article.create_at*1e3)),1),t("span",null,"｜專欄："+o(e.article.author),1)]),t("img",{class:"article-img",src:e.article.image,alt:e.article.title},null,8,V)]),t("div",$,[t("div",k,[t("div",{class:"text-justify",innerHTML:e.article.content},null,8,A)])]),N,t("div",j,[m(a,{class:"fw-bold text-info",to:"/articles"},{default:d(()=>[h("回文章列表")]),_:1})])])])):p("",!0)])])}const ot=n(u,[["render",x]]);export{ot as default};
