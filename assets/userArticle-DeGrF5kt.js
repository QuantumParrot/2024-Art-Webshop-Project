import{a as l}from"./axios@1.6.7-Di5RpEPX.js";import{d as h}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as f,a as g}from"./alert-Dw2Xe9FX.js";import{u as P}from"./userProduct-hXqBbad6.js";var m={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const c=f(),p=g(),{VITE_APP_SITE:u,VITE_APP_PATH:d}=m,y=h("userArticle",{state:()=>({articles:[],article:{},relatedProducts:[]}),getters:{projects:({articles:e})=>e.filter(t=>t.type==="公益計劃"),news:({articles:e})=>e.filter(t=>t.type==="網站公告").sort((t,s)=>s.create_at-t.create_at),columns:({articles:e})=>e.filter(t=>t.type==="專欄文章")},actions:{getArticles(e=1){const t=`${u}/api/${d}/articles?page=`;let s=[];c.createLoader("get-user-articles"),l.get(`${t}${e}`).then(a=>{const{articles:r,pagination:i}=a.data;if(s=r,i.total_pages>1){const o=[];for(let n=2;n<=i.total_pages;n+=1)o.push(l.get(`${t}${n}`));return Promise.all(o)}return!1}).then(a=>{Array.isArray(a)&&a.forEach(r=>s.push(...r.data.articles)),this.articles=s}).catch(a=>p.errorAlert(a)).finally(()=>c.removeLoader("get-user-articles"))},getArticle(e){c.createLoader("get-single-article"),l.get(`${u}/api/${d}/article/${e}`).then(t=>{this.article=t.data.article,this.article.type==="專欄文章"?(this.router.push(`/article/${this.article.id}`),this.article.recommend&&this.getRelatedProducts(this.article.tag)):this.router.push(`/news/${this.article.id}`)}).catch(t=>p.errorAlert(t)).finally(()=>c.removeLoader("get-single-article"))},async getRelatedProducts(e){const{getRandomProducts:t}=P(),s=await l.get(`${u}/api/${d}/products/all`),a=Object.values(s.data.products);let r=[];Array.isArray(e)&&(r=a.filter(i=>i.tags.some(o=>e.includes(o)))),r.length>3?r=t(r,3):r.push(...t(a,Math.abs(r.length-3))),this.relatedProducts=r}}});export{y as u};