import{h as re,B as ie,a as ae,w as ce,o as le,b as fe,n as Rt,c as Lt,d as ue,g as Z,F as xt,S as pe,e as de,u as he,f as me,i as ge,s as lt,r as ft,j as be,k as _e}from"./@vue_runtime-core@3.4.19-CzGklseq.js";import{c as g,J as U,y as O,K as V,b as Vt,k as K,e as I,a as Se,q as B,w as E,E as G,A as Ce,G as F,x as W,o as ye,D as Ee,r as Te,L as ve,M as Dt}from"./@vue_shared@3.4.19-Bk7MlA8B.js";import{t as we}from"./@vue_reactivity@3.4.19-Ddpy7v_1.js";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ae="http://www.w3.org/2000/svg",Me="http://www.w3.org/1998/Math/MathML",y=typeof document<"u"?document:null,ut=y&&y.createElement("template"),Pe={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e==="svg"?y.createElementNS(Ae,t):e==="mathml"?y.createElementNS(Me,t):y.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>y.createTextNode(t),createComment:t=>y.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>y.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,o,r){const i=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{ut.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=ut.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},S="transition",R="animation",P=Symbol("_vtc"),Ot=(t,{slots:e})=>re(ie,$t(t),e);Ot.displayName="Transition";const It={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ne=Ot.props=I({},ae,It),w=(t,e=[])=>{g(t)?t.forEach(n=>n(...e)):t&&t(...e)},pt=t=>t?g(t)?t.some(e=>e.length>1):t.length>1:!1;function $t(t){const e={};for(const f in t)f in It||(e[f]=t[f]);if(t.css===!1)return e;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=i,appearToClass:u=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,M=Re(o),Zt=M&&M[0],te=M&&M[1],{onBeforeEnter:et,onEnter:nt,onEnterCancelled:st,onLeave:ot,onLeaveCancelled:ee,onBeforeAppear:ne=et,onAppear:se=nt,onAppearCancelled:oe=st}=e,j=(f,h,v)=>{C(f,h?u:a),C(f,h?c:i),v&&v()},rt=(f,h)=>{f._isLeaving=!1,C(f,p),C(f,A),C(f,d),h&&h()},it=f=>(h,v)=>{const at=f?se:nt,ct=()=>j(h,f,v);w(at,[h,ct]),dt(()=>{C(h,f?l:r),b(h,f?u:a),pt(at)||ht(h,s,Zt,ct)})};return I(e,{onBeforeEnter(f){w(et,[f]),b(f,r),b(f,i)},onBeforeAppear(f){w(ne,[f]),b(f,l),b(f,c)},onEnter:it(!1),onAppear:it(!0),onLeave(f,h){f._isLeaving=!0;const v=()=>rt(f,h);b(f,p),Kt(),b(f,d),dt(()=>{f._isLeaving&&(C(f,p),b(f,A),pt(ot)||ht(f,s,te,v))}),w(ot,[f,v])},onEnterCancelled(f){j(f,!1),w(st,[f])},onAppearCancelled(f){j(f,!0),w(oe,[f])},onLeaveCancelled(f){rt(f),w(ee,[f])}})}function Re(t){if(t==null)return null;if(Se(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){return W(t)}function b(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[P]||(t[P]=new Set)).add(e)}function C(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[P];n&&(n.delete(e),n.size||(t[P]=void 0))}function dt(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Le=0;function ht(t,e,n,s){const o=t._endId=++Le,r=()=>{o===t._endId&&s()};if(n)return setTimeout(r,n);const{type:i,timeout:a,propCount:l}=Bt(t,e);if(!i)return s();const c=i+"end";let u=0;const p=()=>{t.removeEventListener(c,d),r()},d=A=>{A.target===t&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),t.addEventListener(c,d)}function Bt(t,e){const n=window.getComputedStyle(t),s=M=>(n[M]||"").split(", "),o=s(`${S}Delay`),r=s(`${S}Duration`),i=mt(o,r),a=s(`${R}Delay`),l=s(`${R}Duration`),c=mt(a,l);let u=null,p=0,d=0;e===S?i>0&&(u=S,p=i,d=r.length):e===R?c>0&&(u=R,p=c,d=l.length):(p=Math.max(i,c),u=p>0?i>c?S:R:null,d=u?u===S?r.length:l.length:0);const A=u===S&&/\b(transform|all)(,|$)/.test(s(`${S}Property`).toString());return{type:u,timeout:p,propCount:d,hasTransform:A}}function mt(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>gt(n)+gt(t[s])))}function gt(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kt(){return document.body.offsetHeight}function xe(t,e,n){const s=t[P];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const D=Symbol("_vod"),Ve={beforeMount(t,{value:e},{transition:n}){t[D]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):L(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e==!n&&(t.style.display===t[D]||!e)||(s?e?(s.beforeEnter(t),L(t,!0),s.enter(t)):s.leave(t,()=>{L(t,!1)}):L(t,e))},beforeUnmount(t,{value:e}){L(t,e)}};function L(t,e){t.style.display=e?t[D]:"none"}function De(){Ve.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Ft=Symbol("");function hn(t){const e=Z();if(!e)return;const n=e.ut=(o=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>J(r,o))},s=()=>{const o=t(e.proxy);X(e.subTree,o),n(o)};ce(s),le(()=>{const o=new MutationObserver(s);o.observe(e.subTree.el.parentNode,{childList:!0}),fe(()=>o.disconnect())})}function X(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{X(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)J(t.el,e);else if(t.type===xt)t.children.forEach(n=>X(n,e));else if(t.type===pe){let{el:n,anchor:s}=t;for(;n&&(J(n,e),n!==s);)n=n.nextSibling}}function J(t,e){if(t.nodeType===1){const n=t.style;let s="";for(const o in e)n.setProperty(`--${o}`,e[o]),s+=`--${o}: ${e[o]};`;n[Ft]=s}}const Oe=/(^|;)\s*display\s*:/;function Ie(t,e,n){const s=t.style,o=K(n),r=s.display;let i=!1;if(n&&!o){if(e&&!K(e))for(const a in e)n[a]==null&&Y(s,a,"");for(const a in n)a==="display"&&(i=!0),Y(s,a,n[a])}else if(o){if(e!==n){const a=s[Ft];a&&(n+=";"+a),s.cssText=n,i=Oe.test(n)}}else e&&t.removeAttribute("style");D in t&&(t[D]=i?s.display:"",s.display=r)}const bt=/\s*!important$/;function Y(t,e,n){if(g(n))n.forEach(s=>Y(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$e(t,e);bt.test(n)?t.setProperty(E(s),n.replace(bt,""),"important"):t[s]=n}}const _t=["Webkit","Moz","ms"],k={};function $e(t,e){const n=k[e];if(n)return n;let s=B(e);if(s!=="filter"&&s in t)return k[e]=s;s=Te(s);for(let o=0;o<_t.length;o++){const r=_t[o]+s;if(r in t)return k[e]=r}return e}const St="http://www.w3.org/1999/xlink";function Be(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(St,e.slice(6,e.length)):t.setAttributeNS(St,e,n);else{const r=ve(e);n==null||r&&!Dt(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ke(t,e,n,s,o,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,o,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Dt(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _(t,e,n,s){t.addEventListener(e,n,s)}function Fe(t,e,n,s){t.removeEventListener(e,n,s)}const Ct=Symbol("_vei");function He(t,e,n,s,o=null){const r=t[Ct]||(t[Ct]={}),i=r[e];if(s&&i)i.value=s;else{const[a,l]=Ue(e);if(s){const c=r[e]=qe(s,o);_(t,a,c,l)}else i&&(Fe(t,a,i,l),r[e]=void 0)}}const yt=/(?:Once|Passive|Capture)$/;function Ue(t){let e;if(yt.test(t)){e={};let s;for(;s=t.match(yt);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):E(t.slice(2)),e]}let z=0;const je=Promise.resolve(),Ge=()=>z||(je.then(()=>z=0),z=Date.now());function qe(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_e(ke(s,n.value),e,5,[s])};return n.value=t,n.attached=Ge(),n}function ke(t,e){if(g(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const Et=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ze=(t,e,n,s,o,r,i,a,l)=>{const c=o==="svg";e==="class"?xe(t,s,c):e==="style"?Ie(t,n,s):ye(e)?Ee(e)||He(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):We(t,e,s,c))?Ke(t,e,s,r,i,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Be(t,e,s,c))};function We(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Et(e)&&Vt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Et(e)&&K(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function Xe(t,e){const n=de(t);class s extends tt{constructor(r){super(n,r,e)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const mn=t=>Xe(t,fn),Je=typeof HTMLElement<"u"?HTMLElement:class{};class tt extends Je{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Rt(()=>{this._connected||(Pt(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const o of s)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(s,o=!1)=>{const{props:r,styles:i}=s;let a;if(r&&!g(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=W(this._props[l])),(a||(a=Object.create(null)))[B(l)]=!0)}this._numberProps=a,o&&this._resolveProps(s),this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=g(n)?n:Object.keys(n||{});for(const o of Object.keys(this))o[0]!=="_"&&s.includes(o)&&this._setProp(o,this[o],!0,!1);for(const o of s.map(B))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(r){this._setProp(o,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=B(e);this._numberProps&&this._numberProps[s]&&(n=W(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,o=!0){n!==this._props[e]&&(this._props[e]=n,o&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(E(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(E(e),n+""):n||this.removeAttribute(E(e))))}_update(){Pt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Lt(this._def,I({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,i)=>{this.dispatchEvent(new CustomEvent(r,{detail:i}))};n.emit=(r,...i)=>{s(r,i),E(r)!==r&&s(E(r),i)};let o=this;for(;o=o&&(o.parentNode||o.host);)if(o instanceof tt){n.parent=o._instance,n.provides=o._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function gn(t="$style"){{const e=Z();if(!e)return G;const n=e.type.__cssModules;if(!n)return G;const s=n[t];return s||G}}const Ht=new WeakMap,Ut=new WeakMap,H=Symbol("_moveCb"),Tt=Symbol("_enterCb"),jt={name:"TransitionGroup",props:I({},Ne,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Z(),s=he();let o,r;return me(()=>{if(!o.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!en(o[0].el,n.vnode.el,i))return;o.forEach(Qe),o.forEach(Ze);const a=o.filter(tn);Kt(),a.forEach(l=>{const c=l.el,u=c.style;b(c,i),u.transform=u.webkitTransform=u.transitionDuration="";const p=c[H]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",p),c[H]=null,C(c,i))};c.addEventListener("transitionend",p)})}),()=>{const i=we(t),a=$t(i);let l=i.tag||xt;o=r,r=e.default?ge(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&lt(u,ft(u,a,s,n))}if(o)for(let c=0;c<o.length;c++){const u=o[c];lt(u,ft(u,a,s,n)),Ht.set(u,u.el.getBoundingClientRect())}return Lt(l,null,r)}}},Ye=t=>delete t.mode;jt.props;const bn=jt;function Qe(t){const e=t.el;e[H]&&e[H](),e[Tt]&&e[Tt]()}function Ze(t){Ut.set(t,t.el.getBoundingClientRect())}function tn(t){const e=Ht.get(t),n=Ut.get(t),s=e.left-n.left,o=e.top-n.top;if(s||o){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",t}}function en(t,e,n){const s=t.cloneNode(),o=t[P];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Bt(s);return r.removeChild(s),i}const T=t=>{const e=t.props["onUpdate:modelValue"]||!1;return g(e)?n=>Ce(e,n):e};function nn(t){t.target.composing=!0}function vt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const m=Symbol("_assign"),Q={created(t,{modifiers:{lazy:e,trim:n,number:s}},o){t[m]=T(o);const r=s||o.props&&o.props.type==="number";_(t,e?"change":"input",i=>{if(i.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=F(a)),t[m](a)}),n&&_(t,"change",()=>{t.value=t.value.trim()}),e||(_(t,"compositionstart",nn),_(t,"compositionend",vt),_(t,"change",vt))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:o}},r){if(t[m]=T(r),t.composing)return;const i=o||t.type==="number"?F(t.value):t.value,a=e??"";i!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Gt={deep:!0,created(t,e,n){t[m]=T(n),_(t,"change",()=>{const s=t._modelValue,o=N(t),r=t.checked,i=t[m];if(g(s)){const a=U(s,o),l=a!==-1;if(r&&!l)i(s.concat(o));else if(!r&&l){const c=[...s];c.splice(a,1),i(c)}}else if(O(s)){const a=new Set(s);r?a.add(o):a.delete(o),i(a)}else i(kt(t,r))})},mounted:wt,beforeUpdate(t,e,n){t[m]=T(n),wt(t,e,n)}};function wt(t,{value:e,oldValue:n},s){t._modelValue=e,g(e)?t.checked=U(e,s.props.value)>-1:O(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=V(e,kt(t,!0)))}const qt={created(t,{value:e},n){t.checked=V(e,n.props.value),t[m]=T(n),_(t,"change",()=>{t[m](N(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[m]=T(s),e!==n&&(t.checked=V(e,s.props.value))}},sn={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=O(e);_(t,"change",()=>{const r=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?F(N(i)):N(i));t[m](t.multiple?o?new Set(r):r:r[0]),t._assigning=!0,Rt(()=>{t._assigning=!1})}),t[m]=T(s)},mounted(t,{value:e,oldValue:n,modifiers:{number:s}}){At(t,e,n,s)},beforeUpdate(t,e,n){t[m]=T(n)},updated(t,{value:e,oldValue:n,modifiers:{number:s}}){t._assigning||At(t,e,n,s)}};function At(t,e,n,s){const o=t.multiple,r=g(e);if(!(o&&!r&&!O(e))){for(let i=0,a=t.options.length;i<a;i++){const l=t.options[i],c=N(l);if(o)if(r){const u=typeof c;u==="string"||u==="number"?l.selected=e.includes(s?F(c):c):l.selected=U(e,c)>-1}else l.selected=e.has(c);else if(V(N(l),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!o&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function N(t){return"_value"in t?t._value:t.value}function kt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const on={created(t,e,n){$(t,e,n,null,"created")},mounted(t,e,n){$(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){$(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){$(t,e,n,s,"updated")}};function zt(t,e){switch(t){case"SELECT":return sn;case"TEXTAREA":return Q;default:switch(e){case"checkbox":return Gt;case"radio":return qt;default:return Q}}}function $(t,e,n,s,o){const i=zt(t.tagName,n.props&&n.props.type)[o];i&&i(t,e,n,s)}function rn(){Q.getSSRProps=({value:t})=>({value:t}),qt.getSSRProps=({value:t},e)=>{if(e.props&&V(e.props.value,t))return{checked:!0}},Gt.getSSRProps=({value:t},e)=>{if(g(t)){if(e.props&&U(t,e.props.value)>-1)return{checked:!0}}else if(O(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},on.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=zt(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const an=["ctrl","shift","alt","meta"],cn={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>an.some(n=>t[`${n}Key`]&&!e.includes(n))},_n=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(o,...r)=>{for(let i=0;i<e.length;i++){const a=cn[e[i]];if(a&&a(o,e))return}return t(o,...r)})},ln={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sn=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=o=>{if(!("key"in o))return;const r=E(o.key);if(e.some(i=>i===r||ln[i]===r))return t(o)})},Wt=I({patchProp:ze},Pe);let x,Mt=!1;function Xt(){return x||(x=ue(Wt))}function Jt(){return x=Mt?x:be(Wt),Mt=!0,x}const Pt=(...t)=>{Xt().render(...t)},fn=(...t)=>{Jt().hydrate(...t)},Cn=(...t)=>{const e=Xt().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=Qt(s);if(!o)return;const r=e._component;!Vt(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,Yt(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},e},yn=(...t)=>{const e=Jt().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=Qt(s);if(o)return n(o,!0,Yt(o))},e};function Yt(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qt(t){return K(t)?document.querySelector(t):t}let Nt=!1;const En=()=>{Nt||(Nt=!0,rn(),De())};export{Ot as T,tt as V,bn as a,yn as b,Cn as c,Xe as d,mn as e,hn as f,on as g,fn as h,En as i,qt as j,sn as k,Q as l,Ve as m,_n as n,Pt as r,gn as u,Gt as v,Sn as w};
