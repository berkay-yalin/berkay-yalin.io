import{S as dt,i as _t,s as ht,a as mt,e as P,c as gt,b as G,g as W,t as N,d as X,f as U,h as q,j as wt,o as Ce,k as yt,l as bt,m as vt,n as Ne,p as Q,q as Et,r as kt,u as Rt,v as ne,w as F,x as H,y as re,z as M,A as B,B as ke}from"./chunks/index-ddf3eb23.js";import{S as ot,a as lt,I as Y,g as Qe,f as xe,b as Ue,c as Re,s as ee,i as et,d as de,P as tt,e as St,h as $t}from"./chunks/singletons-1e420e1e.js";import{_ as x}from"./chunks/preload-helper-41c905a7.js";import{b as se,s as It}from"./chunks/paths-3fa55cf4.js";function Lt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function At(a){return a.split("%25").map(decodeURI).join("%25")}function Ot(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Pt=["href","pathname","search","searchParams","toString","toJSON"];function Nt(a,e){const n=new URL(a);for(const i of Pt){let r=n[i];Object.defineProperty(n,i,{get(){return e(),r},enumerable:!0,configurable:!0})}return Ut(n),n}function Ut(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Tt="/__data.json";function jt(a){return a.replace(/\/$/,"")+Tt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Dt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let i=n.length;for(;i;)e=e*33^n.charCodeAt(--i)}else if(ArrayBuffer.isView(n)){const i=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=i.length;for(;r;)e=e*33^i[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&_e.delete(Fe(a)),Se(a,e));const _e=new Map;function Vt(a,e){const n=Fe(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:r,...u}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&_e.set(n,{body:r,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,u))}return Se(a,e)}function Ct(a,e,n){if(_e.size>0){const i=Fe(a,n),r=_e.get(i);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);_e.delete(i)}}return Se(e,n)}function Fe(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),i+=`[data-hash="${Dt(...r)}"]`}return i}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Mt(a).map(i=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((c,d)=>{if(d%2){if(c.startsWith("x+"))return Te(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Te(String.fromCharCode(...c.slice(2).split("-").map(A=>parseInt(A,16))));const m=qt.exec(c);if(!m)throw new Error(`Invalid param: ${c}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,L,O,R,K]=m;return e.push({name:R,matcher:K,optional:!!L,rest:!!O,chained:O?d===1&&t[0]==="":!1}),O?"(.*?)":L?"([^/]*)?":"([^/]+?)"}return Te(c)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Mt(a){return a.slice(1).split("/").filter(Ht)}function Bt(a,e,n){const i={},r=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const s=e[t],c=r[t-u];if(s.chained&&s.rest&&u){i[s.name]=r.slice(t-u,t+1).filter(d=>d).join("/"),u=0;continue}if(c===void 0){s.rest&&(i[s.name]="");continue}if(!s.matcher||n[s.matcher](c)){i[s.name]=c;continue}if(s.optional&&s.chained){u++;continue}return}if(!u)return i}function Te(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,i){const r=new Set(e);return Object.entries(n).map(([s,[c,d,m]])=>{const{pattern:L,params:O}=Ft(s),R={id:s,exec:K=>{const A=L.exec(K);if(A)return Bt(A,O,i)},errors:[1,...m||[]].map(K=>a[K]),layouts:[0,...d||[]].map(t),leaf:u(c)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function u(s){const c=s<0;return c&&(s=~s),[c,a[s]]}function t(s){return s===void 0?s:[r.has(s),a[s]]}}function Gt(a){let e,n,i;var r=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=F(r,u(a)),a[18](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&4&&(c.form=t[2]),r!==(r=t[1][0])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[18](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[18](null),t&&q(n),e&&B(e,t)}}}function Jt(a){let e,n,i;var r=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[xt]},$$scope:{ctx:t}}}}return r&&(e=F(r,u(a)),a[17](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&524407&&(c.$$scope={dirty:s,ctx:t}),r!==(r=t[1][0])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[17](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[17](null),t&&q(n),e&&B(e,t)}}}function zt(a){let e,n,i;var r=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=F(r,u(a)),a[16](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&4&&(c.form=t[2]),r!==(r=t[1][1])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[16](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[16](null),t&&q(n),e&&B(e,t)}}}function Yt(a){let e,n,i;var r=a[1][1];function u(t){return{props:{data:t[4],$$slots:{default:[Qt]},$$scope:{ctx:t}}}}return r&&(e=F(r,u(a)),a[15](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&524391&&(c.$$scope={dirty:s,ctx:t}),r!==(r=t[1][1])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[15](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[15](null),t&&q(n),e&&B(e,t)}}}function Wt(a){let e,n,i;var r=a[1][2];function u(t){return{props:{data:t[5],form:t[2]}}}return r&&(e=F(r,u(a)),a[14](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&32&&(c.data=t[5]),s&4&&(c.form=t[2]),r!==(r=t[1][2])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[14](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[14](null),t&&q(n),e&&B(e,t)}}}function Xt(a){let e,n,i;var r=a[1][2];function u(t){return{props:{data:t[5],$$slots:{default:[Zt]},$$scope:{ctx:t}}}}return r&&(e=F(r,u(a)),a[13](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&32&&(c.data=t[5]),s&524359&&(c.$$scope={dirty:s,ctx:t}),r!==(r=t[1][2])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[13](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[13](null),t&&q(n),e&&B(e,t)}}}function Zt(a){let e,n,i;var r=a[1][3];function u(t){return{props:{data:t[6],form:t[2]}}}return r&&(e=F(r,u(a)),a[12](e)),{c(){e&&H(e.$$.fragment),n=P()},l(t){e&&re(e.$$.fragment,t),n=P()},m(t,s){e&&M(e,t,s),G(t,n,s),i=!0},p(t,s){const c={};if(s&64&&(c.data=t[6]),s&4&&(c.form=t[2]),r!==(r=t[1][3])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{B(d,1)}),X()}r?(e=F(r,u(t)),t[12](e),H(e.$$.fragment),U(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&U(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&q(n),e&&B(e,t)}}}function Qt(a){let e,n,i,r;const u=[Xt,Wt],t=[];function s(c,d){return c[1][3]?0:1}return e=s(a),n=t[e]=u[e](a),{c(){n.c(),i=P()},l(c){n.l(c),i=P()},m(c,d){t[e].m(c,d),G(c,i,d),r=!0},p(c,d){let m=e;e=s(c),e===m?t[e].p(c,d):(W(),N(t[m],1,1,()=>{t[m]=null}),X(),n=t[e],n?n.p(c,d):(n=t[e]=u[e](c),n.c()),U(n,1),n.m(i.parentNode,i))},i(c){r||(U(n),r=!0)},o(c){N(n),r=!1},d(c){t[e].d(c),c&&q(i)}}}function xt(a){let e,n,i,r;const u=[Yt,zt],t=[];function s(c,d){return c[1][2]?0:1}return e=s(a),n=t[e]=u[e](a),{c(){n.c(),i=P()},l(c){n.l(c),i=P()},m(c,d){t[e].m(c,d),G(c,i,d),r=!0},p(c,d){let m=e;e=s(c),e===m?t[e].p(c,d):(W(),N(t[m],1,1,()=>{t[m]=null}),X(),n=t[e],n?n.p(c,d):(n=t[e]=u[e](c),n.c()),U(n,1),n.m(i.parentNode,i))},i(c){r||(U(n),r=!0)},o(c){N(n),r=!1},d(c){t[e].d(c),c&&q(i)}}}function at(a){let e,n=a[8]&&rt(a);return{c(){e=yt("div"),n&&n.c(),this.h()},l(i){e=bt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=vt(e);n&&n.l(r),r.forEach(q),this.h()},h(){Ne(e,"id","svelte-announcer"),Ne(e,"aria-live","assertive"),Ne(e,"aria-atomic","true"),Q(e,"position","absolute"),Q(e,"left","0"),Q(e,"top","0"),Q(e,"clip","rect(0 0 0 0)"),Q(e,"clip-path","inset(50%)"),Q(e,"overflow","hidden"),Q(e,"white-space","nowrap"),Q(e,"width","1px"),Q(e,"height","1px")},m(i,r){G(i,e,r),n&&n.m(e,null)},p(i,r){i[8]?n?n.p(i,r):(n=rt(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function rt(a){let e;return{c(){e=Et(a[9])},l(n){e=kt(n,a[9])},m(n,i){G(n,e,i)},p(n,i){i&512&&Rt(e,n[9])},d(n){n&&q(e)}}}function en(a){let e,n,i,r,u;const t=[Jt,Gt],s=[];function c(m,L){return m[1][1]?0:1}e=c(a),n=s[e]=t[e](a);let d=a[7]&&at(a);return{c(){n.c(),i=mt(),d&&d.c(),r=P()},l(m){n.l(m),i=gt(m),d&&d.l(m),r=P()},m(m,L){s[e].m(m,L),G(m,i,L),d&&d.m(m,L),G(m,r,L),u=!0},p(m,[L]){let O=e;e=c(m),e===O?s[e].p(m,L):(W(),N(s[O],1,1,()=>{s[O]=null}),X(),n=s[e],n?n.p(m,L):(n=s[e]=t[e](m),n.c()),U(n,1),n.m(i.parentNode,i)),m[7]?d?d.p(m,L):(d=at(m),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},i(m){u||(U(n),u=!0)},o(m){N(n),u=!1},d(m){s[e].d(m),m&&q(i),d&&d.d(m),m&&q(r)}}}function tn(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:u}=e,{components:t=[]}=e,{form:s}=e,{data_0:c=null}=e,{data_1:d=null}=e,{data_2:m=null}=e,{data_3:L=null}=e;wt(i.page.notify);let O=!1,R=!1,K=null;Ce(()=>{const y=i.page.subscribe(()=>{O&&(n(8,R=!0),n(9,K=document.title||"untitled page"))});return n(7,O=!0),y});function A(y){ne[y?"unshift":"push"](()=>{t[3]=y,n(0,t)})}function oe(y){ne[y?"unshift":"push"](()=>{t[2]=y,n(0,t)})}function Z(y){ne[y?"unshift":"push"](()=>{t[2]=y,n(0,t)})}function me(y){ne[y?"unshift":"push"](()=>{t[1]=y,n(0,t)})}function ie(y){ne[y?"unshift":"push"](()=>{t[1]=y,n(0,t)})}function ge(y){ne[y?"unshift":"push"](()=>{t[0]=y,n(0,t)})}function we(y){ne[y?"unshift":"push"](()=>{t[0]=y,n(0,t)})}return a.$$set=y=>{"stores"in y&&n(10,i=y.stores),"page"in y&&n(11,r=y.page),"constructors"in y&&n(1,u=y.constructors),"components"in y&&n(0,t=y.components),"form"in y&&n(2,s=y.form),"data_0"in y&&n(3,c=y.data_0),"data_1"in y&&n(4,d=y.data_1),"data_2"in y&&n(5,m=y.data_2),"data_3"in y&&n(6,L=y.data_3)},a.$$.update=()=>{a.$$.dirty&3072&&i.page.set(r)},[t,u,s,c,d,m,L,O,R,K,i,r,A,oe,Z,me,ie,ge,we]}class nn extends dt{constructor(e){super(),_t(this,e,tn,en,ht,{stores:10,page:11,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5,data_3:6})}}const an={},$e=[()=>x(()=>import("./chunks/0-2e44e7a9.js"),["./chunks/0-2e44e7a9.js","./chunks/_layout-da46b06b.js","./components/layout.svelte-93eeb35a.js","./chunks/index-ddf3eb23.js"],import.meta.url),()=>x(()=>import("./chunks/1-4456762f.js"),["./chunks/1-4456762f.js","./components/error.svelte-feab73bb.js","./chunks/index-ddf3eb23.js","./chunks/singletons-1e420e1e.js","./chunks/index-d01a5eb0.js","./chunks/paths-3fa55cf4.js"],import.meta.url),()=>x(()=>import("./chunks/2-bfbad2e5.js"),["./chunks/2-bfbad2e5.js","./components/pages/(index)/_layout.svelte-b7136331.js","./chunks/index-ddf3eb23.js","./chunks/paths-3fa55cf4.js","./assets/_layout-a78693a8.css"],import.meta.url),()=>x(()=>import("./chunks/3-3531c1fb.js"),["./chunks/3-3531c1fb.js","./components/pages/(index)/projects/_layout.svelte-487f00f7.js","./chunks/index-ddf3eb23.js"],import.meta.url),()=>x(()=>import("./chunks/4-131979c7.js"),["./chunks/4-131979c7.js","./components/pages/(index)/_page.svelte-786ed115.js","./chunks/index-ddf3eb23.js","./chunks/python-80229e37.js","./assets/_page-a6fbde5e.css"],import.meta.url),()=>x(()=>import("./chunks/5-453dd6d7.js"),["./chunks/5-453dd6d7.js","./components/pages/(index)/articles/_page.svelte-f4a66440.js","./chunks/index-ddf3eb23.js"],import.meta.url),()=>x(()=>import("./chunks/6-ac78572d.js"),["./chunks/6-ac78572d.js","./components/pages/(index)/projects/_page.svelte-d3a8d6fc.js","./chunks/index-ddf3eb23.js","./chunks/paths-3fa55cf4.js","./chunks/singletons-1e420e1e.js","./chunks/index-d01a5eb0.js","./assets/_page-243941c8.css"],import.meta.url),()=>x(()=>import("./chunks/7-7674f01c.js"),["./chunks/7-7674f01c.js","./components/pages/pseudocode2python/_page.svelte-dc1ba64e.js","./chunks/index-ddf3eb23.js","./chunks/index-d01a5eb0.js","./chunks/python-80229e37.js","./chunks/preload-helper-41c905a7.js","./assets/_page-ed0ea244.css"],import.meta.url),()=>x(()=>import("./chunks/8-63711d6c.js"),["./chunks/8-63711d6c.js","./components/pages/python-interpreter/_page.svelte-bad756c5.js","./chunks/preload-helper-41c905a7.js","./chunks/index-ddf3eb23.js","./assets/_page-0d5e00bc.css"],import.meta.url)],ft=[],rn={"/(index)":[4,[2]],"/(index)/articles":[5,[2]],"/(index)/projects":[6,[2,3]],"/pseudocode2python":[7],"/python-interpreter":[8]},sn={handleError:({error:a})=>{console.error(a)}};let he=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},it=class{constructor(e,n){this.status=e,this.location=n}};async function on(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,r])=>[i,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,pn=-5,dn=-6;function _n(a,e){if(typeof a=="number")return r(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,i=Array(n.length);function r(u,t=!1){if(u===ln)return;if(u===fn)return NaN;if(u===un)return 1/0;if(u===pn)return-1/0;if(u===dn)return-0;if(t)throw new Error("Invalid input");if(u in i)return i[u];const s=n[u];if(!s||typeof s!="object")i[u]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],d=e==null?void 0:e[c];if(d)return i[u]=d(r(s[1]));switch(c){case"Date":i[u]=new Date(s[1]);break;case"Set":const m=new Set;i[u]=m;for(let R=1;R<s.length;R+=1)m.add(r(s[R]));break;case"Map":const L=new Map;i[u]=L;for(let R=1;R<s.length;R+=2)L.set(r(s[R]),r(s[R+1]));break;case"RegExp":i[u]=new RegExp(s[1],s[2]);break;case"Object":i[u]=Object(s[1]);break;case"BigInt":i[u]=BigInt(s[1]);break;case"null":const O=Object.create(null);i[u]=O;for(let R=1;R<s.length;R+=2)O[s[R]]=r(s[R+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);i[u]=c;for(let d=0;d<s.length;d+=1){const m=s[d];m!==cn&&(c[d]=r(m))}}else{const c={};i[u]=c;for(const d in s){const m=s[d];c[d]=r(m)}}return i[u]}return r(0)}function hn(a){return a.filter(e=>e!=null)}const je=Kt($e,ft,rn,an),ut=$e[0],qe=$e[1];ut();qe();const ae=ct(ot)??{},ue=ct(lt)??{};function De(a){ae[a]=de()}function mn({target:a}){var We;const e=document.documentElement,n=[],i=[];let r=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},s=!1,c=!1,d=!0,m=!1,L=!1,O=!1,R=!1,K,A=(We=history.state)==null?void 0:We[Y];A||(A=Date.now(),history.replaceState({...history.state,[Y]:A},"",location.href));const oe=ae[A];oe&&(history.scrollRestoration="manual",scrollTo(oe.x,oe.y));let Z,me,ie;async function ge(){ie=ie||Promise.resolve(),await ie,ie=null;const l=new URL(location.href),o=ce(l,!0);r=null,await Me(o,l,[])}function we(l){i.some(o=>o==null?void 0:o.snapshot)&&(ue[l]=i.map(o=>{var p;return(p=o==null?void 0:o.snapshot)==null?void 0:p.capture()}))}function y(l){var o;(o=ue[l])==null||o.forEach((p,f)=>{var h,_;(_=(h=i[f])==null?void 0:h.snapshot)==null||_.restore(p)})}async function Ie(l,{noScroll:o=!1,replaceState:p=!1,keepFocus:f=!1,state:h={},invalidateAll:_=!1},w,g){return typeof l=="string"&&(l=new URL(l,Qe(document))),Ee({url:l,scroll:o?de():null,keepfocus:f,redirect_chain:w,details:{state:h,replaceState:p},nav_token:g,accepted:()=>{_&&(R=!0)},blocked:()=>{},type:"goto"})}async function He(l){return r={id:l.id,promise:Ge(l).then(o=>(o.type==="loaded"&&o.state.error&&(r=null),o))},r.promise}async function ye(...l){const p=je.filter(f=>l.some(h=>f.exec(h))).map(f=>Promise.all([...f.layouts,f.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(p)}async function Me(l,o,p,f,h,_={},w){var v,b,I;me=_;let g=l&&await Ge(l);if(g||(g=await Ye(o,{id:null},await pe(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(l==null?void 0:l.url)||o,me!==_)return!1;if(g.type==="redirect")if(p.length>10||p.includes(o.pathname))g=await be({status:500,error:await pe(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return Ie(new URL(g.location,o).href,{},[...p,o.pathname],_),!1;else((v=g.props.page)==null?void 0:v.status)>=400&&await ee.updated.check()&&await fe(o);if(n.length=0,R=!1,m=!0,f&&(De(f),we(f)),(b=g.props.page)!=null&&b.url&&g.props.page.url.pathname!==o.pathname&&(o.pathname=(I=g.props.page)==null?void 0:I.url.pathname),h&&h.details){const{details:S}=h,C=S.replaceState?0:1;if(S.state[Y]=A+=C,history[S.replaceState?"replaceState":"pushState"](S.state,"",o),!S.replaceState){let $=A+1;for(;ue[$]||ae[$];)delete ue[$],delete ae[$],$+=1}}if(r=null,c?(t=g.state,g.props.page&&(g.props.page.url=o),K.$set(g.props)):Be(g),h){const{scroll:S,keepfocus:C}=h,{activeElement:$}=document;await ke();const E=document.activeElement!==$&&document.activeElement!==document.body;if(!C&&!E&&await Ve(),d){const T=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));S?scrollTo(S.x,S.y):T?T.scrollIntoView():scrollTo(0,0)}}else await ke();d=!0,g.props.page&&(Z=g.props.page),w&&w(),m=!1}function Be(l){var f;t=l.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),Z=l.props.page,K=new nn({target:a,props:{...l.props,stores:ee,components:i},hydrate:!0}),y(A);const p={from:null,to:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(p)),c=!0}async function le({url:l,params:o,branch:p,status:f,error:h,route:_,form:w}){let g="never";for(const $ of p)($==null?void 0:$.slash)!==void 0&&(g=$.slash);l.pathname=Lt(l.pathname,g),l.search=l.search;const v={type:"loaded",state:{url:l,params:o,branch:p,error:h,route:_},props:{constructors:hn(p).map($=>$.node.component)}};w!==void 0&&(v.props.form=w);let b={},I=!Z,S=0;for(let $=0;$<Math.max(p.length,t.branch.length);$+=1){const E=p[$],T=t.branch[$];(E==null?void 0:E.data)!==(T==null?void 0:T.data)&&(I=!0),E&&(b={...b,...E.data},I&&(v.props[`data_${S}`]=b),S+=1)}return(!t.url||l.href!==t.url.href||t.error!==h||w!==void 0&&w!==Z.form||I)&&(v.props.page={error:h,params:o,route:{id:(_==null?void 0:_.id)??null},status:f,url:new URL(l),form:w??null,data:I?b:Z.data}),v}async function Le({loader:l,parent:o,url:p,params:f,route:h,server_data_node:_}){var b,I,S;let w=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await l();if((b=v.universal)!=null&&b.load){let C=function(...E){for(const T of E){const{href:J}=new URL(T,p);g.dependencies.add(J)}};const $={route:{get id(){return g.route=!0,h.id}},params:new Proxy(f,{get:(E,T)=>(g.params.add(T),E[T])}),data:(_==null?void 0:_.data)??null,url:Nt(p,()=>{g.url=!0}),async fetch(E,T){let J;E instanceof Request?(J=E.url,T={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...T}):J=E;const z=new URL(J,p);return C(z.href),z.origin===p.origin&&(J=z.href.slice(p.origin.length)),c?Ct(J,z.href,T):Vt(J,T)},setHeaders:()=>{},depends:C,parent(){return g.parent=!0,o()}};w=await v.universal.load.call(null,$)??null,w=w?await on(w):null}return{node:v,loader:l,server:_,universal:(I=v.universal)!=null&&I.load?{type:"data",data:w,uses:g}:null,data:w??(_==null?void 0:_.data)??null,slash:((S=v.universal)==null?void 0:S.trailingSlash)??(_==null?void 0:_.slash)}}function Ke(l,o,p,f,h){if(R)return!0;if(!f)return!1;if(f.parent&&l||f.route&&o||f.url&&p)return!0;for(const _ of f.params)if(h[_]!==t.params[_])return!0;for(const _ of f.dependencies)if(n.some(w=>w(new URL(_))))return!0;return!1}function Ae(l,o){return(l==null?void 0:l.type)==="data"?{type:"data",data:l.data,uses:{dependencies:new Set(l.uses.dependencies??[]),params:new Set(l.uses.params??[]),parent:!!l.uses.parent,route:!!l.uses.route,url:!!l.uses.url},slash:l.slash}:(l==null?void 0:l.type)==="skip"?o??null:null}async function Ge({id:l,invalidating:o,url:p,params:f,route:h}){if((r==null?void 0:r.id)===l)return r.promise;const{errors:_,layouts:w,leaf:g}=h,v=[...w,g];_.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const I=t.url?l!==t.url.pathname+t.url.search:!1,S=t.route?h.id!==t.route.id:!1;let C=!1;const $=v.map((k,V)=>{var te;const j=t.branch[V],D=!!(k!=null&&k[0])&&((j==null?void 0:j.loader)!==k[1]||Ke(C,S,I,(te=j.server)==null?void 0:te.uses,f));return D&&(C=!0),D});if($.some(Boolean)){try{b=await st(p,$)}catch(k){return be({status:k instanceof he?k.status:500,error:await pe(k,{url:p,params:f,route:{id:h.id}}),url:p,route:h})}if(b.type==="redirect")return b}const E=b==null?void 0:b.nodes;let T=!1;const J=v.map(async(k,V)=>{var Oe;if(!k)return;const j=t.branch[V],D=E==null?void 0:E[V];if((!D||D.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Ke(T,S,I,(Oe=j.universal)==null?void 0:Oe.uses,f))return j;if(T=!0,(D==null?void 0:D.type)==="error")throw D;return Le({loader:k[1],url:p,params:f,route:h,parent:async()=>{var Ze;const Xe={};for(let Pe=0;Pe<V;Pe+=1)Object.assign(Xe,(Ze=await J[Pe])==null?void 0:Ze.data);return Xe},server_data_node:Ae(D===void 0&&k[0]?{type:"skip"}:D??null,k[0]?j==null?void 0:j.server:void 0)})});for(const k of J)k.catch(()=>{});const z=[];for(let k=0;k<v.length;k+=1)if(v[k])try{z.push(await J[k])}catch(V){if(V instanceof it)return{type:"redirect",location:V.location};let j=500,D;if(E!=null&&E.includes(V))j=V.status??j,D=V.error;else if(V instanceof he)j=V.status,D=V.body;else{if(await ee.updated.check())return await fe(p);D=await pe(V,{params:f,url:p,route:{id:h.id}})}const te=await Je(k,z,_);return te?await le({url:p,params:f,branch:z.slice(0,te.idx).concat(te.node),status:j,error:D,route:h}):await Ye(p,{id:h.id},D,j)}else z.push(void 0);return await le({url:p,params:f,branch:z,status:200,error:null,route:h,form:o?void 0:null})}async function Je(l,o,p){for(;l--;)if(p[l]){let f=l;for(;!o[f];)f-=1;try{return{idx:f+1,node:{node:await p[l](),loader:p[l],data:{},server:null,universal:null}}}catch{continue}}}async function be({status:l,error:o,url:p,route:f}){const h={};let _=null;if(ft[0]===0)try{const b=await st(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=b.nodes[0]??null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||s)&&await fe(p)}const g=await Le({loader:ut,url:p,params:h,route:f,parent:()=>Promise.resolve({}),server_data_node:Ae(_)}),v={node:await qe(),loader:qe,universal:null,server:null,data:null};return await le({url:p,params:h,branch:[g,v],status:l,error:o,route:null})}function ce(l,o){if(et(l,se))return;const p=ve(l);for(const f of je){const h=f.exec(p);if(h)return{id:l.pathname+l.search,invalidating:o,route:f,params:Ot(h),url:l}}}function ve(l){return At(l.pathname.slice(se.length)||"/")}function ze({url:l,type:o,intent:p,delta:f}){var g,v;let h=!1;const _={from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:{params:(p==null?void 0:p.params)??null,route:{id:((v=p==null?void 0:p.route)==null?void 0:v.id)??null},url:l},willUnload:!p,type:o};f!==void 0&&(_.delta=f);const w={..._,cancel:()=>{h=!0}};return L||u.before_navigate.forEach(b=>b(w)),h?null:_}async function Ee({url:l,scroll:o,keepfocus:p,redirect_chain:f,details:h,type:_,delta:w,nav_token:g,accepted:v,blocked:b}){const I=ce(l,!1),S=ze({url:l,type:_,delta:w,intent:I});if(!S){b();return}const C=A;v(),L=!0,c&&ee.navigating.set(S),await Me(I,l,f,C,{scroll:o,keepfocus:p,details:h},g,()=>{L=!1,u.after_navigate.forEach($=>$(S)),ee.navigating.set(null)})}async function Ye(l,o,p,f){return l.origin===location.origin&&l.pathname===location.pathname&&!s?await be({status:f,error:p,url:l,route:o}):await fe(l)}function fe(l){return location.href=l.href,new Promise(()=>{})}function pt(){let l;e.addEventListener("mousemove",_=>{const w=_.target;clearTimeout(l),l=setTimeout(()=>{f(w,2)},20)});function o(_){f(_.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const p=new IntersectionObserver(_=>{for(const w of _)w.isIntersecting&&(ye(ve(new URL(w.target.href))),p.unobserve(w.target))},{threshold:0});function f(_,w){const g=xe(_,e);if(!g)return;const{url:v,external:b}=Ue(g,se);if(b)return;const I=Re(g);if(!I.reload)if(w<=I.preload_data){const S=ce(v,!1);S&&He(S)}else w<=I.preload_code&&ye(ve(v))}function h(){p.disconnect();for(const _ of e.querySelectorAll("a")){const{url:w,external:g}=Ue(_,se);if(g)continue;const v=Re(_);v.reload||(v.preload_code===tt.viewport&&p.observe(_),v.preload_code===tt.eager&&ye(ve(w)))}}u.after_navigate.push(h),h()}return{after_navigate:l=>{Ce(()=>(u.after_navigate.push(l),()=>{const o=u.after_navigate.indexOf(l);u.after_navigate.splice(o,1)}))},before_navigate:l=>{Ce(()=>(u.before_navigate.push(l),()=>{const o=u.before_navigate.indexOf(l);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(m||!c)&&(d=!1)},goto:(l,o={})=>Ie(l,o,[]),invalidate:l=>{if(typeof l=="function")n.push(l);else{const{href:o}=new URL(l,location.href);n.push(p=>p.href===o)}return ge()},invalidateAll:()=>(R=!0,ge()),preload_data:async l=>{const o=new URL(l,Qe(document)),p=ce(o,!1);if(!p)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);await He(p)},preload_code:ye,apply_action:async l=>{if(l.type==="error"){const o=new URL(location.href),{branch:p,route:f}=t;if(!f)return;const h=await Je(t.branch.length,p,f.errors);if(h){const _=await le({url:o,params:t.params,branch:p.slice(0,h.idx).concat(h.node),status:l.status??500,error:l.error,route:f});t=_.state,K.$set(_.props),ke().then(Ve)}}else if(l.type==="redirect")Ie(l.location,{invalidateAll:!0},[]);else{const o={form:l.data,page:{...Z,form:l.data,status:l.status}};K.$set(o),l.type==="success"&&ke().then(Ve)}},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var f;let p=!1;if(!L){const h={from:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>p=!0};u.before_navigate.forEach(_=>_(h))}p?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(De(A),nt(ot,ae),we(A),nt(lt,ue))}),(l=navigator.connection)!=null&&l.saveData||pt(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const p=xe(o.composedPath()[0],e);if(!p)return;const{url:f,external:h,target:_}=Ue(p,se);if(!f)return;if(_==="_parent"||_==="_top"){if(window.parent!==window)return}else if(_&&_!=="_self")return;const w=Re(p);if(!(p instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:"))return;if(h||w.reload){ze({url:f,type:"link"})||o.preventDefault(),L=!0;return}const[v,b]=f.href.split("#");if(b!==void 0&&v===location.href.split("#")[0]){O=!0,De(A),t.url=f,ee.page.set({...Z,url:f}),ee.page.notify();return}Ee({url:f,scroll:w.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const p=HTMLFormElement.prototype.cloneNode.call(o.target),f=o.submitter;if(((f==null?void 0:f.formMethod)||p.method)!=="get")return;const _=new URL((f==null?void 0:f.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||p.action);if(et(_,se))return;const w=o.target,{noscroll:g,reload:v}=Re(w);if(v)return;o.preventDefault(),o.stopPropagation();const b=new FormData(w),I=f==null?void 0:f.getAttribute("name");I&&b.append(I,(f==null?void 0:f.getAttribute("value"))??""),_.search=new URLSearchParams(b).toString(),Ee({url:_,scroll:g?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var p;if((p=o.state)!=null&&p[Y]){if(o.state[Y]===A)return;const f=ae[o.state[Y]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){ae[A]=de(),A=o.state[Y],scrollTo(f.x,f.y);return}const h=o.state[Y]-A;let _=!1;await Ee({url:new URL(location.href),scroll:f,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[Y]},blocked:()=>{history.go(-h),_=!0},type:"popstate",delta:h}),_||y(A)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[Y]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&ee.navigating.set(null)})},_hydrate:async({status:l=200,error:o,node_ids:p,params:f,route:h,data:_,form:w})=>{s=!0;const g=new URL(location.href);({params:f={},route:h={id:null}}=ce(g,!1)||{});let v;try{const b=p.map(async(I,S)=>{const C=_[S];return Le({loader:$e[I],url:g,params:f,route:h,parent:async()=>{const $={};for(let E=0;E<S;E+=1)Object.assign($,(await b[E]).data);return $},server_data_node:Ae(C)})});v=await le({url:g,params:f,branch:await Promise.all(b),status:l,error:o,form:w,route:je.find(({id:I})=>I===h.id)??null})}catch(b){if(b instanceof it){await fe(new URL(b.location,location.href));return}v=await be({status:b instanceof he?b.status:500,error:await pe(b,{url:g,params:f,route:h}),url:g,route:h})}Be(v)}}}async function st(a,e){var u;const n=new URL(a);n.pathname=jt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await Se(n.href),r=await i.json();if(!i.ok)throw new he(i.status,r);return(u=r.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=_n(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function pe(a,e){return a instanceof he?a.body:sn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ve(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var r;i((r=getSelection())==null?void 0:r.removeAllRanges())})})}}async function kn({assets:a,env:e,hydrate:n,target:i,version:r}){It(a),$t(r);const u=mn({target:i});St({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{kn as start};