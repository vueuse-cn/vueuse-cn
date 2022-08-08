import{_ as e,a as t,b as c}from"./chunks/FunctionInfo.bad951e4.js";import{_ as r,o as y,c as A,b as n,e as B,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const O=JSON.parse('{"title":"reactifyObject","description":"","frontmatter":{"category":"Reactivity"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/reactifyObject/index.md"}'),i={name:"shared/reactifyObject/index.md"},C=B(`<h1 id="reactifyobject" tabindex="-1">reactifyObject <a class="header-anchor" href="#reactifyobject" aria-hidden="true">#</a></h1><p>Apply <a href="/shared/reactify/"><code>reactify</code></a>to an object</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">reactifyObject</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">reactifiedConsole</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">reactifyObject</span><span style="color:#858585;">(</span><span style="color:#B8A965;">console</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">a</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;42&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">reactifiedConsole</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">a</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// no longer need \`.value\`</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">reactifyObject</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">reactifiedConsole</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">reactifyObject</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">a</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;42&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">reactifiedConsole</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">a</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// no longer need \`.value\`</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyNested</span><span style="color:#858585;">&lt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">Keys</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">keyof</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">keyof</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">S</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">[</span><span style="color:#A1B567;">K</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Keys</span><span style="color:#858585;">]</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">[</span><span style="color:#A1B567;">K</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">...</span><span style="color:#B8A965;">args</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span><span style="color:#858585;">[])</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Reactified</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">[</span><span style="color:#A1B567;">K</span><span style="color:#858585;">],</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">S</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">[</span><span style="color:#A1B567;">K</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyObjectOptions</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyOptions</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;">   * Includes names from Object.getOwnPropertyNames</span></span>
<span class="line"><span style="color:#758575;">   *</span></span>
<span class="line"><span style="color:#758575;">   * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">default</span><span style="color:#758575;"> </span><span style="color:#B8A965;">true</span></span>
<span class="line"><span style="color:#758575;">   */</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">includeOwnProperties</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Apply \`reactify\` to an object</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">reactifyObject</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">object</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Keys</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">keyof</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">obj</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">keys</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#CB7676;">keyof</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">)[]</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyNested</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Keys</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">true</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">reactifyObject</span><span style="color:#858585;">&lt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">T</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">object</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">S</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">true</span></span>
<span class="line"><span style="color:#858585;">&gt;(</span><span style="color:#B8A965;">obj</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyObjectOptions</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">S</span><span style="color:#858585;">&gt;)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReactifyNested</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">keyof</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">S</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyNested</span><span style="color:#8E8F8B;">&lt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">Keys</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">keyof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">keyof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">S</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">K</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Keys</span><span style="color:#8E8F8B;">]</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">K</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">...</span><span style="color:#8C862B;">args</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span><span style="color:#8E8F8B;">[])</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Reactified</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">K</span><span style="color:#8E8F8B;">],</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">S</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">[</span><span style="color:#6C7834;">K</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyObjectOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * Includes names from Object.getOwnPropertyNames</span></span>
<span class="line"><span style="color:#A0ADA0;">   *</span></span>
<span class="line"><span style="color:#A0ADA0;">   * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">default</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">true</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">includeOwnProperties</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Apply \`reactify\` to an object</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">reactifyObject</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">object</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Keys</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">keyof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">obj</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">keys</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#AB5959;">keyof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">)[]</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyNested</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Keys</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">true</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">reactifyObject</span><span style="color:#8E8F8B;">&lt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">T</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">object</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">S</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B58451;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">&gt;(</span><span style="color:#8C862B;">obj</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyObjectOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">S</span><span style="color:#8E8F8B;">&gt;)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReactifyNested</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">keyof</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">S</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),D=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/reactifyObject/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/reactifyObject/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),d=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),f=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function E(u,b,g,h,F,_){const l=e,p=t,o=c;return y(),A("div",null,[C,n(l,{fn:"reactifyObject"}),D,d,n(p,{fn:"reactifyObject"}),f,n(o,{fn:"reactifyObject"})])}var m=r(i,[["render",E]]);export{O as __pageData,m as default};
