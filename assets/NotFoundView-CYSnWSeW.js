import{n as c,m}from"./@vue_runtime-dom@3.4.19-Jk3xLe3-.js";import{_ as p}from"./index-TqJ5F-GX.js";import{A as d,Q as t,W as e,aJ as l,z as f,al as u,ak as h}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as g}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import"./@vue_reactivity@3.4.19-Ddpy7v_1.js";/* empty css                               */import"./pinia@2.1.7_vue@3.4.19-BGrtT45R.js";import"./vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import"./vee-validate@4.12.5_vue@3.4.19-BmIHdE2I.js";import"./@vee-validate_rules@4.12.5_vue@3.4.19-DqtB_02U.js";import"./@vee-validate_i18n@4.12.5-DXNnfMG0.js";import"./axios@1.6.7-Di5RpEPX.js";import"./vue-axios@3.5.2_axios@1.6.7_vue@3.4.19-BaogFJPH.js";import"./moment@2.30.1-Cl4UOzQZ.js";import"./vue-loading-overlay@6.0.4_vue@3.4.19-DaNcwJXO.js";import"./@ckeditor_ckeditor5-vue@5.1.0-BEtXLgA-.js";import"./vue@3.4.19-C3VIO2t_.js";import"./vue-router@4.2.5_vue@3.4.19-BBAnl9m5.js";const v={data(){return{isTransition:!0,count:10,timer:""}},methods:{go(){this.$router.go(-1)},onLoad(){this.isTransition=!1},countdown(){this.count-=1}},watch:{count(o){o===0&&(clearInterval(this.timer),this.go())}},mounted(){this.timer=setInterval(()=>this.countdown(),1e3)}},n=o=>(u("data-v-fa661051"),o=o(),h(),o),_={class:"bg h-100 d-flex flex-column justify-content-center align-items-center",style:{height:"100vh"}},b=n(()=>t("p",{class:"h1 mb-7"},"OOPS ...！沒有這個網址！",-1)),y={class:"mb-7"},D={class:"rembrandt"},F=n(()=>t("div",{class:"img-description d-flex justify-content-center fs-7"},[t("div",null,[e(" 這是林布蘭於 1630 年繪製的自畫像，畫中的他雙眼大張，表情逗趣"),t("br"),e(" 令人欽佩的是，這幅畫的原尺寸只有 5.1 cm × 4.5 cm 左右"),t("br"),e(" 他在比郵票還小的紙張上描繪出如此生動的圖畫 ")])],-1));function J(o,i,x,B,a,s){return f(),d("div",_,[b,t("p",y,[e(" 請稍候，"+g(a.count)+" 秒後將跳轉回上一頁，您也可以",1),t("a",{href:"#",class:"text-info",onClick:i[0]||(i[0]=c((...r)=>s.go&&s.go(...r),["prevent"]))},"直接跳轉")]),l(t("div",D,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/ataraxia/1709020880637.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RlRKLG%2F06bJtMDwvCxBpB91tS1DE5Gg9%2FLyUu9irrnJGRlK9SlrSgoIs6Oya6JEbIH9sJ0yGJbBL97DODf7ZdQ3VZ5F9iOf%2FGZyq7qvQFQFh6%2F3ut8fF4Cy9w31eMyf5jdZb8oocqwCqjlHDar9NKEUzQ7Jlib%2Bpc2%2Bhvi664V%2BJROJYj0SRdU1hzY0KAaEER8mzg7NHXOygcT2UPFsz0NcRfJvfPWa15gDbrydAUqszV35m0IYGqtqb%2BqFxHYBttT1NbiKvoM946eHhLpsh6X56FTX19P9diAo6G3Up2DUmKzf3O2vy7iy2tKkC2cbAt7JMVWUJMJ1%2FiDnaBDgMzA%3D%3D",alt:"Rembrandt's Portrait",onLoad:i[1]||(i[1]=(...r)=>s.onLoad&&s.onLoad(...r))},null,32),F],512),[[m,!a.isTransition]])])}const k=p(v,[["render",J],["__scopeId","data-v-fa661051"]]);export{k as default};
