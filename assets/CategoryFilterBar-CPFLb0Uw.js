import{_ as u}from"./index-qANNvTn4.js";import{z as r,A as n,Q as f,c as o,aH as l,W as c,F as _,ao as m,aq as w}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{P as d,n as h}from"./@vue_shared@3.4.19-Bk7MlA8B.js";const v={props:{filters:{required:!0},filter:{required:!0},totalTitle:{type:String,default:"全部"}},emits:["switch-filter"],data(){return{innerWidth:""}},methods:{switchFilter(e){this.$emit("switch-filter",e)},resizeWindow(e){this.innerWidth=e.target.innerWidth}},watch:{"$route.query.category":{handler(e){this.switchFilter(e||"")},deep:!0}},mounted(){this.innerWidth=window.innerWidth,window.addEventListener("resize",this.resizeWindow)},unmounted(){window.removeEventListener("resize",this.resizeWindow)}},p={class:"nav flex-nowrap"},W={class:"nav-item"};function g(e,k,t,y,s,z){const a=w("router-link");return r(),n("ul",p,[f("li",W,[o(a,{to:e.$route.path,class:h(["nav-link",{"nav-active":t.filter===""}])},{default:l(()=>[c(d(s.innerWidth>508?t.totalTitle:t.totalTitle.slice(0,2)),1)]),_:1},8,["to","class"])]),(r(!0),n(_,null,m(t.filters,i=>(r(),n("li",{key:i,class:"nav-item"},[o(a,{to:`${e.$route.path}?category=${i}`,class:h(["nav-link",{"nav-active":t.filter===i}])},{default:l(()=>[c(d(s.innerWidth>508?i:i.slice(0,2)),1)]),_:2},1032,["to","class"])]))),128))])}const x=u(v,[["render",g],["__scopeId","data-v-51e8aab4"]]);export{x as C};