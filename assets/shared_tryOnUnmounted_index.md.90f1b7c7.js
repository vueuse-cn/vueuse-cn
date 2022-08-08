import{_ as p,a as t,b as r}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as i,c as y,b as n,e as d,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const E=JSON.parse('{"title":"tryOnUnmounted","description":"","frontmatter":{"category":"Component"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/tryOnUnmounted/index.md"}'),u={name:"shared/tryOnUnmounted/index.md"},h=d(`<h1 id="tryonunmounted" tabindex="-1">tryOnUnmounted <a class="header-anchor" href="#tryonunmounted" aria-hidden="true">#</a></h1><p>Safe <code>onUnmounted</code>. Call <code>onUnmounted()</code> if it&#39;s inside a component lifecycle, if not, do nothing</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">tryOnUnmounted</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A1B567;">tryOnUnmounted</span><span style="color:#858585;">(()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">})</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">tryOnUnmounted</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6C7834;">tryOnUnmounted</span><span style="color:#8E8F8B;">(()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Call onUnmounted() if it&#39;s inside a component lifecycle, if not, do nothing</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">fn</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">tryOnUnmounted</span><span style="color:#858585;">(</span><span style="color:#B8A965;">fn</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Fn</span><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">void</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Call onUnmounted() if it&#39;s inside a component lifecycle, if not, do nothing</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">fn</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">tryOnUnmounted</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">fn</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Fn</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">void</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),A=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/tryOnUnmounted/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/tryOnUnmounted/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),m=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),B=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function _(f,g,C,D,v,b){const e=p,o=t,l=r;return i(),y("div",null,[h,n(e,{fn:"tryOnUnmounted"}),A,m,n(o,{fn:"tryOnUnmounted"}),B,n(l,{fn:"tryOnUnmounted"})])}var F=c(u,[["render",_]]);export{E as __pageData,F as default};
