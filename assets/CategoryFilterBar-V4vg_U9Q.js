import{_ as u}from"./index-C9QT1dNZ.js";import{z as r,A as s,Q as f,c as o,aH as l,W as c,F as w,ao as _,aq as m}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as d,n as h}from"./@vue_shared@3.4.19-Bk7MlA8B.js";const q={methods:{switchFilter(e){this.filter=e,this.currentPage=1},switchPage(e){this.currentPage=e}}},v={props:{filters:{required:!0},filter:{required:!0},totalTitle:{type:String,default:"全部"}},emits:["switch-filter"],data(){return{innerWidth:""}},methods:{switchFilter(e){this.$emit("switch-filter",e)},resizeWindow(e){this.innerWidth=e.target.innerWidth}},watch:{"$route.query.category":{handler(e){this.switchFilter(e||"")},deep:!0}},mounted(){this.innerWidth=window.innerWidth,window.addEventListener("resize",this.resizeWindow)},unmounted(){window.removeEventListener("resize",this.resizeWindow)}},p={class:"nav flex-nowrap"},W={class:"nav-item"};function g(e,k,t,y,n,z){const a=m("router-link");return r(),s("ul",p,[f("li",W,[o(a,{to:e.$route.path,class:h(["nav-link",{"nav-active":t.filter===""}])},{default:l(()=>[c(d(n.innerWidth>508?t.totalTitle:t.totalTitle.slice(0,2)),1)]),_:1},8,["to","class"])]),(r(!0),s(w,null,_(t.filters,i=>(r(),s("li",{key:i,class:"nav-item"},[o(a,{to:`${e.$route.path}?category=${i}`,class:h(["nav-link",{"nav-active":t.filter===i}])},{default:l(()=>[c(d(n.innerWidth>508?i:i.slice(0,2)),1)]),_:2},1032,["to","class"])]))),128))])}const B=u(v,[["render",g],["__scopeId","data-v-51e8aab4"]]);export{B as C,q as f};
