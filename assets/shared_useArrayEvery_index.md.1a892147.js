import{_ as e,a as r,b as t}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as y,c as A,b as a,e as B,a as s,d as n}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const T=JSON.parse('{"title":"useArrayEvery","description":"","frontmatter":{"category":"Array"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Use with array of multiple refs","slug":"use-with-array-of-multiple-refs"},{"level":3,"title":"Use with reactive array","slug":"use-with-reactive-array"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/useArrayEvery/index.md"}'),i={name:"shared/useArrayEvery/index.md"},D=B(`<h1 id="usearrayevery" tabindex="-1">useArrayEvery <a class="header-anchor" href="#usearrayevery" aria-hidden="true">#</a></h1><p>Reactive <code>Array.every</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="use-with-array-of-multiple-refs" tabindex="-1">Use with array of multiple refs <a class="header-anchor" href="#use-with-array-of-multiple-refs" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useArrayEvery</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">item1</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">0</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">item2</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">2</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">item3</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">4</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">item4</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">6</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">item5</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">(</span><span style="color:#6394BF;">8</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">list</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#B8A965;">item1</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">item2</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">item3</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">item4</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">item5</span><span style="color:#858585;">]</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">result</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useArrayEvery</span><span style="color:#858585;">(</span><span style="color:#B8A965;">list</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">%</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">2</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#758575;">// result.value: true</span></span>
<span class="line"><span style="color:#B8A965;">item1</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span></span>
<span class="line"><span style="color:#758575;">// result.value: false</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useArrayEvery</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">item1</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">item2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">2</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">item3</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">4</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">item4</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">6</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">item5</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">8</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">list</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#8C862B;">item1</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">item2</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">item3</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">item4</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">item5</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">result</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useArrayEvery</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">list</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">%</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// result.value: true</span></span>
<span class="line"><span style="color:#8C862B;">item1</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span></span>
<span class="line"><span style="color:#A0ADA0;">// result.value: false</span></span>
<span class="line"></span></code></pre></div><h3 id="use-with-reactive-array" tabindex="-1">Use with reactive array <a class="header-anchor" href="#use-with-reactive-array" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useArrayEvery</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">list</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ref</span><span style="color:#858585;">([</span><span style="color:#6394BF;">0</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">2</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">4</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">6</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">8</span><span style="color:#858585;">])</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">result</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useArrayEvery</span><span style="color:#858585;">(</span><span style="color:#B8A965;">list</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">i</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">%</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">2</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#758575;">// result.value: true</span></span>
<span class="line"><span style="color:#B8A965;">list</span><span style="color:#858585;">.</span><span style="color:#B8A965;">value</span><span style="color:#858585;">.</span><span style="color:#A1B567;">push</span><span style="color:#858585;">(</span><span style="color:#6394BF;">9</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#758575;">// result.value: false</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useArrayEvery</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">list</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ref</span><span style="color:#8E8F8B;">([</span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">4</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">6</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">8</span><span style="color:#8E8F8B;">])</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">result</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useArrayEvery</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">list</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">i</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">%</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">2</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// result.value: true</span></span>
<span class="line"><span style="color:#8C862B;">list</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">value</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">push</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">9</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#A0ADA0;">// result.value: false</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Reactive \`Array.every\`</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useArrayEvery</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#858585;">{</span><span style="color:#A1B567;">Array</span><span style="color:#858585;">}</span><span style="color:#758575;"> </span><span style="color:#B8A965;">list</span><span style="color:#758575;"> - the array was called upon.</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">fn</span><span style="color:#758575;"> - a function to test each element.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">returns</span><span style="color:#758575;"> </span><span style="color:#858585;">{</span><span style="color:#A1B567;">boolean</span><span style="color:#858585;">}</span><span style="color:#758575;"> **true** if the \`fn\` function returns a **truthy** value for every element from the array. Otherwise, **false**.</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useArrayEvery</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">list</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;[]&gt;,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">fn</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">element</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">T</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">index</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">number</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">array</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">T</span><span style="color:#858585;">&gt;[])</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">unknown</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">boolean</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Reactive \`Array.every\`</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useArrayEvery</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#6C7834;">Array</span><span style="color:#8E8F8B;">}</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">list</span><span style="color:#A0ADA0;"> - the array was called upon.</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">fn</span><span style="color:#A0ADA0;"> - a function to test each element.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">returns</span><span style="color:#A0ADA0;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#6C7834;">boolean</span><span style="color:#8E8F8B;">}</span><span style="color:#A0ADA0;"> **true** if the \`fn\` function returns a **truthy** value for every element from the array. Otherwise, **false**.</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useArrayEvery</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">list</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;[]&gt;,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">fn</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">element</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">index</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">number</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">array</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">T</span><span style="color:#8E8F8B;">&gt;[])</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">unknown</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">boolean</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,10),C=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useArrayEvery/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),n(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useArrayEvery/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),u=s("h2",{id:"contributors",tabindex:"-1"},[n("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),d=s("h2",{id:"changelog",tabindex:"-1"},[n("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function h(E,f,v,m,F,g){const l=e,p=r,o=t;return y(),A("div",null,[D,a(l,{fn:"useArrayEvery"}),C,u,a(p,{fn:"useArrayEvery"}),d,a(o,{fn:"useArrayEvery"})])}var w=c(i,[["render",h]]);export{T as __pageData,w as default};
