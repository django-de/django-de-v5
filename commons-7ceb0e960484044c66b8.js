/*! For license information please see commons-7ceb0e960484044c66b8.js.LICENSE.txt */
(self.webpackChunkdjango_de_website=self.webpackChunkdjango_de_website||[]).push([[351],{9931:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},8678:function(e,t,n){"use strict";var r=n(1721),o=n(6450),a=n.n(o),i=n(1597),c=n(8520),l=n.n(c),u=n(7294),s=n(5960),f=n.n(s),p=n(2732),m=n.n(p),h=(n(9931),function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children;return u.createElement(u.Fragment,null,u.createElement("header",{className:"page-header"},u.createElement("h1",null,u.createElement(i.Link,{className:"logo","aria-label":"Zurück zur Startseite",to:"/"},u.createElement(l(),null),u.createElement("strong",null,"Deutscher Django-Verein e.V."))),u.createElement("ul",null,u.createElement("li",null,u.createElement(i.Link,{className:"/verein/"===t?"active":null,to:"/verein/"},"Verein & Mitgliedschaft")),u.createElement("li",null,u.createElement(i.Link,{className:"/termine/"===t?"active":null,to:"/termine/"},"Termine & Events")),u.createElement("li",null,u.createElement(i.Link,{className:"/hilfe/"===t?"active":null,to:"/hilfe/"},"Hilfe")))),u.createElement("main",null,n),u.createElement("footer",{className:"page-footer"},u.createElement("section",null,u.createElement("h2",{className:"logo"},u.createElement(l(),null),u.createElement("strong",null,"Deutscher Django-Verein e.V.")),u.createElement("ul",{className:"site-nav"},u.createElement("li",null,u.createElement(i.Link,{className:"more",to:"/"},"Startseite")),u.createElement("li",null,u.createElement(i.Link,{className:"more",to:"/verein/"},"Verein & Mitgliedschaft")),u.createElement("li",null,u.createElement(i.Link,{className:"more",to:"/termine/"},"Termine & Events")),u.createElement("li",null,u.createElement(i.Link,{className:"more",to:"/hilfe/"},"Hilfe"))),u.createElement("ul",{className:"social-nav"},u.createElement("li",null,u.createElement("a",{className:"more",href:"https://twitter.com/djangode"},u.createElement(m(),null)," Twitter")),u.createElement("li",null,u.createElement("a",{className:"more",href:"https://github.com/orgs/django-de"},u.createElement(a(),null)," Github")),u.createElement("li",null,u.createElement(i.Link,{to:"/slack/",className:"more"},u.createElement(f(),null)," Slack"))),u.createElement("div",{className:"contact"},u.createElement("p",null,"Deutscher Django-Verein e. V.",u.createElement("br",null),"Kutschbachweg 3",u.createElement("br",null),"04177 Leipzig",u.createElement("br",null),"Deutschland"),u.createElement("p",null,"E-Mail:"," ",u.createElement("a",{href:"mailto:kontakt@django-de.org"},"kontakt@django-de.org")),u.createElement("p",null,"Der Verein wird vertreten durch den Vorstand Norma Driske, Martin Mahner und Stephan Jaekel."),u.createElement("p",null,"Vereinsregister: Amtsgericht Leipzig",u.createElement("br",null),"Registernummer: VR 4814",u.createElement("br",null),"USt-ID: DE269932358"),u.createElement("p",null,u.createElement(i.Link,{to:"/datenschutz/"},"Datenschutzerklärung"))))))},t}(u.Component));t.Z=h},9376:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,a,i,c=n(7294),l=n(5697),u=n.n(l),s=n(6124),f=n.n(s),p=n(523),m=n.n(p),h=n(4756),d=n.n(h),v="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",w="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",M="rel",j="src",z="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",x="defer",V="encodeSpecialCharacters",N="onChangeClientState",I="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],H="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=Q(e,b.TITLE),n=Q(e,I);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},W=function(e){return Q(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===M&&"canonical"===e[n].toLowerCase()||l===M&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=d()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(b.BODY,r),le(b.HTML,o),ce(f,p);var m={baseTag:ue(b.BASE,n),linkTags:ue(b.LINK,a),metaTags:ue(b.META,i),noscriptTags:ue(b.NOSCRIPT,c),scriptTags:ue(b.SCRIPT,u),styleTags:ue(b.STYLE,s)},h={},d={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(d[e]=m[e].oldTags)})),t&&t(),l(e,h,d)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(b.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(y,o,r),link:pe(b.LINK,a,r),meta:pe(b.META,i,r),noscript:pe(b.NOSCRIPT,c,r),script:pe(b.SCRIPT,l,r),style:pe(b.STYLE,u,r),title:pe(b.TITLE,{title:f,titleAttributes:p},r)}},he=f()((function(e){return{baseTag:$([w,z],e),bodyAttributes:G(v,e),defer:Q(e,x),encode:Q(e,V),htmlAttributes:G(y,e),linkTags:J(b.LINK,[M,w],e),metaTags:J(b.META,[S,E,A,k,O],e),noscriptTags:J(b.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:J(b.SCRIPT,[j,C],e),styleTags:J(b.STYLE,[T],e),title:Z(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),me)((function(){return null})),de=(o=he,i=a=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return F({},o,((t={})[r.type]=i,t.titleAttributes=F({},a),t));case b.BODY:return F({},o,{bodyAttributes:F({},a)});case b.HTML:return F({},o,{htmlAttributes:F({},a)})}return F({},o,((n={})[r.type]=F({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);de.renderStatic=de.rewind;var ve=de,ye=n(1597);function ge(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,a=(0,ye.useStaticQuery)("3000541721").site,i=t||a.siteMetadata.description;return c.createElement(ve,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r)})}ge.defaultProps={lang:"de",meta:[],description:""};var be=ge},6450:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"GitHub icon"),r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},5960:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Slack icon"),r.createElement("path",{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},2732:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Twitter icon"),r.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},8520:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("path",{d:"M90.4 2.6h2.5v11.6c-1.3.2-2.2.3-3.3.3-3.1 0-4.7-1.4-4.7-4s1.7-4.2 4.3-4.2c.4 0 .7 0 1.1.1V2.6zm0 5.9c-.3-.1-.5-.1-.8-.1-1.3 0-2 .8-2 2.2 0 1.3.7 2.1 2 2.1.3 0 .5 0 .9-.1V8.5z",key:0}),r.createElement("path",{d:"M96.9 6.5v5.8c0 2-.1 3-.6 3.8-.4.8-.9 1.3-2.1 1.9l-2.3-1.1c1.1-.5 1.6-1 2-1.7.4-.7.5-1.6.5-3.7v-5h2.5zm-2.5-3.9h2.5v2.6h-2.5V2.6zM98.4 7.1c1.1-.5 2.2-.8 3.3-.8 1.3 0 2.1.3 2.5 1 .2.4.3.9.3 1.9v5.1c-1.1.2-2.5.3-3.6.3-2.1 0-3.1-.7-3.1-2.4 0-1.8 1.3-2.6 4.3-2.8v-.5c0-.5-.2-.6-.9-.6-.9 0-2 .3-3 .8v-2zm3.9 4c-1.7.2-2.2.4-2.2 1.1 0 .5.3.7 1 .7.4 0 .7 0 1.2-.1v-1.7zM105.7 6.9c1.5-.4 2.7-.6 4-.6 1.3 0 2.2.3 2.8.9.5.5.7 1.1.7 2.4v4.9h-2.5V9.7c0-1-.3-1.3-1.2-1.3-.3 0-.7 0-1.2.2v6h-2.5V6.9zM114.1 15.9c.9.5 1.8.7 2.7.7 1.6 0 2.4-.7 2.4-2.3-.5.2-1 .3-1.6.3-2.2 0-3.6-1.5-3.6-3.8 0-2.9 2.1-4.5 5.7-4.5 1.1 0 2.1.1 3.3.4l-.9 1.8c-.7-.1-.1 0-.6-.1v4.5c0 2.2-.2 3.2-.7 4-.8 1.2-2.1 1.8-4.1 1.8-1 0-1.8-.1-2.7-.5v-2.3zm5-7.6h-.3c-.5 0-1.1.1-1.5.4-.6.3-.9 1-.9 1.8 0 1.3.6 2 1.7 2 .3 0 .6-.1.9-.2V11.4 8.3zM126.9 6.3c2.5 0 4 1.6 4 4.1 0 2.6-1.6 4.3-4.1 4.3-2.5 0-4.1-1.6-4.1-4.1 0-2.7 1.6-4.3 4.2-4.3zm-.1 6.4c1 0 1.5-.8 1.5-2.2 0-1.4-.6-2.2-1.5-2.2-1 0-1.6.8-1.6 2.2.1 1.4.6 2.2 1.6 2.2z",key:1}),r.createElement("g",{key:2},r.createElement("path",{d:"M136.5 6.8V7c.4 1.5 1.1 3.9 1.7 5.6l.1.3.1.6.1-.6.1-.3c.8-1.8 1.5-4.1 1.9-5.6v-.2h1.5l-.1.3c-.7 2.4-1.7 4.8-2.9 7.2l-.1.3h-1.5l-.1-.3c-1.1-2.5-2-5-2.7-7.5h1.9zM143.8 10.8v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9V14c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM150.5 7.3c.9-.4 2.1-.6 3.1-.6.5 0 .9.1 1.3.2v1.3c-.4-.2-.8-.3-1.3-.3-.6 0-1.1.1-1.6.4v6.4h-1.5V7.3zM156.4 10.8v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9V14c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM163.1 3.5h1.6v1.7h-1.6V3.5zm0 3.3h1.5v7.8h-1.5V6.8zM166.5 7.2c1.2-.4 2.2-.5 3.3-.5 1.2 0 2 .3 2.5.8.4.5.6 1 .6 2.1v5.1h-1.5v-5c0-1.3-.5-1.8-1.8-1.8-.6 0-1 .1-1.6.3v6.5h-1.5V7.2z"})),r.createElement("g",{key:3},r.createElement("path",{d:"M23.4 2.4h1.5v11.8c-1.1.2-1.9.3-2.8.3-2.7 0-4.1-1.4-4.1-3.8 0-2.5 1.6-4.2 4.2-4.2.4 0 .8 0 1.2.2V2.4zm0 5.6c-.4-.1-.7-.2-1.2-.2-1.7 0-2.7 1.1-2.7 2.9 0 1.8.9 2.8 2.6 2.8.4 0 .8 0 1.3-.1V8zM27.7 10.7v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9v1.3c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM35.8 6.7v4.8c0 1.4.5 1.9 1.9 1.9.5 0 .9 0 1.5-.1V6.7h1.5v7.6c-1.3.2-2.2.3-3.2.3-1.2 0-2-.2-2.5-.7-.5-.5-.7-1.1-.7-2.3V6.7h1.5zM41.6 6.9h1.3V4.8h1.3v2.1H46V8h-1.8v4.1c0 1.1.2 1.4 1.1 1.4.2 0 .3 0 .6-.1v1.1c-.3.1-.7.1-1 .1-.8 0-1.4-.2-1.7-.7-.3-.4-.3-.6-.3-1.7V8h-1.2V6.9zM46.5 12.8c.6.5 1.3.7 2 .7.9 0 1.4-.4 1.4-1 0-.4-.2-.7-.6-.9l-1-.5c-1.4-.7-1.8-1.2-1.8-2.2 0-1.4 1.1-2.3 2.8-2.3.7 0 1.2.1 1.9.4v1.4c-.6-.4-1.1-.6-1.8-.6-.8 0-1.4.4-1.4 1 0 .5.2.7 1.4 1.3.8.4 1.2.6 1.5.9.4.4.6.9.6 1.5 0 1.4-1.1 2.3-2.9 2.3-.7 0-1.3-.1-2-.5v-1.5zM58.2 8.4c-.6-.4-1.1-.6-1.8-.6-1.6 0-2.6 1.1-2.6 2.9s1 2.8 2.6 2.8c.7 0 1.2-.2 1.9-.7v1.3c-.7.4-1.3.5-2.2.5-2.4 0-3.9-1.5-3.9-3.9 0-2.5 1.6-4.2 4-4.2.7 0 1.3.1 1.9.5v1.4zM59 2.4h1.5v4.5c.7-.3 1.3-.4 2-.4 1 0 1.9.3 2.3.8.4.5.6 1 .6 2.1v5.1h-1.5V9.6c0-1.3-.5-1.8-1.7-1.8-.5 0-1.1.1-1.7.4v6.3H59V2.4zM68.1 10.7v.2c0 1.6 1 2.5 2.6 2.5 1 0 1.7-.3 2.6-.9v1.3c-.8.5-1.7.8-2.7.8-2.4 0-3.8-1.4-3.8-3.9s1.5-4.2 3.7-4.2c1.2 0 2.2.5 2.7 1.4.4.6.5 1.3.5 2.4v.4h-5.6zm4.1-1.1c-.1-1.2-.7-1.8-1.8-1.8s-1.9.7-2.1 1.8h3.9zM74.8 7.2c.9-.4 2.1-.6 3.1-.6.5 0 .9.1 1.4.2V8c-.4-.2-.8-.3-1.3-.3-.6 0-1.1.1-1.6.4v6.4h-1.5V7.2z"})),r.createElement("g",{key:4},r.createElement("path",{d:"M.9 9.4c1.2-.1 1.7-.6 1.7-1.7 0-.5 0-1-.1-1.7-.1-.6-.1-1.2-.1-1.7 0-2 1.2-3.3 3.2-3.3H6v1h-.3c-1.3 0-2 .8-2 2.3 0 .5 0 1.1.1 1.7 0 .6.1 1.2.1 1.7 0 1.2-.5 1.9-1.6 2.3 1.1.3 1.6 1.1 1.6 2.3 0 .5 0 1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.5.7 2.3 2 2.3h.2v.9h-.4c-1.9 0-3.2-1.3-3.2-3.3 0-.5 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-1.1-.5-1.6-1.7-1.7V9.4zM6.7 9.4c1.2-.1 1.7-.6 1.7-1.7 0-.5 0-1-.1-1.7-.1-.6-.1-1.2-.1-1.7 0-2 1.2-3.3 3.2-3.3h.4v1h-.2c-1.3 0-2 .8-2 2.3 0 .5 0 1.1.1 1.7 0 .6.1 1.2.1 1.7 0 1.2-.5 1.9-1.6 2.3 1.1.3 1.6 1.1 1.6 2.3 0 .5 0 1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.5.7 2.3 2 2.3h.2v.9h-.4c-1.9 0-3.2-1.3-3.2-3.3 0-.5 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-1.1-.5-1.6-1.7-1.7V9.4z"})),r.createElement("g",{key:5},r.createElement("path",{d:"M178.6 17.8h.2c1.3 0 2-.8 2-2.3 0-.5 0-1.1-.1-1.7 0-.6-.1-1.2-.1-1.7 0-1.2.5-1.9 1.6-2.3-1.1-.3-1.6-1-1.6-2.2 0-.5 0-1 .1-1.7 0-.6.1-1.2.1-1.7 0-1.5-.7-2.3-2.1-2.3h-.2v-.8h.4c1.9 0 3.2 1.3 3.2 3.3 0 .5 0 1.1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.1.5 1.6 1.7 1.7v.9c-1.2.1-1.7.6-1.7 1.7 0 .4 0 1 .1 1.7.1.6.1 1.2.1 1.7 0 2-1.2 3.3-3.2 3.3h-.4v-1zM184.4 17.8h.2c1.3 0 2-.8 2-2.3 0-.5 0-1.1-.1-1.7 0-.6-.1-1.2-.1-1.7 0-1.2.5-1.9 1.6-2.3-1.1-.3-1.6-1-1.6-2.2 0-.5 0-1 .1-1.7 0-.6.1-1.2.1-1.7 0-1.5-.7-2.3-2.1-2.3h-.2v-.8h.4c1.9 0 3.2 1.3 3.2 3.3 0 .5 0 1.1-.1 1.7 0 .6-.1 1.2-.1 1.7 0 1.1.5 1.6 1.7 1.7v.9c-1.2.1-1.7.6-1.7 1.7 0 .4 0 1 .1 1.7.1.6.1 1.2.1 1.7 0 2-1.2 3.3-3.2 3.3h-.4v-1z"}))])}o.defaultProps={version:"1.1",x:"0",y:"0",viewBox:"0 0 190.4 19.5",xmlSpace:"preserve",alt:"Logo des Deutschen Django Vereins"},e.exports=o,o.default=o}}]);