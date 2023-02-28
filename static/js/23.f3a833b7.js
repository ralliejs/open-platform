"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[23],{1023:(e,t,n)=>{n.r(t);var r=n(1527),o=n(4478),a=n(7285),l=n(959),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e){var t=e.elements,n=void 0===t?[]:t,o=e.children,a=void 0===o?null:o;if(0===n.length)return(0,r.jsx)(r.Fragment,{children:a});var s=n[0],u=n.slice(1);return l.cloneElement(s,{},(0,r.jsx)(c,i({elements:u},{children:a})))},s=n(5198),u=n(6928),p=n(6429),h=n(173),d=n(4916),f=n(2058),m=n(4183),y=n(5592),j=n(6511),v=n(3099),x=n(4171),b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)},g=l.memo((function(){var e=(0,v.oj)(a.v,(function(e){var t=e.i18n;return[[t.lang],t.supportedLangs.map((function(e){return{key:e.key,label:(0,r.jsx)("div",{children:e.label})}}))]})),t=e[0],n=e[1];return(0,r.jsx)(d.Z,b({menu:{onClick:function(e){var t=e.key;a.v.setState("change locale",(function(e){e.i18n.lang=t}))},items:n,selectedKeys:t}},{children:(0,r.jsx)(f.ZP,{type:"ghost",shape:"circle",icon:(0,r.jsx)(j.Z,{})})}))}));g.displayName="LocaleButton";var O=l.memo((function(e){var t=e.route,n=(0,m.TH)(),o=(0,m.s0)(),a=(0,x.$G)().t;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.f,b({location:n,route:t,menuItemRender:function(e,t){return(0,r.jsx)(y.Link,b({to:e.path},{children:t}))},breadcrumbProps:{itemRender:function(e){return(0,r.jsx)(y.Link,b({to:e.path},{children:e.breadcrumbName}))}},layout:"mix",title:"Rallie Admin",actionsRender:function(e){return[(0,r.jsx)(g,{},"locale")]},onMenuHeaderClick:function(){o("/")},formatMessage:function(e){return a(e.id)}},{children:(0,r.jsx)(h._z,{children:(0,r.jsx)(m.j3,{})})}))})}));O.displayName="SystemLayout";var w=n(6810),k=n(239),P=n(6392),_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_.apply(this,arguments)},A=function(e){var t=e.loader,n=e.element,o=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["loader","element","children"]),l=(0,r.jsx)(k.S,_({fallback:(0,r.jsx)(P.ZP,{status:"error",title:"出错了！"})},{children:(0,r.jsx)(w.e,{loader:t})}));return _(_({},a),{element:n||(t?l:void 0),children:Array.isArray(o)?o.map(A):void 0})},S=function(e){return Array.isArray(e)?e.map(A):[]},C=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},E=n(5525),Z=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},I=function(e){return void 0===e&&(e=[]),{path:"app",flatMenu:!0,children:Z([],S(e),!0)}},M=l.memo((function(){var e=(0,v.oj)(a.v,(function(e){var t,o={path:"/",children:[{name:"首页",locale:"core:menu.home",path:"/",element:(0,r.jsx)(w.e,{loader:function(){return n.e(757).then(n.bind(n,4757))}}),hideInMenu:!0},(void 0===t&&(t=[]),{path:"todo",name:"sample",locale:"core:menu.sample",children:C([{index:!0,element:(0,r.jsx)(m.Fg,{to:"/todo/list"})},{path:"list",name:"列表",locale:"core:menu.list",element:(0,r.jsx)("h1",{children:"列表"})},{path:"create",name:"新增",locale:"core:menu.add",element:(0,r.jsx)("h1",{children:"添加"})},{path:":todoID",name:"详情",locale:"core:menu.detail",hideInMenu:!0,children:[{path:"/todo/:todoID",name:"详情",locale:"core:menu.detail",element:(0,r.jsx)("h1",{children:"详情"})},{path:"edit",name:"编辑Todo",locale:"core:menu.edit",element:(0,r.jsx)("h1",{children:"编辑"})}]}],S(t),!0)}),I(e.applications),{name:"设置",locale:"core:menu.settings",icon:(0,r.jsx)(E.Z,{}),path:"settings",element:(0,r.jsx)(w.e,{loader:function(){return Promise.all([n.e(167),n.e(594)]).then(n.bind(n,2594))}})}]};return[{element:(0,r.jsx)(O,{route:o}),children:[o]}]})),t=(0,y.createHashRouter)(e);return(0,r.jsx)(m.pG,{router:t})}));M.displayName="Router";var R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},R.apply(this,arguments)},L=function(){var e=[(0,r.jsx)(s.ZP,{theme:{token:{colorPrimary:"#00b96b"}}},"antd"),(0,r.jsx)(u.Z,{},"antd-app")];return(0,r.jsx)(c,R({elements:e},{children:(0,r.jsx)(M,{})}))},N=a.v.watchState((function(e){e.root&&((0,o.s)(e.root).render((0,r.jsx)(L,{})),Promise.resolve().then((function(){N.unwatch()})))}))},6810:(e,t,n)=>{n.d(t,{e:()=>i});var r=n(1527),o=n(959),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=new WeakMap,i=function(e){var t=e.loader,n=e.loading,i=void 0===n?null:n,c=e.props,s=void 0===c?{}:c;l.has(t)||l.set(t,o.lazy(t));var u=l.get(t);return(0,r.jsx)(o.Suspense,a({fallback:i},{children:(0,r.jsx)(u,a({},s))}))}},239:(e,t,n)=>{n.d(t,{S:()=>l});var r,o=n(959),a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n}return a(t,e),t.prototype.componentDidCatch=function(e,t){var n=this.props.onError;console.error(e,t),null==n||n(e,t),this.setState({hasError:!0})},t.prototype.render=function(){return this.state.hasError?this.props.fallback||null:this.props.children},t}(o.PureComponent)}}]);
//# sourceMappingURL=23.f3a833b7.js.map