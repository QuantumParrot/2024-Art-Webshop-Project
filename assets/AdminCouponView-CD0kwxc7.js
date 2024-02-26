import{c as A}from"./calculator-BHGMByDI.js";import{d as S,m as $,a as V}from"./pinia@2.1.7_vue@3.4.19-BaxWQ2Jo.js";import{a as h}from"./axios@1.6.7-Di5RpEPX.js";import{u as P,a as k}from"./alert--M56XNVX.js";import{m as L,P as E}from"./modal-uqB9x6Bz.js";import{l as T,v as q}from"./@vue_runtime-dom@3.4.19-DVfTC9pq.js";import{_ as M}from"./index-Aq6UGSbs.js";import{aj as r,O as p,P as e,c as u,aH as D,aJ as w,aq as g,F as x,ao as U}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{P as _}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-D1b63BCh.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BRsWHAsX.js";import"./vue@3.4.19-bS3wBxtn.js";import"./bootstrap@5.3.2_@popperjs_core@2.11.8-aNy9Y6fu.js";/* empty css                               */import"./vee-validate@4.12.5_vue@3.4.19-CIwtLcK9.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-CtCrC8gK.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-Cp1hpGuW.js";import"./vue-router@4.2.5_vue@3.4.19-CGkOaO3i.js";var I={VITE_APP_SITE:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ataraxia",BASE_URL:"/2024-Art-Webshop-Project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_SITE:f,VITE_APP_PATH:b}=I,l=P(),d=k(),y=S("adminCoupon",{state:()=>({coupons:[],pagination:{}}),actions:{getCoupons(t=1){l.createLoader("get-coupons"),h.get(`${f}/api/${b}/admin/coupons?page=${t}`).then(o=>{const{coupons:s,pagination:v}=o.data;this.coupons=s,this.pagination=v}).catch(o=>d.errorAlert(o)).finally(()=>l.removeLoader("get-coupons"))},createCoupon(t,o){l.createLoader("create-coupon"),h.post(`${f}/api/${b}/admin/coupon`,{data:t}).then(s=>{d.toastAlert(s.data.message,"success"),o(),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("create-coupon"))},updateCoupon(t,o){l.createLoader("update-coupon"),h.put(`${f}/api/${b}/admin/coupon/${t.id}`,{data:t}).then(s=>{d.toastAlert(s.data.message,"success"),o(),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("update-coupon"))},deleteCoupon(t){const o={title:"確定刪除優惠券？",text:`優惠券名稱：${t.title}`};d.checkAlert(o,()=>{l.createLoader("delete-coupon"),h.delete(`${f}/api/${b}/admin/coupon/${t.id}`).then(s=>{d.toastAlert(s.data.message,"success"),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("delete-coupon"))})},switchCouponStatus(t){const o=!!t.is_enabled;l.createLoader("switch-coupon-status"),h.put(`${f}/api/${b}/admin/coupon/${t.id}`,{data:{...t,is_enabled:o?0:1}}).then(()=>{d.toastAlert(`成功${o?"取消":"開啟"}優惠券`,"success"),this.getCoupons()}).catch(s=>d.errorAlert(s)).finally(()=>l.removeLoader("switch-coupon-status"))}}}),j={mixins:[L,A],data(){return{modal:"",coupon:{}}},props:["tempCoupon"],computed:{due_date:{get(){return this.formatDate(this.coupon.due_date*1e3)},set(t){this.coupon.due_date=new Date(t).getTime()/1e3}}},watch:{tempCoupon(){this.coupon=this.tempCoupon}},methods:{...$(y,["createCoupon","updateCoupon"]),...$(k,["toastAlert"]),confirmUpdate(){Object.values(this.coupon).every(o=>o)?this.coupon.id?this.updateCoupon(this.coupon,this.hideModal):this.createCoupon(this.coupon,this.hideModal):this.toastAlert("欄位不可空白！","warning")}},mounted(){this.coupon=this.tempCoupon}},B={class:"modal fade",tabindex:"-1",ref:"modal"},O={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content"},R={class:"modal-header justify-content-end"},F=e("i",{class:"bi bi-x-circle-fill"},null,-1),N=[F],J={class:"modal-body"},W={class:"mb-3"},z=e("label",{class:"form-label is-required",for:"title"},"優惠券名稱",-1),G={class:"mb-3"},K=e("label",{class:"form-label is-required",for:"code"},"優惠碼",-1),Q={class:"mb-3"},X=e("div",{class:"flex-classic mb-2"},[e("label",{class:"is-required",for:"percent"},"折扣"),e("span",{class:"fs-7 text-danger mb-0"},"必須是 1 ～ 100 之間的整數")],-1),Y={class:"input-group"},Z=e("span",{class:"input-group-text"},"％",-1),ee={class:"mb-3"},te=e("label",{class:"form-label is-required",for:"due_date"}," 優惠截止日期",-1),oe=["min"],se={class:"modal-footer justify-content-between align-items-center"},ne={class:"form-check"},ae=e("label",{class:"form-label",for:"is_enabled"}," 是否啟用",-1),ie=["disabled"];function le(t,o,s,v,i,c){const m=g("v-field"),C=g("v-form");return r(),p("div",B,[e("div",O,[e("div",H,[e("div",R,[e("button",{type:"button",class:"btn border-0 p-0 fs-4",onClick:o[0]||(o[0]=(...n)=>t.hideModal&&t.hideModal(...n))},N)]),u(C,{onSubmit:c.confirmUpdate},{default:D(({meta:n})=>[e("div",J,[e("div",W,[z,u(m,{id:"title",type:"text",class:"form-control",modelValue:i.coupon.title,"onUpdate:modelValue":o[1]||(o[1]=a=>i.coupon.title=a),modelModifiers:{trim:!0},name:"title",rules:"required"},null,8,["modelValue"])]),e("div",G,[K,u(m,{id:"code",type:"text",class:"form-control",modelValue:i.coupon.code,"onUpdate:modelValue":o[2]||(o[2]=a=>i.coupon.code=a),modelModifiers:{trim:!0},name:"code",rules:"required"},null,8,["modelValue"])]),e("div",Q,[X,e("div",Y,[u(m,{id:"percent",type:"number",min:"1",max:"100",class:"form-control",modelValue:i.coupon.percent,"onUpdate:modelValue":o[3]||(o[3]=a=>i.coupon.percent=a),modelModifiers:{number:!0},name:"percent",rules:"required|integer|min_value:1|max_value:100"},null,8,["modelValue"]),Z])]),e("div",ee,[te,w(e("input",{id:"due_date",type:"date",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=a=>c.due_date=a),min:t.today()},null,8,oe),[[T,c.due_date]])])]),e("div",se,[e("div",ne,[w(e("input",{id:"is_enabled",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[5]||(o[5]=a=>i.coupon.is_enabled=a),"true-value":1,"false-value":0},null,512),[[q,i.coupon.is_enabled]]),ae]),e("div",null,[e("button",{type:"submit",class:"btn btn-primary me-2",disabled:!n.valid},"確認更新",8,ie),e("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[6]||(o[6]=(...a)=>t.hideModal&&t.hideModal(...a))},"取消")])])]),_:1},8,["onSubmit"])])])],512)}const de=M(j,[["render",le]]),ce={mixins:[A],components:{AdminCouponModal:de,PaginationComponent:E},data(){return{tempCoupon:{}}},computed:{...V(y,["coupons","pagination"])},methods:{...$(y,["getCoupons","deleteCoupon","switchCouponStatus"]),openModal(t){this.tempCoupon=t?{...t}:{is_enabled:0,due_date:this.now()},this.$refs.couponModal.showModal()}},mounted(){this.getCoupons()}},re={class:"text-end mb-7"},pe=e("h3",{class:"fs-2 mb-2"},"優惠券",-1),ue={class:"alert bg-light flex-classic mb-5"},me={key:0,class:"table-responsive"},he={class:"table table-hover text-nowrap"},_e=e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"10%"},"到期"),e("th",{scope:"col",width:"50%"},"名稱"),e("th",{scope:"col",width:"15%",class:"text-end"},"折扣"),e("th",{scope:"col",width:"10%",class:"text-center"},"狀態"),e("th",{scope:"col",width:"15%",class:"text-center"},"處理")])],-1),fe={class:"align-middle"},be={class:"d-flex align-items-center gap-2"},ge={class:"badge bg-primary py-2"},ve={class:"text-end"},Ce={class:"text-center"},$e={class:"form-switch"},ye=["checked","onChange"],we={class:"text-center"},xe={class:"d-flex flex-column gap-2"},Ae=["onClick"],ke=["onClick"],Me={key:1,class:"alert bg-light"};function Se(t,o,s,v,i,c){const m=g("pagination-component"),C=g("admin-coupon-modal");return r(),p(x,null,[e("div",re,[pe,e("span",null,"目前共有 "+_(t.coupons.length)+" 張優惠券",1)]),e("div",ue,[e("div",null,[e("button",{type:"button",class:"btn btn-highlight",onClick:o[0]||(o[0]=n=>c.openModal())},"建立優惠券")]),u(m,{current:t.pagination.current_page,total:t.pagination.total_pages,onSwitchPage:t.getCoupons},null,8,["current","total","onSwitchPage"])]),t.coupons.length?(r(),p("div",me,[e("table",he,[_e,e("tbody",fe,[(r(!0),p(x,null,U(t.coupons,n=>(r(),p("tr",{key:n.id},[e("td",null,_(t.formatDate(n.due_date*1e3,"/")),1),e("td",null,[e("div",be,[e("span",null,_(n.title),1),e("span",ge,_(n.code),1)])]),e("td",ve,_(n.percent)+"％",1),e("td",Ce,[e("div",$e,[e("input",{type:"checkbox",role:"switch",class:"form-check-input",checked:n.is_enabled,onChange:a=>t.switchCouponStatus(n)},null,40,ye)])]),e("td",we,[e("div",xe,[e("button",{type:"button",class:"w-100 btn btn-outline-secondary",onClick:a=>c.openModal(n)}," 編輯",8,Ae),e("button",{type:"button",class:"w-100 btn btn-outline-danger",onClick:a=>t.deleteCoupon(n)}," 刪除",8,ke)])])]))),128))])])])):(r(),p("div",Me,"還沒有任何優惠券！趕快建立一個吧！")),u(C,{ref:"couponModal","temp-coupon":i.tempCoupon},null,8,["temp-coupon"])],64)}const Ye=M(ce,[["render",Se]]);export{Ye as default};
