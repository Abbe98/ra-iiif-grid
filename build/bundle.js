var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,i;function l(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function g(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function b(t){i=t}function k(){if(!i)throw new Error("Function called outside component initialization");return i}function x(){const t=k();return(e,n,{cancelable:a=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e,{bubbles:n=!1,cancelable:a=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,a,e),r}(e,n,{cancelable:a});return r.slice().forEach((e=>{e.call(t,o)})),!o.defaultPrevented}return!0}}const y=[],w=[],N=[],_=[],E=Promise.resolve();let C=!1;function M(t){N.push(t)}const F=new Set;let q=0;function B(){const t=i;do{for(;q<y.length;){const t=y[q];q++,b(t),I(t.$$)}for(b(null),y.length=0,q=0;w.length;)w.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];F.has(e)||(F.add(e),e())}N.length=0}while(y.length);for(;_.length;)_.pop()();C=!1,F.clear(),b(t)}function I(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const P=new Set;let S;function j(t,e){t&&t.i&&(P.delete(t),t.i(e))}function A(t,e,n,a){if(t&&t.o){if(P.has(t))return;P.add(t),S.c.push((()=>{P.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}else a&&a()}function L(t){t&&t.c()}function O(t,n,o,c){const{fragment:i,on_mount:l,on_destroy:s,after_update:u}=t.$$;i&&i.m(n,o),c||M((()=>{const n=l.map(e).filter(r);s?s.push(...n):a(n),t.$$.on_mount=[]})),u.forEach(M)}function T(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(y.push(t),C||(C=!0,E.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,o,c,l,s,u,d=[-1]){const p=i;b(e);const h=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};u&&u(h.root);let g=!1;if(h.ctx=o?o(e,r.props||{},((t,n,...a)=>{const r=a.length?a[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&K(e,t)),n})):[],h.update(),g=!0,a(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();r.intro&&j(e.$$.fragment),O(e,r.target,r.anchor,r.customElement),B()}b(p)}class X{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n,a,r;return{c(){n=d("button"),n.textContent="◀",m(n,"class","svelte-akhr56")},m(t,o){u(t,n,o),a||(r=g(n,"click",e[3]),a=!0)},p:t,d(t){t&&f(n),a=!1,r()}}}function U(e){let n,a,r;return{c(){n=d("button"),n.textContent="▶",m(n,"class","svelte-akhr56")},m(t,o){u(t,n,o),a||(r=g(n,"click",e[4]),a=!0)},p:t,d(t){t&&f(n),a=!1,r()}}}function z(e){let n,a,r,o,c=e[1]&&D(e),i=e[2]&&U(e);return{c(){n=d("nav"),a=d("div"),c&&c.c(),r=d("span"),o=p(e[0]),i&&i.c(),m(r,"class","svelte-akhr56"),m(a,"class","svelte-akhr56"),m(n,"class","svelte-akhr56")},m(t,e){u(t,n,e),s(n,a),c&&c.m(a,null),s(a,r),s(r,o),i&&i.m(a,null)},p(t,[e]){t[1]?c?c.p(t,e):(c=D(t),c.c(),c.m(a,r)):c&&(c.d(1),c=null),1&e&&v(o,t[0]),t[2]?i?i.p(t,e):(i=U(t),i.c(),i.m(a,null)):i&&(i.d(1),i=null)},i:t,o:t,d(t){t&&f(n),c&&c.d(),i&&i.d()}}}function H(t,e,n){let{decade:a=1750}=e,{canNavigateBack:r}=e,{canNavigateForward:o}=e;const c=x();return t.$$set=t=>{"decade"in t&&n(0,a=t.decade),"canNavigateBack"in t&&n(1,r=t.canNavigateBack),"canNavigateForward"in t&&n(2,o=t.canNavigateForward)},[a,r,o,function(){c("navigation",{action:"previous"})},function(){c("navigation",{action:"next"})}]}class V extends X{constructor(t){super(),R(this,t,H,z,o,{decade:0,canNavigateBack:1,canNavigateForward:2})}}function W(e){let n;return{c(){n=d("div"),m(n,"class","spinner svelte-a7h3vc")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class G extends X{constructor(t){super(),R(this,t,null,W,o,{})}}function J(t,e,n){const a=t.slice();return a[18]=e[n],a}function Q(e){let n,r,o,c,i,l,p,v;return{c(){n=d("form"),r=d("label"),r.textContent="IIIF Manifest",o=h(),c=d("input"),i=h(),l=d("button"),l.textContent="Ladda",m(r,"for","iiif-input"),m(c,"id","iiif-input"),m(c,"type","url"),m(c,"placeholder","https://lbiiif.riksarkivet.se/collection/arkiv/8XCsKmH8XKATnPaXVPaWf2"),m(l,"type","submit")},m(t,a){var f;u(t,n,a),s(n,r),s(n,o),s(n,c),$(c,e[2]),s(n,i),s(n,l),p||(v=[g(c,"input",e[10]),g(n,"submit",(f=e[7],function(t){return t.preventDefault(),f.call(this,t)}))],p=!0)},p(t,e){4&e&&$(c,t[2])},i:t,o:t,d(t){t&&f(n),p=!1,a(v)}}}function Y(e){let n,a;return n=new G({}),{c(){L(n.$$.fragment)},m(t,e){O(n,t,e),a=!0},p:t,i(t){a||(j(n.$$.fragment,t),a=!0)},o(t){A(n.$$.fragment,t),a=!1},d(t){T(n,t)}}}function Z(e){let n,a,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=tt(J(e,r,t));return{c(){n=d("div"),a=d("div");for(let t=0;t<o.length;t+=1)o[t].c();m(a,"class","container svelte-qx8stv"),m(n,"class","container-background svelte-qx8stv")},m(t,e){u(t,n,e),s(n,a);for(let t=0;t<o.length;t+=1)o[t].m(a,null)},p(t,e){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const c=J(t,r,n);o[n]?o[n].p(c,e):(o[n]=tt(c),o[n].c(),o[n].m(a,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}},i:t,o:t,d(t){t&&f(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function tt(t){let e,n,a,r,o,c;return{c(){e=d("a"),n=d("img"),o=h(),l(n.src,a=t[18].image)||m(n,"src",a),m(n,"alt",r=t[18].title),m(n,"class","svelte-qx8stv"),m(e,"href",c=t[18].link),m(e,"target","_blank"),m(e,"class","svelte-qx8stv")},m(t,a){u(t,e,a),s(e,n),s(e,o)},p(t,o){1&o&&!l(n.src,a=t[18].image)&&m(n,"src",a),1&o&&r!==(r=t[18].title)&&m(n,"alt",r),1&o&&c!==(c=t[18].link)&&m(e,"href",c)},d(t){t&&f(e)}}}function et(t){let e,n,r,o,c,i,l,g,$,b=t[8]&&function(t){let e,n;return e=new V({props:{decade:t[3],canNavigateBack:t[4],canNavigateForward:t[5]}}),e.$on("navigation",t[9]),{c(){L(e.$$.fragment)},m(t,a){O(e,t,a),n=!0},p(t,n){const a={};8&n&&(a.decade=t[3]),16&n&&(a.canNavigateBack=t[4]),32&n&&(a.canNavigateForward=t[5]),e.$set(a)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}(t);const k=[Z,Y,Q],x=[];function y(t,e){return t[0].length>0?0:t[6]?1:2}return l=y(t),g=x[l]=k[l](t),{c(){e=d("main"),n=d("nav"),r=d("h1"),o=p(t[1]),c=h(),b&&b.c(),i=h(),g.c(),m(n,"class","svelte-qx8stv")},m(t,a){u(t,e,a),s(e,n),s(n,r),s(r,o),s(n,c),b&&b.m(n,null),s(e,i),x[l].m(e,null),$=!0},p(t,[n]){(!$||2&n)&&v(o,t[1]),t[8]&&b.p(t,n);let r=l;l=y(t),l===r?x[l].p(t,n):(S={r:0,c:[],p:S},A(x[r],1,1,(()=>{x[r]=null})),S.r||a(S.c),S=S.p,g=x[l],g?g.p(t,n):(g=x[l]=k[l](t),g.c()),j(g,1),g.m(e,null))},i(t){$||(j(b),j(g),$=!0)},o(t){A(b),A(g),$=!1},d(t){t&&f(e),b&&b.d(),x[l].d()}}}function nt(t,e,n){let a=[],r=[];let o,c=[];function i(t){fetch(t).then((t=>t.json())).then((e=>{c.length||(n(1,o=e.label.sv[0]),document.title=o),"Manifest"==e.type&&function(t){let e,o,c,i;t.metadata.forEach((t=>{"Titel"==t.label.sv[0]?e=t.value.none[0]:"Källhänvisning"==t.label.sv[0]?o=t.value.none[0]:"Datering"==t.label.sv[0]&&(c=t.value.none[0],4!=c.length||isNaN(c)?9!=c.length||"-"!=c[4]||isNaN(c.substring(0,4))||isNaN(c.substring(5,9))?i=null:10*Math.floor(parseInt(c.substring(0,4))/10)==10*Math.floor(parseInt(c.substring(5,9))/10)&&(i=10*Math.floor(parseInt(c.substring(0,4))/10)):i=10*Math.floor(parseInt(c)/10))})),t.items.forEach((t=>{if("Canvas"==t.type){let l=t.id.replace("/canvas","/square/350,/0/default.jpg"),s=t.id.replace("/canvas","").replace("https://lbiiif.riksarkivet.se/arkis!","https://sok.riksarkivet.se/bildvisning/");a.push({title:e,source:o,date:c,image:l,link:s,decade:i}),n(0,r=a)}}))}(e),c.push(t);for(let t of e.items)c.includes(t.id)||("Manifest"==t.type||"Collection"==t.type)&&i(t.id)}))}let l,s=new URLSearchParams(window.location.search).get("manifest");s?s.split(",").forEach((t=>i(t))):o="Riksarkivet";let u,f,d,p=new URLSearchParams(window.location.search).get("date"),h=0;var g;function m(){n(0,r=a.filter((t=>t.decade===h))),n(4,f=u[u.indexOf(h)-1]),n(5,d=u[u.indexOf(h)+1])}g=()=>{if(p){u=[...new Set(a.map((t=>t.decade)))].sort();const t=u[Math.floor(u.length/2)];v||n(3,h=t),m()}else n(0,r=a)},k().$$.before_update.push(g);let v=!1;return[r,o,l,h,f,d,s,function(){l.split(",").forEach((t=>i(t))),window.history.pushState({},"",`?manifest=${l}`)},p,function(t){const e=t.detail.action;v=!0,n(3,h="previous"==e?f:d),m()},function(){l=this.value,n(2,l)}]}return new class extends X{constructor(t){super(),R(this,t,nt,et,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
