import{r as ce}from"./vue@3.4.19-bS3wBxtn.js";var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function le(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function pe(i){if(i.__esModule)return i;var v=i.default;if(typeof v=="function"){var f=function l(){return this instanceof l?Reflect.construct(v,arguments,this.constructor):v.apply(this,arguments)};f.prototype=v.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(i).forEach(function(l){var y=Object.getOwnPropertyDescriptor(i,l);Object.defineProperty(f,l,y.get?y:{enumerable:!0,get:function(){return i[l]}})}),f}var B={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(i,v){(function(f,l){i.exports=l(ce)})(self,f=>(()=>{var l={976:o=>{o.exports=f}},y={};function p(o){var a=y[o];if(a!==void 0)return a.exports;var c=y[o]={exports:{}};return l[o](c,c.exports,p),c.exports}p.d=(o,a)=>{for(var c in a)p.o(a,c)&&!p.o(o,c)&&Object.defineProperty(o,c,{enumerable:!0,get:a[c]})},p.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var V={};return(()=>{p.d(V,{default:()=>se});var o=p(976);const a=function(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")},c=typeof S=="object"&&S&&S.Object===Object&&S;var F=typeof self=="object"&&self&&self.Object===Object&&self;const R=c||F||Function("return this")(),$=function(){return R.Date.now()};var U=/\s/;const q=function(e){for(var t=e.length;t--&&U.test(e.charAt(t)););return t};var A=/^\s+/;const G=function(e){return e&&e.slice(0,q(e)+1).replace(A,"")},j=R.Symbol;var k=Object.prototype,z=k.hasOwnProperty,H=k.toString,b=j?j.toStringTag:void 0;const J=function(e){var t=z.call(e,b),n=e[b];try{e[b]=void 0;var u=!0}catch{}var m=H.call(e);return u&&(t?e[b]=n:delete e[b]),m};var L=Object.prototype.toString;const Q=function(e){return L.call(e)};var I=j?j.toStringTag:void 0;const X=function(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":I&&I in Object(e)?J(e):Q(e)},Y=function(e){return e!=null&&typeof e=="object"},Z=function(e){return typeof e=="symbol"||Y(e)&&X(e)=="[object Symbol]"};var ee=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,oe=parseInt;const M=function(e){if(typeof e=="number")return e;if(Z(e))return NaN;if(a(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=a(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=G(e);var n=te.test(e);return n||ne.test(e)?oe(e.slice(2),n?2:8):ee.test(e)?NaN:+e};var re=Math.max,ie=Math.min;const ae=function(e,t,n){var u,m,g,O,s,h,w=0,P=!1,E=!1,D=!0;if(typeof e!="function")throw new TypeError("Expected a function");function N(r){var d=u,x=m;return u=m=void 0,w=r,O=e.apply(x,d)}function ue(r){return w=r,s=setTimeout(T,t),P?N(r):O}function K(r){var d=r-h;return h===void 0||d>=t||d<0||E&&r-w>=g}function T(){var r=$();if(K(r))return W(r);s=setTimeout(T,function(d){var x=t-(d-h);return E?ie(x,g-(d-w)):x}(r))}function W(r){return s=void 0,D&&u?N(r):(u=m=void 0,O)}function C(){var r=$(),d=K(r);if(u=arguments,m=this,h=r,d){if(s===void 0)return ue(h);if(E)return clearTimeout(s),s=setTimeout(T,t),N(h)}return s===void 0&&(s=setTimeout(T,t)),O}return t=M(t)||0,a(n)&&(P=!!n.leading,g=(E="maxWait"in n)?re(M(n.maxWait)||0,t):g,D="trailing"in n?!!n.trailing:D),C.cancel=function(){s!==void 0&&clearTimeout(s),w=0,u=h=m=s=void 0},C.flush=function(){return s===void 0?O:W($())},C},_=(0,o.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(e){this.instance&&e!==this.lastEditorData&&this.instance.data.set(e)},disabled(e){e?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:e}=window;if(e){const[t]=e.split(".").map(Number);t<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const e=Object.assign({},this.config);this.modelValue&&(e.initialData=this.modelValue),this.editor.create(this.$el,e).then(t=>{this.instance=(0,o.markRaw)(t),this.setUpEditorEvents(),this.modelValue!==e.initialData&&t.data.set(this.modelValue),this.disabled&&t.enableReadOnlyMode("Integration Sample"),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const e=this.instance,t=ae(n=>{if(this.disableTwoWayDataBinding)return;const u=this.lastEditorData=e.data.get();this.$emit("update:modelValue",u,n,e),this.$emit("input",u,n,e)},300,{leading:!0});e.model.document.on("change:data",t),e.editing.view.document.on("focus",n=>{this.$emit("focus",n,e)}),e.editing.view.document.on("blur",n=>{this.$emit("blur",n,e)})}},render(){return(0,o.h)(this.tagName)}});if(!o.version||!o.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const se={install(e){e.component("Ckeditor",_)},component:_}})(),V=V.default})())})(B);var de=B.exports;const me=le(de);export{pe as a,me as b,S as c,le as g};
