import{S as J,i as K,s as W,k as P,q as j,a as T,l as b,m as C,r as O,h as d,c as k,n as g,b as z,G as c,M as N,H as $,U as X,V as F,y as q,K as Q,z as V,J as Y,A as L,g as D,d as G,B as H,o as Z,W as ee,w}from"../chunks/index.17ebdefe.js";import{p as te,C as ne}from"../chunks/index.b0b1abe8.js";function se(l){let e,a,i,s,o,t,u,h,_,v,y,n,p,r,f,S,U;return{c(){e=P("nav"),a=P("span"),i=j("Online Pythoner Interpreter"),s=T(),o=P("button"),t=j("Execute Python Code"),u=T(),h=P("button"),_=j("Toggle Terminal"),v=T(),y=P("button"),n=j("Clear Terminal"),p=T(),r=P("button"),f=j("Save Python Code"),this.h()},l(E){e=b(E,"NAV",{class:!0});var m=C(e);a=b(m,"SPAN",{class:!0});var A=C(a);i=O(A,"Online Pythoner Interpreter"),A.forEach(d),s=k(m),o=b(m,"BUTTON",{class:!0});var B=C(o);t=O(B,"Execute Python Code"),B.forEach(d),u=k(m),h=b(m,"BUTTON",{class:!0});var x=C(h);_=O(x,"Toggle Terminal"),x.forEach(d),v=k(m),y=b(m,"BUTTON",{class:!0});var M=C(y);n=O(M,"Clear Terminal"),M.forEach(d),p=k(m),r=b(m,"BUTTON",{class:!0});var R=C(r);f=O(R,"Save Python Code"),R.forEach(d),m.forEach(d),this.h()},h(){g(a,"class","svelte-6zja6v"),g(o,"class","svelte-6zja6v"),g(h,"class","svelte-6zja6v"),g(y,"class","svelte-6zja6v"),g(r,"class","svelte-6zja6v"),g(e,"class","svelte-6zja6v")},m(E,m){z(E,e,m),c(e,a),c(a,i),c(e,s),c(e,o),c(o,t),c(e,u),c(e,h),c(h,_),c(e,v),c(e,y),c(y,n),c(e,p),c(e,r),c(r,f),S||(U=[N(o,"click",l[1]),N(h,"click",l[2]),N(y,"click",l[3]),N(r,"click",l[4])],S=!0)},p:$,i:$,o:$,d(E){E&&d(e),S=!1,X(U)}}}function re(l){const e=F();return[e,()=>e("ePC"),()=>e("tPC"),()=>e("cPC"),()=>e("sPC")]}class ae extends J{constructor(e){super(),K(this,e,re,se,W,{})}}const{document:I}=ee;function le(l){let e,a,i,s,o,t,u,h,_,v;s=new ae({}),s.$on("ePC",l[3]),s.$on("tPC",l[4]),s.$on("cPC",l[5]),s.$on("sPC",l[6]);let y={filetype:te()};return u=new ne({props:y}),l[7](u),{c(){e=P("script"),i=T(),q(s.$$.fragment),o=T(),t=P("main"),q(u.$$.fragment),h=T(),_=P("textarea"),this.h()},l(n){const p=Q("svelte-rx3onj",I.head);e=b(p,"SCRIPT",{src:!0});var r=C(e);r.forEach(d),p.forEach(d),i=k(n),V(s.$$.fragment,n),o=k(n),t=b(n,"MAIN",{class:!0});var f=C(t);V(u.$$.fragment,f),h=k(f),_=b(f,"TEXTAREA",{id:!0,class:!0}),C(_).forEach(d),f.forEach(d),this.h()},h(){I.title="Python Interpreter",Y(e.src,a="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js")||g(e,"src",a),g(_,"id","terminal"),_.readOnly=!0,g(_,"class","svelte-1bxl9v6"),g(t,"class","svelte-1bxl9v6")},m(n,p){c(I.head,e),z(n,i,p),L(s,n,p),z(n,o,p),z(n,t,p),L(u,t,null),c(t,h),c(t,_),l[8](_),l[9](t),v=!0},p(n,[p]){const r={};u.$set(r)},i(n){v||(D(s.$$.fragment,n),D(u.$$.fragment,n),v=!0)},o(n){G(s.$$.fragment,n),G(u.$$.fragment,n),v=!1},d(n){d(e),n&&d(i),H(s,n),n&&d(o),n&&d(t),l[7](null),H(u),l[8](null),l[9](null)}}}function oe(l,e,a){var i;let s,o,t;function u(){i.runPython(`${s.getText()}`),a(2,t.value+=i.runPython("sys.stdout.getvalue()")+`
`,t),i.runPython("sys.stdout = io.StringIO()")}function h(){t.style.display!="none"?(a(2,t.style.display="none",t),o.style.setProperty("grid-template-columns","1fr")):(a(2,t.style.display="block",t),o.style.setProperty("grid-template-columns","1fr 1fr"))}function _(){a(2,t.value=`Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]
`,t)}function v(){let r=new Blob([s.getValue()]),f=document.createElement("a");f.href=URL.createObjectURL(r),f.download="eric.py",f.click()}Z(async()=>{a(2,t.value="initializing Python interpreter...",t),i=await loadPyodide(),i.runPython(`import io
import sys
sys.stdout = io.StringIO()`),a(2,t.value=`Pyodide 0.21.3 [Python 3.10.2] [Clang 15.0.0]
`,t)});function y(r){w[r?"unshift":"push"](()=>{s=r,a(0,s)})}function n(r){w[r?"unshift":"push"](()=>{t=r,a(2,t)})}function p(r){w[r?"unshift":"push"](()=>{o=r,a(1,o)})}return[s,o,t,u,h,_,v,y,n,p]}class ue extends J{constructor(e){super(),K(this,e,oe,le,W,{})}}export{ue as default};
