/*! For license information please see commons-c3699b02216ba724a999.js.LICENSE.txt */
(self.webpackChunkdjango_de_website=self.webpackChunkdjango_de_website||[]).push([[351],{2130:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8827:function(e){"use strict";e.exports=Object.assign},3730:function(e,t,n){n(2087);var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,c="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,u,l,s;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(u=n;0!=u--;)if(!a(e[u],t[u]))return!1;return!0}if(o&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],t.get(u.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(u=n;0!=u--;)if(e[u]!==t[u])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString();if((n=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(u=n;0!=u--;)if(!Object.prototype.hasOwnProperty.call(t,l[u]))return!1;if(r&&e instanceof Element)return!1;for(u=n;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],t[l[u]]))return!1;return!0}return e!=e&&t!=t}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3830:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var c=o.prototype;return c.UNSAFE_componentWillMount=function(){l.push(this),s()},c.componentDidUpdate=function(){s()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},c.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",a),f}}},9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);e.exports=function(e){return c?i.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),c=n(8113),a=i.process,u=i.Deno,l=a&&a.versions||u&&u.version,s=l&&l.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,l=a&&(!r||r&&c(i,"name").configurable);e.exports={EXISTS:a,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,c=r&&o.bind.bind(i,i);e.exports=r?c:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return c(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,c=n(4811),a=n(7854),u=n(111),l=n(8880),s=n(2597),f=n(5465),p=n(6200),h=n(3501),m="Object already initialized",v=a.TypeError,d=a.WeakMap;if(c||f.state){var y=f.state||(f.state=new d);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw v(m);return t.facade=e,y.set(e,t),t},o=function(e){return y.get(e)||{}},i=function(e){return y.has(e)}}else{var g=p("state");h[g]=!0,r=function(e,t){if(s(e,g))throw v(m);return t.facade=e,l(e,g,t),t},o=function(e){return s(e,g)?e[g]:{}},i=function(e){return s(e,g)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}}}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),c=n(3307),a=Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},6339:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),c=n(2597),a=n(9781),u=n(6530).CONFIGURABLE,l=n(2788),s=n(9909),f=s.enforce,p=s.get,h=String,m=Object.defineProperty,v=r("".slice),d=r("".replace),y=r([].join),g=a&&!o((function(){return 8!==m((function(){}),"length",{value:8}).length})),b=String(String).split("String"),E=e.exports=function(e,t,n){"Symbol("===v(h(t),0,7)&&(t="["+d(h(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!c(e,"name")||u&&e.name!==t)&&(a?m(e,"name",{value:t,configurable:!0}):e.name=t),g&&n&&c(n,"arity")&&e.length!==n.arity&&m(e,"length",{value:n.arity});try{n&&c(n,"constructor")&&n.constructor?a&&m(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=f(e);return c(r,"source")||(r.source=y(b,"string"==typeof t?t:"")),e};Function.prototype.toString=E((function(){return i(this)&&p(this).source||l(this)}),"toString")},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),c=n(9670),a=n(4948),u=TypeError,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",h="writable";t.f=r?i?function(e,t,n){if(c(e),t=a(t),c(n),"function"==typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=s(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(c(e),t=a(t),c(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),c=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw c("Can't convert object to primitive value")}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",c=r[i]||o(i,{});e.exports=c},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293),i=n(7854).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),c=n(8173),a=n(2140),u=n(5112),l=TypeError,s=u("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,u=c(e,s);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!o(n)||i(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),c=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+c(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),c=n(9711),a=n(6293),u=n(3307),l=r.Symbol,s=o("wks"),f=u?l.for||l:l&&l.withoutSetter||c;e.exports=function(e){return i(s,e)||(s[e]=a&&i(l,e)?l[e]:f("Symbol."+e)),s[e]}},2087:function(e,t,n){var r=n(7854),o=n(9781),i=n(7045),c=n(7066),a=n(7293),u=r.RegExp,l=u.prototype;o&&a((function(){var e=!0;try{u(".","d")}catch(a){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var c in e&&(i.hasIndices="d"),i)o(c,i[c]);return Object.getOwnPropertyDescriptor(l,"flags").get.call(t)!==r||n!==r}))&&i(l,"flags",{configurable:!0,get:c})},8678:function(e,t,n){"use strict";var r=n(4578),o=n(7730),i=n.n(o),c=n(1883),a=n(5851),u=n.n(a),l=n(7294),s=n(5986),f=n.n(s),p=n(6155),h=n.n(p);n(2130);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const{location:e,children:t}=this.props;return l.createElement(l.Fragment,null,l.createElement("header",{className:"page-header"},l.createElement("h1",null,l.createElement(c.Link,{className:"logo","aria-label":"Zurück zur Startseite",to:"/"},l.createElement(u(),null),l.createElement("strong",null,"Deutscher Django-Verein e.V."))),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.Link,{className:"/verein/"===e?"active":null,to:"/verein/"},"Verein & Mitgliedschaft")),l.createElement("li",null,l.createElement(c.Link,{className:"/termine/"===e?"active":null,to:"/termine/"},"Termine & Events")),l.createElement("li",null,l.createElement(c.Link,{className:"/hilfe/"===e?"active":null,to:"/hilfe/"},"Hilfe")))),l.createElement("main",null,t),l.createElement("footer",{className:"page-footer"},l.createElement("section",null,l.createElement("h2",{className:"logo"},l.createElement(u(),null),l.createElement("strong",null,"Deutscher Django-Verein e.V.")),l.createElement("ul",{className:"site-nav"},l.createElement("li",null,l.createElement(c.Link,{className:"more",to:"/"},"Startseite")),l.createElement("li",null,l.createElement(c.Link,{className:"more",to:"/verein/"},"Verein & Mitgliedschaft")),l.createElement("li",null,l.createElement(c.Link,{className:"more",to:"/termine/"},"Termine & Events")),l.createElement("li",null,l.createElement(c.Link,{className:"more",to:"/hilfe/"},"Hilfe"))),l.createElement("ul",{className:"social-nav"},l.createElement("li",null,l.createElement("a",{className:"more",href:"https://twitter.com/djangode"},l.createElement(h(),null)," Twitter")),l.createElement("li",null,l.createElement("a",{className:"more",href:"https://github.com/orgs/django-de"},l.createElement(i(),null)," Github")),l.createElement("li",null,l.createElement(c.Link,{to:"/slack/",className:"more"},l.createElement(f(),null)," Slack"))),l.createElement("div",{className:"contact"},l.createElement("p",null,"Deutscher Django-Verein e. V.",l.createElement("br",null),"Engertstr. 18",l.createElement("br",null),"04177 Leipzig",l.createElement("br",null),"Deutschland"),l.createElement("p",null,"E-Mail:"," ",l.createElement("a",{href:"mailto:kontakt@django-de.org"},"kontakt@django-de.org")),l.createElement("p",null,"Der Verein wird vertreten durch den Vorstand Norma Driske, Martin Mahner und Stephan Jaekel."),l.createElement("p",null,"Vereinsregister: Amtsgericht Leipzig",l.createElement("br",null),"Registernummer: VR 4814",l.createElement("br",null),"USt-ID: DE269932358"),l.createElement("p",null,l.createElement(c.Link,{to:"/datenschutz/"},"Datenschutzerklärung"))))))},t}(l.Component);t.Z=m},1651:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,o,i,c,a=n(7294),u=n(5697),l=n.n(u),s=n(3830),f=n.n(s),p=n(3730),h=n.n(p),m=n(8827),v=n.n(m),d="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",w="href",S="http-equiv",O="innerHTML",A="itemprop",x="name",j="property",C="rel",k="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",L="defer",V="encodeSpecialCharacters",I="onChangeClientState",N="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),_=[b.NOSCRIPT,b.SCRIPT,b.STYLE],R="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=$(e,b.TITLE),n=$(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,z);return t||r||void 0},K=function(e){return $(e,I)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===C&&"canonical"===e[n].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==O&&a!==T&&a!==A||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=v()({},r[a],o[a]);r[a]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),Q=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:n.g.cancelAnimationFrame||Q,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(b.BODY,r),ce(b.HTML,o),ie(f,p);var h={baseTag:ae(b.BASE,n),linkTags:ae(b.LINK,i),metaTags:ae(b.META,c),noscriptTags:ae(b.NOSCRIPT,a),scriptTags:ae(b.SCRIPT,l),styleTags:ae(b.STYLE,s)},m={},v={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(v[e]=h[e].oldTags)})),t&&t(),u(e,m,v)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(b.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==c.join(",")&&n.setAttribute(R,c.join(","))}},ae=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+R+"]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(R,"true"),o.some((function(e,t){return c=t,n.isEqualNode(e)}))?o.splice(c,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},se=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=le(n,r),[a.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=oe(t);return o?"<"+e+" "+R+'="true" '+o+">"+U(i,r)+"</"+e+">":"<"+e+" "+R+'="true">'+U(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case y:return{toComponent:function(){return le(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",c=-1===_.indexOf(e);return t+"<"+e+" "+R+'="true" '+o+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:se(b.BASE,t,r),bodyAttributes:se(d,n,r),htmlAttributes:se(y,o,r),link:se(b.LINK,i,r),meta:se(b.META,c,r),noscript:se(b.NOSCRIPT,a,r),script:se(b.SCRIPT,u,r),style:se(b.STYLE,l,r),title:se(b.TITLE,{title:f,titleAttributes:p},r)}},pe=f()((function(e){return{baseTag:G([w,M],e),bodyAttributes:W(d,e),defer:$(e,L),encode:$(e,V),htmlAttributes:W(y,e),linkTags:Z(b.LINK,[C,w],e),metaTags:Z(b.META,[x,E,S,j,A],e),noscriptTags:Z(b.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:Z(b.SCRIPT,[k,O],e),styleTags:Z(b.STYLE,[T],e),title:Y(e),titleAttributes:W(g,e)}}),(function(e){ne&&ee(ne),e.defer?ne=X((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),fe)((function(){return null})),he=(o=pe,c=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case b.TITLE:return B({},o,((t={})[r.type]=c,t.titleAttributes=B({},i),t));case b.BODY:return B({},o,{bodyAttributes:B({},i)});case b.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(a.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind;var me=he,ve=n(1883);function de(e){let{description:t,lang:n,meta:r,title:o}=e;const{site:i}=(0,ve.useStaticQuery)("3000541721"),c=t||i.siteMetadata.description;return a.createElement(me,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}de.defaultProps={lang:"de",meta:[],description:""};var ye=de},7730:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"GitHub icon"),r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},5986:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Slack icon"),r.createElement("path",{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},6155:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Twitter icon"),r.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},5851:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("path",{d:"M90.4 2.6h2.5v11.6c-1.3.2-2.2.3-3.3.3-3.1 0-4.7-1.4-4.7-4s1.7-4.2 4.3-4.2c.4 0 .7 0 1.1.1V2.6zm0 5.9c-.3-.1-.5-.1-.8-.1-1.3 0-2 .8-2 2.2 0 1.3.7 2.1 2 2.1.3 0 .5 0 .9-.1V8.5z",key:0}),r.createElement("path",{d:"M96.9 6.5v5.8c0 2-.1 3-.6 3.8-.4.8-.9 1.3-2.1 1.9l-2.3-1.1c1.1-.5 1.6-1 2-1.7.4-.7.5-1.6.5-3.7v-5h2.5zm-2.5-3.9h2.5v2.6h-2.5V2.6zM98.4 7.1c1.1-.5 2.2-.8 3.3-.8 1.3 0 2.1.3 2.5 1 .2.4.3.9.3 1.9v5.1c-1.1.2-2.5.3-3.6.3-2.1 0-3.1-.7-3.1-2.4 0-1.8 1.3-2.6 4.3-2.8v-.5c0-.5-.2-.6-.9-.6-.9 0-2 .3-3 .8v-2zm3.9 4c-1.7.2-2.2.4-2.2 1.1 0 .5.3.7 1 .7.4 0 .7 0 1.2-.1v-1.7zM105.7 6.9c1.5-.4 2.7-.6 4-.6 1.3 0 2.2.3 2.8.9.5.5.7 1.1.7 2.4v4.9h-2.5V9.7c0-1-.3-1.3-1.2-1.3-.3 0-.7 0-1.2.2v6h-2.5V6.9zM114.1 15.9c.9.5 1.8.7 2.7.7 1.6 0 2.4-.7 2.4-2.3-.5.2-1 .3-1.6.3-2.2 0-3.6-1.5-3.6-3.8 0-2.9 2.1-4.5 5.7-4.5 1.1 0 2.1.1 3.3.4l-.9 1.8c-.7-.1-.1 0-.6-.1v4.5c0 2.2-.2 3.2-.7 4-.8 1.2-2.1 1.8-4.1 1.8-1 0-1.8-.1-2.7-.5v-2.3zm5-7.6h-.3c-.5 0-1.1.1-1.5.4-.6.3-.9 1-.9 1.8 0 1.3.6 2 1.7 2 .3 0 .6-.1.9-.2V11.4 8.3zM126.9 6.3c2.5 0 4 1.6 4 4.1 0 2.6-1.6 4.3-4.1 4.3-2.5 0-4.1-1.6-4.1-4.1 0-2.7 1.6-4.3 4.2-4.3zm-.1 6.4c1 0 1.5-.8 1.5-2.2 0-1.4-.6-2.2-1.5-2.2-1 0-1.6.8-1.6 2.2.1 1.4.6 2.2 1.6 2.2z",key:1}),r.createElement("g",{key:2},r.createElement("path",{d:"M136.5 6.8V7c.4 1.5 1.1 3.9 1.7 5.6l.1.3.1.6.1-.6.1-.3c.8-1.8 1.5-4.1 1.9-5.6v-.2h1.5l-.1.3c-.7 2.4-1.7 4.8-2.9 7.2l-.1.3h-1.5l-.1-.3c-1.1-2.5-2-5-2.7-7.5h1.9zM143.8 10.8v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9V14c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM150.5 7.3c.9-.4 2.1-.6 3.1-.6.5 0 .9.1 1.3.2v1.3c-.4-.2-.8-.3-1.3-.3-.6 0-1.1.1-1.6.4v6.4h-1.5V7.3zM156.4 10.8v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9V14c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM163.1 3.5h1.6v1.7h-1.6V3.5zm0 3.3h1.5v7.8h-1.5V6.8zM166.5 7.2c1.2-.4 2.2-.5 3.3-.5 1.2 0 2 .3 2.5.8.4.5.6 1 .6 2.1v5.1h-1.5v-5c0-1.3-.5-1.8-1.8-1.8-.6 0-1 .1-1.6.3v6.5h-1.5V7.2z"})),r.createElement("g",{key:3},r.createElement("path",{d:"M23.4 2.4h1.5v11.8c-1.1.2-1.9.3-2.8.3-2.7 0-4.1-1.4-4.1-3.8 0-2.5 1.6-4.2 4.2-4.2.4 0 .8 0 1.2.2V2.4zm0 5.6c-.4-.1-.7-.2-1.2-.2-1.7 0-2.7 1.1-2.7 2.9 0 1.8.9 2.8 2.6 2.8.4 0 .8 0 1.3-.1V8zM27.7 10.7v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9v1.3c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM35.8 6.7v4.8c0 1.4.5 1.9 1.9 1.9.5 0 .9 0 1.5-.1V6.7h1.5v7.6c-1.3.2-2.2.3-3.2.3-1.2 0-2-.2-2.5-.7-.5-.5-.7-1.1-.7-2.3V6.7h1.5zM41.6 6.9h1.3V4.8h1.3v2.1H46V8h-1.8v4.1c0 1.1.2 1.4 1.1 1.4.2 0 .3 0 .6-.1v1.1c-.3.1-.7.1-1 .1-.8 0-1.4-.2-1.7-.7-.3-.4-.3-.6-.3-1.7V8h-1.2V6.9zM46.5 12.8c.6.5 1.3.7 2 .7.9 0 1.4-.4 1.4-1 0-.4-.2-.7-.6-.9l-1-.5c-1.4-.7-1.8-1.2-1.8-2.2 0-1.4 1.1-2.3 2.8-2.3.7 0 1.2.1 1.9.4v1.4c-.6-.4-1.1-.6-1.8-.6-.8 0-1.4.4-1.4 1 0 .5.2.7 1.4 1.3.8.4 1.2.6 1.5.9.4.4.6.9.6 1.5 0 1.4-1.1 2.3-2.9 2.3-.7 0-1.3-.1-2-.5v-1.5zM58.2 8.4c-.6-.4-1.1-.6-1.8-.6-1.6 0-2.6 1.1-2.6 2.9s1 2.8 2.6 2.8c.7 0 1.2-.2 1.9-.7v1.3c-.7.4-1.3.5-2.2.5-2.4 0-3.9-1.5-3.9-3.9 0-2.5 1.6-4.2 4-4.2.7 0 1.3.1 1.9.5v1.4zM59 2.4h1.5v4.5c.7-.3 1.3-.4 2-.4 1 0 1.9.3 2.3.8.4.5.6 1 .6 2.1v5.1h-1.5V9.6c0-1.3-.5-1.8-1.7-1.8-.5 0-1.1.1-1.7.4v6.3H59V2.4zM68.1 10.7v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9v1.3c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM74.8 7.2c.9-.4 2.1-.6 3.1-.6.5 0 .9.1 1.4.2V8c-.4-.2-.8-.3-1.3-.3-.6 0-1.1.1-1.6.4v6.4h-1.5V7.2z"})),r.createElement("g",{key:4},r.createElement("path",{d:"M.9 9.4c1.2-.1 1.7-.6 1.7-1.7 0-.5 0-1-.1-1.7-.1-.6-.1-1.2-.1-1.7 0-2 1.2-3.3 3.2-3.3H6v1h-.3c-1.3 0-2 .8-2 2.3 0 .5 0 1.1.1 1.7 0 .6.1 1.2.1 1.7 0 1.2-.5 1.9-1.6 2.3 1.1.3 1.6 1.1 1.6 2.3 0 .5 0 1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.5.7 2.3 2 2.3h.2v.9h-.4c-1.9 0-3.2-1.3-3.2-3.3 0-.5 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-1.1-.5-1.6-1.7-1.7V9.4zM6.7 9.4c1.2-.1 1.7-.6 1.7-1.7 0-.5 0-1-.1-1.7-.1-.6-.1-1.2-.1-1.7 0-2 1.2-3.3 3.2-3.3h.4v1h-.2c-1.3 0-2 .8-2 2.3 0 .5 0 1.1.1 1.7 0 .6.1 1.2.1 1.7 0 1.2-.5 1.9-1.6 2.3 1.1.3 1.6 1.1 1.6 2.3 0 .5 0 1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.5.7 2.3 2 2.3h.2v.9h-.4c-1.9 0-3.2-1.3-3.2-3.3 0-.5 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-1.1-.5-1.6-1.7-1.7V9.4z"})),r.createElement("g",{key:5},r.createElement("path",{d:"M178.6 17.8h.2c1.3 0 2-.8 2-2.3 0-.5 0-1.1-.1-1.7 0-.6-.1-1.2-.1-1.7 0-1.2.5-1.9 1.6-2.3-1.1-.3-1.6-1-1.6-2.2 0-.5 0-1 .1-1.7 0-.6.1-1.2.1-1.7 0-1.5-.7-2.3-2.1-2.3h-.2v-.8h.4c1.9 0 3.2 1.3 3.2 3.3 0 .5 0 1.1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.1.5 1.6 1.7 1.7v.9c-1.2.1-1.7.6-1.7 1.7 0 .4 0 1 .1 1.7.1.6.1 1.2.1 1.7 0 2-1.2 3.3-3.2 3.3h-.4v-1zM184.4 17.8h.2c1.3 0 2-.8 2-2.3 0-.5 0-1.1-.1-1.7 0-.6-.1-1.2-.1-1.7 0-1.2.5-1.9 1.6-2.3-1.1-.3-1.6-1-1.6-2.2 0-.5 0-1 .1-1.7 0-.6.1-1.2.1-1.7 0-1.5-.7-2.3-2.1-2.3h-.2v-.8h.4c1.9 0 3.2 1.3 3.2 3.3 0 .5 0 1.1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.1.5 1.6 1.7 1.7v.9c-1.2.1-1.7.6-1.7 1.7 0 .4 0 1 .1 1.7.1.6.1 1.2.1 1.7 0 2-1.2 3.3-3.2 3.3h-.4v-1z"}))])}o.defaultProps={version:"1.1",x:"0",y:"0",viewBox:"0 0 190.4 19.5",xmlSpace:"preserve",alt:"Logo des Deutschen Django Vereins"},e.exports=o,o.default=o}}]);