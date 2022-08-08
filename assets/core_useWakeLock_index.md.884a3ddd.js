import{_ as B,a as D,b as C}from"./chunks/FunctionInfo.bad951e4.js";import{_ as u}from"./chunks/DemoContainer.27403c15.js";import{_ as d}from"./chunks/BooleanDisplay.12b7fb61.js";import{f as k,J as _,bK as g,g as h,o as r,c as y,a as n,b as a,t as m,u as v,F as f,d as p,w as b,e as A}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const E=p(" Is Supported: "),L=p(" Is Active: "),W=k({__name:"demo",setup(i){const s=_(g()),e=h(()=>s.isActive?"OFF":"ON"),l=()=>s.isActive?s.request("screen"):s.release();return(t,c)=>{const o=d;return r(),y(f,null,[n("div",null,[E,a(o,{value:s.isSupported},null,8,["value"])]),n("div",null,[L,a(o,{value:s.isActive},null,8,["value"])]),n("button",{onClick:l},m(v(e)),1)],64)}}}),F=A('<h1 id="usewakelock" tabindex="-1">useWakeLock <a class="header-anchor" href="#usewakelock" aria-hidden="true">#</a></h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API" target="_blank" rel="noopener noreferrer">Screen Wake Lock API</a>. Provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',3),x=n("p",{class:"demo-source-link"},[n("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue",target:"_blank"},"source")],-1),S=A(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useWakeLock</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isSupported</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isActive</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">request</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">release</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useWakeLock</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useWakeLock</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isSupported</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isActive</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">request</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">release</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useWakeLock</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><p>If <code>request</code> is called,<code> isActive</code> will be <strong>true</strong>, and if <code>release</code> is called, or other tab is displayed, or the window is minimized,<code>isActive</code> will be <strong>false</strong>.</p><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">WakeLockType</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;screen&quot;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">WakeLockSentinel</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">EventTarget</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">type</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">WakeLockType</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">released</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">release</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Promise</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">void</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseWakeLockOptions</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ConfigurableNavigator</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&amp;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">ConfigurableDocument</span></span>
<span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Reactive Screen Wake Lock API.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useWakeLock</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">options</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useWakeLock</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseWakeLockOptions</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">isSupported</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">boolean</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">isActive</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">boolean</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">request</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">type</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">WakeLockType</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Promise</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">void</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">release</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Promise</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">void</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseWakeLockReturn</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReturnType</span><span style="color:#858585;">&lt;</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useWakeLock</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">WakeLockType</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;screen&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">WakeLockSentinel</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">EventTarget</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">type</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">WakeLockType</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">released</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">release</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Promise</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">void</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseWakeLockOptions</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ConfigurableNavigator</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&amp;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">ConfigurableDocument</span></span>
<span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Reactive Screen Wake Lock API.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useWakeLock</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">options</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useWakeLock</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseWakeLockOptions</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">isSupported</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">boolean</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">isActive</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">boolean</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">request</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">type</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">WakeLockType</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Promise</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">void</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">release</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Promise</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">void</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseWakeLockReturn</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReturnType</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useWakeLock</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/index.ts" target="_blank" rel="noopener noreferrer">Source</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,8),T=n("h2",{id:"changelog",tabindex:"-1"},[p("Changelog "),n("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),U=JSON.parse('{"title":"useWakeLock","description":"","frontmatter":{"category":"Browser"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useWakeLock/index.md"}'),P={name:"core/useWakeLock/index.md"},O=Object.assign(P,{setup(i){return(s,e)=>{const l=B,t=u,c=D,o=C;return r(),y("div",null,[F,a(l,{fn:"useWakeLock"}),a(t,null,{default:b(()=>[x,a(W)]),_:1}),S,a(c,{fn:"useWakeLock"}),T,a(o,{fn:"useWakeLock"})])}}});export{U as __pageData,O as default};
