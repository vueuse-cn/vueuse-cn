import{_ as p,a as t,b as r}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as y,c as i,b as n,e as u,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const x=JSON.parse('{"title":"useToString","description":"","frontmatter":{"category":"Utilities"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/useToString/index.md"}'),A={name:"shared/useToString/index.md"},d=u(`<h1 id="usetostring" tabindex="-1">useToString <a class="header-anchor" href="#usetostring" aria-hidden="true">#</a></h1><p>Reactively convert a ref to string.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useToString</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">number</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">3.14</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">str</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useToString</span><span style="color:#858585;">(</span><span style="color:#B8A965;">number</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">str</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// &#39;3.14&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useToString</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">number</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">3.14</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">str</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useToString</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">number</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">str</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &#39;3.14&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Reactively convert a ref to string.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useToString</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useToString</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">value</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">unknown</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Reactively convert a ref to string.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useToString</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useToString</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">value</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">unknown</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),B=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useToString/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useToString/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),g=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),h=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function C(D,_,f,m,v,b){const e=p,o=t,l=r;return y(),i("div",null,[d,n(e,{fn:"useToString"}),B,g,n(o,{fn:"useToString"}),h,n(l,{fn:"useToString"})])}var F=c(A,[["render",C]]);export{x as __pageData,F as default};
