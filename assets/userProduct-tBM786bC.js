import{a}from"./axios@1.6.7-Di5RpEPX.js";import{d as i}from"./pinia@2.1.7_vue@3.4.19-CHKlOEZr.js";import{l as p}from"./loader-CArRiQTv.js";import{a as u}from"./alert-C5k3uZHZ.js";var n={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e=p(),s=u(),{VITE_APP_SITE:c,VITE_APP_PATH:d}=n,m=i("userProduct",{state:()=>({products:[],pagination:{},product:{}}),actions:{getProducts(o="",t=1){e.createLoader("get-user-products"),a.get(`${c}/api/${d}/products?category=${o}&page=${t}`).then(r=>{this.products=r.data.products,this.pagination=r.data.pagination}).catch(r=>s.errorAlert(r)).finally(()=>e.removeLoader("get-user-products"))},getProduct(o){e.createLoader("get-single-product"),a.get(`${c}/api/${d}/product/${o}`).then(t=>{this.product=t.data.product}).catch(t=>s.errorAlert(t)).finally(()=>e.removeLoader("get-single-product"))}}});export{m as u};
