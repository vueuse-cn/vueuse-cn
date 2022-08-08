import{_ as e,a as t,b as r}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as y,c as A,b as n,e as B,a as s,d as a}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const x=JSON.parse('{"title":"useEventSource","description":"","frontmatter":{"category":"Network"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useEventSource/index.md"}'),i={name:"core/useEventSource/index.md"},u=B(`<h1 id="useeventsource" tabindex="-1">useEventSource <a class="header-anchor" href="#useeventsource" aria-hidden="true">#</a></h1><p>An <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventSource" target="_blank" rel="noopener noreferrer">EventSource</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" target="_blank" rel="noopener noreferrer">Server-Sent-Events</a> instance opens a persistent connection to an HTTP server, which sends events in text/event-stream format.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useEventSource</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">status</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">data</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">error</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">close</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useEventSource</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;https://event-source-url&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useEventSource</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">status</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">data</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">error</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">close</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useEventSource</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;https://event-source-url&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>State</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td><code>Ref&lt;string&gt;</code></td><td>A read-only value representing the state of the connection. Possible values are CONNECTING (0), OPEN (1), or CLOSED (2)</td></tr><tr><td>data</td><td><code>Ref&lt;string | null&gt;</code></td><td>Reference to the latest data received via the EventSource, can be watched to respond to incoming messages</td></tr><tr><td>eventSource</td><td><code>Ref&lt;EventSource | null&gt;</code></td><td>Reference to the current EventSource instance</td></tr></tbody></table><table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td><code>() =&gt; void</code></td><td>Closes the EventSource connection gracefully.</td></tr></tbody></table><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseEventSourceOptions</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">EventSourceInit</span></span>
<span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Reactive wrapper for EventSource.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useEventSource</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource</span><span style="color:#758575;"> EventSource</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">url</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">events</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">options</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useEventSource</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">url</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">events</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Array</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#858585;">&gt;,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseEventSourceOptions</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">eventSource</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">EventSource</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">event</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">data</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">status</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#C98A7D;">&quot;OPEN&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;CONNECTING&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;CLOSED&quot;</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">error</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">Event</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">null</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">close</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">void</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseEventSourceReturn</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReturnType</span><span style="color:#858585;">&lt;</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useEventSource</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseEventSourceOptions</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">EventSourceInit</span></span>
<span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Reactive wrapper for EventSource.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useEventSource</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource</span><span style="color:#A0ADA0;"> EventSource</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">url</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">events</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">options</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useEventSource</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">url</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">events</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Array</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">&gt;,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseEventSourceOptions</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">eventSource</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">EventSource</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">event</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">data</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">status</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B56959;">&quot;OPEN&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;CONNECTING&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;CLOSED&quot;</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">error</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">Event</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">null</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">close</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">void</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseEventSourceReturn</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReturnType</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useEventSource</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,9),D=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useEventSource/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useEventSource/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),C=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),d=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function E(v,h,g,S,f,_){const o=e,l=t,p=r;return y(),A("div",null,[u,n(o,{fn:"useEventSource"}),D,C,n(l,{fn:"useEventSource"}),d,n(p,{fn:"useEventSource"})])}var R=c(i,[["render",E]]);export{x as __pageData,R as default};
