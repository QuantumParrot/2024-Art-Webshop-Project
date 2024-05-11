import{C as I,P as S}from"./@ckeditor_ckeditor5-core@41.1.0-FknGk_Vk.js";import{e as C,E as N,p as q,q as _,Q as U,S as j,T as $,O as K}from"./@ckeditor_ckeditor5-utils@41.1.0-D1rfIdEO.js";import{O as L,F as z,d as k,B as M,M as H}from"./@ckeditor_ckeditor5-engine@41.1.0-B08yYX20.js";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class G{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(n,s)=>{s.isLocal&&s.isUndoable&&s!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){(!this.isLocked||e)&&(this._batch=null,this._size=0)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Y extends I{constructor(e,t){super(e),this._buffer=new G(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,n=t.document,s=e.text||"",i=s.length;let r=n.selection;if(e.selection?r=e.selection:e.range&&(r=t.createSelection(e.range)),!t.canEditAt(r))return;const o=e.resultRange;t.enqueueChange(this._buffer.batch,a=>{this._buffer.lock();const l=Array.from(n.selection.getAttributes());t.deleteContent(r),s&&t.insertContent(a.createText(s,l),r),o?a.setSelection(o):r.is("documentSelection")||a.setSelection(r),this._buffer.unlock(),this._buffer.input(i)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const R=["insertText","insertReplacementText"];class V extends L{constructor(e){super(e),this.focusObserver=e.getObserver(z),C.isAndroid&&R.push("insertCompositionText");const t=e.document;t.on("beforeinput",(n,s)=>{if(!this.isEnabled)return;const{data:i,targetRanges:r,inputType:o,domEvent:a}=s;if(!R.includes(o))return;this.focusObserver.flush();const l=new N(t,"insertText");t.fire(l,new k(e,a,{text:i,selection:e.createSelection(r)})),l.stop.called&&n.stop()}),t.on("compositionend",(n,{data:s,domEvent:i})=>{!this.isEnabled||C.isAndroid||s&&t.fire("insertText",new k(e,i,{text:s,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Q extends S{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,n=e.editing.view,s=t.document.selection;n.addObserver(V);const i=new Y(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",i),e.commands.add("input",i),this.listenTo(n.document,"insertText",(r,o)=>{n.document.isComposing||o.preventDefault();const{text:a,selection:l,resultRange:d}=o,u=Array.from(l.getRanges()).map(f=>e.editing.mapper.toModelRange(f));let h=a;if(C.isAndroid){const f=Array.from(u[0].getItems()).reduce((w,A)=>w+(A.is("$textProxy")?A.data:""),"");f&&(f.length<=h.length?h.startsWith(f)&&(h=h.substring(f.length),u[0].start=u[0].start.getShiftedBy(f.length)):f.startsWith(h)&&(u[0].start=u[0].start.getShiftedBy(h.length),h=""))}const p={text:h,selection:t.createSelection(u)};d&&(p.resultRange=e.editing.mapper.toModelRange(d)),e.execute("insertText",p),n.scrollToTheSelection()}),C.isAndroid?this.listenTo(n.document,"keydown",(r,o)=>{s.isCollapsed||o.keyCode!=229||!n.document.isComposing||B(t,i)}):this.listenTo(n.document,"compositionstart",()=>{s.isCollapsed||B(t,i)})}}function B(c,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),c.enqueueChange(t.batch,()=>{c.deleteContent(c.document.selection)}),t.unlock()}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class D extends I{constructor(e,t){super(e),this.direction=t,this._buffer=new G(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,s=>{this._buffer.lock();const i=s.createSelection(e.selection||n.selection);if(!t.canEditAt(i))return;const r=e.sequence||1,o=i.isCollapsed;if(i.isCollapsed&&t.modifySelection(i,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(r)){this._replaceEntireContentWithParagraph(s);return}if(this._shouldReplaceFirstBlockWithParagraph(i,r)){this.editor.execute("paragraph",{selection:i});return}if(i.isCollapsed)return;let a=0;i.getFirstRange().getMinimalFlatRanges().forEach(l=>{a+=q(l.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(i,{doNotResetEntireContent:o,direction:this.direction}),this._buffer.input(a),s.setSelection(i),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,s=t.document.selection,i=t.schema.getLimitElement(s);if(!(s.isCollapsed&&s.containsEntireContent(i))||!t.schema.checkChild(i,"paragraph"))return!1;const o=i.getChild(0);return!(o&&o.is("element","paragraph"))}_replaceEntireContentWithParagraph(e){const t=this.editor.model,s=t.document.selection,i=t.schema.getLimitElement(s),r=e.createElement("paragraph");e.remove(e.createRangeIn(i)),e.insert(r,i),e.setSelection(r,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const n=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const s=e.getFirstPosition(),i=n.schema.getLimitElement(s),r=i.getChild(0);return!(s.parent!=r||!e.containsEntireContent(r)||!n.schema.checkChild(i,"paragraph")||r.name=="paragraph")}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const J="character",O="word",X="codePoint",b="selection",v="backward",T="forward",W={deleteContent:{unit:b,direction:v},deleteContentBackward:{unit:X,direction:v},deleteWordBackward:{unit:O,direction:v},deleteHardLineBackward:{unit:b,direction:v},deleteSoftLineBackward:{unit:b,direction:v},deleteContentForward:{unit:J,direction:T},deleteWordForward:{unit:O,direction:T},deleteHardLineForward:{unit:b,direction:T},deleteSoftLineForward:{unit:b,direction:T}};class Z extends L{constructor(e){super(e);const t=e.document;let n=0;t.on("keydown",()=>{n++}),t.on("keyup",()=>{n=0}),t.on("beforeinput",(s,i)=>{if(!this.isEnabled)return;const{targetRanges:r,domEvent:o,inputType:a}=i,l=W[a];if(!l)return;const d={direction:l.direction,unit:l.unit,sequence:n};d.unit==b&&(d.selectionToRemove=e.createSelection(r[0])),a==="deleteContentBackward"&&(C.isAndroid&&(d.sequence=1),te(r)&&(d.unit=b,d.selectionToRemove=e.createSelection(r)));const u=new M(t,"delete",r[0]);t.fire(u,new k(e,o,d)),u.stop.called&&s.stop()}),C.isBlink&&ee(this)}observe(){}stopObserving(){}}function ee(c){const e=c.view,t=e.document;let n=null,s=!1;t.on("keydown",(o,{keyCode:a})=>{n=a,s=!1}),t.on("keyup",(o,{keyCode:a,domEvent:l})=>{const d=t.selection,u=c.isEnabled&&a==n&&i(a)&&!d.isCollapsed&&!s;if(n=null,u){const h=d.getFirstRange(),p=new M(t,"delete",h),f={unit:b,direction:r(a),selectionToRemove:d};t.fire(p,new k(e,l,f))}}),t.on("beforeinput",(o,{inputType:a})=>{const l=W[a];i(n)&&l&&l.direction==r(n)&&(s=!0)},{priority:"high"}),t.on("beforeinput",(o,{inputType:a,data:l})=>{n==_.delete&&a=="insertText"&&l==""&&o.stop()},{priority:"high"});function i(o){return o==_.backspace||o==_.delete}function r(o){return o==_.backspace?v:T}}function te(c){if(c.length!=1||c[0].isCollapsed)return!1;const e=c[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let t=0;for(const{nextPosition:n}of e){if(!n.parent.is("$text"))t++;else{const s=n.parent.data,i=n.offset;if(U(s,i)||j(s,i)||$(s,i))continue;t++}if(t>1)return!0}return!1}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ie extends S{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,n=t.document,s=e.model.document;t.addObserver(Z),this._undoOnBackspace=!1;const i=new D(e,"forward");e.commands.add("deleteForward",i),e.commands.add("forwardDelete",i),e.commands.add("delete",new D(e,"backward")),this.listenTo(n,"delete",(r,o)=>{n.isComposing||o.preventDefault();const{direction:a,sequence:l,selectionToRemove:d,unit:u}=o,h=a==="forward"?"deleteForward":"delete",p={sequence:l};if(u=="selection"){const f=Array.from(d.getRanges()).map(w=>e.editing.mapper.toModelRange(w));p.selection=e.model.createSelection(f)}else p.unit=u;e.execute(h,p),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(r,o)=>{this._undoOnBackspace&&o.direction=="backward"&&o.sequence==1&&o.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),o.preventDefault(),r.stop())},{context:"$capture"}),this.listenTo(s,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ae extends S{static get requires(){return[Q,ie]}static get pluginName(){return"Typing"}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function ne(c,e){let t=c.start;return{text:Array.from(c.getWalker({ignoreElementEnd:!1})).reduce((s,{item:i})=>i.is("$text")||i.is("$textProxy")?s+i.data:(t=e.createPositionAfter(i),""),""),range:e.createRange(t,c.end)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class le extends K(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const t=this.model.document;this.listenTo(t.selection,"change:range",(n,{directChange:s})=>{if(s){if(!t.selection.isCollapsed){this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1);return}this._evaluateTextBeforeSelection("selection")}}),this.listenTo(t,"change:data",(n,s)=>{s.isUndo||!s.isLocal||this._evaluateTextBeforeSelection("data",{batch:s})})}_evaluateTextBeforeSelection(e,t={}){const n=this.model,i=n.document.selection,r=n.createRange(n.createPositionAt(i.focus.parent,0),i.focus),{text:o,range:a}=ne(r,n),l=this.testCallback(o);if(!l&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!l,l){const d=Object.assign(t,{text:o,range:a});typeof l=="object"&&Object.assign(d,l),this.fire(`matched:${e}`,d)}}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class de extends S{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this._isNextGravityRestorationSkipped=!1,this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,n=e.editing.view,s=e.locale,i=t.document.selection;this.listenTo(n.document,"arrowKey",(r,o)=>{if(!i.isCollapsed||o.shiftKey||o.altKey||o.ctrlKey)return;const a=o.keyCode==_.arrowright,l=o.keyCode==_.arrowleft;if(!a&&!l)return;const d=s.contentLanguageDirection;let u=!1;d==="ltr"&&a||d==="rtl"&&l?u=this._handleForwardMovement(o):u=this._handleBackwardMovement(o),u===!0&&r.stop()},{context:"$text",priority:"highest"}),this.listenTo(i,"change:range",(r,o)=>{if(this._isNextGravityRestorationSkipped){this._isNextGravityRestorationSkipped=!1;return}this._isGravityOverridden&&(!o.directChange&&g(i.getFirstPosition(),this.attributes)||this._restoreGravity())}),this._enableClickingAfterNode(),this._enableInsertContentSelectionAttributesFixer(),this._handleDeleteContentAfterNode()}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,n=this.editor.model,s=n.document.selection,i=s.getFirstPosition();return this._isGravityOverridden||i.isAtStart&&m(s,t)?!1:g(i,t)?(y(e),m(s,t)&&g(i,t,!0)?E(n,t):this._overrideGravity(),!0):!1}_handleBackwardMovement(e){const t=this.attributes,n=this.editor.model,s=n.document.selection,i=s.getFirstPosition();return this._isGravityOverridden?(y(e),this._restoreGravity(),g(i,t,!0)?E(n,t):x(n,t,i),!0):i.isAtStart?m(s,t)?(y(e),x(n,t,i),!0):!1:!m(s,t)&&g(i,t,!0)?(y(e),x(n,t,i),!0):P(i,t)?i.isAtEnd&&!m(s,t)&&g(i,t)?(y(e),x(n,t,i),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):!1}_enableClickingAfterNode(){const e=this.editor,t=e.model,n=t.document.selection,s=e.editing.view.document;e.editing.view.addObserver(H);let i=!1;this.listenTo(s,"mousedown",()=>{i=!0}),this.listenTo(s,"selectionChange",()=>{const r=this.attributes;if(!i||(i=!1,!n.isCollapsed)||!m(n,r))return;const o=n.getFirstPosition();g(o,r)&&(o.isAtStart||g(o,r,!0)?E(t,r):this._isGravityOverridden||this._overrideGravity())})}_enableInsertContentSelectionAttributesFixer(){const t=this.editor.model,n=t.document.selection,s=this.attributes;this.listenTo(t,"insertContent",()=>{const i=n.getFirstPosition();m(n,s)&&g(i,s)&&E(t,s)},{priority:"low"})}_handleDeleteContentAfterNode(){const e=this.editor,t=e.model,n=t.document.selection,s=e.editing.view;let i=!1,r=!1;this.listenTo(s.document,"delete",(o,a)=>{i=a.direction==="backward"},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{if(!i)return;const o=n.getFirstPosition();r=m(n,this.attributes)&&!P(o,this.attributes)},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{i&&(i=!1,!r&&e.model.enqueueChange(()=>{const o=n.getFirstPosition();m(n,this.attributes)&&g(o,this.attributes)&&(o.isAtStart||g(o,this.attributes,!0)?E(t,this.attributes):this._isGravityOverridden||this._overrideGravity())}))},{priority:"low"})}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function m(c,e){for(const t of e)if(c.hasAttribute(t))return!0;return!1}function x(c,e,t){const n=t.nodeBefore;c.change(s=>{if(n){const i=[],r=c.schema.isObject(n)&&c.schema.isInline(n);for(const[o,a]of n.getAttributes())c.schema.checkAttribute("$text",o)&&(!r||c.schema.getAttributeProperties(o).copyFromObject!==!1)&&i.push([o,a]);s.setSelectionAttribute(i)}else s.removeSelectionAttribute(e)})}function E(c,e){c.change(t=>{t.removeSelectionAttribute(e)})}function y(c){c.preventDefault()}function P(c,e){const t=c.getShiftedBy(-1);return g(t,e)}function g(c,e,t=!1){const{nodeBefore:n,nodeAfter:s}=c;for(const i of e){const r=n?n.getAttribute(i):void 0,o=s?s.getAttribute(i):void 0;if(!(t&&(r===void 0||o===void 0))&&o!==r)return!0}return!1}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function se(c,e,t,n){return n.createRange(F(c,e,t,!0,n),F(c,e,t,!1,n))}function F(c,e,t,n,s){let i=c.textNode||(n?c.nodeBefore:c.nodeAfter),r=null;for(;i&&i.getAttribute(e)==t;)r=i,i=n?i.previousSibling:i.nextSibling;return r?s.createPositionAt(r,n?"before":"after"):c}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function ue(c,e,t,n){const s=c.editing.view,i=new Set;s.document.registerPostFixer(r=>{const o=c.model.document.selection;let a=!1;if(o.hasAttribute(e)){const l=se(o.getFirstPosition(),e,o.getAttribute(e),c.model),d=c.editing.mapper.toViewRange(l);for(const u of d.getItems())u.is("element",t)&&!u.hasClass(n)&&(r.addClass(n,u),i.add(u),a=!0)}return a}),c.conversion.for("editingDowncast").add(r=>{r.on("insert",o,{priority:"highest"}),r.on("remove",o,{priority:"highest"}),r.on("attribute",o,{priority:"highest"}),r.on("selection",o,{priority:"highest"});function o(){s.change(a=>{for(const l of i.values())a.removeClass(n,l),i.delete(l)})}})}export{ie as D,Q as I,ae as T,de as a,le as b,se as f,ne as g,ue as i};