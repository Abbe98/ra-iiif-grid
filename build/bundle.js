var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,o;function s(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function k(t){o=t}function w(){if(!o)throw new Error("Function called outside component initialization");return o}function x(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=function(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}(e,n,{cancelable:i});return r.slice().forEach((e=>{e.call(t,l)})),!l.defaultPrevented}return!0}}const y=[],C=[],L=[],_=[],N=Promise.resolve();let E=!1;function M(t){L.push(t)}const q=new Set;let j=0;function I(){const t=o;do{for(;j<y.length;){const t=y[j];j++,k(t),T(t.$$)}for(k(null),y.length=0,j=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];q.has(e)||(q.add(e),e())}L.length=0}while(y.length);for(;_.length;)_.pop()();E=!1,q.clear(),k(t)}function T(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const A=new Set;let B;function F(){B={r:0,c:[],p:B}}function K(){B.r||i(B.c),B=B.p}function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function P(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),B.c.push((()=>{A.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}const S="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function U(t){t&&t.c()}function z(t,n,l,a){const{fragment:o,on_mount:s,on_destroy:c,after_update:u}=t.$$;o&&o.m(n,l),a||M((()=>{const n=s.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(M)}function H(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,l,a,s,c,u,d=[-1]){const p=o;k(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};u&&u(h.root);let m=!1;if(h.ctx=l?l(e,r.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&X(e,t)),n})):[],h.update(),m=!0,i(h.before_update),h.fragment=!!a&&a(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();r.intro&&O(e.$$.fragment),z(e,r.target,r.anchor,r.customElement),I()}k(p)}class D{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,i,r;return{c(){n=p("button"),n.textContent="◀",v(n,"class","svelte-akhr56")},m(t,l){u(t,n,l),i||(r=g(n,"click",e[3]),i=!0)},p:t,d(t){t&&f(n),i=!1,r()}}}function W(e){let n,i,r;return{c(){n=p("button"),n.textContent="▶",v(n,"class","svelte-akhr56")},m(t,l){u(t,n,l),i||(r=g(n,"click",e[4]),i=!0)},p:t,d(t){t&&f(n),i=!1,r()}}}function V(e){let n,i,r,l,a=e[1]&&G(e),o=e[2]&&W(e);return{c(){n=p("nav"),i=p("div"),a&&a.c(),r=p("span"),l=h(e[0]),o&&o.c(),v(r,"class","svelte-akhr56"),v(i,"class","svelte-akhr56"),v(n,"class","svelte-akhr56")},m(t,e){u(t,n,e),c(n,i),a&&a.m(i,null),c(i,r),c(r,l),o&&o.m(i,null)},p(t,[e]){t[1]?a?a.p(t,e):(a=G(t),a.c(),a.m(i,r)):a&&(a.d(1),a=null),1&e&&b(l,t[0]),t[2]?o?o.p(t,e):(o=W(t),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&f(n),a&&a.d(),o&&o.d()}}}function Z(t,e,n){let{decade:i=1750}=e,{canNavigateBack:r}=e,{canNavigateForward:l}=e;const a=x();return t.$$set=t=>{"decade"in t&&n(0,i=t.decade),"canNavigateBack"in t&&n(1,r=t.canNavigateBack),"canNavigateForward"in t&&n(2,l=t.canNavigateForward)},[i,r,l,function(){a("navigation",{action:"previous"})},function(){a("navigation",{action:"next"})}]}class J extends D{constructor(t){super(),R(this,t,Z,V,l,{decade:0,canNavigateBack:1,canNavigateForward:2})}}function Q(e){let n;return{c(){n=p("div"),v(n,"class","spinner svelte-a7h3vc")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Y extends D{constructor(t){super(),R(this,t,null,Q,l,{})}}const{window:tt}=S;function et(e){let n,r,l,a,o;return{c(){n=p("div"),r=m(),l=p("div"),v(n,"id","background"),v(n,"class","svelte-109vcd7"),v(l,"id","modal"),v(l,"class","svelte-109vcd7")},m(t,i){u(t,n,i),u(t,r,i),u(t,l,i),a||(o=[g(tt,"keydown",e[1]),g(n,"click",e[0])],a=!0)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(l),a=!1,i(o)}}}function nt(t,e,n){let i,r,{isModalOpen:l}=e,{currentCanvas:a}=e;const o=x();function s(){o("modal-close")}let c;var u;return l&&(i="https://lbiiif.riksarkivet.se/"+a.split("/")[3]+"/info.json",r=a.replace("/square/350,/0/default.jpg","").replace("https://lbiiif.riksarkivet.se/arkis!","https://sok.riksarkivet.se/bildvisning/")),u=async()=>{console.log("onMount"),c=window.L.map("modal",{center:[0,0],zoom:1,attributionControl:!1,zoomControl:!1,crs:window.L.CRS.Simple}),window.L.tileLayer.iiif(i).addTo(c);const t=window.L.Control.extend({options:{position:"topright"},onAdd(t){const e=window.L.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.innerHTML='<a href="#" role="button" title="Stäng"><svg aria-hidden="true" style="transform: scale(1.7); height: 30px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>',e.addEventListener("click",s),e}}),e=window.L.Control.extend({options:{position:"topright"},onAdd(t){const e=window.L.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.innerHTML='<a href="'+r+'" target="_blank" title="Navigera till källa"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transform: scale(1.7); height: 30px;" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16"><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>',e}});(new t).addTo(c),window.L.control.zoom({position:"topright"}).addTo(c),(new e).addTo(c)},w().$$.on_mount.push(u),function(t){w().$$.on_destroy.push(t)}((()=>{c.remove(),c=null})),t.$$set=t=>{"isModalOpen"in t&&n(2,l=t.isModalOpen),"currentCanvas"in t&&n(3,a=t.currentCanvas)},[s,function(t){"Escape"===t.key&&s()},l,a]}class it extends D{constructor(t){super(),R(this,t,nt,et,l,{isModalOpen:2,currentCanvas:3})}}function rt(e){let n,i,r,l,a,o,d;return{c(){n=p("a"),i=p("img"),l=m(),a=p("span"),o=h(e[0]),v(i,"aria-hidden","true"),s(i.src,r=e[1])||v(i,"src",r),v(i,"class","svelte-1v0wc74"),v(n,"class","btn btn-block svelte-1v0wc74"),v(n,"href",d="?manifest="+e[2])},m(t,e){u(t,n,e),c(n,i),c(n,l),c(n,a),c(a,o)},p(t,[e]){2&e&&!s(i.src,r=t[1])&&v(i,"src",r),1&e&&b(o,t[0]),4&e&&d!==(d="?manifest="+t[2])&&v(n,"href",d)},i:t,o:t,d(t){t&&f(n)}}}function lt(t,e,n){let{title:i}=e,{thumbnail:r}=e,{manifest:l}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title),"thumbnail"in t&&n(1,r=t.thumbnail),"manifest"in t&&n(2,l=t.manifest)},[i,r,l]}class at extends D{constructor(t){super(),R(this,t,lt,rt,l,{title:0,thumbnail:1,manifest:2})}}function ot(t,e,n){const i=t.slice();return i[3]=e[n],i}function st(e){let n,i;return n=new Y({}),{c(){U(n.$$.fragment)},m(t,e){z(n,t,e),i=!0},p:t,i(t){i||(O(n.$$.fragment,t),i=!0)},o(t){P(n.$$.fragment,t),i=!1},d(t){H(n,t)}}}function ct(e){let n;return{c(){n=p("p"),n.textContent="Inga publika arkiv."},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function ut(e){let n,i=e[0],r=[];for(let t=0;t<i.length;t+=1)r[t]=mt(ot(e,i,t));return{c(){n=p("div");for(let t=0;t<r.length;t+=1)r[t].c();v(n,"class","columns svelte-1lubsq5")},m(t,e){u(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,e){if(1&e){let l;for(i=t[0],l=0;l<i.length;l+=1){const a=ot(t,i,l);r[l]?r[l].p(a,e):(r[l]=mt(a),r[l].c(),r[l].m(n,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},i:t,o:t,d(t){t&&f(n),d(r,t)}}}function ft(t){let e,n,i,r,l,a=t[3].label+"",o=t[3].thumbnail&&pt(t);return{c(){e=p("a"),o&&o.c(),n=m(),i=h(a),r=m(),v(e,"href",l="?manifest="+t[3].id),v(e,"class","svelte-1lubsq5")},m(t,l){u(t,e,l),o&&o.m(e,null),c(e,n),c(e,i),c(e,r)},p(t,r){t[3].thumbnail?o?o.p(t,r):(o=pt(t),o.c(),o.m(e,n)):o&&(o.d(1),o=null),1&r&&a!==(a=t[3].label+"")&&b(i,a),1&r&&l!==(l="?manifest="+t[3].id)&&v(e,"href",l)},d(t){t&&f(e),o&&o.d()}}}function dt(t){let e,n,i,r,l,a=t[3].label+"",o=t[3].thumbnail&&ht(t);return{c(){e=p("a"),o&&o.c(),n=m(),i=h(a),r=m(),v(e,"href",l="?collection="+t[3].id),v(e,"class","svelte-1lubsq5")},m(t,l){u(t,e,l),o&&o.m(e,null),c(e,n),c(e,i),c(e,r)},p(t,r){t[3].thumbnail?o?o.p(t,r):(o=ht(t),o.c(),o.m(e,n)):o&&(o.d(1),o=null),1&r&&a!==(a=t[3].label+"")&&b(i,a),1&r&&l!==(l="?collection="+t[3].id)&&v(e,"href",l)},d(t){t&&f(e),o&&o.d()}}}function pt(t){let e,n;return{c(){e=p("img"),v(e,"aria-hidden","true"),s(e.src,n="https://lbiiif.riksarkivet.se/arkis!"+t[3].thumbnail+"/square/350,/0/default.jpg")||v(e,"src",n),v(e,"class","svelte-1lubsq5")},m(t,n){u(t,e,n)},p(t,i){1&i&&!s(e.src,n="https://lbiiif.riksarkivet.se/arkis!"+t[3].thumbnail+"/square/350,/0/default.jpg")&&v(e,"src",n)},d(t){t&&f(e)}}}function ht(t){let e,n;return{c(){e=p("img"),v(e,"aria-hidden","true"),s(e.src,n="https://lbiiif.riksarkivet.se/arkis!"+t[3].thumbnail+"/square/350,/0/default.jpg")||v(e,"src",n),v(e,"class","svelte-1lubsq5")},m(t,n){u(t,e,n)},p(t,i){1&i&&!s(e.src,n="https://lbiiif.riksarkivet.se/arkis!"+t[3].thumbnail+"/square/350,/0/default.jpg")&&v(e,"src",n)},d(t){t&&f(e)}}}function mt(t){let e;function n(t,e){return"Collection"===t[3].type?dt:"Manifest"===t[3].type?ft:void 0}let i=n(t),r=i&&i(t);return{c(){r&&r.c(),e=h("")},m(t,n){r&&r.m(t,n),u(t,e,n)},p(t,l){i===(i=n(t))&&r?r.p(t,l):(r&&r.d(1),r=i&&i(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r&&r.d(t),t&&f(e)}}}function gt(t){let e,n,i,r;const l=[ut,ct,st],a=[];function o(t,e){return t[0]&&t[0].length>0?0:t[1]?1:2}return n=o(t),i=a[n]=l[n](t),{c(){e=p("div"),i.c()},m(t,i){u(t,e,i),a[n].m(e,null),r=!0},p(t,[r]){let s=n;n=o(t),n===s?a[n].p(t,r):(F(),P(a[s],1,1,(()=>{a[s]=null})),K(),i=a[n],i?i.p(t,r):(i=a[n]=l[n](t),i.c()),O(i,1),i.m(e,null))},i(t){r||(O(i),r=!0)},o(t){P(i),r=!1},d(t){t&&f(e),a[n].d()}}}function vt(t){const e=t.endsWith("/manifest")?t.replace("https://lbiiif.riksarkivet.se/arkis!","").replace("/manifest",""):t.replace("https://lbiiif.riksarkivet.se/collection/arkiv/","");return console.log(!!window.imageIndex[e]&&window.imageIndex[e]),!!window.imageIndex[e]&&window.imageIndex[e]}function bt(t,e,n){let i,r,{collection:l}=e;return fetch(l).then((t=>t.json())).then((t=>{n(0,i=t.items.map((t=>{if("Canvas"!==t.type)return{id:t.id,label:t.label.sv[0],type:t.type,thumbnail:vt(t.id)}}))),n(1,r=!0)})),t.$$set=t=>{"collection"in t&&n(2,l=t.collection)},[i,r,l]}class $t extends D{constructor(t){super(),R(this,t,bt,gt,l,{collection:2})}}function kt(t,e,n){const i=t.slice();return i[23]=e[n],i}function wt(t){let e,n,r,l,a,o,s,d,h,b,k,w,x,y,C,L,_,N,E,M,q,j,I,T,A,B,F,K,S;return l=new at({props:{title:"Handritade Kartverk",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0037920_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/AwBKLPUAqqUGtNLGHo3lq0"}}),o=new at({props:{title:"Marinens ritningar",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0035322_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/lAELykjdz1EZN9cxABCer7"}}),d=new at({props:{title:"001 Jacob Gillberg: svenska och finska uniformer",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0038337_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/8XCsKmH8XKATnPaXVPaWf2"}}),b=new at({props:{title:"K Fotografier",thumbnail:"https://lbiiif.riksarkivet.se/arkis!Z0000195_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/vdLhUFT8rH6cxG02H087k3"}}),B=new $t({props:{collection:t[4]}}),{c(){e=p("div"),n=p("h2"),n.textContent="Urval",r=m(),U(l.$$.fragment),a=m(),U(o.$$.fragment),s=m(),U(d.$$.fragment),h=m(),U(b.$$.fragment),k=m(),w=p("details"),x=p("summary"),x.textContent="Eget IIIF Manifest",y=m(),C=p("form"),L=p("label"),L.textContent="IIIF Manifest",_=p("br"),N=m(),E=p("input"),M=p("br"),q=m(),j=p("button"),j.textContent="Ladda",I=m(),T=p("h2"),T.textContent="Utforska",A=m(),U(B.$$.fragment),v(x,"class","svelte-128hvh3"),v(L,"for","iiif-input"),v(E,"id","iiif-input"),v(E,"type","url"),v(E,"placeholder","https://lbiiif.riksarkivet.se/collection/arkiv/8XCsKmH8XKATnPaXVPaWf2"),v(j,"type","submit"),v(w,"class","svelte-128hvh3"),v(e,"class","browser-container svelte-128hvh3")},m(i,f){var p;u(i,e,f),c(e,n),c(e,r),z(l,e,null),c(e,a),z(o,e,null),c(e,s),z(d,e,null),c(e,h),z(b,e,null),c(e,k),c(e,w),c(w,x),c(w,y),c(w,C),c(C,L),c(C,_),c(C,N),c(C,E),$(E,t[5]),c(C,M),c(C,q),c(C,j),c(e,I),c(e,T),c(e,A),z(B,e,null),F=!0,K||(S=[g(E,"input",t[15]),g(C,"submit",(p=t[10],function(t){return t.preventDefault(),p.call(this,t)}))],K=!0)},p(t,e){32&e&&$(E,t[5]);const n={};16&e&&(n.collection=t[4]),B.$set(n)},i(t){F||(O(l.$$.fragment,t),O(o.$$.fragment,t),O(d.$$.fragment,t),O(b.$$.fragment,t),O(B.$$.fragment,t),F=!0)},o(t){P(l.$$.fragment,t),P(o.$$.fragment,t),P(d.$$.fragment,t),P(b.$$.fragment,t),P(B.$$.fragment,t),F=!1},d(t){t&&f(e),H(l),H(o),H(d),H(b),H(B),K=!1,i(S)}}}function xt(e){let n,i;return n=new Y({}),{c(){U(n.$$.fragment)},m(t,e){z(n,t,e),i=!0},p:t,i(t){i||(O(n.$$.fragment,t),i=!0)},o(t){P(n.$$.fragment,t),i=!1},d(t){H(n,t)}}}function yt(e){let n,i,r=e[2],l=[];for(let t=0;t<r.length;t+=1)l[t]=Ct(kt(e,r,t));return{c(){n=p("div"),i=p("div");for(let t=0;t<l.length;t+=1)l[t].c();v(i,"class","container svelte-128hvh3"),v(n,"class","container-background svelte-128hvh3")},m(t,e){u(t,n,e),c(n,i);for(let t=0;t<l.length;t+=1)l[t].m(i,null)},p(t,e){if(8196&e){let n;for(r=t[2],n=0;n<r.length;n+=1){const a=kt(t,r,n);l[n]?l[n].p(a,e):(l[n]=Ct(a),l[n].c(),l[n].m(i,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},i:t,o:t,d(t){t&&f(n),d(l,t)}}}function Ct(t){let e,n,i,l,a,o,d,h;return{c(){e=p("button"),n=p("img"),a=m(),s(n.src,i=t[23].image)||v(n,"src",i),v(n,"alt",l=t[23].title),v(n,"class","svelte-128hvh3"),v(e,"title",o=t[23].title),v(e,"class","svelte-128hvh3")},m(i,l){u(i,e,l),c(e,n),c(e,a),d||(h=g(e,"click",(function(){r(t[13](t[23].image))&&t[13](t[23].image).apply(this,arguments)})),d=!0)},p(r,a){t=r,4&a&&!s(n.src,i=t[23].image)&&v(n,"src",i),4&a&&l!==(l=t[23].title)&&v(n,"alt",l),4&a&&o!==(o=t[23].title)&&v(e,"title",o)},d(t){t&&f(e),d=!1,h()}}}function Lt(t){let e,n;return e=new it({props:{currentCanvas:t[1],isModalOpen:t[0]}}),e.$on("modal-close",t[14]),{c(){U(e.$$.fragment)},m(t,i){z(e,t,i),n=!0},p(t,n){const i={};2&n&&(i.currentCanvas=t[1]),1&n&&(i.isModalOpen=t[0]),e.$set(i)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function _t(t){let e,n,i,r,l,a,o,s,d,g,$=t[11]&&function(t){let e,n;return e=new J({props:{decade:t[6],canNavigateBack:t[7],canNavigateForward:t[8]}}),e.$on("navigation",t[12]),{c(){U(e.$$.fragment)},m(t,i){z(e,t,i),n=!0},p(t,n){const i={};64&n&&(i.decade=t[6]),128&n&&(i.canNavigateBack=t[7]),256&n&&(i.canNavigateForward=t[8]),e.$set(i)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}(t);const k=[yt,xt,wt],w=[];function x(t,e){return t[2].length>0?0:t[9]?1:2}o=x(t),s=w[o]=k[o](t);let y=t[0]&&Lt(t);return{c(){e=p("nav"),n=p("h1"),i=h(t[3]),r=m(),$&&$.c(),l=m(),a=p("main"),s.c(),d=m(),y&&y.c(),v(e,"class","svelte-128hvh3")},m(t,s){u(t,e,s),c(e,n),c(n,i),c(e,r),$&&$.m(e,null),u(t,l,s),u(t,a,s),w[o].m(a,null),c(a,d),y&&y.m(a,null),g=!0},p(t,[e]){(!g||8&e)&&b(i,t[3]),t[11]&&$.p(t,e);let n=o;o=x(t),o===n?w[o].p(t,e):(F(),P(w[n],1,1,(()=>{w[n]=null})),K(),s=w[o],s?s.p(t,e):(s=w[o]=k[o](t),s.c()),O(s,1),s.m(a,d)),t[0]?y?(y.p(t,e),1&e&&O(y,1)):(y=Lt(t),y.c(),O(y,1),y.m(a,null)):y&&(F(),P(y,1,1,(()=>{y=null})),K())},i(t){g||(O($),O(s),O(y),g=!0)},o(t){P($),P(s),P(y),g=!1},d(t){t&&f(e),$&&$.d(),t&&f(l),t&&f(a),w[o].d(),y&&y.d()}}}function Nt(t,e,n){let i,r=!1,l=[],a=[];let o,s=[];function c(t){fetch(t).then((t=>t.json())).then((e=>{s.length||(n(3,o=e.label.sv[0]),document.title=o),"Manifest"==e.type&&function(t){let e,i,r,o;t.metadata.forEach((t=>{"Titel"==t.label.sv[0]?e=t.value.none[0]:"Källhänvisning"==t.label.sv[0]?i=t.value.none[0]:"Datering"==t.label.sv[0]&&(r=t.value.none[0],4!=r.length||isNaN(r)?9!=r.length||"-"!=r[4]||isNaN(r.substring(0,4))||isNaN(r.substring(5,9))?o=null:10*Math.floor(parseInt(r.substring(0,4))/10)==10*Math.floor(parseInt(r.substring(5,9))/10)&&(o=10*Math.floor(parseInt(r.substring(0,4))/10)):o=10*Math.floor(parseInt(r)/10))})),t.items.forEach((t=>{if("Canvas"==t.type){let s=t.id.replace("/canvas","/square/350,/0/default.jpg"),c=t.id.replace("/canvas","").replace("https://lbiiif.riksarkivet.se/arkis!","https://sok.riksarkivet.se/bildvisning/");l.push({title:e,source:i,date:r,image:s,link:c,decade:o}),n(2,a=l)}}))}(e),s.push(t);for(let t of e.items)s.includes(t.id)||("Manifest"==t.type||"Collection"==t.type)&&c(t.id)}))}let u=new URLSearchParams(window.location.search).get("manifest");u?u.split(",").forEach((t=>c(t))):o="Riksarkivet";let f,d=new URLSearchParams(window.location.search).get("collection");d=d||"https://lbiiif.riksarkivet.se/collection/riksarkivet";let p,h,m,g=new URLSearchParams(window.location.search).get("date"),v=0;var b;function $(){n(2,a=l.filter((t=>t.decade===v))),n(7,h=p[p.indexOf(v)-1]),n(8,m=p[p.indexOf(v)+1])}b=()=>{if(g){p=[...new Set(l.map((t=>t.decade)))].sort();const t=p[Math.floor(p.length/2)];k||n(6,v=t),$()}else n(2,a=l)},w().$$.before_update.push(b);let k=!1;return[r,i,a,o,d,f,v,h,m,u,function(){f.split(",").forEach((t=>c(t))),window.history.pushState({},"",`?manifest=${f}`)},g,function(t){const e=t.detail.action;k=!0,n(6,v="previous"==e?h:m),$()},function(t){n(1,i=t),n(0,r=!0)},function(){n(0,r=!1)},function(){f=this.value,n(5,f)}]}return new class extends D{constructor(t){super(),R(this,t,Nt,_t,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
