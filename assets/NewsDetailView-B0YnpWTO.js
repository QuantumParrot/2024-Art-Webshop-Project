import{m as i,a as n}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{u as r}from"./userArticle-BQxLBhwi.js";import{l as m}from"./alert-dm0RMdUk.js";import{m as d}from"./@vue_runtime-dom@3.4.19-AC5g8dxk.js";import{_ as p}from"./index-DYnlkhxx.js";import{O as _,P as t,c as a,aH as l,aJ as h,aq as u,aj as g,V as c}from"./@vue_runtime-core@3.4.19-CGfIweqO.js";import{P as o}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./userProduct-BjO_H0tS.js";import"./sweetalert2@11.10.5-jk-t8Na3.js";import"./@ckeditor_ckeditor5-vue@5.1.0-nhPJMPZe.js";import"./vue@3.4.19-CzIOYL8w.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-Bp4gs7Rm.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-Bg5iSJV4.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-eCggCihV.js";import"./vue-router@4.2.5_vue@3.4.19-DxgIm9Z7.js";import"./aos@2.3.4-DDXLjS56.js";const f={computed:{...i(r,["article"]),...i(m,["isLoading"])},methods:{...n(r,["getArticle"])},mounted(){this.getArticle(this.$route.params.id)}},v={class:"h-100 bg-gray text-primary"},b={class:"h-100 container py-7"},w={class:"row justify-content-center"},x={class:"col-lg-8"},y={class:"mb-5",style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},$={class:"breadcrumb flex-nowrap text-nowrap overflow-x-scroll"},j={class:"breadcrumb-item"},C={class:"breadcrumb-item"},L=t("li",{class:"breadcrumb-item active","aria-current":"page"},null,-1),S={class:"bg-light rounded-2 shadow-sm"},V={class:"px-md-7 px-6 pt-7 pb-6"},k={class:"row flex-column gx-7 gy-5"},A={class:"col"},D=["src","alt"],E={class:"col"},N={class:"text-muted mb-3"},B={class:"h3 lh-lg text-justify fw-bold mb-5"},H=["innerHTML"];function M(s,T,P,q,z,J){const e=u("router-link");return g(),_("div",v,[t("div",b,[t("div",w,[t("div",x,[t("nav",y,[t("ol",$,[t("li",j,[a(e,{to:"/"},{default:l(()=>[c("首頁")]),_:1})]),t("li",C,[a(e,{to:"/news"},{default:l(()=>[c("最新消息")]),_:1})]),L])]),h(t("div",S,[t("div",V,[t("div",k,[t("div",A,[t("img",{class:"object-fit-cover",src:s.article.image,alt:s.article.title},null,8,D)]),t("div",E,[t("div",null,[t("p",N,[t("span",null,o(s.$calc.formatDate(s.article.create_at*1e3,"/"))+"｜",1),t("span",null,o(s.article.category),1)]),t("h4",B,o(s.article.title),1),t("div",{class:"lh-lg text-justify",innerHTML:s.article.content},null,8,H)])])])])],512),[[d,!s.isLoading]])])])])])}const pt=p(f,[["render",M]]);export{pt as default};
