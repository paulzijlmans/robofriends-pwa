(this["webpackJsonprobofriends-pwa"]=this["webpackJsonprobofriends-pwa"]||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(3),c=t.n(r),i=t(6),a=t(9),s=t(13),l=t(14),d=(t(26),t(4)),h=t(5),u=t(8),b=t(7),j="CHANGE_SEARCH_FIELD",f="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",g="REQUEST_ROBOTS_FAILED",v=t(1),O=function(e){var n=e.name,t=e.email,o=e.id;return Object(v.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(v.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:n}),Object(v.jsx)("p",{children:t})]})]})},w=function(e){var n=e.robots;return Object(v.jsx)("div",{children:n.map((function(e,t){return Object(v.jsx)(O,{id:n[t].id,name:n[t].name,email:n[t].email},n[t].id)}))})},m=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(h.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(v.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),t}(o.Component),y=function(e){return Object(v.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},x=function(e){var n=e.searchChange;return Object(v.jsx)("div",{className:"pa2",children:Object(v.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},k=(t(28),function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,r=e.isPending,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(v.jsxs)("div",{className:"tc",children:[Object(v.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(v.jsx)(x,{searchChange:o}),Object(v.jsx)(y,{children:r?Object(v.jsx)("h1",{children:"Loading"}):Object(v.jsx)(m,{children:Object(v.jsx)(w,{robots:c})})})]})}}]),t}(o.Component)),E=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:j,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:f}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:g,payload:n})}))}))}}}))(k),R=(t(29),t(2)),S={searchField:""},C={robots:[],isPending:!0},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(s.createLogger)(),F=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object(R.a)(Object(R.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case f:return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case p:return Object(R.a)(Object(R.a)({},e),{},{robots:n.payload,isPending:!1});case g:return Object(R.a)(Object(R.a)({},e),{},{error:n.payload});default:return e}}}),L=Object(a.c)(F,Object(a.a)(l.a,T));c.a.render(Object(v.jsx)(i.a,{store:L,children:Object(v.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-pwa","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(n,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.933fb796.chunk.js.map