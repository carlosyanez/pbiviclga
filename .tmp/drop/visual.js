var melbmapC488769D20414D169E26B0832E038E99;(()=>{"use strict";var e={82:(e,t,n)=>{n.d(t,{Tx:()=>i,Kq:()=>a,ME:()=>s});var r=n(738),o=0;function i(){o=0}function a(e,t){var n=[];if(e&&e.hasChildNodes()){for(var r=e.children,o=0;o<r.length;o++){var i;i="script"===r.item(o).nodeName.toLowerCase()?u(r.item(o)):r.item(o).cloneNode(!0),t.appendChild(i),n.push(i)}return n}}function u(e){for(var t=document.createElement("script"),n=e.attributes,r=0;r<n.length;r++)t.setAttribute(n[r].name,n[r].textContent),"src"===n[r].name.toLowerCase()&&(o++,t.onload=function(){o--});return t.innerHTML=e.innerHTML,t}function s(){var e=r.setInterval((function(){0===o&&(r.clearInterval(e),r.hasOwnProperty("HTMLWidgets")&&r.HTMLWidgets.staticRender&&r.HTMLWidgets.staticRender())}),100)}},936:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}n.d(t,{J:()=>s});var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return a(this,e)});function s(){var e;return o(this,s),(e=r.apply(this,arguments)).rcv_script=new c,e}return s}(n(576).U),c=function e(){o(this,e)}},254:(e,t,n)=>{n.d(t,{u:()=>c});var r,o=n(936),i=n(82),a=n(738);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}!function(e){e[e.Data=2]="Data",e[e.Resize=4]="Resize",e[e.ViewMode=8]="ViewMode",e[e.Style=16]="Style",e[e.ResizeEnd=32]="ResizeEnd",e[e.All=62]="All"}(r||(r={}));var s=[r.Resize,r.ResizeEnd,r.Resize+r.ResizeEnd],c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&t.element&&(this.rootElement=t.element),this.headNodes=[],this.bodyNodes=[]}var t,n,r;return t=e,r=[{key:"parseSettings",value:function(e){return o.J.parse(e)}}],(n=[{key:"update",value:function(t){if(t&&t.type&&t.viewport&&t.dataViews&&0!==t.dataViews.length&&t.dataViews[0]){var n=t.dataViews[0];this.settings=e.parseSettings(n);var r=null;n.scriptResult&&n.scriptResult.payloadBase64&&(r=n.scriptResult.payloadBase64),-1===s.indexOf(t.type)?r&&this.injectCodeFromPayload(r):this.onResizing(t.viewport)}}},{key:"onResizing",value:function(e){}},{key:"injectCodeFromPayload",value:function(e){if((0,i.Tx)(),e){var t=document.createElement("html");try{t.innerHTML=a.atob(e)}catch(e){return}if(0===this.headNodes.length){for(;this.headNodes.length>0;){var n=this.headNodes.pop();document.head.removeChild(n)}var r=t.getElementsByTagName("head");if(r&&r.length>0){var o=r[0];this.headNodes=(0,i.Kq)(o,document.head)}}for(;this.bodyNodes.length>0;){var u=this.bodyNodes.pop();this.rootElement.removeChild(u)}var s=t.getElementsByTagName("body");if(s&&s.length>0){var c=s[0];this.bodyNodes=(0,i.Kq)(c,this.rootElement)}(0,i.ME)()}}},{key:"enumerateObjectInstances",value:function(e){return o.J.enumerateObjectInstances(this.settings||o.J.getDefault(),e)}}])&&u(t.prototype,n),r&&u(t,r),e}()},829:(e,t,n)=>{function r(e,t,n){if(!e)return n;var r=e[t];return void 0===r?n:r}n.d(t,{N:()=>r})},625:(e,t,n)=>{n.d(t,{d9:()=>i});var r=n(829);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t,n){var i=function(e,t,n){return e?r.N(e[t.objectName],t.propertyName,n):n}(e,t,n);return i&&i.solid?i.solid.color:null==i||"object"===o(i)&&!i.solid?n:i}},576:(e,t,n)=>{n.d(t,{U:()=>i});var r=n(625);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"getDefault",value:function(){return new this}},{key:"createPropertyIdentifier",value:function(e,t){return{objectName:e,propertyName:t}}},{key:"parse",value:function(e){var t,n=this.getDefault();if(!e||!e.metadata||!e.metadata.objects)return n;for(var o in t=n.getProperties())for(var i in t[o]){var a=n[o][i];n[o][i]=r.d9(e.metadata.objects,t[o][i],a)}return n}},{key:"isPropertyEnumerable",value:function(t){return!e.InnumerablePropertyPrefix.test(t)}},{key:"enumerateObjectInstances",value:function(e,t){var n=e&&e[t.objectName];if(!n)return[];var r={objectName:t.objectName,selector:null,properties:{}};for(var o in n)n.hasOwnProperty(o)&&(r.properties[o]=n[o]);return{instances:[r]}}}],(n=[{key:"getProperties",value:function(){var t=this,n={};return Object.keys(this).forEach((function(r){if(e.isPropertyEnumerable(r)){var o=Object.keys(t[r]);n[r]={},o.forEach((function(t){e.isPropertyEnumerable(r)&&(n[r][t]=e.createPropertyIdentifier(r,t))}))}})),n}}])&&o(t.prototype,n),i&&o(t,i),e}();i.InnumerablePropertyPrefix=/^_/},738:e=>{e.exports=Function("return this")()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{default:()=>i});var e=n(254),t=n(738).powerbi,o={name:"melbmapC488769D20414D169E26B0832E038E99",displayName:"Victorian LGAs",class:"Visual",apiVersion:"3.8.0",create:function(t){if(e.u)return new e.u(t);throw"Visual instance not found"},createModalDialog:function(e,t,n){var r=globalThis.dialogRegistry;e in r&&new r[e](t,n)},custom:!0};void 0!==t&&(t.visuals=t.visuals||{},t.visuals.plugins=t.visuals.plugins||{},t.visuals.plugins.melbmapC488769D20414D169E26B0832E038E99=o);const i=o})(),melbmapC488769D20414D169E26B0832E038E99=r})();
//# sourceMappingURL=visual.js.map