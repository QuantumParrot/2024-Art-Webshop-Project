import{a as s}from"./axios@1.6.7-Di5RpEPX.js";import{d}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as A,a as h}from"./alert-Bu4dq1WO.js";var u={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:l,VITE_APP_PATH:o}=u,a=A(),c=h(),f=d("adminArticle",{state:()=>({articles:[],categories:{網站公告:["營運通知","優惠活動","展覽資訊","講座資訊","網站測試"],專欄文章:["藝術","歷史","地球","天文"],公益計劃:["海洋保育","野生動物救援","社會關懷"]}}),getters:{tags:({articles:e})=>{const t=[];return e.forEach(r=>r.tag.forEach((i,n)=>{n!==0&&!t.includes(i)&&t.push(i)})),t}},actions:{getArticles(e=1){a.createLoader("get-articles"),s.get(`${l}/api/${o}/admin/articles?page=${e}`).then(t=>{const{articles:r}=t.data;this.articles=r.sort((i,n)=>n.create_at-i.create_at)}).catch(t=>c.errorAlert(t)).finally(()=>a.removeLoader("get-articles"))},createArticle(e,t){a.createLoader("create-article"),s.post(`${l}/api/${o}/admin/article`,{data:e}).then(r=>{c.toastAlert(r.data.message,"success"),t(),this.getArticles()}).catch(r=>c.errorAlert(r)).finally(()=>a.removeLoader("create-article"))},updateArticle(e,t){a.createLoader("update-article"),s.put(`${l}/api/${o}/admin/article/${e.id}`,{data:e}).then(r=>{c.toastAlert(r.data.message,"success"),t(),this.getArticles()}).catch(r=>c.errorAlert(r)).finally(()=>a.removeLoader("update-article"))},deleteArticle(e,t){const r={title:"確定刪除文章？",text:`名稱：${t}`};c.checkAlert(r,()=>{a.createLoader("delete-article"),s.delete(`${l}/api/${o}/admin/article/${e}`).then(i=>{c.toastAlert(i.data.message,"success"),this.getArticles()}).catch(i=>c.errorAlert(i)).finally(()=>a.removeLoader("delete-article"))})},switchArticleStatus(e){const t=e.isPublic;a.createLoader("switch-article-status"),s.put(`${l}/api/${o}/admin/article/${e.id}`,{data:{...e,content:e.description,isPublic:!e.isPublic}}).then(()=>{c.toastAlert(`文章已${t?"隱藏":"公開"}`,"success"),this.getArticles()}).catch(r=>c.errorAlert(r)).finally(()=>a.removeLoader("switch-article-status"))}}});export{f as a};
