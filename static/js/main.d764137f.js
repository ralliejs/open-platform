(()=>{"use strict";var e,t,n,r,o,a={7285:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(7694),o=n(1947),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=(0,r.j)("core").initState({pluginsLoaded:!1,slots:{home:null},applications:[],addOns:{pluginInfo:{}},lang:o.m.touch("lang",navigator.language)},!0).onActivate((function(){return e=void 0,t=void 0,o=function(){var e,t;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(r){switch(r.label){case 0:return Promise.all([n.e(580),n.e(834),n.e(687)]).then(n.bind(n,7687)),e=Date.now(),[4,Promise.all([n.e(580),n.e(866),n.e(622),n.e(723)]).then(n.bind(n,723))];case 1:return r.sent(),t=Date.now(),console.log("inject runtime in ".concat(t-e,"ms")),[2]}}))},new((r=void 0)||(r=Promise))((function(n,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function c(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}));var e,t,r,o}));i.addMethods({registerPluginInfo:function(e){var t=this;i.setState("注册插件信息",(function(n){n.addOns.pluginInfo[t.trigger]=e}))},registerSlot:function(e,t){i.setState("注册插槽",(function(n){n.slots[e]=t}))},addApplication:function(e){var t=this,n=function(e,r){var o;return void 0===r&&(r=""),a(a({},e),{path:e.path&&"".concat(r).concat(e.path),locale:e.locale&&"".concat(t.trigger,":").concat(e.locale),children:null===(o=e.children)||void 0===o?void 0:o.map((function(e){return n(e)}))})};i.setState("添加应用",(function(r){r.applications.push(n(e,t.trigger+"/"))}))}})},1212:(e,t,n)=>{var r=n(7285),o=n(5557),a=n(1947),i=n(9409),c=n(1643),u=function(e,t){return n=void 0,r=void 0,a=function(){var t,n,r,o,a;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(u){switch(u.label){case 0:if(t=e.name.split("/"),n=t[0],r=t[1],o=function(){i.ZP.error(c.Z.t("common.failedToLoadPlugin",{ns:"core",name:e.name}))},!n||!r)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,e.loadHtml("https://".concat(n,".github.io/").concat(r,"/"))];case 2:return u.sent()||o(),[3,4];case 3:return a=u.sent(),console.error(a),o(),[3,4];case 4:return[3,6];case 5:o(),u.label=6;case 6:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{u(a.next(e))}catch(e){t(e)}}function c(e){try{u(a.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,c)}u((a=a.apply(n,r||[])).next())}));var n,r,o,a},l=a.m.touch("installedPlugins",[]);r.v.run((function(e){return t=void 0,n=void 0,i=function(){return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(t){return e.use((0,o.p)()),e.use(u),r.v.activate(r.v.name),Promise.allSettled(l.map((function(e){return r.v.activate(e)}))).then((function(){r.v.setState("插件加载完成",(function(e){e.pluginsLoaded=!0}))})),[2]}))},new((a=void 0)||(a=Promise))((function(e,r){function o(e){try{u(i.next(e))}catch(e){r(e)}}function c(e){try{u(i.throw(e))}catch(e){r(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,c)}u((i=i.apply(t,n||[])).next())}));var t,n,a,i}))},1643:(e,t,n)=>{n.d(t,{I:()=>s,Z:()=>f});var r=n(3071),o=n(7285),a=n(4171),i=n(1947),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}},l={"en-US":{core:function(){return n.e(249).then(n.bind(n,3249))}},"zh-CN":{core:function(){return n.e(521).then(n.bind(n,9521))}}};r.ZP.use(a.Db).init({fallbackLng:o.v.state.lang,interpolation:{escapeValue:!1},resources:{}});var s=function(e){return c(void 0,void 0,void 0,(function(){var t,n;return u(this,(function(o){switch(o.label){case 0:return t=l[e],n=Object.keys(t),t?[4,Promise.all(Object.values(t).map((function(e){return e()})))]:[3,2];case 1:o.sent().forEach((function(t,o){var a=n[o];r.ZP.addResources(e,a,t.default)})),o.label=2;case 2:return[2]}}))}))};o.v.watchState((function(e){return e.lang})).do((function(e,t){return c(void 0,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return e===t?[3,2]:[4,s(e)];case 1:n.sent(),r.ZP.changeLanguage(e),i.m.set("lang",e),n.label=2;case 2:return[2]}}))}))})),o.v.addMethods({addI18nResources:function(e){return c(this,void 0,void 0,(function(){var t,n,a;return u(this,(function(i){switch(i.label){case 0:return t=this.trigger,n=!1,Object.entries(e).forEach((function(e){var r=e[0],a=e[1];l[r]||(l[r]={}),l[r][t]||(l[r][t]=a),r===o.v.state.lang&&(n=!0)})),a=o.v.state.lang,n?[4,s(a)]:[3,2];case 1:i.sent(),i.label=2;case 2:return r.ZP.changeLanguage(a),[2]}}))}))},useTranslation:function(){return(0,a.$G)(this.trigger)}});const f=r.ZP},1947:(e,t,n)=>{n.d(t,{m:()=>r});var r={touch:function(e,t){void 0===t&&(t=null);try{var n=window.localStorage.getItem(e);return null==n?(r.set(e,t),t):JSON.parse(n)}catch(t){return console.error("Error getting key ".concat(e," from localStorage"),t),null}},set:function(e,t){try{var n=JSON.stringify(t);window.localStorage.setItem(e,n)}catch(t){console.error("Error setting key ".concat(e," to localStorage"),t)}},remove:function(e){try{window.localStorage.removeItem(e)}catch(t){console.error("Error removing key ".concat(e," from localStorage"),t)}},clear:function(){try{window.localStorage.clear()}catch(e){console.error("Error clearing localStorage",e)}}}}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e].call(n.exports,n,n.exports,c),n.exports}c.m=a,e=[],c.O=(t,n,r,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,r,o]=e[s],i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](n[u])))?n.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>"static/js/"+e+"."+{249:"5affed16",521:"9498f62d",580:"9689679f",622:"07cf1634",687:"bc9746a5",723:"04aa13ff",757:"bff361a9",834:"91a796cc",866:"88fa4a6a",992:"1ec97629"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="my-webpack-project:",c.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+n){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../../"})(),(()=>{var e={179:0};c.f.j=(t,n)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(n=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,u]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in i)c.o(i,r)&&(c.m[r]=i[r]);if(u)var s=u(c)}for(t&&t(n);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(s)},n=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),c.nc=void 0;var u=c.O(void 0,[119],(()=>c(1212)));u=c.O(u)})();
//# sourceMappingURL=main.d764137f.js.map