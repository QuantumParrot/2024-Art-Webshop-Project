import{c as A}from"./calculator-CHDHV-Nf.js";import{i as S,j as h,m as $,_ as k,o as r,b as u,e,d as p,w as V,k as w,q as P,s as L,r as g,a as E,t as _,F as x,l as T}from"./index-CBjDTjow.js";import{u as q,a as M}from"./alert-BCVQqx0c.js";import{m as D,P as U}from"./modal-BnBXpAov.js";import"./moment-Cl4UOzQZ.js";var I={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/undefined",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:b,VITE_APP_PATH:f}=I,l=q(),d=M(),y=S("adminCoupon",{state:()=>({coupons:[],pagination:{}}),actions:{getCoupons(t=1){l.createLoader("get-coupons"),h.get(`${b}/api/${f}/admin/coupons?page=${t}`).then(o=>{const{coupons:s,pagination:v}=o.data;this.coupons=s,this.pagination=v}).catch(o=>d.errorAlert(o)).finally(()=>l.removeLoader("get-coupons"))},createCoupon(t,o){l.createLoader("create-coupon"),h.post(`${b}/api/${f}/admin/coupon`,{data:t}).then(s=>{d.toastAlert(s.data.message,"success"),o(),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("create-coupon"))},updateCoupon(t,o){l.createLoader("update-coupon"),h.put(`${b}/api/${f}/admin/coupon/${t.id}`,{data:t}).then(s=>{d.toastAlert(s.data.message,"success"),o(),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("update-coupon"))},deleteCoupon(t){const o={title:"確定刪除優惠券？",text:`優惠券名稱：${t.title}`};d.checkAlert(o,()=>{l.createLoader("delete-coupon"),h.delete(`${b}/api/${f}/admin/coupon/${t.id}`).then(s=>{d.toastAlert(s.data.message,"success"),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("delete-coupon"))})},switchCouponStatus(t){const o=!!t.is_enabled;l.createLoader("switch-coupon-status"),h.put(`${b}/api/${f}/admin/coupon/${t.id}`,{data:{...t,is_enabled:o?0:1}}).then(()=>{d.toastAlert(`成功${o?"取消":"開啟"}優惠券`,"success"),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("switch-coupon-status"))}}}),j={mixins:[D,A],data(){return{modal:"",coupon:{}}},props:["tempCoupon"],computed:{due_date:{get(){return this.formatDate(this.coupon.due_date*1e3)},set(t){this.coupon.due_date=new Date(t).getTime()/1e3}}},watch:{tempCoupon(){this.coupon=this.tempCoupon}},methods:{...$(y,["createCoupon","updateCoupon"]),...$(M,["toastAlert"]),confirmUpdate(){Object.values(this.coupon).every(o=>o)?this.coupon.id?this.updateCoupon(this.coupon,this.hideModal):this.createCoupon(this.coupon,this.hideModal):this.toastAlert("欄位不可空白！","warning")}},mounted(){this.coupon=this.tempCoupon}},B={class:"modal fade",tabindex:"-1",ref:"modal"},O={class:"modal-dialog modal-dialog-centered"},R={class:"modal-content"},F={class:"modal-header justify-content-end"},H=e("i",{class:"bi bi-x-circle-fill"},null,-1),N=[H],z={class:"modal-body"},G={class:"mb-3"},J=e("label",{class:"form-label is-required",for:"title"},"優惠券名稱",-1),K={class:"mb-3"},Q=e("label",{class:"form-label is-required",for:"code"},"優惠碼",-1),W={class:"mb-3"},X=e("div",{class:"flex-classic mb-2"},[e("label",{class:"is-required",for:"percent"},"折扣"),e("span",{class:"fs-7 text-danger mb-0"},"必須是 1 ～ 100 之間的整數")],-1),Y={class:"input-group"},Z=e("span",{class:"input-group-text"},"％",-1),ee={class:"mb-3"},te=e("label",{class:"form-label is-required",for:"due_date"}," 優惠截止日期",-1),oe=["min"],se={class:"modal-footer justify-content-between align-items-center"},ne={class:"form-check"},ae=e("label",{class:"form-label",for:"is_enabled"}," 是否啟用",-1),ie=["disabled"];function le(t,o,s,v,i,c){const m=g("v-field"),C=g("v-form");return r(),u("div",B,[e("div",O,[e("div",R,[e("div",F,[e("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:o[0]||(o[0]=(...n)=>t.hideModal&&t.hideModal(...n))},N)]),p(C,{onSubmit:c.confirmUpdate},{default:V(({meta:n})=>[e("div",z,[e("div",G,[J,p(m,{id:"title",type:"text",class:"form-control",modelValue:i.coupon.title,"onUpdate:modelValue":o[1]||(o[1]=a=>i.coupon.title=a),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),e("div",K,[Q,p(m,{id:"code",type:"text",class:"form-control",modelValue:i.coupon.code,"onUpdate:modelValue":o[2]||(o[2]=a=>i.coupon.code=a),modelModifiers:{trim:!0},name:"code",rules:"required"},null,8,["modelValue"])]),e("div",W,[X,e("div",Y,[p(m,{id:"percent",type:"number",min:"1",max:"100",class:"form-control",modelValue:i.coupon.percent,"onUpdate:modelValue":o[3]||(o[3]=a=>i.coupon.percent=a),modelModifiers:{number:!0},name:"percent",rules:"required|integer|min_value:1|max_value:100"},null,8,["modelValue"]),Z])]),e("div",ee,[te,w(e("input",{id:"due_date",type:"date",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=a=>c.due_date=a),min:t.today()},null,8,oe),[[P,c.due_date]])])]),e("div",se,[e("div",ne,[w(e("input",{id:"is_enabled",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[5]||(o[5]=a=>i.coupon.is_enabled=a),"true-value":1,"false-value":0},null,512),[[L,i.coupon.is_enabled]]),ae]),e("div",null,[e("button",{type:"submit",class:"btn btn-primary me-2",disabled:!n.valid},"確認更新",8,ie),e("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[6]||(o[6]=(...a)=>t.hideModal&&t.hideModal(...a))},"取消")])])]),_:1},8,["onSubmit"])])])],512)}const de=k(j,[["render",le]]),ce={mixins:[A],components:{AdminCouponModal:de,PaginationComponent:U},data(){return{tempCoupon:{}}},computed:{...E(y,["coupons","pagination"])},methods:{...$(y,["getCoupons","deleteCoupon","switchCouponStatus"]),openModal(t){this.tempCoupon=t?{...t}:{is_enabled:0,due_date:this.now()},this.$refs.couponModal.showModal()}},mounted(){this.getCoupons()}},re={class:"text-end mb-5"},ue=e("h3",{class:"fs-2 mb-3"},"優惠券",-1),pe={class:"alert bg-light flex-classic mb-5"},me={key:0,class:"table-responsive"},he={class:"table table-hover text-nowrap"},_e=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"到期"),e("th",{scope:"col",width:"50%"},"名稱"),e("th",{scope:"col",width:"15%",class:"text-end"},"折扣"),e("th",{scope:"col",width:"10%",class:"text-center"},"狀態"),e("th",{scope:"col",width:"15%",class:"text-center"},"處理")])],-1),be={class:"align-middle"},fe={class:"d-flex align-items-center gap-2"},ge={class:"badge bg-primary py-2"},ve={class:"text-end"},Ce={class:"text-center"},$e={class:"form-switch"},ye=["checked","onChange"],we={class:"text-center"},xe={class:"d-flex flex-column gap-2"},Ae=["onClick"],ke=["onClick"],Me={key:1,class:"alert bg-light"};function Se(t,o,s,v,i,c){const m=g("pagination-component"),C=g("admin-coupon-modal");return r(),u(x,null,[e("div",re,[ue,e("span",null,"目前共有 "+_(t.coupons.length)+" 張優惠券",1)]),e("div",pe,[e("div",null,[e("button",{type:"button",class:"btn btn-highlight",onClick:o[0]||(o[0]=n=>c.openModal())},"建立優惠券")]),p(m,{current:t.pagination.current_page,total:t.pagination.total_pages,onSwitchPage:t.getCoupons},null,8,["current","total","onSwitchPage"])]),t.coupons.length?(r(),u("div",me,[e("table",he,[_e,e("tbody",be,[(r(!0),u(x,null,T(t.coupons,n=>(r(),u("tr",{key:n.id},[e("td",null,_(t.formatDate(n.due_date*1e3,"/")),1),e("td",null,[e("div",fe,[e("span",null,_(n.title),1),e("span",ge,_(n.code),1)])]),e("td",ve,_(n.percent)+"％",1),e("td",Ce,[e("div",$e,[e("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:n.is_enabled,onChange:a=>t.switchCouponStatus(n)},null,40,ye)])]),e("td",we,[e("div",xe,[e("button",{type:"button",class:"w-100 btn btn-outline-secondary",onClick:a=>c.openModal(n)}," 編輯",8,Ae),e("button",{type:"button",class:"w-100 btn btn-outline-danger",onClick:a=>t.deleteCoupon(n)}," 刪除",8,ke)])])]))),128))])])])):(r(),u("div",Me,"還沒有任何優惠券！趕快建立一個吧！")),p(C,{ref:"couponModal","temp-coupon":i.tempCoupon},null,8,["temp-coupon"])],64)}const qe=k(ce,[["render",Se]]);export{qe as default};
