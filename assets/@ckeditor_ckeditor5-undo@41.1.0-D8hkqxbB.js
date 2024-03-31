import{C as g,P as u,i as m}from"./@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js";import"./@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js";import{t as _,N as B}from"./@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js";import{B as b}from"./@ckeditor_ckeditor5-ui@41.1.0-CaWR9jcj.js";import"./color-convert@2.0.1-DXsnUphg.js";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class f extends g{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this._isEnabledBasedOnSelection=!1,this.listenTo(t.data,"set",(o,e)=>{e[1]={...e[1]};const n=e[1];n.batchType||(n.batchType={isUndoable:!1})},{priority:"high"}),this.listenTo(t.data,"set",(o,e)=>{e[1].batchType.isUndoable||this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}get createdBatches(){return this._createdBatches}addBatch(t){const o=this.editor.model.document.selection,e={ranges:o.hasOwnRange?Array.from(o.getRanges()):[],isBackward:o.isBackward};this._stack.push({batch:t,selection:e}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,o,e){const n=this.editor.model,s=n.document,a=[],d=t.map(h=>h.getTransformedByOperations(e)),c=d.flat();for(const h of d){const l=h.filter(r=>r.root!=s.graveyard).filter(r=>!k(r,c));l.length&&(R(l),a.push(l[0]))}a.length&&n.change(h=>{h.setSelection(a,{backward:o})})}_undo(t,o){const e=this.editor.model,n=e.document;this._createdBatches.add(o);const s=t.operations.slice().filter(a=>a.isDocumentOperation);s.reverse();for(const a of s){const d=a.baseVersion+1,c=Array.from(n.history.getOperations(d)),l=_([a.getReversed()],c,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(let r of l){const p=r.affectedSelectable;p&&!e.canEditAt(p)&&(r=new B(r.baseVersion)),o.addOperation(r),e.applyOperation(r),n.history.setOperationAsUndone(a,r)}}}}function R(i){i.sort((t,o)=>t.start.isBefore(o.start)?-1:1);for(let t=1;t<i.length;t++){const e=i[t-1].getJoined(i[t],!0);e&&(t--,i.splice(t,2,e))}}function k(i,t){return t.some(o=>o!==i&&o.containsRange(i,!0))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class y extends f{execute(t=null){const o=t?this._stack.findIndex(s=>s.batch==t):this._stack.length-1,e=this._stack.splice(o,1)[0],n=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(n,()=>{this._undo(e.batch,n);const s=this.editor.model.document.history.getOperations(e.batch.baseVersion);this._restoreSelection(e.selection.ranges,e.selection.isBackward,s)}),this.fire("revert",e.batch,n),this.refresh()}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class C extends f{execute(){const t=this._stack.pop(),o=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(o,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,s=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,s),this._undo(t.batch,o)}),this.refresh()}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class U extends u{constructor(){super(...arguments),this._batchRegistry=new WeakSet}static get pluginName(){return"UndoEditing"}init(){const t=this.editor;this._undoCommand=new y(t),this._redoCommand=new C(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(o,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const s=n.batch,a=this._redoCommand.createdBatches.has(s),d=this._undoCommand.createdBatches.has(s);this._batchRegistry.has(s)||(this._batchRegistry.add(s),s.isUndoable&&(a?this._undoCommand.addBatch(s):d||(this._undoCommand.addBatch(s),this._redoCommand.clearStack())))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(o,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class O extends u{static get pluginName(){return"UndoUI"}init(){const t=this.editor,o=t.locale,e=t.t,n=o.uiLanguageDirection=="ltr"?m.undo:m.redo,s=o.uiLanguageDirection=="ltr"?m.redo:m.undo;this._addButton("undo",e("Undo"),"CTRL+Z",n),this._addButton("redo",e("Redo"),"CTRL+Y",s)}_addButton(t,o,e,n){const s=this.editor;s.ui.componentFactory.add(t,a=>{const d=s.commands.get(t),c=new b(a);return c.set({label:o,icon:n,keystroke:e,tooltip:!0}),c.bind("isEnabled").to(d,"isEnabled"),this.listenTo(c,"execute",()=>{s.execute(t),s.editing.view.focus()}),c})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class E extends u{static get requires(){return[U,O]}static get pluginName(){return"Undo"}}export{E as U};