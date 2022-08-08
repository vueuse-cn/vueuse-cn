import{_ as p,a as r,b as t}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as y,c as i,b as a,e as A,a as s,d as n}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const x=JSON.parse('{"title":"createSharedComposable","description":"","frontmatter":{"category":"State","related":"createGlobalState"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/createSharedComposable/index.md"}'),B={name:"shared/createSharedComposable/index.md"},d=A(`<h1 id="createsharedcomposable" tabindex="-1">createSharedComposable <a class="header-anchor" href="#createsharedcomposable" aria-hidden="true">#</a></h1><p>Make a composable function usable with multiple Vue instances.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">createSharedComposable</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useMouse</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">useSharedMouse</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">createSharedComposable</span><span style="color:#858585;">(</span><span style="color:#B8A965;">useMouse</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// CompA.vue</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">x</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">y</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useSharedMouse</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// CompB.vue - will reuse the previous state and no new event listeners will be registered</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">x</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">y</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useSharedMouse</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">createSharedComposable</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useMouse</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">useSharedMouse</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">createSharedComposable</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">useMouse</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// CompA.vue</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">x</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">y</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useSharedMouse</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// CompB.vue - will reuse the previous state and no new event listeners will be registered</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">x</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">y</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useSharedMouse</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Make a composable function usable with multiple Vue instances.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/createSharedComposable</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">createSharedComposable</span><span style="color:#858585;">&lt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">Fn</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">...</span><span style="color:#B8A965;">args</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span><span style="color:#858585;">[])</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span></span>
<span class="line"><span style="color:#858585;">&gt;(</span><span style="color:#B8A965;">composable</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Fn</span><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Fn</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Make a composable function usable with multiple Vue instances.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/createSharedComposable</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">createSharedComposable</span><span style="color:#8E8F8B;">&lt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">Fn</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">...</span><span style="color:#8C862B;">args</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span><span style="color:#8E8F8B;">[])</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span></span>
<span class="line"><span style="color:#8E8F8B;">&gt;(</span><span style="color:#8C862B;">composable</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Fn</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Fn</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),C=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/createSharedComposable/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),n(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/createSharedComposable/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),u=s("h2",{id:"contributors",tabindex:"-1"},[n("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),h=s("h2",{id:"changelog",tabindex:"-1"},[n("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function D(m,b,g,_,S,f){const e=p,l=r,o=t;return y(),i("div",null,[d,a(e,{fn:"createSharedComposable"}),C,u,a(l,{fn:"createSharedComposable"}),h,a(o,{fn:"createSharedComposable"})])}var M=c(B,[["render",D]]);export{x as __pageData,M as default};
