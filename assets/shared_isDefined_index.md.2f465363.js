import{_ as e,a as t,b as c}from"./chunks/FunctionInfo.bad951e4.js";import{_ as r,o as y,c as B,b as n,e as i,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const b=JSON.parse('{"title":"isDefined","description":"","frontmatter":{"category":"Utilities"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/isDefined/index.md"}'),A={name:"shared/isDefined/index.md"},d=i(`<h1 id="isdefined" tabindex="-1">isDefined <a class="header-anchor" href="#isdefined" aria-hidden="true">#</a></h1><p>Non-nullish checking type guard for Ref.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">isDefined</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">example</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#D4976C;">Math</span><span style="color:#858585;">.</span><span style="color:#E0A569;">random</span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;example&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">undefined</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// Ref&lt;string | undefined&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#A1B567;">isDefined</span><span style="color:#858585;">(</span><span style="color:#B8A965;">example</span><span style="color:#858585;">))</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">example</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// Ref&lt;string&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">isDefined</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">example</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#A65E2B;">Math</span><span style="color:#8E8F8B;">.</span><span style="color:#B58451;">random</span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;example&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Ref&lt;string | undefined&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#6C7834;">isDefined</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">example</span><span style="color:#8E8F8B;">))</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">example</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// Ref&lt;string&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">isDefined</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">v</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">v</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">is</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">Exclude</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span><span style="color:#858585;">&gt;&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">isDefined</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">v</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">v</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">is</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">Exclude</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span><span style="color:#858585;">&gt;&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">isDefined</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;(</span><span style="color:#B8A965;">v</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">v</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">is</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Exclude</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">isDefined</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">v</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">v</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">is</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">Exclude</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span><span style="color:#8E8F8B;">&gt;&gt;</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">isDefined</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">v</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">v</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">is</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">Exclude</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span><span style="color:#8E8F8B;">&gt;&gt;</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">isDefined</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;(</span><span style="color:#8C862B;">v</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">v</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">is</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Exclude</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),D=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/isDefined/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/isDefined/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),C=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),u=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function f(g,h,E,_,m,x){const l=e,o=t,p=c;return y(),B("div",null,[d,n(l,{fn:"isDefined"}),D,C,n(o,{fn:"isDefined"}),u,n(p,{fn:"isDefined"})])}var R=r(A,[["render",f]]);export{b as __pageData,R as default};
