!function(e){function t(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=d.p+""+e+"."+w+".hot-update.js",t.appendChild(r)}function r(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,r=d.p+""+w+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(t){return e(t)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(t){return void e(t)}e(null,n)}}}function n(e){function t(e,t){"ready"===x&&a("prepare"),j++,d.e(e,function(){function r(){j--,"prepare"===x&&(D[e]||f(e),0===j&&0===H&&s())}try{t.call(null,n)}finally{r()}})}var r=A[e];if(!r)return d;var n=function(t){return r.hot.active?A[t]?(A[t].parents.indexOf(e)<0&&A[t].parents.push(e),r.children.indexOf(t)<0&&r.children.push(t)):_=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),_=[]),d(t)};for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(h?Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return d[e]},set:function(t){d[e]=t}}}(o)):n[o]=d[o]);return h?Object.defineProperty(n,"e",{enumerable:!0,value:t}):n.e=t,n}function o(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,r){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r;else t._acceptedDependencies[e]=r},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:c,apply:p,status:function(e){return e?void g.push(e):x},addStatusHandler:function(e){g.push(e)},removeStatusHandler:function(e){var t=g.indexOf(e);t>=0&&g.splice(t,1)},data:m[e]};return t}function a(e){x=e;for(var t=0;t<g.length;t++)g[t].call(null,e)}function i(e){var t=+e+""===e;return t?+e:e}function c(e,t){if("idle"!==x)throw new Error("check() is only allowed in idle status");"function"==typeof e?(O=!1,t=e):(O=e,t=t||function(e){if(e)throw e}),a("check"),r(function(e,r){if(e)return t(e);if(!r)return a("idle"),void t(null,null);E={},P={},D={};for(var n=0;n<r.c.length;n++)P[r.c[n]]=!0;b=r.h,a("prepare"),v=t,y={};var o=1;f(o),"prepare"===x&&0===j&&0===H&&s()})}function l(e,t){if(P[e]&&E[e]){E[e]=!1;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0===--H&&0===j&&s()}}function f(e){P[e]?(E[e]=!0,H++,t(e)):D[e]=!0}function s(){a("ready");var e=v;if(v=null,e)if(O)p(O,e);else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(i(r));e(null,t)}}function p(t,r){function n(e){for(var t=[e],r={},n=t.slice();n.length>0;){var a=n.pop(),e=A[a];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+a);if(0===a)return;for(var i=0;i<e.parents.length;i++){var c=e.parents[i],l=A[c];if(l.hot._declinedDependencies[a])return new Error("Aborted because of declined dependency: "+a+" in "+c);t.indexOf(c)>=0||(l.hot._acceptedDependencies[a]?(r[c]||(r[c]=[]),o(r[c],[a])):(delete r[c],t.push(c),n.push(c)))}}}return[t,r]}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(r=t,t={}):t&&"object"==typeof t?r=r||function(e){if(e)throw e}:(t={},r=r||function(e){if(e)throw e});var c={},l=[],f={};for(var s in y)if(Object.prototype.hasOwnProperty.call(y,s)){var p=i(s),u=n(p);if(!u){if(t.ignoreUnaccepted)continue;return a("abort"),r(new Error("Aborted because "+p+" is not accepted"))}if(u instanceof Error)return a("abort"),r(u);f[p]=y[p],o(l,u[0]);for(var p in u[1])Object.prototype.hasOwnProperty.call(u[1],p)&&(c[p]||(c[p]=[]),o(c[p],u[1][p]))}for(var h=[],v=0;v<l.length;v++){var p=l[v];A[p]&&A[p].hot._selfAccepted&&h.push({module:p,errorHandler:A[p].hot._selfAccepted})}a("dispose");for(var O=l.slice();O.length>0;){var p=O.pop(),g=A[p];if(g){for(var H={},j=g.hot._disposeHandlers,D=0;D<j.length;D++){var E=j[D];E(H)}m[p]=H,g.hot.active=!1,delete A[p];for(var D=0;D<g.children.length;D++){var P=A[g.children[D]];if(P){var T=P.parents.indexOf(p);T>=0&&P.parents.splice(T,1)}}}}for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p))for(var g=A[p],$=c[p],D=0;D<$.length;D++){var k=$[D],T=g.children.indexOf(k);T>=0&&g.children.splice(T,1)}a("apply"),w=b;for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(e[p]=f[p]);var q=null;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){for(var g=A[p],$=c[p],M=[],v=0;v<$.length;v++){var k=$[v],E=g.hot._acceptedDependencies[k];M.indexOf(E)>=0||M.push(E)}for(var v=0;v<M.length;v++){var E=M[v];try{E(c)}catch(e){q||(q=e)}}}for(var v=0;v<h.length;v++){var S=h[v],p=S.module;_=[p];try{d(p)}catch(e){if("function"==typeof S.errorHandler)try{S.errorHandler(e)}catch(e){q||(q=e)}else q||(q=e)}}return q?(a("fail"),r(q)):(a("idle"),void r(null,l))}function d(t){if(A[t])return A[t].exports;var r=A[t]={exports:{},id:t,loaded:!1,hot:o(t),parents:_,children:[]};return e[t].call(r.exports,r,r.exports,n(t)),r.loaded=!0,r.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){l(e,t),u&&u(e,t)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(e){}var v,y,b,O=!0,w="b695855d1eb3620ced89",m={},_=[],g=[],x="idle",H=0,j=0,D={},E={},P={},A={};return d.m=e,d.c=A,d.p="/",d.h=function(){return w},n(0)(0)}({0:function(e,t,r){"use strict";r(337),r(338),$(document).ready(function(){function e(e,t,r){var n;return function(){var o=this,a=arguments,i=function(){n=null,r||e.apply(o,a)},c=r&&!n;clearTimeout(n),n=setTimeout(i,t),c&&e.apply(o,a)}}var t=e(function(){var e=$(this).data("scrollfrom");if("fixed"==$("nav.navbar").css("position"))var t=$("[data-scrollTo="+e+"]").offset().top-$("nav.navbar").height();else var t=$("[data-scrollTo="+e+"]").offset().top;$("html,body").animate({scrollTop:t},1e3)},250);$("[data-scrollFrom]").click(function(e){e.preventDefault(),t.call(this)})})},337:function(e,t){},338:function(e,t){}});
//# sourceMappingURL=landing.build.js.map