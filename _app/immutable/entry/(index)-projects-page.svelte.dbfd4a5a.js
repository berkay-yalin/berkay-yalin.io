import{S as ge,i as _e,s as fe,k as m,q as T,l as p,m as f,r as q,h,n as r,b as B,G as i,u as me,H as F,O as Y,a as I,y as ee,P as te,c as $,z as le,A as se,g as ae,d as ne,N as re,B as oe,p as pe,J as ye,M as be}from"../chunks/index.7d0688f8.js";import{b as ie}from"../chunks/paths.cbb2d77d.js";import{h as S}from"../chunks/singletons.1908e072.js";/* empty css                      */S.disable_scroll_handling;const ke=S.goto;S.invalidate;S.invalidateAll;S.preload_data;S.preload_code;S.before_navigate;S.after_navigate;function Ee(o){let e,s;return{c(){e=m("div"),s=T(o[0]),this.h()},l(l){e=p(l,"DIV",{class:!0,style:!0});var n=f(e);s=q(n,o[0]),n.forEach(h),this.h()},h(){r(e,"class","title svelte-1hh2m17"),r(e,"style",o[1])},m(l,n){B(l,e,n),i(e,s)},p(l,[n]){n&1&&me(s,l[0]),n&2&&r(e,"style",l[1])},i:F,o:F,d(l){l&&h(e)}}}function Ie(o,e,s){let{text:l}=e,{style:n=""}=e;return o.$$set=c=>{"text"in c&&s(0,l=c.text),"style"in c&&s(1,n=c.style)},[l,n]}class ce extends ge{constructor(e){super(),_e(this,e,Ie,Ee,fe,{text:0,style:1})}}function he(o,e,s){const l=o.slice();return l[4]=e[s].id,l[5]=e[s].url,l[6]=e[s].src,l}function de(o,e,s){const l=o.slice();return l[9]=e[s].name,l[10]=e[s].color,l}function ue(o){let e,s,l,n,c=o[9]+"",g,_;return{c(){e=m("div"),s=m("div"),l=I(),n=m("div"),g=T(c),_=I(),this.h()},l(w){e=p(w,"DIV",{class:!0});var y=f(e);s=p(y,"DIV",{class:!0,id:!0,style:!0}),f(s).forEach(h),l=$(y),n=p(y,"DIV",{class:!0});var j=f(n);g=q(j,c),j.forEach(h),_=$(y),y.forEach(h),this.h()},h(){r(s,"class","language-icon svelte-gomknb"),r(s,"id",o[9].toLowerCase()+"-icon"),pe(s,"background-color",o[10]),r(n,"class","language-text svelte-gomknb"),r(e,"class","svelte-gomknb")},m(w,y){B(w,e,y),i(e,s),i(e,l),i(e,n),i(n,g),i(e,_)},p:F,d(w){w&&h(e)}}}function ve(o){let e,s,l,n;function c(){return o[3](o[5])}return{c(){e=m("img"),this.h()},l(g){e=p(g,"IMG",{alt:!0,id:!0,src:!0,class:!0}),this.h()},h(){r(e,"alt",""),r(e,"id",o[4]),ye(e.src,s=o[6])||r(e,"src",s),r(e,"class","svelte-gomknb")},m(g,_){B(g,e,_),l||(n=be(e,"click",c),l=!0)},p(g,_){o=g},d(g){g&&h(e),l=!1,n()}}}function $e(o){let e,s,l,n,c,g,_,w=o[2].name+"",y,j,D,J,v,V,L,P,G,A,H,R,M,N,Z,x,z=o[1],d=[];for(let a=0;a<z.length;a+=1)d[a]=ue(de(o,z,a));V=new ce({props:{text:"Zygon🦑"}}),P=new ce({props:{text:"Online Python Interpreter"}});let O=o[0],u=[];for(let a=0;a<O.length;a+=1)u[a]=ve(he(o,O,a));return{c(){e=m("div"),s=m("div"),l=m("div"),n=Y("svg"),c=Y("path"),g=I(),_=m("a"),y=T(w),j=I(),D=m("div");for(let a=0;a<d.length;a+=1)d[a].c();J=I(),v=m("div"),ee(V.$$.fragment),L=I(),ee(P.$$.fragment),G=I(),A=m("p"),H=T("Convert OCR regulated pseudocode into Python"),R=I(),M=m("p"),N=T("Simplistic IDE to write Python code in the browser"),Z=I();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){e=p(a,"DIV",{id:!0,class:!0});var E=f(e);s=p(E,"DIV",{class:!0});var t=f(s);l=p(t,"DIV",{id:!0,class:!0});var b=f(l);n=te(b,"svg",{height:!0,width:!0,viewBox:!0,version:!0,class:!0});var K=f(n);c=te(K,"path",{"fill-rule":!0,d:!0}),f(c).forEach(h),K.forEach(h),g=$(b),_=p(b,"A",{href:!0,class:!0});var Q=f(_);y=q(Q,w),Q.forEach(h),b.forEach(h),j=$(t),D=p(t,"DIV",{id:!0,class:!0});var U=f(D);for(let C=0;C<d.length;C+=1)d[C].l(U);U.forEach(h),J=$(t),v=p(t,"DIV",{id:!0,class:!0});var k=f(v);le(V.$$.fragment,k),L=$(k),le(P.$$.fragment,k),G=$(k),A=p(k,"P",{class:!0});var W=f(A);H=q(W,"Convert OCR regulated pseudocode into Python"),W.forEach(h),R=$(k),M=p(k,"P",{class:!0});var X=f(M);N=q(X,"Simplistic IDE to write Python code in the browser"),X.forEach(h),Z=$(k);for(let C=0;C<u.length;C+=1)u[C].l(k);k.forEach(h),t.forEach(h),E.forEach(h),this.h()},h(){r(c,"fill-rule","evenodd"),r(c,"d",we),r(n,"height","16"),r(n,"width","16"),r(n,"viewBox","0 0 16 16"),r(n,"version","1.1"),r(n,"class","svelte-gomknb"),r(_,"href",o[2].html_url),r(_,"class","svelte-gomknb"),r(l,"id","title"),r(l,"class","svelte-gomknb"),r(D,"id","languages"),r(D,"class","svelte-gomknb"),r(A,"class","svelte-gomknb"),r(M,"class","svelte-gomknb"),r(v,"id","image_container"),r(v,"class","svelte-gomknb"),r(s,"class","svelte-gomknb"),r(e,"id","project-container"),r(e,"class","svelte-gomknb")},m(a,E){B(a,e,E),i(e,s),i(s,l),i(l,n),i(n,c),i(l,g),i(l,_),i(_,y),i(s,j),i(s,D);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(D,null);i(s,J),i(s,v),se(V,v,null),i(v,L),se(P,v,null),i(v,G),i(v,A),i(A,H),i(v,R),i(v,M),i(M,N),i(v,Z);for(let t=0;t<u.length;t+=1)u[t]&&u[t].m(v,null);x=!0},p(a,[E]){if(E&2){z=a[1];let t;for(t=0;t<z.length;t+=1){const b=de(a,z,t);d[t]?d[t].p(b,E):(d[t]=ue(b),d[t].c(),d[t].m(D,null))}for(;t<d.length;t+=1)d[t].d(1);d.length=z.length}if(E&1){O=a[0];let t;for(t=0;t<O.length;t+=1){const b=he(a,O,t);u[t]?u[t].p(b,E):(u[t]=ve(b),u[t].c(),u[t].m(v,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=O.length}},i(a){x||(ae(V.$$.fragment,a),ae(P.$$.fragment,a),x=!0)},o(a){ne(V.$$.fragment,a),ne(P.$$.fragment,a),x=!1},d(a){a&&h(e),re(d,a),oe(V),oe(P),re(u,a)}}}const we="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z";function De(o){return[[{id:"image_p2p",url:`${ie}/pseudocode2python`,src:"assets/projects/pseudocode2python.jpeg"},{id:"image_pi",url:`${ie}/python-interpreter`,src:"assets/projects/python-interpreter.jpeg"}],[{name:"HTML",color:"#e34c26"},{name:"Svelte",color:"#ff3e00"},{name:"JavaScript",color:"#f1e05a"},{name:"TypeScript",color:"#3178c6"},{name:"CSS",color:"#563d7c"},{name:"Sass",color:"#a53b70"}],{html_url:"https://github.com/berkay-yalin/berkay-yalin.io",name:"berkay.yalin.io",description:"personal portfolio website",language:"JavaScript"},c=>ke(c)]}class je extends ge{constructor(e){super(),_e(this,e,De,$e,fe,{})}}export{je as default};
