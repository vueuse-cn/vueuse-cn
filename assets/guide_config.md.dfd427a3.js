import{_ as s,o as n,c as a,e as o}from"./app.28320a3a.js";const d=JSON.parse('{"title":"Configurations","description":"","frontmatter":{},"headers":[{"level":3,"title":"Event Filters","slug":"event-filters"},{"level":3,"title":"Reactive Timing","slug":"reactive-timing"},{"level":3,"title":"Configurable Global Dependencies","slug":"configurable-global-dependencies"}],"relativePath":"guide/config.md"}'),l={name:"guide/config.md"},p=o(`<h1 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-hidden="true">#</a></h1><p>These show the general configurations for most of the functions in VueUse.</p><h3 id="event-filters" tabindex="-1">Event Filters <a class="header-anchor" href="#event-filters" aria-hidden="true">#</a></h3><p>From v4.0, we provide the Event Filters system to give the flexibility to control when events will get triggered. For example, you can use <code>throttleFilter</code> and <code>debounceFilter</code> to control the event trigger rate:</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">debounceFilter</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">throttleFilter</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useLocalStorage</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useMouse</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// changes will write to localStorage with a throttled 1s</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">storage</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useLocalStorage</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;my-key&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">foo</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;bar&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">},</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">eventFilter</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">throttleFilter</span><span style="color:#858585;">(</span><span style="color:#6394BF;">1000</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// mouse position will be updated after mouse idle for 100ms</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">x</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">y</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMouse</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">eventFilter</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">debounceFilter</span><span style="color:#858585;">(</span><span style="color:#6394BF;">100</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">debounceFilter</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">throttleFilter</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useLocalStorage</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useMouse</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// changes will write to localStorage with a throttled 1s</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">storage</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useLocalStorage</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;my-key&#39;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">foo</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;bar&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">},</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">eventFilter</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">throttleFilter</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">1000</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// mouse position will be updated after mouse idle for 100ms</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">x</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">y</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMouse</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">eventFilter</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">debounceFilter</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">100</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span></code></pre></div><p>Moreover, you can utilize <code>pausableFilter</code> to temporarily pause some events.</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">pausableFilter</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useDeviceMotion</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">motionControl</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">pausableFilter</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">motion</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useDeviceMotion</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">eventFilter</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">motionControl</span><span style="color:#858585;">.</span><span style="color:#B8A965;">eventFilter</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">motionControl</span><span style="color:#858585;">.</span><span style="color:#A1B567;">pause</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// motion updates paused</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">motionControl</span><span style="color:#858585;">.</span><span style="color:#A1B567;">resume</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// motion updates resumed</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">pausableFilter</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useDeviceMotion</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">motionControl</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">pausableFilter</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">motion</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useDeviceMotion</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">eventFilter</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">motionControl</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">eventFilter</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">motionControl</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">pause</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// motion updates paused</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">motionControl</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">resume</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// motion updates resumed</span></span>
<span class="line"></span></code></pre></div><h3 id="reactive-timing" tabindex="-1">Reactive Timing <a class="header-anchor" href="#reactive-timing" aria-hidden="true">#</a></h3><p>VueUse&#39;s functions follow Vue&#39;s reactivity system defaults for <a href="https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing" target="_blank" rel="noopener noreferrer">flush timing</a> where possible.</p><p>For <code>watch</code>-like composables (e.g. <code>pausableWatch</code>, <code>whenever</code>, <a href="/core/useStorage/"><code>useStorage</code></a> <a href="/core/useRefHistory/"><code>useRefHistory</code></a> the default is <code>{ flush: &#39;pre&#39; }</code>. Which means they will buffer invalidated effects and flush them asynchronously. This avoids unnecessary duplicate invocation when there are multiple state mutations happening in the same &quot;tick&quot;.</p><p>In the same way as with <code>watch</code>, VueUse allows you to configure the timing by passing the <code>flush</code> option:</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">pause</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">resume</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">pausableWatch</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">// Safely access updated DOM</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">flush</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;post&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">pause</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">resume</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">pausableWatch</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">// Safely access updated DOM</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">flush</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;post&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>flush option (default: <code>&#39;pre&#39;</code>)</strong></p><ul><li><code>&#39;pre&#39;</code>: buffers invalidated effects in the same &#39;tick&#39; and flushes them before rendering</li><li><code>&#39;post&#39;</code>: async like &#39;pre&#39; but fires after component updates so you can access the updated DOM</li><li><code>&#39;sync&#39;</code>: forces the effect to always trigger synchronously</li></ul><p><strong>Note:</strong> For <code>computed</code>-like composables (e.g. <a href="/shared/syncRef/"><code>syncRef</code></a> <code>controlledComputed</code>), when flush timing is configurable, the default is changed to <code>{ flush: &#39;sync&#39; }</code> to align them with the way computed refs works in Vue.</p><h3 id="configurable-global-dependencies" tabindex="-1">Configurable Global Dependencies <a class="header-anchor" href="#configurable-global-dependencies" aria-hidden="true">#</a></h3><p>From v4.0, functions that access the browser APIs will provide an option fields for you to specify the global dependencies (e.g. <code>window</code>, <code>document</code> and <code>navigator</code>). It will use the global instance by default, so for most of the time, you don&#39;t need to worry about it. This configure is useful when working with iframes and testing environments.</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// accessing parent context</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">parentMousePos</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMouse</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">window</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">window</span><span style="color:#858585;">.</span><span style="color:#B8A965;">parent</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">iframe</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">document</span><span style="color:#858585;">.</span><span style="color:#A1B567;">querySelect</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;#my-iframe&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// accessing child context</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">childMousePos</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMouse</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">window</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">iframe</span><span style="color:#858585;">.</span><span style="color:#B8A965;">contextWindow</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// accessing parent context</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">parentMousePos</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMouse</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">window</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">window</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">parent</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">iframe</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">document</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">querySelect</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;#my-iframe&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// accessing child context</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">childMousePos</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMouse</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">window</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">iframe</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">contextWindow</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// testing</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">mockWindow</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">/* ... */</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">x</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">y</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useMouse</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">window</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">mockWindow</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// testing</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">mockWindow</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">/* ... */</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">x</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">y</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useMouse</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">window</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">mockWindow</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span></code></pre></div>`,19),e=[p];function t(c,r,y,i,A,B){return n(),a("div",null,e)}var u=s(l,[["render",t]]);export{d as __pageData,u as default};
