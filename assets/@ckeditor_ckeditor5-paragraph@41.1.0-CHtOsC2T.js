import{F as h}from"./@ckeditor_ckeditor5-utils@41.1.0-Cn-yVoWx.js";import{C as d,P as m}from"./@ckeditor_ckeditor5-core@41.1.0-D0yh88O_.js";import"./@ckeditor_ckeditor5-engine@41.1.0-CtehaBhy.js";import"./@ckeditor_ckeditor5-ui@41.1.0-CruSshla.js";import"./color-convert@2.0.1-DwB1f1Hp.js";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class p extends d{constructor(e){super(e),this._isEnabledBasedOnSelection=!1}refresh(){const e=this.editor.model,r=e.document,t=h(r.selection.getSelectedBlocks());this.value=!!t&&t.is("element","paragraph"),this.isEnabled=!!t&&l(t,e.schema)}execute(e={}){const r=this.editor.model,t=r.document,a=e.selection||t.selection;r.canEditAt(a)&&r.change(n=>{const s=a.getSelectedBlocks();for(const i of s)!i.is("element","paragraph")&&l(i,r.schema)&&n.rename(i,"paragraph")})}}function l(o,e){return e.checkChild(o.parent,"paragraph")&&!e.isObject(o)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class u extends d{constructor(e){super(e),this._isEnabledBasedOnSelection=!1}execute(e){const r=this.editor.model,t=e.attributes;let a=e.position;r.canEditAt(a)&&r.change(n=>{if(a=this._findPositionToInsertParagraph(a,n),!a)return;const s=n.createElement("paragraph");t&&r.schema.setAllowedAttributes(s,t,n),r.insertContent(s,a),n.setSelection(s,"in")})}_findPositionToInsertParagraph(e,r){const t=this.editor.model;if(t.schema.checkChild(e,"paragraph"))return e;const a=t.schema.findAllowedParent(e,"paragraph");if(!a)return null;const n=e.parent,s=t.schema.checkChild(n,"$text");return n.isEmpty||s&&e.isAtEnd?t.createPositionAfter(n):!n.isEmpty&&s&&e.isAtStart?t.createPositionBefore(n):r.split(e,a).position}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class c extends m{static get pluginName(){return"Paragraph"}init(){const e=this.editor,r=e.model;e.commands.add("paragraph",new p(e)),e.commands.add("insertParagraph",new u(e)),r.schema.register("paragraph",{inheritAllFrom:"$block"}),e.conversion.elementToElement({model:"paragraph",view:"p"}),e.conversion.for("upcast").elementToElement({model:(t,{writer:a})=>!c.paragraphLikeElements.has(t.name)||t.isEmpty?null:a.createElement("paragraph"),view:/.+/,converterPriority:"low"})}}c.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);export{c as P};