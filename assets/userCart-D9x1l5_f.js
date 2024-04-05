import{a as s}from"./axios@1.6.7-Di5RpEPX.js";import{d as i}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as n,a as p}from"./alert-CIAdBCx8.js";var u={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const r=n(),a=p(),{VITE_APP_SITE:c,VITE_APP_PATH:l}=u,m=i("userCart",{state:()=>({carts:[],sum:{}}),actions:{getCarts(){r.createLoader("get-carts"),s.get(`${c}/api/${l}/cart`).then(t=>{this.carts=t.data.data.carts,this.sum={total:+t.data.data.total.toFixed(0),finalTotal:+t.data.data.final_total.toFixed(0)}}).catch(t=>a.errorAlert(t)).finally(()=>r.removeLoader("get-carts"))},addToCart(t,e=1){r.setLoader(t),s.post(`${c}/api/${l}/cart`,{data:{product_id:t,qty:e}}).then(o=>{a.toastAlert(o.data.message,"success"),this.getCarts()}).catch(o=>a.errorAlert(o)).finally(()=>r.setLoader(""))},updateCart(t,e){r.createLoader("update-cart"),s.put(`${c}/api/${l}/cart/${t.id}`,{data:{product_id:t.product_id,qty:e}}).then(o=>{a.toastAlert(o.data.message,"success"),this.getCarts()}).catch(o=>a.errorAlert(o)).finally(()=>r.removeLoader("update-cart"))},deleteSingleCart(t,e){const o={title:"確定刪除此商品？",text:`您刪除的商品為：${t.product.title}`};a.checkAlert(o,()=>{r.createLoader("delete-single-cart"),s.delete(`${c}/api/${l}/cart/${t.id}`).then(d=>{a.toastAlert(d.data.message,"success"),this.getCarts()}).catch(d=>a.errorAlert(d)).finally(()=>r.removeLoader("delete-single-cart"))},e)},clearCart(){const t={title:"確定清空購物車？",type:"alert"};a.checkAlert(t,()=>{r.createLoader("delete-all-carts"),s.delete(`${c}/api/${l}/carts`).then(e=>{a.toastAlert(e.data.message,"success"),this.getCarts()}).catch(e=>a.errorAlert(e)).finally(()=>r.removeLoader("delete-all-carts"))})},useCoupon(t){r.setLoader("use-coupon"),s.post(`${c}/api/${l}/coupon`,{data:{code:t}}).then(e=>{this.sum.finalTotal=e.data.final_total,a.toastAlert("已套用優惠券！","success"),this.getCarts()}).catch(e=>a.errorAlert(e)).finally(()=>r.setLoader(""))}}});export{m as c};
