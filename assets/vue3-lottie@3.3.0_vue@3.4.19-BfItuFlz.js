import{L as v}from"./lottie-web@5.12.2-CU4Beet5.js";import{e as S,y as h,q as O,m as w,z as A,A as P}from"./@vue_runtime-core@3.4.19-CKRBtKAL.js";import{l as D}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{r as _}from"./@vue_reactivity@3.4.19-Ddpy7v_1.js";(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".lottie-animation-container{width:var(--lottie-animation-container-width);height:var(--lottie-animation-container-height);background-color:var(--lottie-animation-container-background-color);overflow:hidden;margin:var(--lottie-animation-margin)}.lottie-animation-container svg{transform:scale(var(--lottie-animation-scale))}")),document.head.appendChild(t)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();var j=Object.defineProperty,b=Object.defineProperties,E=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?j(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,H=(t,n)=>{for(var r in n||(n={}))L.call(n,r)&&c(t,r,n[r]);if(d)for(var r of d(n))C.call(n,r)&&c(t,r,n[r]);return t},B=(t,n)=>b(t,E(n)),m=function t(n,r){if(n===r)return!0;if(n&&r&&typeof n=="object"&&typeof r=="object"){if(n.constructor!==r.constructor)return!1;var a,e,l;if(Array.isArray(n)){if(a=n.length,a!=r.length)return!1;for(e=a;e--!==0;)if(!t(n[e],r[e]))return!1;return!0}if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(e of n.entries())if(!r.has(e[0]))return!1;for(e of n.entries())if(!t(e[1],r.get(e[0])))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(e of n.entries())if(!r.has(e[0]))return!1;return!0}if(ArrayBuffer.isView(n)&&ArrayBuffer.isView(r)){if(a=n.length,a!=r.length)return!1;for(e=a;e--!==0;)if(n[e]!==r[e])return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if(l=Object.keys(n),a=l.length,a!==Object.keys(r).length)return!1;for(e=a;e--!==0;)if(!Object.prototype.hasOwnProperty.call(r,l[e]))return!1;for(e=a;e--!==0;){var u=l[e];if(!t(n[u],r[u]))return!1}return!0}return n!==n&&r!==r};function f(t){var n,r,a;if(Array.isArray(t)){for(r=Array(n=t.length);n--;)r[n]=(a=t[n])&&typeof a=="object"?f(a):a;return r}if(Object.prototype.toString.call(t)==="[object Object]"){r={};for(n in t)n==="__proto__"?Object.defineProperty(r,n,{value:f(t[n]),configurable:!0,enumerable:!0,writable:!0}):r[n]=(a=t[n])&&typeof a=="object"?f(a):a;return r}return t}var k=(t,n)=>{const r=t.__vccOpts||t;for(const[a,e]of n)r[a]=e;return r};const N=S({props:{animationData:{type:Object,default:()=>({})},animationLink:{type:String,default:""},loop:{type:[Boolean,Number],default:!0},autoPlay:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},speed:{type:Number,default:1},delay:{type:Number,default:0},direction:{type:String,default:"forward"},pauseOnHover:{type:Boolean,default:!1},playOnHover:{type:Boolean,default:!1},backgroundColor:{type:String,default:"transparent"},pauseAnimation:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},scale:{type:Number,default:1},renderer:{type:String,default:"svg"},rendererSettings:{type:Object,default:()=>({})},assetsPath:{type:String,default:""}},emits:{onComplete:null,onLoopComplete:null,onEnterFrame:null,onSegmentStart:null,onAnimationLoaded:null},setup(t,{emit:n}){const r=_();let a,e=null,l=1;h(async()=>{if(r.value){if(t.animationLink!="")try{a=await(await fetch(t.animationLink)).json()}catch(o){console.error(o);return}else if(m(t.animationData,{})===!1)a=f(t.animationData);else throw new Error("You must provide either animationLink or animationData");u()}});const u=()=>{if(!r.value||!a)return;e==null||e.destroy(),e=null;let o=t.autoPlay,i=t.loop;t.playOnHover&&(o=!1),typeof i=="number"&&i>0&&(i=i-1),t.delay>0&&(o=!1);const s={container:r.value,renderer:t.renderer,loop:i,autoplay:o,animationData:a,assetsPath:t.assetsPath};m(t.rendererSettings,{})===!1&&(s.rendererSettings=t.rendererSettings),t.scale!==1&&(s.rendererSettings=B(H({},s.rendererSettings),{viewBoxOnly:!0})),e=v.loadAnimation(s),setTimeout(()=>{o=t.autoPlay,t.playOnHover?e==null||e.pause():o?e==null||e.play():e==null||e.pause(),n("onAnimationLoaded")},t.delay),e.setSpeed(t.speed),t.direction==="reverse"&&e.setDirection(-1),t.direction==="normal"&&e.setDirection(1),(t.pauseAnimation||t.playOnHover)&&e.pause(),e.addEventListener("loopComplete",()=>{t.direction==="alternate"&&(e==null||e.stop(),l=l===-1?1:-1,e==null||e.setDirection(l),e==null||e.play()),n("onLoopComplete")}),e.addEventListener("complete",()=>{n("onComplete")}),e.addEventListener("enterFrame",()=>{n("onEnterFrame")}),e.addEventListener("segmentStart",()=>{n("onSegmentStart")})},y=O(()=>{let o=t.width,i=t.height;return typeof t.width=="number"&&(o=`${t.width}px`),typeof t.height=="number"&&(i=`${t.height}px`),{"--lottie-animation-container-width":o,"--lottie-animation-container-height":i,"--lottie-animation-container-background-color":t.backgroundColor,"--lottie-animation-margin":t.noMargin?"0":"0 auto","--lottie-animation-scale":t.scale!=1?t.scale:""}}),p=()=>{e&&t.pauseOnHover&&e.pause(),e&&t.playOnHover&&e.play()},g=()=>{e&&t.pauseOnHover&&e.play(),e&&t.playOnHover&&e.pause()};return w(()=>t.pauseAnimation,()=>{if((t.pauseOnHover||t.playOnHover)&&t.pauseAnimation){console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");return}e&&(t.pauseAnimation?e.pause():e.play())}),{lottieAnimationContainer:r,hoverEnded:g,hoverStarted:p,getCurrentStyle:y,play:()=>{e&&e.play()},pause:()=>{e&&e.pause()},stop:()=>{e&&e.stop()},destroy:()=>{e&&e.destroy()},setSpeed:(o=1)=>{if(o<=0)throw new Error("Speed must be greater than 0");e&&e.setSpeed(o)},setDirection:o=>{e&&(o==="forward"?e.setDirection(1):o==="reverse"&&e.setDirection(-1))},goToAndStop:(o,i=!0)=>{e&&e.goToAndStop(o,i)},goToAndPlay:(o,i=!0)=>{e&&e.goToAndPlay(o,i)},playSegments:(o,i=!1)=>{e&&e.playSegments(o,i)},setSubFrame:(o=!0)=>{e&&e.setSubframe(o)},getDuration:(o=!0)=>{if(e)return e.getDuration(o)},updateDocumentData:(o,i=0)=>{e&&e.renderer.elements[i].updateDocumentData(o)}}}});function T(t,n,r,a,e,l){return A(),P("div",{ref:"lottieAnimationContainer",class:"lottie-animation-container",style:D(t.getCurrentStyle),onMouseenter:n[0]||(n[0]=(...u)=>t.hoverStarted&&t.hoverStarted(...u)),onMouseleave:n[1]||(n[1]=(...u)=>t.hoverEnded&&t.hoverEnded(...u))},null,36)}var X=k(N,[["render",T]]);export{X as V};
