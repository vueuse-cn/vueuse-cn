import{_ as e,a as r,b as t}from"./chunks/FunctionInfo.d1df0703.js";import{_ as c,o as y,c as B,b as n,e as A,a as s,d as a}from"./app.32f1c884.js";import"./chunks/utils.e9c2f9be.js";const O=JSON.parse('{"title":"useObservable","description":"","frontmatter":{"category":"@RxJS"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"rxjs/useObservable/index.md"}'),D={name:"rxjs/useObservable/index.md"},i=A(`<h1 id="useobservable" tabindex="-1">useObservable <a class="header-anchor" href="#useobservable" aria-hidden="true">#</a></h1><p>Use an RxJS <a href="https://rxjs.dev/guide/observable" target="_blank" rel="noopener noreferrer"><code>Observable</code></a>, return a <code>ref</code>, and automatically unsubscribe from it when the component is unmounted.</p><p>Available in the <a href="/rxjs/README">@vueuse/rxjs</a> add-on.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">ref</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useObservable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">interval</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">mapTo</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">scan</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">startWith</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// setup()</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">count</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useObservable</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">interval</span><span style="color:#858585;">(</span><span style="color:#6394BF;">1000</span><span style="color:#858585;">).</span><span style="color:#A1B567;">pipe</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#A1B567;">mapTo</span><span style="color:#858585;">(</span><span style="color:#6394BF;">1</span><span style="color:#858585;">),</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#A1B567;">startWith</span><span style="color:#858585;">(</span><span style="color:#6394BF;">0</span><span style="color:#858585;">),</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#A1B567;">scan</span><span style="color:#858585;">((</span><span style="color:#B8A965;">total</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">next</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">next</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">total</span><span style="color:#858585;">),</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">),</span></span>
<span class="line"><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">ref</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useObservable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">interval</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">mapTo</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">scan</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">startWith</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// setup()</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">count</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useObservable</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">interval</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">1000</span><span style="color:#8E8F8B;">).</span><span style="color:#6C7834;">pipe</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">mapTo</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">),</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">startWith</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">),</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">scan</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">total</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">next</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">next</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">total</span><span style="color:#8E8F8B;">),</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">),</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><p>If you want to add custom error handling to an <code>Observable</code> that might error, you can supply an optional <code>onError</code> configuration. Without this, RxJS will treat any error in the supplied <code>Observable</code> as an &quot;unhandled error&quot; and it will be thrown in a new call stack and reported to <code>window.onerror</code> (or <code>process.on(&#39;error&#39;)</code> if you happen to be in Node).</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">ref</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useObservable</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">interval</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">map</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// setup()</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">count</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useObservable</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">interval</span><span style="color:#858585;">(</span><span style="color:#6394BF;">1000</span><span style="color:#858585;">).</span><span style="color:#A1B567;">pipe</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#A1B567;">map</span><span style="color:#858585;">((</span><span style="color:#B8A965;">n</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">n</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">10</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">        </span><span style="color:#4D9375;">throw</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">Error</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;oops&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">n</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">n</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}),</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">),</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#A1B567;">onError</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">err</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#B8A965;">console</span><span style="color:#858585;">.</span><span style="color:#A1B567;">log</span><span style="color:#858585;">(</span><span style="color:#B8A965;">err</span><span style="color:#858585;">.</span><span style="color:#B8A965;">message</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// &quot;oops&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#858585;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">ref</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useObservable</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/rxjs&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">interval</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;rxjs&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">map</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;rxjs/operators&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// setup()</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">count</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useObservable</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">interval</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">1000</span><span style="color:#8E8F8B;">).</span><span style="color:#6C7834;">pipe</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">map</span><span style="color:#8E8F8B;">((</span><span style="color:#8C862B;">n</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">n</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">10</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1C6B48;">throw</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Error</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;oops&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1C6B48;">return</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">n</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">n</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}),</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">),</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#6C7834;">onError</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">err</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8C862B;">console</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">log</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">err</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">message</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// &quot;oops&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseObservableOptions</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">I</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">onError</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">err</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">any</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">void</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;">   * The value that should be set if the observable has not emitted.</span></span>
<span class="line"><span style="color:#758575;">   */</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">initialValue</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">I</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useObservable</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">H</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">I</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span><span style="color:#858585;">&gt;(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">observable</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Observable</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">H</span><span style="color:#858585;">&gt;,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseObservableOptions</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">I</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Readonly</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">Ref</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">H</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">I</span><span style="color:#858585;">&gt;&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseObservableOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">I</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">onError</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">err</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">any</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">void</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * The value that should be set if the observable has not emitted.</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">initialValue</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">I</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useObservable</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">H</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">I</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span><span style="color:#8E8F8B;">&gt;(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">observable</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Observable</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">H</span><span style="color:#8E8F8B;">&gt;,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseObservableOptions</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">I</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Readonly</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">Ref</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">H</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">I</span><span style="color:#8E8F8B;">&gt;&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2>`,10),C=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/rxjs/useObservable/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),a(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/rxjs/useObservable/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),d=s("h2",{id:"contributors",tabindex:"-1"},[a("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),u=s("h2",{id:"changelog",tabindex:"-1"},[a("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function b(E,h,v,F,m,f){const l=e,p=r,o=t;return y(),B("div",null,[i,n(l,{fn:"useObservable"}),C,d,n(p,{fn:"useObservable"}),u,n(o,{fn:"useObservable"})])}var j=c(D,[["render",b]]);export{O as __pageData,j as default};
