import{m as y,a as T}from"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import{l as S}from"./alert-BnylaycA.js";import{c as v}from"./userCart-C0T0fmij.js";import{s as N}from"./sleep-cat-CaUVF19w.js";import{m as k,l as E}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as L}from"./index-CWI1ysT5.js";import{A as a,Q as t,F as b,ao as q,aJ as f,c as u,aH as h,W as p,P as V,aq as g,z as c,al as I,ak as Q}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as l,n as D}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";import"./sweetalert2@11.10.5-Csd-Z1-j.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./axios@1.6.7-Di5RpEPX.js";/* empty css                               *//* empty css                          */import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./vue3-lottie@3.3.0_vue@3.4.19-B_fkVG75.js";import"./lottie-web@5.12.2-DrG9waUi.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";import"./aos@2.3.4-DSOO8Lb4.js";const P={data(){return{sleepCatJSON:N,couponCode:"",couponUsed:["text-decoration-line-through","text-secondary"],couponEditable:!0,timer:""}},computed:{...y(S,["loadingTask"]),...y(v,["carts","sum"]),couponLabelText(){return this.loadingTask?"套用中":this.carts[0].coupon&&!this.couponEditable?"已套用優惠券":"套用優惠券"}},watch:{carts:{handler(o){o.length&&o[0].coupon&&(this.couponCode=o[0].coupon.code,this.couponEditable=!1)},deep:!0}},methods:{...T(v,["getCarts","updateCart","deleteSingleCart","clearCart","useCoupon"]),checkCoupon(){this.couponEditable?this.couponEditable&&this.couponCode&&this.useCoupon(this.couponCode):this.couponEditable=!0},changeCartQty(o,e){const i=this.carts.find(C=>C.id===o);Number.isInteger(e)?e<=1?i.qty=1:i.qty=e:i.qty=Math.floor(e),this.timer&&clearTimeout(this.timer),e===0?this.deleteSingleCart(i,()=>this.updateCart(i,1)):this.timer=setTimeout(()=>this.updateCart(i,i.qty),500)}},mounted(){var o;this.getCarts(),(o=this.carts[0])!=null&&o.coupon&&(this.couponCode=this.carts[0].coupon.code)}},n=o=>(I("data-v-e3d52cfc"),o=o(),Q(),o),U={class:"d-flex justify-content-end mb-5"},j={class:"d-flex flex-column gap-3"},B={class:"row align-items-center g-3"},J={class:"col-xl-8 col-lg-7"},z={class:"row align-items-stretch gx-3"},A={class:"col-sm-4"},F={class:"cart-img-wrap h-100 overflow-hidden"},M=["src","alt"],O={class:"col-sm-8"},R={class:"cart-info h-100 bg-light px-3 py-5 mb-0 d-flex align-items-center"},H={class:"fs-7 text-muted"},W={class:"mb-0"},G={class:"col-xl-4 col-lg-5"},K={class:"flex-classic gap-3"},X={class:"input-group"},Y=["disabled","onClick"],Z=n(()=>t("i",{class:"bi bi-dash"},null,-1)),$=[Z],tt=["value","onChange"],ot=["onClick"],st=n(()=>t("i",{class:"bi bi-plus"},null,-1)),et=[st],nt={class:"w-75 text-end"},it={class:"mb-0"},lt={class:"position-absolute top-0 end-0"},at=["onClick"],ct=n(()=>t("i",{class:"bi bi-x-lg"},null,-1)),dt=[ct],rt={class:"py-5 border-bottom-dotted"},ut={class:"row justify-content-end gx-1 gy-5"},pt={class:"col-xl-4 col-lg-5"},_t={class:"input-group mb-5"},ht={for:"coupon",class:"input-group-text bg-primary text-white fw-bold"},mt={role:"status",class:"spinner-border spinner-border-sm me-2"},bt=n(()=>t("span",{class:"visually-hidden"},"Loading...",-1)),ft=[bt],gt=["disabled"],Ct=["disabled"],yt={key:0},vt=n(()=>t("b",null,"套用",-1)),kt=[vt],wt={key:1,class:"bi bi-arrow-repeat"},xt={class:"text-end mb-0"},Tt=n(()=>t("span",null,"沒有優惠券嗎？",-1)),St=n(()=>t("span",null,"來",-1)),Nt=n(()=>t("span",null,[t("b",null,"這裡")],-1)),Et=n(()=>t("span",null,"找找看吧！",-1)),Lt={class:"text-end py-5 border-bottom-dotted mb-5"},qt={key:0,class:"fs-7"},Vt={class:"text-danger"},It={class:"fs-5 mb-0"},Qt=n(()=>t("span",null,"總計：",-1)),Dt=n(()=>t("span",null,"NT＄ ",-1)),Pt={class:"flex-classic"},Ut=n(()=>t("span",null,[t("i",{class:"bi bi-caret-left-fill me-1"})],-1)),jt=n(()=>t("span",null,"繼續購物",-1)),Bt=[Ut,jt],Jt=["onClick"],zt=n(()=>t("span",null,"下一步",-1)),At=[zt],Ft={class:"alert bg-light text-center mb-0"};function Mt(o,e,i,C,d,r){const m=g("RouterLink"),w=g("router-link"),x=g("LottiePlayer");return o.carts.length?(c(),a(b,{key:0},[t("div",U,[t("button",{type:"button",class:"btn btn-outline-secondary rounded-1",onClick:e[0]||(e[0]=(...s)=>o.clearCart&&o.clearCart(...s))}," 清空購物車")]),t("div",j,[(c(!0),a(b,null,q(o.carts,s=>(c(),a("div",{key:s,class:"bg-white rounded-1 p-3 position-relative"},[t("div",B,[t("div",J,[t("div",z,[t("div",A,[t("div",F,[u(m,{target:"_blank",to:`/product/${s.product.id}`},{default:h(()=>[t("img",{class:"cart-img object-fit-cover",src:s.product.imageUrl,alt:s.product.title},null,8,M)]),_:2},1032,["to"])])]),t("div",O,[t("div",R,[t("div",null,[t("p",null,[t("b",null,l(s.product.title),1)]),t("p",H,[t("span",null,l(s.product.content),1)]),t("p",W,"單價 NT＄"+l(s.product.price),1)])])])])]),t("div",G,[t("div",K,[t("div",X,[t("button",{type:"button",class:"input-group-text btn btn-primary",disabled:s.qty<=0,onClick:_=>r.changeCartQty(s.id,s.qty-1)},$,8,Y),t("input",{type:"number",class:"form-control py-1 text-center",min:"1",value:s.qty,onChange:_=>r.changeCartQty(s.id,+_.target.value)},null,40,tt),t("button",{type:"button",class:"input-group-text btn btn-primary",onClick:_=>r.changeCartQty(s.id,s.qty+1)},et,8,ot)]),t("div",nt,[t("p",it,[t("b",null,"NT＄ "+l(s.total),1)])])])])]),t("div",lt,[t("button",{type:"button",class:"btn btn-sm btn-remove btn-primary rounded-1 shadow-sm",onClick:_=>o.deleteSingleCart(s)},dt,8,at)])]))),128))]),t("div",rt,[t("div",ut,[t("div",pt,[t("div",_t,[t("label",ht,[f(t("div",mt,ft,512),[[k,!!o.loadingTask]]),t("span",null,l(r.couponLabelText),1)]),f(t("input",{id:"coupon",type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>d.couponCode=s),disabled:o.loadingTask||!d.couponEditable},null,8,gt),[[E,d.couponCode,void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...s)=>r.checkCoupon&&r.checkCoupon(...s)),disabled:!!o.loadingTask},[d.couponEditable?(c(),a("span",yt,kt)):(c(),a("i",wt))],8,Ct)]),t("p",xt,[Tt,St,u(w,{target:"_blank",to:{path:"/news",query:{category:"優惠活動"}}},{default:h(()=>[Nt]),_:1}),Et])])])]),t("div",Lt,[o.carts[0].coupon?(c(),a("p",qt,[p(" 折扣了 "),t("span",Vt,l(o.sum.total-o.sum.finalTotal),1),p(" 元！ ")])):V("",!0),t("p",It,[Qt,Dt,t("span",{class:D(o.sum.finalTotal!==o.sum.total?d.couponUsed:"")},l(o.sum.total),3),f(t("span",{class:"ms-1"},l(o.sum.finalTotal),513),[[k,o.sum.finalTotal!==o.sum.total]])])]),t("div",Pt,[t("button",{type:"button",class:"btn btn-outline-primary rounded-1",onClick:e[3]||(e[3]=s=>o.$router.push("/products"))},Bt),u(m,{to:"/checkout/form",custom:""},{default:h(({navigate:s})=>[t("button",{type:"button",class:"btn btn-primary rounded-1",onClick:s},At,8,Jt)]),_:1})])],64)):(c(),a(b,{key:1},[t("div",Ft,[p(" 購物車空空如也！ 去"),u(m,{class:"text-info",to:"/products"},{default:h(()=>[p("逛逛")]),_:1}),p("吧！ ")]),u(x,{animationData:d.sleepCatJSON,height:250},null,8,["animationData"])],64))}const fo=L(P,[["render",Mt],["__scopeId","data-v-e3d52cfc"]]);export{fo as default};
