(()=>{"use strict";var e,t,r,n,o,a={7285:(e,t,r)=>{r.d(t,{v:()=>a});var n=r(4913),o=r(1947),a=(0,n.j)("core").initState({slots:{home:null,setting:null},applications:[],i18n:{lang:o.m.touch("lang",navigator.language),supportedLangs:[{label:"简体中文",key:"zh-CN"},{label:"English",key:"en-US"}]}}).onActivate((function(){return e=void 0,t=void 0,o=function(){var e,t;return function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(n){switch(n.label){case 0:return Promise.all([r.e(580),r.e(761),r.e(234)]).then(r.bind(r,4234)),e=Date.now(),[4,Promise.all([r.e(580),r.e(167),r.e(658),r.e(723)]).then(r.bind(r,723))];case 1:return n.sent(),t=Date.now(),console.log("inject runtime in ".concat(t-e,"ms")),[2]}}))},new((n=void 0)||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}));var e,t,n,o}))},9583:(e,t,r)=>{var n=r(7285),o=r(5557),a=r(9409),i=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function l(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))},l=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};localStorage.getItem("installedPlugins")||localStorage.setItem("installedPlugins","[]");var c=JSON.parse(localStorage.getItem("installedPlugins"));n.v.run((function(e){return i(void 0,void 0,void 0,(function(){return l(this,(function(t){return e.use((0,o.p)()),e.use((function(e,t){return i(void 0,void 0,void 0,(function(){return l(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,e.loadHtml("https://ralliejs.github.io/".concat(e.name,"/"))];case 1:return r.sent(),[3,3];case 2:return r.sent(),a.ZP.error("".concat(e.name,"未被部署到ralliejs的github page中")),t(),[3,3];case 3:return[2]}}))}))})),n.v.activate(n.v.name),c.forEach((function(e){n.v.activate(e)})),[2]}))}))}))},1947:(e,t,r)=>{r.d(t,{m:()=>n});var n={touch:function(e,t){void 0===t&&(t=null);try{var r=window.localStorage.getItem(e);return null==r?(n.set(e,t),t):JSON.parse(r)}catch(t){return console.error("Error getting key ".concat(e," from localStorage"),t),null}},set:function(e,t){try{var r=JSON.stringify(t);window.localStorage.setItem(e,r)}catch(t){console.error("Error setting key ".concat(e," to localStorage"),t)}},remove:function(e){try{window.localStorage.removeItem(e)}catch(t){console.error("Error removing key ".concat(e," from localStorage"),t)}},clear:function(){try{window.localStorage.clear()}catch(e){console.error("Error clearing localStorage",e)}}}}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e].call(r.exports,r,r.exports,l),r.exports}l.m=a,e=[],l.O=(t,r,n,o)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"static/js/"+e+"."+{167:"8414535a",234:"5324acd1",249:"3689adba",521:"643cdf5d",580:"87e75962",594:"5e90457f",658:"520ae32c",723:"1ea3a5db",757:"f7837e5f",761:"febd1820"}[e]+".js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="my-webpack-project:",l.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){i=f;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../../"})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var s=c(l)}for(t&&t(r);u<a.length;u++)o=a[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},r=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[380],(()=>l(9583)));c=l.O(c)})();
//# sourceMappingURL=main.50dea4db.js.map