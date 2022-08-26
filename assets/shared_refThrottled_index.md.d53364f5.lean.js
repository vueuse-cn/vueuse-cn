import{_ as C,a as f,b as g}from"./chunks/FunctionInfo.d1df0703.js";import{_ as m}from"./chunks/DemoContainer.0b73ea81.js";import{_ as v}from"./chunks/Note.4f27ccff.js";import{f as _,l as e,c8 as T,Q as b,o as d,c as A,H as E,I as F,a as s,b as a,w as B,t as p,u as x,d as t,e as k}from"./app.32f1c884.js";import"./chunks/utils.e9c2f9be.js";const R=t("Delay is set to 1000ms for this demo."),w=_({__name:"demo",setup(u){const r=e(!0),c=e(!1),n=e(""),l=T(n,1e3,r.value,c.value),o=e(0);return b(l,()=>{o.value+=1}),(y,i)=>{const h=v;return d(),A("div",null,[E(s("input",{"onUpdate:modelValue":i[0]||(i[0]=D=>n.value=D),placeholder:"Try to type anything...",type:"text"},null,512),[[F,n.value]]),a(h,null,{default:B(()=>[R]),_:1}),s("p",null,"Throttled: "+p(x(l)),1),s("p",null,"Times Updated: "+p(o.value),1),s("p",null,"Trailing: "+p(r.value),1),s("p",null,"Leading: "+p(c.value),1)])}}}),S=s("h1",{id:"refthrottled",tabindex:"-1"},[t("refThrottled "),s("a",{class:"header-anchor",href:"#refthrottled","aria-hidden":"true"},"#")],-1),V=s("p",null,"Throttle changing of a ref value.",-1),I=s("p",null,"\u8282\u6D41\u63A7\u5236 ref \u7684\u53D8\u5316\u3002",-1),N=s("h2",{id:"demo",tabindex:"-1"},[t("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),$=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/refThrottled/demo.vue",target:"_blank"},"source")],-1),j=k("",15),z=s("h2",{id:"changelog",tabindex:"-1"},[t("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),J=JSON.parse('{"title":"refThrottled","description":"","frontmatter":{"category":"Reactivity","alias":"useThrottle, throttledRef"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage \u4F7F\u7528","slug":"usage-\u4F7F\u7528"},{"level":3,"title":"Trailing","slug":"trailing"},{"level":3,"title":"Leading","slug":"leading"},{"level":2,"title":"Recommended Reading","slug":"recommended-reading"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/refThrottled/index.md"}'),U={name:"shared/refThrottled/index.md"},M=Object.assign(U,{setup(u){return(r,c)=>{const n=C,l=m,o=f,y=g;return d(),A("div",null,[S,a(n,{fn:"refThrottled"}),V,I,N,a(l,null,{default:B(()=>[$,a(w)]),_:1}),j,a(o,{fn:"refThrottled"}),z,a(y,{fn:"refThrottled"})])}}});export{J as __pageData,M as default};
