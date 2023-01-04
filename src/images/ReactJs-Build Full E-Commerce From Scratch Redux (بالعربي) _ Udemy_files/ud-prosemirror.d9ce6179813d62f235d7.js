(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ud-prosemirror"],{"./src/udemy/js/ud-prosemirror/index.js":function(e,t,r){"use strict";r.r(t);var n={};r.r(n);r.d(n,"RichTextSerializer",(function(){return u}));r.d(n,"PlainTextSerializer",(function(){return f}));r.d(n,"overrideDoc",(function(){return d}));r.d(n,"selectBetween",(function(){return p}));r.d(n,"setCursorAndFocus",(function(){return m}));r.d(n,"isMarkActive",(function(){return h}));r.d(n,"getAnchorSelectionRange",(function(){return g}));r.d(n,"parseAnchorForm",(function(){return E}));r.d(n,"parseImageEditor",(function(){return O}));r.d(n,"getCodeBlockRange",(function(){return _}));r.d(n,"isSelectionInCodeBlock",(function(){return A}));r.d(n,"getTextWithNormalizedNewlines",(function(){return T}));r.d(n,"getTextWithNormalizedNewlinesFromDOMNode",(function(){return M}));r.d(n,"parseTextDirection",(function(){return b}));r.d(n,"applyHackToPreserveEmptyLines",(function(){return S}));r.d(n,"applyHackToPreserveWhitespace",(function(){return k}));var o=r("./node_modules/prosemirror-model/dist/index.js");var s=r("./node_modules/prosemirror-state/dist/index.js");var i=r("./src/udemy/js/base-components/ungraduated/form/rich-text-editor/constants.js");var c=r("./src/udemy/js/base-components/ungraduated/form/rich-text-editor/helpers.js");function a(e,t){const r=o["DOMParser"].fromSchema(e);r.parseSlice=function t(r,n){const s=o["DOMParser"].prototype.parseSlice.call(this,r,n);let i=s.content;s.content.forEach(((t,r,n)=>{if(t.type===e.nodes.hard_break){const t=e.nodes.paragraph.create();i=i.replaceChild(n,t)}}));return o["Slice"].maxOpen(i)};r.parseClipboardText=function e(t,n){const o=Object(c["b"])().createElement("div");t.split(/\r\n?|\n/).forEach((e=>{const t=Object(c["b"])().createElement("p");t.textContent=e;o.appendChild(t)}));return r.parseSlice(o,{preserveWhitespace:true,context:n})};r.transformPastedHTML=function r(n){const o=Object(c["b"])().createElement("div");o.innerHTML=n;if(t==="PLAIN_TEXT"){const e=M(o);o.innerHTML=e.split("\n").map((e=>{const t=Object(c["b"])().createElement("p");t.style.whiteSpace="pre";t.textContent=e;return t.outerHTML})).join("")}else{const t=!!e.nodes.code_block;const r=(e,t)=>{const r=Object(c["b"])().createElement("pre");r.textContent=t;e.parentNode.replaceChild(r,e)};const n=(e,t)=>{const r=e.parentNode;t.split("\n").forEach((t=>{const n=Object(c["b"])().createElement("p");n.style.whiteSpace="pre";n.textContent=t;r.insertBefore(n,e)}));r.removeChild(e)};Array.from(o.querySelectorAll("pre")).forEach((e=>{const r=M(e);e.textContent=r;if(!t){n(e,r)}}));Array.from(o.querySelectorAll("div")).filter((e=>e.style.whiteSpace==="pre")).forEach((e=>{const o=M(e);t?r(e,o):n(e,o)}))}return o.innerHTML};return r}function l(e){const t=o["DOMSerializer"].fromSchema(e);t.serializeNode=function e(t){let r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(t.type.name==="code_block"){return o["DOMSerializer"].prototype.serializeNode.call(this,t,{...r,skipPreserveWhitespaceHack:true})}if(t.isText&&!r.skipPreserveWhitespaceHack){t=k(t)}const n=o["DOMSerializer"].prototype.serializeNode.call(this,t,r);if(t.type.name==="paragraph"&&t.childCount===0){return S(n)}return n};return t}class u{constructor(e,t){this.fromDOMSerializer=a(e,this.mode);this.toDOMSerializer=l(e);this.parseOptions=t}get mode(){return"RICH_TEXT"}toInternalValue(e){const t=Object(c["b"])().createElement("div");t.innerHTML=e;return this.fromDOMSerializer.parse(t,this.parseOptions)}toText(e){if(e.content.size<=i["c"]){return""}const t=this.toDOMSerializer.serializeFragment(e.content);const r=Object(c["b"])().createElement("div");r.appendChild(t);Array.from(r.querySelectorAll('a[id^="rt-link--"]')).forEach((e=>{e.removeAttribute("id")}));return r.innerHTML}}class f extends u{get mode(){return"PLAIN_TEXT"}toText(e){if(e.content.size<=i["c"]){return""}const t=this.toDOMSerializer.serializeFragment(e.content);const r=[];for(let e=0;e<t.childNodes.length;e++){const n=t.childNodes[e];r.push(n.textContent)}return r.join("\n")}}function d(e,t){e.dispatch(e.state.tr.replaceWith(0,e.state.doc.content.size,t));e.dom.scrollTop=e.dom.scrollHeight}function p(e,t,r,n){let o;if(r===0&&n===t.content.size){o=new s["AllSelection"](t)}else{const e=t.resolve(r);const i=r===n?e:t.resolve(n);o=s["TextSelection"].between(e,i)}return e.setSelection(o)}function m(e){let t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(t===null){t=e.state.doc.content.size;e.dom.scrollTop=e.dom.scrollHeight}e.dispatch(p(e.state.tr,e.state.doc,t,t).scrollIntoView());e.focus()}function h(e,t){const r=e.selection;if(r.empty){return!!t.isInSet(e.storedMarks||r.$from.marks())}let n=true;let o=false;e.doc.nodesBetween(r.from,r.to,(e=>{if(e.isText){o=true;if(!t.isInSet(e.marks)){n=false}}return n}));return o&&n}function g(e){const t=e.selection;if(t.empty){const r=t.$cursor;const n=r.pos;const o=n-r.parentOffset;const s=o+r.parent.content.size;let i=null;e.doc.nodesBetween(o,s,((t,r)=>{if(e.schema.marks.link.isInSet(t.marks)){const e=r;const o=r+t.nodeSize;if(i&&i.to===e){i.to=o}else if(n>=e&&n<=o){i={from:e,to:o}}}}));if(i){return i}}return{from:t.from,to:t.to}}function E(e){let t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{parseFormData:true};const r=g(e);const n=e.doc.rangeHasMark(r.from,r.to,e.schema.marks.link);const o={text:"",href:"",hasAnchor:n};if(t.parseFormData){o.text=e.doc.textBetween(r.from,r.to);if(n){let t=null;e.doc.nodesBetween(r.from,r.to,(r=>{if(!t){t=r.marks.find((t=>t.type===e.schema.marks.link))}return!t}));if(t){o.href=t.attrs.href||""}}}return o}function O(e,t){const r=e.doc.resolve(t);const n=r.nodeAfter;const o=n.marks.find((t=>t.type===e.schema.marks.link));const s=r.parent;const i=t-r.parentOffset-1;const c=s.type===e.schema.nodes.figure?s:null;const a=c?i:null;const l=t+n.nodeSize;const u=e.doc.nodeAt(l);let f=null;let d=null;if(u&&u.isText){const t=u.marks.some((t=>t.type===e.schema.marks.figcaption));if(t){f=u;d=l}}return{image:n,imagePos:t,link:o,figure:c,figurePos:a,caption:f,captionPos:d}}function _(e,t){let r=t.$from;let n=t.$to;if(t instanceof s["AllSelection"]&&e.content.size>i["c"]){r=e.resolve(1);n=e.resolve(e.content.size-1)}const o=r.blockRange(n);if(o.$from.parent.type.spec.code){return{node:o.$from.parent,pos:o.$from.pos-o.$from.parentOffset-1}}return null}function A(e,t){return!!_(e,t)}function T(e,t){const r=[];let n=false;e.descendants((e=>{if(e.isBlock&&n){r.push("\n")}if(e.isBlock){n=true}if(e.isText){r.push(e.text)}if(e.type===t.nodes.hard_break){r.push("\n")}}));return r.join("")}function M(e){e.innerHTML=e.innerHTML.replace(/<br\s*\/?>/g,"\n");Array.from(e.querySelectorAll("div")).filter((e=>!e.querySelector("div")&&!!e.nextSibling)).forEach((e=>{e.textContent=`${e.textContent}\n`}));return e.textContent}function b(e){const t=(e.style.direction||"").toLowerCase().replace("!important","").trim();const r=(e.dir||"").toLowerCase();const n=t||r;return n==="rtl"?"rtl":""}function S(e){e.appendChild(Object(c["b"])().createElement("br"));return e}function k(e){const t=" ";return e.withText(e.textContent.replace(/ +/g,(e=>{if(e.length===1){return" "}const r=[];for(let n=0;n<e.length;n++){if(n%2===0){r.push(t)}else{r.push(" ")}}return r.join("")})))}var I=r("./node_modules/prosemirror-view/dist/index.js");var D=r("./node_modules/prosemirror-commands/dist/commands.js");var R=r("./node_modules/prosemirror-history/dist/history.js");var L=r("./node_modules/prosemirror-schema-list/dist/schema-list.js");function C(e,t,r){const{marks:n,nodes:o}=t;const s=re(Object(D["toggleMark"])(n.code));const i=v(Object(D["setBlockType"])(o.paragraph),s);const c=Object(L["wrapInList"])(o.bullet_list);const a=Object(L["wrapInList"])(o.ordered_list);const l=Object(L["liftListItem"])(o.list_item);const u={};Object.entries({UNDO:R["undo"],REDO:R["redo"],UNDO_FORMAT:w(),ADD_HARD_BREAK:x(),ADD_NON_BREAKING_SPACE:j(),TOGGLE_STRONG:Object(D["toggleMark"])(n.strong),TOGGLE_EM:Object(D["toggleMark"])(n.em),SET_PARAGRAPH:i,TOGGLE_BLOCKQUOTE:z(o.blockquote),TOGGLE_HEADING:y(Object(D["setBlockType"])(o.heading),i),PROMPT_ANCHOR:P(r),ADD_ANCHOR:B(r),UNDO_ANCHOR:F(r),PROMPT_IMAGE_UPLOAD:W(r),PROMPT_IMAGE_EDIT:$(r),ADD_IMAGE:U(r),EDIT_IMAGE:K(r),CLICK_IMAGE:q(r),RESIZE_IMAGE:V(r),DELETE_FIGURE:X(),DELETE_IMAGE:J(r),EXIT_FIGURE:Q(),ARROW_UP_NEAR_IMAGE:Z("ArrowUp"),ARROW_LEFT_NEAR_IMAGE:Z("ArrowLeft"),ARROW_DOWN_NEAR_IMAGE:Z("ArrowDown"),ARROW_RIGHT_NEAR_IMAGE:Z("ArrowRight"),WRAP_ORDERED_LIST:a,TOGGLE_ORDERED_LIST:N(o.ordered_list,a,H(l,o.ordered_list)),WRAP_BULLET_LIST:c,TOGGLE_BULLET_LIST:N(o.bullet_list,c,H(l,o.bullet_list)),LIFT_LIST_ITEM:l,SINK_LIST_ITEM:Object(L["sinkListItem"])(o.list_item),SPLIT_LIST_ITEM:Object(L["splitListItem"])(o.list_item),TOGGLE_CODE:s,CONVERT_TAB_TO_SPACES:Y(),EXIT_FIRST_BLOCK:ee(),EXIT_LAST_BLOCK:te(),PROMPT_MATH_INSERT:ne(r),PROMPT_MATH_EDIT:oe(r),ADD_MATH:se(r),CLICK_MATH:ie(r),TOGGLE_HTML_MODE:ce(r)}).forEach((t=>{let[r,n]=t;if(e.has(r)){u[r]=n}}));return u}function y(e,t){return(r,n,o)=>{const s=e(r,n,o);if(s){return true}return t(r,n,o)}}function N(e,t,r){const n=y(t,r);const o=y(r,t);return(e,t,r)=>{const s=e.selection;let i=0;if(s.from<s.to){e.doc.nodesBetween(s.from,s.to,(()=>{i+=1;return i<=1}))}if(i>1){return o(e,t,r)}return n(e,t,r)}}function w(){const e=["strong","em","code"];return(t,r)=>{if(r){const n=t.selection;let o=t.tr;e.forEach((e=>{const r=t.schema.marks[e];if(r){o=o.removeMark(n.from,n.to,r)}}));r(o)}return true}}function G(e,t){const r=e.selection;let n=r.$from;let o=r.$to;if(r instanceof s["AllSelection"]&&e.doc.content.size>i["c"]){n=e.doc.resolve(1);o=e.doc.resolve(e.doc.content.size-1);if(t){t(p(e.tr,e.doc,n.pos,o.pos))}return true}return false}function v(e,t){return(r,n,o)=>{const s=r.schema.nodes.blockquote;const i=r.schema.nodes.code_block;if(G(r,n)){r=o.state}const c=r.selection;if(s){const e=!!c.$from.blockRange(c.$to,(e=>e.type===s));if(e){const e=Object(D["lift"])(r,n);if(e){r=o.state}}}if(i){const e=_(r.doc,c);if(e){if(n){const t=e.pos+e.node.nodeSize-1;n(p(r.tr,r.doc,e.pos,t));r=o.state}const s=t(r,n,o);if(s){r=o.state}}}return e(r,n)}}function z(e){const t=Object(D["wrapIn"])(e);return(r,n,o)=>{if(G(r,n)){r=o.state}const s=r.selection;const i=!!s.$from.blockRange(s.$to,(t=>t.type===e));if(i){return Object(D["lift"])(r,n)}return t(r,n)}}function x(){return Object(D["chainCommands"])(D["exitCode"],((e,t)=>{if(t){const r=e.schema.nodes.hard_break.create();t(e.tr.replaceSelectionWith(r))}return true}))}function j(){return(e,t)=>{if(t){t(e.tr.insertText(" "))}return true}}function P(e){return(t,r)=>{if(r){if(e.anchorForm.isEditing){const e=g(t);r(p(t.tr,t.doc,e.from,e.to))}e.openAnchorModal(t)}return true}}function B(e){return(t,r)=>{const n=e.anchorForm;const o=n.isValid({commit:!!r});if(!o){return false}if(r){const o=t.schema.marks.link;const s=[o.create({href:n.data.href})];Object.values(t.schema.marks).filter((e=>e!==o&&h(t,e))).forEach((e=>{s.push(e.create())}));const i=t.schema.text(n.data.text,s);r(t.tr.replaceSelectionWith(i,false));e.closeModal()}return true}}function F(e){return(t,r)=>{if(r){const n=g(t);const o=t.schema.marks.link;r(t.tr.removeMark(n.from,n.to,o));e.hideAnchorTooltip()}return true}}function H(e,t){return(r,n)=>{const o=e(r,n);if(o){return true}const s=r.selection;let i=null;let c=null;let a=null;r.doc.nodesBetween(s.from,s.to,((e,r)=>{if(e.type===t&&!i){i=e;c=r+1;a=r+i.content.size}return!i}));if(i&&c<a){r=r.apply(p(r.tr,r.doc,c,a));return e(r,n)}return false}}function W(e){return(t,r)=>{if(r){e.openImageUploadModal(t)}return true}}function $(e){return(t,r)=>{if(r){e.openImageEditModal(t)}return true}}function U(e){return(t,r)=>{if(r){const n=t.schema.nodes.figure;const s=t.schema.nodes.image;const i=e.imageUploader;const c=[];i.files.filter((e=>!!e.url)).forEach((e=>{const t=s.createAndFill({src:e.url});const r=n.create({},[t],[]);c.push(r)}));const a=new o["Slice"](o["Fragment"].from(c),0,0);r(t.tr.replaceSelection(a));i.resetFiles();if(!i.hasError){e.closeModal()}}return true}}function K(e){function t(e,t,r){const n=[];if(r.data.href){n.push(e.mark(e.marks.link,{href:r.data.href}))}return e.nodes.image.createAndFill({...t.attrs,alt:r.data.alt},t.content,n)}return(r,n)=>{const o=e.activeImageEditor;if(!o){return false}const s=e.imageEditForm;const i=s.isValid({commit:!!n});if(!i){return false}if(n){let i=r.tr;const c=o.getPos();const{figure:a,image:l,caption:u,captionPos:f}=O(r,c);const d=c+l.nodeSize;const m=t(r.schema,l,s);i=i.replaceWith(c,d,m);let h;if(s.data.caption){const e=r.schema.mark(r.schema.marks.figcaption);const t=r.schema.text(s.data.caption,[e]);if(a){if(u){i=i.replaceWith(f,f+u.nodeSize,t)}else{i=i.insert(d,t)}h=d+t.nodeSize}else{const e=[m,t];const n=r.schema.nodes.figure.create({},e,[]);i=i.replaceWith(c,d,n);h=d+t.nodeSize+2}i=p(i,i.doc,h,h)}else if(u){i=i.delete(f,f+u.nodeSize);h=d;i=p(i,i.doc,h,h)}else{h=d;i=p(i,i.doc,h,h)}n(i);e.closeModal()}return true}}function V(e){return(t,r)=>{const n=e.activeImageEditor;if(!n){return false}const o=e.imageEditForm;const s=o.isValid({commit:!!r});if(!s){return false}if(r){const o=n.getPos();const s=t.doc.nodeAt(o);const i=o+s.nodeSize;const c=t.schema.nodes.image.createAndFill({...s.attrs,width:e.imageEditForm.data.width,height:e.imageEditForm.data.height},s.content,s.marks);let a=t.tr.replaceWith(o,i,c);a=p(a,a.doc,i,i);r(a)}return true}}function q(e){return(t,r)=>{const n=e.activeImageEditor;if(!n){return false}if(r){const e=n.getPos();const o=e+1;r(p(t.tr,t.doc,o,o))}return true}}function X(){return(e,t)=>{const r=e.schema.nodes.figure;const n=e.schema.nodes.image;const o=e.selection;const s=o.$from.parent;if(s.type===r&&s===o.$to.parent){let r=false;s.descendants((e=>{if(e.type===n){r=true}return!r}));if(!r){const r=o.$from.pos-o.$from.parentOffset-1;const n=r+s.nodeSize;if(t){const o=e.schema.nodes.paragraph;const s=e.schema.marks.figcaption;let i=e.tr.setBlockType(r,n,o,{});i=i.removeMark(r,n,s);t(i)}return true}}return false}}function J(e){return(t,r)=>{const n=e.activeImageEditor;if(!n){return false}if(r){const o=n.getPos();const s=t.doc.nodeAt(o);const i=o+s.nodeSize;const c=t.doc.resolve(o);const a=c.parent;let l=t.tr;let u;if(a.type===t.schema.nodes.figure){const e=o-c.parentOffset;const t=e+a.content.size;l=l.deleteRange(e,t);u=e-1}else{l=l.deleteRange(o,i);u=o-1}r(p(l,l.doc,u,u));e.closeModal()}return true}}function Q(){return(e,t)=>{const r=e.selection.$cursor;const n=e.schema.nodes.figure;if(!r||!r.parent||r.parent.type!==n){return false}const o=e.schema.nodes.image;const s=e.schema.marks.figcaption;const i=r.parent;const c=r.pos-r.parentOffset-1;const a=c+i.nodeSize;let l=null;e.doc.nodesBetween(c,a,((t,r)=>{if(t.type===o){l=e.doc.resolve(r)}return!l}));if(!l){return false}const u=l.pos;const f=l.pos+l.nodeAfter.nodeSize;let d,m,h,g;if(c<=r.pos&&r.pos<=u){d=c+1;m=r.pos;h=c;g=h+(m-d)+1}else if(f<=r.pos&&r.pos<=a){d=r.pos;m=a-1;h=r.pos+1;g=h}else{return false}if(t){const r=e.doc.slice(d,m);const n=e.schema.nodes.paragraph.create({},r.content);let o=e.tr.delete(d,m);o=o.insert(h,n);o=o.removeMark(h,h+n.nodeSize,s);o=p(o,o.doc,g,g);t(o)}return true}}function Z(e){return(t,r)=>{const n=t.selection.$cursor;const o=t.schema.nodes.image;if(!n){return false}const{pos:s,parent:i,parentOffset:c,nodeBefore:a,nodeAfter:l}=n;const u=!!l&&l.type===o;const f=!!a&&a.type===o;if(!u&&!f){return false}const d=t.doc.resolve(Math.max(s-c-1,0));let m=null;if(e==="ArrowUp"){if(d.nodeBefore){m=d.pos-1}else if(a){m=d.pos}}else if(u&&e==="ArrowLeft"){if(a){m=s-1}else if(d.nodeBefore){m=d.pos-1}}else if(f&&e==="ArrowLeft"){m=s-1}else if(e==="ArrowDown"){if(d.nodeAfter){m=d.pos+i.nodeSize}}else if(f&&e==="ArrowRight"){if(l){m=s+1}else if(d.nodeAfter){m=d.pos+i.nodeSize}}else if(u&&e==="ArrowRight"){m=s+1}if(r&&m!==null&&m!==s){r(p(t.tr,t.doc,m,m))}return true}}function Y(){return(e,t)=>{const r=e.selection;if(A(e.doc,r)&&t){t(e.tr.insertText("    "));return true}return false}}function ee(){return(e,t)=>{const r=[e.schema.nodes.blockquote,e.schema.nodes.code_block];const n=e.selection.$cursor;const o=e.doc.firstChild;if(n&&n.pos-n.depth===0&&o&&r.includes(o.type)){if(t){const r=0;const n=e.schema.nodes.paragraph.create();const o=e.tr.insert(r,n);t(p(o,o.doc,r+1,r+1))}return true}return false}}function te(){return(e,t)=>{const r=[e.schema.nodes.blockquote,e.schema.nodes.code_block];const n=e.selection.$cursor;const o=e.doc.lastChild;const s=e.doc.content.size;if(n&&n.pos+n.depth===s&&o&&r.includes(o.type)){if(t){const r=s;const n=e.schema.nodes.paragraph.create();const o=e.tr.insert(r,n);t(p(o,o.doc,r+1,r+1))}return true}return false}}function re(e){return(t,r,n)=>{const o=t.selection;const s=t.schema.nodes.code_block;const c=A(t.doc,o);const a=t.doc.slice(o.from,o.to);const l=T(a.content,t.schema);const u=l.split("\n");if(!c&&u.length<=1){const s=e(t,r,n);if(s&&r){const e=t.doc.content.size===i["c"];t=n.state;const s=t.doc.content.size-1;if(!e&&o.to>=s&&h(t,t.schema.marks.code)){r(t.tr.insert(s,t.schema.text(" ",[])))}}return s}const f=t.schema.nodes.paragraph;const d=t.schema.nodes.hard_break;let m;if(c){m=u.map((e=>{const r=e?t.schema.text(e):null;return f.create({},r)}))}else{const e=l?t.schema.text(l):null;m=[s.create({},e)]}const g=m.reduce(((e,t)=>e+t.content.size),0);if(g===0){return false}if(r){let e=t.tr.replaceWith(o.from,o.to,m);const n=[];let s="BEFORE_CONTENT";e.doc.nodesBetween(e.mapping.map(o.from),e.mapping.map(o.to),((e,t)=>{if(s==="BEFORE_CONTENT"&&e===m[0]){s="IN_CONTENT"}if(e.isBlock){if(e.content.size===0&&s!=="IN_CONTENT"){n.push([t,t+e.nodeSize])}else if(e.content.size>0&&e.firstChild.type===d&&s==="AFTER_CONTENT"){const r=t+1;const o=r+e.firstChild.nodeSize;n.push([r,o])}else if(e.content.size>0&&e.lastChild.type===d&&s==="BEFORE_CONTENT"){const r=t+e.content.size;const o=r+e.lastChild.nodeSize;n.push([r,o])}}if(s==="IN_CONTENT"&&e===m[m.length-1]){s="AFTER_CONTENT"}}));n.reverse().forEach((t=>{let[r,n]=t;e=e.deleteRange(r,n)}));const i=e.mapping.map(o.from)+1;const c=e.mapping.map(o.to)-1;e=p(e,e.doc,i,c);r(e)}return true}}function ne(e){return(t,r)=>{if(r){e.mathForm.setMathRepresentation("");e.mathForm.setIsInline(false);e.mathForm.setIsEditing(false);e.openMathModal(t)}return true}}function oe(e){return(t,r)=>{if(r){e.mathForm.setIsEditing(true);e.openMathModal(t)}return true}}function se(e){return(t,r)=>{if(r){const n=e.activeMathEditor;const{mathRepresentation:o,isInline:s}=e.mathForm;const i=s?t.schema.nodes.math_inline:t.schema.nodes.math_block;const c=i.create({},[t.schema.text(o)],[]);if(n){const e=n.getPos();const o=e+t.doc.resolve(e).nodeAfter.nodeSize;r(t.tr.replaceWith(e,o,c))}else{r(t.tr.replaceSelectionWith(c))}e.closeModal()}return true}}function ie(e){return(t,r)=>{const n=e.activeMathEditor;if(!n){return false}if(r){const e=n.getPos();const o=e+1;r(p(t.tr,t.doc,o,o))}return true}}function ce(e){return(t,r)=>{if(r){e.toggleHTMLMode()}return true}}var ae=r("./node_modules/prosemirror-keymap/dist/keymap.js");const le=typeof navigator!=="undefined"&&/Mac/.test(navigator.platform);function ue(e){const t={};[["ArrowDown","EXIT_LAST_BLOCK"],["ArrowDown","ARROW_DOWN_NEAR_IMAGE"],["ArrowLeft","ARROW_LEFT_NEAR_IMAGE"],["ArrowRight","ARROW_RIGHT_NEAR_IMAGE"],["ArrowUp","EXIT_FIRST_BLOCK"],["ArrowUp","ARROW_UP_NEAR_IMAGE"],["Ctrl-b","TOGGLE_STRONG"],["Ctrl-i","TOGGLE_EM"],["Ctrl-k","PROMPT_ANCHOR"],["Ctrl-Enter","ADD_HARD_BREAK",le],["Ctrl-Space","ADD_NON_BREAKING_SPACE"],["Enter","EXIT_FIGURE"],["Enter","SPLIT_LIST_ITEM"],["Mod-[","LIFT_LIST_ITEM"],["Mod-]","SINK_LIST_ITEM"],["Mod-b","TOGGLE_STRONG"],["Mod-i","TOGGLE_EM"],["Mod-k","PROMPT_ANCHOR"],["Mod-y","REDO",!le],["Mod-z","UNDO"],["Shift-Ctrl-.","TOGGLE_BLOCKQUOTE"],["Shift-Ctrl-0","SET_PARAGRAPH"],[`Shift-Ctrl-${i["e"]}`,"TOGGLE_HEADING"],["Shift-Ctrl-7","TOGGLE_ORDERED_LIST"],["Shift-Ctrl-8","TOGGLE_BULLET_LIST"],["Shift-Ctrl-m","UNDO_FORMAT"],["Shift-Enter","ADD_HARD_BREAK"],["Shift-Mod-m","UNDO_FORMAT"],["Shift-Mod-z","REDO"],["Shift-Space","ADD_NON_BREAKING_SPACE"],["Shift-Tab","LIFT_LIST_ITEM"],["Tab","CONVERT_TAB_TO_SPACES"],["Tab","SINK_LIST_ITEM"]].forEach((r=>{let[n,o,s=true]=r;if(o in e&&s){if(!(n in t)){t[n]=[]}t[n].push(e[o])}}));const r={};Object.entries(t).forEach((e=>{let[t,n]=e;if(n.length===1){r[t]=n[0]}else if(n.length>1){r[t]=Object(D["chainCommands"])(...n)}}));return[Object(ae["keymap"])(r),Object(ae["keymap"])(D["baseKeymap"])]}function fe(e,t){return[...ue(t),Object(R["history"])()]}var de=r("./src/udemy/js/utils/a11y.ts");function pe(e){return new o["Schema"]({marks:me(e),nodes:he(e)})}function me(e){const t={};Ee(e,i["f"],t,{figcaption:{parseDOM:[{tag:"figcaption",context:"figure/"}],toDOM(){return["figcaption"]}}});Ee(e,i["a"],t,{link:{attrs:{href:{},title:{default:""}},inclusive:false,parseDOM:[{tag:"a",getAttrs(e){const t={href:e.getAttribute("href"),title:e.getAttribute("title")};const r={};const n={};Object(c["h"])(t.href,r,n,true);if(n.href){return false}return t}}],toDOM(e){const t=_e({...e.attrs,target:"_blank",rel:"noopener noreferrer",id:e.attrs.id||Object(de["a"])("rt-link")});return["a",t]}}});Ee(e,"TOGGLE_CODE",t,{code:{parseDOM:[{tag:"code"}],toDOM(){return["code"]}}});Ee(e,"TOGGLE_STRONG",t,{strong:{parseDOM:[{tag:"strong"},{tag:"b",getAttrs(e){return e.style.fontWeight!=="normal"}},{style:"font-weight",getAttrs(e){return/^(bold(er)?|[5-9]\d{2,})$/.test(e)}}],toDOM(){return["strong"]}}});Ee(e,"TOGGLE_EM",t,{em:{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style=italic"}],toDOM(){return["em"]}}});return t}function he(e){const t=ge();Ee(e,"ADD_HARD_BREAK",t,{hard_break:{inline:true,group:"inline",selectable:false,parseDOM:[{tag:"br",ignore:true,getAttrs(e){return Oe(e)?{}:false}},{tag:"br",getAttrs(e){return Oe(e)?false:{}}}],toDOM(){return["br"]}}});Ee(e,i["b"],t,{blockquote:{attrs:{dir:{default:""}},reparseInView:true,content:"block+",group:"block",defining:true,parseDOM:[{tag:"blockquote",getAttrs(e){return{dir:b(e)}}}],toDOM(e){return["blockquote",_e(e.attrs),0]}},heading:{attrs:{dir:{default:""}},reparseInView:true,content:"inline*",group:"block",defining:true,parseDOM:["h1","h2","h3","h4","h5","h6"].map((e=>({tag:e,getAttrs(e){return{dir:b(e)}}}))),toDOM(e){return[`h${i["e"]}`,_e(e.attrs),0]}}});Ee(e,i["g"],t,{ordered_list:{attrs:{order:{default:1},dir:{default:""}},reparseInView:true,parseDOM:[{tag:"ol",getAttrs(e){return{order:e.hasAttribute("start")?+e.getAttribute("start"):1,dir:b(e)}}}],toDOM(e){return["ol",_e({start:e.attrs.order===1?"":e.attrs.order,dir:e.attrs.dir}),0]},content:"list_item+",group:"block"},bullet_list:{attrs:{dir:{default:""}},reparseInView:true,parseDOM:[{tag:"ul",getAttrs(e){return{dir:b(e)}}}],toDOM(e){return["ul",_e(e.attrs),0]},content:"list_item+",group:"block"},list_item:{attrs:{dir:{default:""}},reparseInView:true,parseDOM:[{tag:"li",getAttrs(e){return{dir:b(e)}}}],toDOM(e){return["li",_e(e.attrs),0]},defining:true,content:"block+"}});Ee(e,i["f"],t,{figure:{attrs:{dir:{default:""}},reparseInView:true,content:"inline*",group:"block",parseDOM:[{tag:"figure",getAttrs(e){if(e.querySelectorAll("img").length!==1){return false}return{dir:b(e)}}}],toDOM(e){return["figure",_e(e.attrs),0]}},image:{inline:true,attrs:{src:{},width:{default:""},height:{default:""},alt:{default:""}},draggable:false,group:"inline",parseDOM:[{tag:"img",getAttrs(e){const t={src:e.getAttribute("src"),width:e.getAttribute("width"),height:e.getAttribute("height"),alt:e.getAttribute("alt")||e.getAttribute("title")};if(!t.src){return false}return t}}],toDOM(e){const t=_e({...e.attrs,title:e.attrs.alt});return["img",t]}}});Ee(e,"TOGGLE_CODE",t,{code_block:{attrs:{dir:{default:""}},reparseInView:true,content:"text*",marks:"",group:"block",code:true,defining:true,parseDOM:[{tag:"pre",preserveWhitespace:"full",getAttrs(e){return{dir:b(e)}}}],toDOM(e){const t=_e({...e.attrs,class:"prettyprint linenums"});return["pre",t,0]}}});Ee(e,i["h"],t,{math_inline:{group:"inline",attrs:{"data-ud-math-type":{default:""}},content:"text*",inline:true,atom:true,parseDOM:[{tag:"span",getAttrs(e){return e.getAttribute("data-ud-math-type")==="inline"?{}:false}}],toDOM(){return["span",{"data-ud-math-type":"inline"},0]}},math_block:{group:"block",attrs:{"data-ud-math-type":{default:""}},content:"text*",atom:true,code:true,parseDOM:[{tag:"div",getAttrs(e){return e.getAttribute("data-ud-math-type")==="block"?{}:false}}],toDOM(){return["div",{"data-ud-math-type":"block"},0]}}});return t}function ge(){return{doc:{content:"block+"},paragraph:{attrs:{dir:{default:""}},reparseInView:true,content:"inline*",group:"block",parseDOM:[{tag:"p",preserveWhitespace:"full",getAttrs(e){if((e.style.whiteSpace||"").toLowerCase()!=="pre"){return false}return{dir:b(e)}}},{tag:"p",getAttrs(e){if((e.style.whiteSpace||"").toLowerCase()==="pre"){return false}return{dir:b(e)}}},{tag:"br",context:"doc/",getAttrs(e){return{dir:b(e)}}}],toDOM(e){return["p",_e(e.attrs),0]}},text:{group:"inline"}}}function Ee(e,t,r){if(Object(c["d"])(e,t)){for(var n=arguments.length,o=new Array(n>3?n-3:0),s=3;s<n;s++){o[s-3]=arguments[s]}Object.assign(r,...o)}}function Oe(e){const t=e.parentNode;return!!(t&&t.tagName&&t.tagName.toLowerCase()==="p"&&t.childNodes.length===1)}function _e(e){Object.keys(e).forEach((t=>{if(e[t]===""){delete e[t]}}));return e}r.d(t,"EditorState",(function(){return s["EditorState"]}));r.d(t,"EditorView",(function(){return I["EditorView"]}));r.d(t,"buildCommands",(function(){return C}));r.d(t,"buildPlugins",(function(){return fe}));r.d(t,"buildSchema",(function(){return pe}));r.d(t,"helpers",(function(){return n}))}}]);
//# sourceMappingURL=ud-prosemirror.d9ce6179813d62f235d7.js.map