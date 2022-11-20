var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,l;function s(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function b(t){l=t}function k(){if(!l)throw new Error("Function called outside component initialization");return l}function w(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const a=t.$$.callbacks[e];if(a){const r=function(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,n,i,e),a}(e,n,{cancelable:i});return a.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const x=[],y=[],C=[],_=[],L=Promise.resolve();let N=!1;function E(t){C.push(t)}const M=new Set;let T=0;function j(){const t=l;do{for(;T<x.length;){const t=x[T];T++,b(t),A(t.$$)}for(b(null),x.length=0,T=0;y.length;)y.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];M.has(e)||(M.add(e),e())}C.length=0}while(x.length);for(;_.length;)_.pop()();N=!1,M.clear(),b(t)}function A(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const B=new Set;let F;function K(){F={r:0,c:[],p:F}}function O(){F.r||i(F.c),F=F.p}function q(t,e){t&&t.i&&(B.delete(t),t.i(e))}function z(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),F.c.push((()=>{B.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}const I="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function P(t){t&&t.c()}function S(t,n,r,o){const{fragment:l,on_mount:s,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,r),o||E((()=>{const n=s.map(e).filter(a);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(E)}function H(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(x.push(t),N||(N=!0,L.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,a,r,o,s,c,u,d=[-1]){const p=l;b(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||p.$$.root};u&&u(h.root);let m=!1;if(h.ctx=r?r(e,a.props||{},((t,n,...i)=>{const a=i.length?i[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=a)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](a),m&&U(e,t)),n})):[],h.update(),m=!0,i(h.before_update),h.fragment=!!o&&o(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();a.intro&&q(e.$$.fragment),S(e,a.target,a.anchor,a.customElement),j()}b(p)}class D{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,i,a;return{c(){n=d("button"),n.textContent="◀",g(n,"class","svelte-akhr56")},m(t,r){u(t,n,r),i||(a=m(n,"click",e[3]),i=!0)},p:t,d(t){t&&f(n),i=!1,a()}}}function R(e){let n,i,a;return{c(){n=d("button"),n.textContent="▶",g(n,"class","svelte-akhr56")},m(t,r){u(t,n,r),i||(a=m(n,"click",e[4]),i=!0)},p:t,d(t){t&&f(n),i=!1,a()}}}function V(e){let n,i,a,r,o=e[1]&&G(e),l=e[2]&&R(e);return{c(){n=d("nav"),i=d("div"),o&&o.c(),a=d("span"),r=p(e[0]),l&&l.c(),g(a,"class","svelte-akhr56"),g(i,"class","svelte-akhr56"),g(n,"class","svelte-akhr56")},m(t,e){u(t,n,e),c(n,i),o&&o.m(i,null),c(i,a),c(a,r),l&&l.m(i,null)},p(t,[e]){t[1]?o?o.p(t,e):(o=G(t),o.c(),o.m(i,a)):o&&(o.d(1),o=null),1&e&&v(r,t[0]),t[2]?l?l.p(t,e):(l=R(t),l.c(),l.m(i,null)):l&&(l.d(1),l=null)},i:t,o:t,d(t){t&&f(n),o&&o.d(),l&&l.d()}}}function W(t,e,n){let{decade:i=1750}=e,{canNavigateBack:a}=e,{canNavigateForward:r}=e;const o=w();return t.$$set=t=>{"decade"in t&&n(0,i=t.decade),"canNavigateBack"in t&&n(1,a=t.canNavigateBack),"canNavigateForward"in t&&n(2,r=t.canNavigateForward)},[i,a,r,function(){o("navigation",{action:"previous"})},function(){o("navigation",{action:"next"})}]}class Z extends D{constructor(t){super(),X(this,t,W,V,r,{decade:0,canNavigateBack:1,canNavigateForward:2})}}function J(e){let n;return{c(){n=d("div"),g(n,"class","spinner svelte-a7h3vc")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Q extends D{constructor(t){super(),X(this,t,null,J,r,{})}}const{window:Y}=I;function tt(e){let n,a,r,o,l;return{c(){n=d("div"),a=h(),r=d("div"),g(n,"id","background"),g(n,"class","svelte-109vcd7"),g(r,"id","modal"),g(r,"class","svelte-109vcd7")},m(t,i){u(t,n,i),u(t,a,i),u(t,r,i),o||(l=[m(Y,"keydown",e[1]),m(n,"click",e[0])],o=!0)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(a),t&&f(r),o=!1,i(l)}}}function et(t,e,n){let i,a,{isModalOpen:r}=e,{currentCanvas:o}=e;const l=w();function s(){l("modal-close")}let c;var u;return r&&(i="https://lbiiif.riksarkivet.se/"+o.split("/")[3]+"/info.json",a=o.replace("/square/350,/0/default.jpg","").replace("https://lbiiif.riksarkivet.se/arkis!","https://sok.riksarkivet.se/bildvisning/")),u=async()=>{console.log("onMount"),c=window.L.map("modal",{center:[0,0],zoom:1,attributionControl:!1,zoomControl:!1,crs:window.L.CRS.Simple}),window.L.tileLayer.iiif(i).addTo(c);const t=window.L.Control.extend({options:{position:"topright"},onAdd(t){const e=window.L.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.innerHTML='<a href="#" role="button" title="Stäng"><svg aria-hidden="true" style="transform: scale(1.7); height: 30px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>',e.addEventListener("click",s),e}}),e=window.L.Control.extend({options:{position:"topright"},onAdd(t){const e=window.L.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.innerHTML='<a href="'+a+'" target="_blank" title="Navigera till källa"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transform: scale(1.7); height: 30px;" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16"><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>',e}});(new t).addTo(c),window.L.control.zoom({position:"topright"}).addTo(c),(new e).addTo(c)},k().$$.on_mount.push(u),function(t){k().$$.on_destroy.push(t)}((()=>{c.remove(),c=null})),t.$$set=t=>{"isModalOpen"in t&&n(2,r=t.isModalOpen),"currentCanvas"in t&&n(3,o=t.currentCanvas)},[s,function(t){"Escape"===t.key&&s()},r,o]}class nt extends D{constructor(t){super(),X(this,t,et,tt,r,{isModalOpen:2,currentCanvas:3})}}function it(e){let n,i,a,r,o,l,m;return{c(){n=d("a"),i=d("img"),r=h(),o=d("span"),l=p(e[0]),g(i,"aria-hidden","true"),s(i.src,a=e[1])||g(i,"src",a),g(i,"class","svelte-zy5t4x"),g(n,"class","btn btn-block svelte-zy5t4x"),g(n,"href",m="/?manifest="+e[2])},m(t,e){u(t,n,e),c(n,i),c(n,r),c(n,o),c(o,l)},p(t,[e]){2&e&&!s(i.src,a=t[1])&&g(i,"src",a),1&e&&v(l,t[0]),4&e&&m!==(m="/?manifest="+t[2])&&g(n,"href",m)},i:t,o:t,d(t){t&&f(n)}}}function at(t,e,n){let{title:i}=e,{thumbnail:a}=e,{manifest:r}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title),"thumbnail"in t&&n(1,a=t.thumbnail),"manifest"in t&&n(2,r=t.manifest)},[i,a,r]}class rt extends D{constructor(t){super(),X(this,t,at,it,r,{title:0,thumbnail:1,manifest:2})}}function ot(t,e,n){const i=t.slice();return i[22]=e[n],i}function lt(t){let e,n,a,r,o,l,s,p,v,b,k,w,x,y,C,_,L,N,E,M,T,j;return e=new rt({props:{title:"Handritade Kartverk",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0037920_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/AwBKLPUAqqUGtNLGHo3lq0"}}),a=new rt({props:{title:"Marinens ritningar",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0035322_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/lAELykjdz1EZN9cxABCer7"}}),o=new rt({props:{title:"001 Jacob Gillberg: svenska och finska uniformer",thumbnail:"https://lbiiif.riksarkivet.se/arkis!K0038337_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/8XCsKmH8XKATnPaXVPaWf2"}}),s=new rt({props:{title:"K Fotografier",thumbnail:"https://lbiiif.riksarkivet.se/arkis!Z0000195_00001/square/350,/0/default.jpg",manifest:"https://lbiiif.riksarkivet.se/collection/arkiv/vdLhUFT8rH6cxG02H087k3"}}),{c(){P(e.$$.fragment),n=h(),P(a.$$.fragment),r=h(),P(o.$$.fragment),l=h(),P(s.$$.fragment),p=h(),v=d("details"),b=d("summary"),b.textContent="Eget IIIF Manifest",k=h(),w=d("form"),x=d("label"),x.textContent="IIIF Manifest",y=d("br"),C=h(),_=d("input"),L=d("br"),N=h(),E=d("button"),E.textContent="Ladda",g(b,"class","svelte-1rwh9f4"),g(x,"for","iiif-input"),g(_,"id","iiif-input"),g(_,"type","url"),g(_,"placeholder","https://lbiiif.riksarkivet.se/collection/arkiv/8XCsKmH8XKATnPaXVPaWf2"),g(E,"type","submit"),g(v,"class","svelte-1rwh9f4")},m(i,f){var d;S(e,i,f),u(i,n,f),S(a,i,f),u(i,r,f),S(o,i,f),u(i,l,f),S(s,i,f),u(i,p,f),u(i,v,f),c(v,b),c(v,k),c(v,w),c(w,x),c(w,y),c(w,C),c(w,_),$(_,t[4]),c(w,L),c(w,N),c(w,E),M=!0,T||(j=[m(_,"input",t[14]),m(w,"submit",(d=t[9],function(t){return t.preventDefault(),d.call(this,t)}))],T=!0)},p(t,e){16&e&&$(_,t[4])},i(t){M||(q(e.$$.fragment,t),q(a.$$.fragment,t),q(o.$$.fragment,t),q(s.$$.fragment,t),M=!0)},o(t){z(e.$$.fragment,t),z(a.$$.fragment,t),z(o.$$.fragment,t),z(s.$$.fragment,t),M=!1},d(t){H(e,t),t&&f(n),H(a,t),t&&f(r),H(o,t),t&&f(l),H(s,t),t&&f(p),t&&f(v),T=!1,i(j)}}}function st(e){let n,i;return n=new Q({}),{c(){P(n.$$.fragment)},m(t,e){S(n,t,e),i=!0},p:t,i(t){i||(q(n.$$.fragment,t),i=!0)},o(t){z(n.$$.fragment,t),i=!1},d(t){H(n,t)}}}function ct(e){let n,i,a=e[2],r=[];for(let t=0;t<a.length;t+=1)r[t]=ut(ot(e,a,t));return{c(){n=d("div"),i=d("div");for(let t=0;t<r.length;t+=1)r[t].c();g(i,"class","container svelte-1rwh9f4"),g(n,"class","container-background svelte-1rwh9f4")},m(t,e){u(t,n,e),c(n,i);for(let t=0;t<r.length;t+=1)r[t].m(i,null)},p(t,e){if(4100&e){let n;for(a=t[2],n=0;n<a.length;n+=1){const o=ot(t,a,n);r[n]?r[n].p(o,e):(r[n]=ut(o),r[n].c(),r[n].m(i,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i:t,o:t,d(t){t&&f(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function ut(t){let e,n,i,r,o,l,p,v;return{c(){e=d("button"),n=d("img"),o=h(),s(n.src,i=t[22].image)||g(n,"src",i),g(n,"alt",r=t[22].title),g(n,"class","svelte-1rwh9f4"),g(e,"title",l=t[22].title),g(e,"class","svelte-1rwh9f4")},m(i,r){u(i,e,r),c(e,n),c(e,o),p||(v=m(e,"click",(function(){a(t[12](t[22].image))&&t[12](t[22].image).apply(this,arguments)})),p=!0)},p(a,o){t=a,4&o&&!s(n.src,i=t[22].image)&&g(n,"src",i),4&o&&r!==(r=t[22].title)&&g(n,"alt",r),4&o&&l!==(l=t[22].title)&&g(e,"title",l)},d(t){t&&f(e),p=!1,v()}}}function ft(t){let e,n;return e=new nt({props:{currentCanvas:t[1],isModalOpen:t[0]}}),e.$on("modal-close",t[13]),{c(){P(e.$$.fragment)},m(t,i){S(e,t,i),n=!0},p(t,n){const i={};2&n&&(i.currentCanvas=t[1]),1&n&&(i.isModalOpen=t[0]),e.$set(i)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function dt(t){let e,n,i,a,r,o,l,s,m,$,b=t[10]&&function(t){let e,n;return e=new Z({props:{decade:t[5],canNavigateBack:t[6],canNavigateForward:t[7]}}),e.$on("navigation",t[11]),{c(){P(e.$$.fragment)},m(t,i){S(e,t,i),n=!0},p(t,n){const i={};32&n&&(i.decade=t[5]),64&n&&(i.canNavigateBack=t[6]),128&n&&(i.canNavigateForward=t[7]),e.$set(i)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}(t);const k=[ct,st,lt],w=[];function x(t,e){return t[2].length>0?0:t[8]?1:2}l=x(t),s=w[l]=k[l](t);let y=t[0]&&ft(t);return{c(){e=d("main"),n=d("nav"),i=d("h1"),a=p(t[3]),r=h(),b&&b.c(),o=h(),s.c(),m=h(),y&&y.c(),g(n,"class","svelte-1rwh9f4")},m(t,s){u(t,e,s),c(e,n),c(n,i),c(i,a),c(n,r),b&&b.m(n,null),c(e,o),w[l].m(e,null),c(e,m),y&&y.m(e,null),$=!0},p(t,[n]){(!$||8&n)&&v(a,t[3]),t[10]&&b.p(t,n);let i=l;l=x(t),l===i?w[l].p(t,n):(K(),z(w[i],1,1,(()=>{w[i]=null})),O(),s=w[l],s?s.p(t,n):(s=w[l]=k[l](t),s.c()),q(s,1),s.m(e,m)),t[0]?y?(y.p(t,n),1&n&&q(y,1)):(y=ft(t),y.c(),q(y,1),y.m(e,null)):y&&(K(),z(y,1,1,(()=>{y=null})),O())},i(t){$||(q(b),q(s),q(y),$=!0)},o(t){z(b),z(s),z(y),$=!1},d(t){t&&f(e),b&&b.d(),w[l].d(),y&&y.d()}}}function pt(t,e,n){let i,a=!1,r=[],o=[];let l,s=[];function c(t){fetch(t).then((t=>t.json())).then((e=>{s.length||(n(3,l=e.label.sv[0]),document.title=l),"Manifest"==e.type&&function(t){let e,i,a,l;t.metadata.forEach((t=>{"Titel"==t.label.sv[0]?e=t.value.none[0]:"Källhänvisning"==t.label.sv[0]?i=t.value.none[0]:"Datering"==t.label.sv[0]&&(a=t.value.none[0],4!=a.length||isNaN(a)?9!=a.length||"-"!=a[4]||isNaN(a.substring(0,4))||isNaN(a.substring(5,9))?l=null:10*Math.floor(parseInt(a.substring(0,4))/10)==10*Math.floor(parseInt(a.substring(5,9))/10)&&(l=10*Math.floor(parseInt(a.substring(0,4))/10)):l=10*Math.floor(parseInt(a)/10))})),t.items.forEach((t=>{if("Canvas"==t.type){let s=t.id.replace("/canvas","/square/350,/0/default.jpg"),c=t.id.replace("/canvas","").replace("https://lbiiif.riksarkivet.se/arkis!","https://sok.riksarkivet.se/bildvisning/");r.push({title:e,source:i,date:a,image:s,link:c,decade:l}),n(2,o=r)}}))}(e),s.push(t);for(let t of e.items)s.includes(t.id)||("Manifest"==t.type||"Collection"==t.type)&&c(t.id)}))}let u,f=new URLSearchParams(window.location.search).get("manifest");f?f.split(",").forEach((t=>c(t))):l="Riksarkivet";let d,p,h,m=new URLSearchParams(window.location.search).get("date"),g=0;var v;function $(){n(2,o=r.filter((t=>t.decade===g))),n(6,p=d[d.indexOf(g)-1]),n(7,h=d[d.indexOf(g)+1])}v=()=>{if(m){d=[...new Set(r.map((t=>t.decade)))].sort();const t=d[Math.floor(d.length/2)];b||n(5,g=t),$()}else n(2,o=r)},k().$$.before_update.push(v);let b=!1;return[a,i,o,l,u,g,p,h,f,function(){u.split(",").forEach((t=>c(t))),window.history.pushState({},"",`?manifest=${u}`)},m,function(t){const e=t.detail.action;b=!0,n(5,g="previous"==e?p:h),$()},function(t){n(1,i=t),n(0,a=!0)},function(){n(0,a=!1)},function(){u=this.value,n(4,u)}]}return new class extends D{constructor(t){super(),X(this,t,pt,dt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
