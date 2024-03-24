import{a as l}from"./axios@1.6.7-Di5RpEPX.js";import{d as h}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as f,a as g}from"./alert-BXjizhtP.js";var m={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:d,VITE_APP_PATH:n}=m,o=f(),i=g(),P=h("adminOrder",{state:()=>({orders:[],statesCode:{0:{title:"未確認款項",color:"#c62828"},1:{title:"已確認款項",color:"#ff6f00"},2:{title:"安排出貨中",color:"#1565c0"},3:{title:"商品配送中",color:"#00838f"},4:{title:"訂單已完成",color:"#388e3c"}},currentPage:1,orderState:5,isPaid:2,timeAscending:0}),getters:{refactorOrders:({orders:e})=>e.map(t=>{if(t.message.startsWith('{"')){const r=JSON.parse(t.message);return{...t,message:r.message||"無",project:r.project,state:parseInt(r.state,10),total:parseInt(t.total.toFixed(0),10)}}return{...t,project:t.project||"不指定",state:t.state||0,total:parseInt(t.total.toFixed(0),10)}}),stateOptions:({isPaid:e})=>e!==0?[0,1,2,3,4]:[],filterOrders:({refactorOrders:e,isPaid:t,orderState:r})=>{let a=t===2?e:e.filter(s=>s.is_paid===!!t);return a=r===5?a:a.filter(s=>s.state===r),a},displaying:({filterOrders:e,currentPage:t,timeAscending:r})=>(e.sort((a,s)=>r?a.create_at-s.create_at:s.create_at-a.create_at),e.filter((a,s)=>Math.floor(s/10)+1===t)),totalPages:({filterOrders:e})=>Math.ceil(e.length/10),unhandled:({refactorOrders:e})=>e.filter(t=>t.is_paid&&t.state===0).length},actions:{switchPage(e){this.currentPage=e},resetOrders(){this.totalOrderList.length=0},getOrders(e=1){const t=`${d}/api/${n}/admin/orders?page=`;o.createLoader("get-orders"),l.get(`${t}${e}`).then(r=>{const{orders:a,pagination:s}=r.data;if(this.orders=a,s.total_pages>1){const p=[];for(let c=2;c<=s.total_pages;c+=1)p.push(l.get(`${t}${c}`));return Promise.all(p)}return!1}).then(r=>{Array.isArray(r)&&r.forEach(a=>this.orders.push(...a.data.orders))}).catch(r=>i.errorAlert(r)).finally(()=>o.removeLoader("get-orders"))},updateOrder(e,t){const{code:r,order:a}=e;o.setLoader(a.id),l.put(`${d}/api/${n}/admin/order/${a.id}`,{data:{...a,state:Number(r)}}).then(s=>{i.toastAlert(s.data.message,"success"),t(),this.getOrders()}).catch(s=>i.errorAlert(s)).finally(()=>o.setLoader(""))},deleteOrder(e,t){o.createLoader("delete-order"),l.delete(`${d}/api/${n}/admin/order/${e}`).then(()=>{i.toastAlert("我們懷念它 (´;ω;`)","success"),t(),this.getOrders()}).catch(r=>i.errorAlert(r)).finally(()=>o.removeLoader("delete-order"))},downTheDrain(){i.multiverseAlert(()=>{o.createLoader("tan-tiau"),l.delete(`${d}/api/${n}/admin/orders/all`).then(()=>{i.toastAlert("沒了 ... 都沒了 (´;ω;`)","success"),this.getOrders()}).catch(e=>i.errorAlert(e)).finally(()=>o.removeLoader("tan-tiau"))})},switchFilter(e,t){this[e]=t}}});export{P as a};
