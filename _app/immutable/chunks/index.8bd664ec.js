function w(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(O)}function P(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(G(e,n))}function dt(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,u){if(r){const c=q(e,n,i,u);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let E=!1;function I(){E=!0}function J(){E=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:K(1,r,b=>e[n[b]].claim_order,l))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const u=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[o],a)}}function U(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function bt(){return k(" ")}function xt(){return k("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){tt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function H(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Et(t,e,n){return H(t,e,n,X)}function vt(t,e,n){return H(t,e,n,Y)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Nt(t){return et(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){S().$$.on_mount.push(t)}function Tt(t){S().$$.after_update.push(t)}function Dt(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=nt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const h=[],D=[];let m=[];const M=[],L=Promise.resolve();let N=!1;function z(){N||(N=!0,L.then(F))}function Mt(){return z(),L}function A(t){m.push(t)}const v=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;D.length;)D.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Ot(){d={r:0,c:[],p:d}}function Pt(){d.r||g(d.c),d=d.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=e[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(n[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ht(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function ot(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),u.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,r,u,c,s=[-1]){const o=y;p(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:T(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,b,...j)=>{const C=j.length?j[0]:b;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&st(t,f)),b}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){I();const f=Z(e.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),J(),F()}p(o)}class Rt{$destroy(){ut(this,1),this.$destroy=w}$on(e,n){if(!P(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ot as A,ut as B,dt as C,ht as D,mt as E,_t as F,U as G,w as H,at as I,ft as J,A as K,$t as L,gt as M,R as N,Bt as O,Ht as P,St as Q,Y as R,Rt as S,vt as T,g as U,Dt as V,pt as W,bt as a,yt as b,Nt as c,qt as d,xt as e,Pt as f,ct as g,V as h,Ft as i,Tt as j,X as k,Et as l,Z as m,wt as n,Ct as o,kt as p,k as q,et as r,lt as s,Mt as t,At as u,Ot as v,D as w,jt as x,Lt as y,zt as z};
