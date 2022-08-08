import{_ as g,a as E,b as _}from"./chunks/FunctionInfo.bad951e4.js";import{_ as F}from"./chunks/DemoContainer.27403c15.js";import{_ as f}from"./chunks/Note.bd9d1e91.js";import{f as x,l as y,ck as v,B as T,o as u,c as d,b as a,w as B,H as w,I as P,a as s,u as D,t as W,d as e,e as k}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const I=e(" Type something below to trigger the watch "),S=["disabled"],R=["disabled"],$=s("br",null,null,-1),O=s("br",null,null,-1),V=e("Log"),N=x({__name:"demo",setup(h){const t=y(),n=y(""),l=y(""),p=v(l,o=>n.value+=`Changed to "${o}"
`);T(()=>{var o;return(o=t.value)==null?void 0:o.focus()});const c=()=>{n.value=""},r=()=>{n.value+=`Paused
`,p.pause()},b=()=>{n.value+=`Resumed
`,p.resume()},{isActive:A}=p;return(o,i)=>{const C=f;return u(),d("div",null,[a(C,{class:"mb-2"},{default:B(()=>[I]),_:1}),w(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=m=>l.value=m),type:"text"},null,512),[[P,l.value]]),s("button",{disabled:!D(A),class:"orange",onClick:r}," Pause ",8,S),s("button",{disabled:D(A),onClick:b}," Resume ",8,R),s("button",{onClick:c}," Clear Log "),$,O,a(C,null,{default:B(()=>[V]),_:1}),s("pre",null,W(n.value),1)])}}}),M=s("h1",{id:"watchpausable",tabindex:"-1"},[e("watchPausable "),s("a",{class:"header-anchor",href:"#watchpausable","aria-hidden":"true"},"#")],-1),U=s("p",null,"Pausable watch",-1),j=s("h2",{id:"demo",tabindex:"-1"},[e("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),H=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/watchPausable/demo.vue",target:"_blank"},"source")],-1),L=k("",8),J=s("h2",{id:"changelog",tabindex:"-1"},[e("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),Y=JSON.parse('{"title":"watchPausable","description":"","frontmatter":{"category":"Watch","alias":"pausableWatch"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/watchPausable/index.md"}'),q={name:"shared/watchPausable/index.md"},Z=Object.assign(q,{setup(h){return(t,n)=>{const l=g,p=F,c=E,r=_;return u(),d("div",null,[M,U,j,a(l,{fn:"watchPausable"}),a(p,null,{default:B(()=>[H,a(N)]),_:1}),L,a(c,{fn:"watchPausable"}),J,a(r,{fn:"watchPausable"})])}}});export{Y as __pageData,Z as default};
