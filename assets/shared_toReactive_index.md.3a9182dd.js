import{_ as t,a as c,b as r}from"./chunks/FunctionInfo.bad951e4.js";import{_ as y}from"./chunks/RequiresProxy.3b270d11.js";import{_ as A,o as i,c as B,b as a,a as s,d as n,e as C}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const $=JSON.parse('{"title":"toReactive","description":"","frontmatter":{"category":"Reactivity"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/toReactive/index.md"}'),d={name:"shared/toReactive/index.md"},D=s("h1",{id:"toreactive",tabindex:"-1"},[n("toReactive "),s("a",{class:"header-anchor",href:"#toreactive","aria-hidden":"true"},"#")],-1),f=s("p",null,'Converts ref to reactive. Also made possible to create a "swapable" reactive object.',-1),u=C(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">toReactive</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">refState</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">foo</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;bar&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">refState</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#858585;">.</span><span style="color:#B8A965;">foo</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">state</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">toReactive</span><span style="color:#858585;">(</span><span style="color:#B8A965;">refState</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// &lt;--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">state</span><span style="color:#858585;">.</span><span style="color:#B8A965;">foo</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">refState</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">bar</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;foo&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">state</span><span style="color:#858585;">.</span><span style="color:#B8A965;">foo</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// =&gt; undefined</span></span>
<span class="line"><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">state</span><span style="color:#858585;">.</span><span style="color:#B8A965;">bar</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// =&gt; &#39;foo&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">toReactive</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">refState</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">foo</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;bar&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">refState</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">foo</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">state</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">toReactive</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">refState</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &lt;--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">state</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">foo</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// =&gt; &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">refState</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">bar</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;foo&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">state</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">foo</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// =&gt; undefined</span></span>
<span class="line"><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">state</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">bar</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// =&gt; &#39;foo&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Converts ref to reactive.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/toReactive</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">objectRef</span><span style="color:#758575;"> A ref of object</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">toReactive</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">object</span><span style="color:#858585;">&gt;(</span><span style="color:#B8A965;">objectRef</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Converts ref to reactive.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/toReactive</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">objectRef</span><span style="color:#A0ADA0;"> A ref of object</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">toReactive</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">object</span><span style="color:#8E8F8B;">&gt;(</span><span style="color:#8C862B;">objectRef</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,5),h=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/toReactive/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),n(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/toReactive/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),g=s("h2",{id:"contributors",tabindex:"-1"},[n("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),_=s("h2",{id:"changelog",tabindex:"-1"},[n("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function v(b,E,F,m,R,x){const o=y,l=t,p=c,e=r;return i(),B("div",null,[D,f,a(o),u,a(l,{fn:"toReactive"}),h,g,a(p,{fn:"toReactive"}),_,a(e,{fn:"toReactive"})])}var N=A(d,[["render",v]]);export{$ as __pageData,N as default};
