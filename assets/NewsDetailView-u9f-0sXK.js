import{m as i,a as n}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{u as a}from"./userArticle-CsUAow0B.js";import{l as d}from"./alert-Dw2Xe9FX.js";import{m}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as p}from"./index-TqJ5F-GX.js";import{A as _,Q as t,c as r,aH as c,aJ as h,aq as u,z as g,W as l}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as o}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./axios@1.6.7-Di5RpEPX.js";import"./userProduct-hXqBbad6.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const f={computed:{...i(a,["article"]),...i(d,["isLoading"])},methods:{...n(a,["getArticle"])},mounted(){this.getArticle(this.$route.params.id)}},b={class:"h-100 bg-gray text-primary"},v={class:"h-100 container py-7"},w={class:"row justify-content-center"},y={class:"col-lg-8"},x={class:"mb-5",style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},L={class:"breadcrumb flex-nowrap text-nowrap overflow-x-scroll"},$={class:"breadcrumb-item"},k={class:"breadcrumb-item"},A={class:"d-md-block d-none breadcrumb-item active","aria-current":"page"},C={class:"bg-light rounded-2 shadow-sm"},S={class:"px-md-7 px-6 pt-7 pb-6"},j={class:"row flex-column gx-7 gy-5"},D={class:"col"},E=["src","alt"],N={class:"col"},V={class:"text-muted mb-3"},B={class:"h3 lh-lg text-justify fw-bold mb-5"},H=["innerHTML"];function M(s,T,z,R,q,J){const e=u("RouterLink");return g(),_("div",b,[t("div",v,[t("div",w,[t("div",y,[t("nav",x,[t("ol",L,[t("li",$,[r(e,{to:"/"},{default:c(()=>[l("首頁")]),_:1})]),t("li",k,[r(e,{to:"/news"},{default:c(()=>[l("最新消息")]),_:1})]),t("li",A,[t("span",null,o(s.article.title),1)])])]),h(t("div",C,[t("div",S,[t("div",j,[t("div",D,[t("img",{class:"object-fit-cover",src:s.article.image,alt:s.article.title},null,8,E)]),t("div",N,[t("div",null,[t("p",V,o(s.$calc.formatDate(s.article.create_at*1e3,"/"))+"｜ "+o(s.article.category),1),t("h4",B,[t("span",null,o(s.article.title),1)]),t("div",{class:"lh-lg text-justify",innerHTML:s.article.content},null,8,H)])])])])],512),[[m,!s.isLoading]])])])])])}const dt=p(f,[["render",M]]);export{dt as default};
