import{_ as d,a as A,b as B}from"./chunks/FunctionInfo.bad951e4.js";import{_ as h}from"./chunks/DemoContainer.27403c15.js";import{j as _}from"./chunks/js-yaml.7f72ca33.js";import{f as D,aT as r,g as m,o as t,c,t as C,u as g,J as f,b as s,w as b,e as y,a,d as v}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const M={lang:"json"},Q=D({__name:"demo",setup(i){const n=r("(min-width: 1024px)"),o=r("(prefers-color-scheme: dark)"),e=m(()=>_.dump(f({isLargeScreen:n,prefersDark:o})));return(l,p)=>(t(),c("pre",M,C(g(e)),1))}}),k=y('<h1 id="usemediaquery" tabindex="-1">useMediaQuery <a class="header-anchor" href="#usemediaquery" aria-hidden="true">#</a></h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries" target="_blank" rel="noopener noreferrer">Media Query</a>. Once you&#39;ve created a MediaQueryList object, you can check the result of the query or receive notifications when the result changes.</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',3),x=a("p",{class:"demo-source-link"},[a("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/demo.vue",target:"_blank"},"source")],-1),E=y(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useMediaQuery</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isLargeScreen</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMediaQuery</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;(min-width: 1024px)&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isPreferredDark</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMediaQuery</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;(prefers-color-scheme: dark)&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useMediaQuery</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isLargeScreen</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMediaQuery</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;(min-width: 1024px)&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isPreferredDark</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMediaQuery</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;(prefers-color-scheme: dark)&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Reactive Media Query.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useMediaQuery</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">query</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">options</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMediaQuery</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">query</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ConfigurableWindow</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">boolean</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Reactive Media Query.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useMediaQuery</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">query</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">options</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMediaQuery</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">query</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ConfigurableWindow</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">boolean</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/index.ts" target="_blank" rel="noopener noreferrer">Source</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,7),S=a("h2",{id:"changelog",tabindex:"-1"},[v("Changelog "),a("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),P=JSON.parse('{"title":"useMediaQuery","description":"","frontmatter":{"category":"Browser"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useMediaQuery/index.md"}'),T={name:"core/useMediaQuery/index.md"},R=Object.assign(T,{setup(i){return(n,o)=>{const e=d,l=h,p=A,u=B;return t(),c("div",null,[k,s(e,{fn:"useMediaQuery"}),s(l,null,{default:b(()=>[x,s(Q)]),_:1}),E,s(p,{fn:"useMediaQuery"}),S,s(u,{fn:"useMediaQuery"})])}}});export{P as __pageData,R as default};
