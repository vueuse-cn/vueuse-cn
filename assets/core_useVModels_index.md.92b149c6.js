import{_ as e,a as t,b as c}from"./chunks/FunctionInfo.bad951e4.js";import{_ as r,o as y,c as A,b as n,e as B,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const x=JSON.parse('{"title":"useVModels","description":"","frontmatter":{"category":"Component","related":"useVModel"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useVModels/index.md"}'),i={name:"core/useVModels/index.md"},D=B(`<h1 id="usevmodels" tabindex="-1">useVModels <a class="header-anchor" href="#usevmodels" aria-hidden="true">#</a></h1><p>Shorthand for props v-model binding. Think it like <code>toRefs(props)</code> but changes will also trigger emit.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useVModels</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">props</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">foo</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">String</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">bar</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">Number</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">setup</span><span style="color:#858585;">(</span><span style="color:#B8A965;">props</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">emit</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">foo</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">bar</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useVModels</span><span style="color:#858585;">(</span><span style="color:#B8A965;">props</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">emit</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">foo</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// props.foo</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#B8A965;">foo</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;foo&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// emit(&#39;update:foo&#39;, &#39;foo&#39;)</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useVModels</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">default</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">props</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">foo</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">String</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">bar</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Number</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">setup</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">props</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">emit</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">foo</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">bar</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useVModels</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">props</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">emit</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">foo</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// props.foo</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8C862B;">foo</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;foo&#39;</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// emit(&#39;update:foo&#39;, &#39;foo&#39;)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Shorthand for props v-model binding. Think like \`toRefs(props)\` but changes will also emit out.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useVModels</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">props</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">emit</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useVModels</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">P</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">object</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Name</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">props</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">P</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">emit</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">name</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Name</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">...</span><span style="color:#B8A965;">args</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span><span style="color:#858585;">[])</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">void</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseVModelOptions</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">any</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ToRefs</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">P</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Shorthand for props v-model binding. Think like \`toRefs(props)\` but changes will also emit out.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useVModels</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">props</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">emit</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useVModels</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">P</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">object</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Name</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">props</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">P</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">emit</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">name</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Name</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">...</span><span style="color:#8C862B;">args</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span><span style="color:#8E8F8B;">[])</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">void</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseVModelOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">any</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ToRefs</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">P</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,7),d=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVModels/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVModels/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),C=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),u=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function h(g,E,m,f,_,F){const o=e,l=t,p=c;return y(),A("div",null,[D,n(o,{fn:"useVModels"}),d,C,n(l,{fn:"useVModels"}),u,n(p,{fn:"useVModels"})])}var M=r(i,[["render",h]]);export{x as __pageData,M as default};
