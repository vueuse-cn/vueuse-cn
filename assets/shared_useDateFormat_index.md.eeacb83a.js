import{_ as A,a as B,b as i}from"./chunks/FunctionInfo.bad951e4.js";import{_ as D}from"./chunks/DemoContainer.27403c15.js";import{f as C,l as u,bN as m,a_ as h,o as t,c as r,a as s,t as g,u as F,H as f,I as E,F as _,b as a,w as b,e as c,d as v}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const x={class:"text-20px font-bold text-emerald-500"},T={class:"flex items-center"},S=s("span",{class:"mr-5px text-18px"}," Formatter Editor : ",-1),k=C({__name:"demo",setup(y){const n=u("YYYY-MM-DD HH:mm:ss"),p=m(h(),n);return(e,l)=>(t(),r(_,null,[s("p",x,g(F(p)),1),s("div",T,[S,f(s("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o),type:"text"},null,512),[[E,n.value]])])],64))}}),Y=c('<h1 id="usedateformat" tabindex="-1">useDateFormat <a class="header-anchor" href="#usedateformat" aria-hidden="true">#</a></h1><p>Get the formatted date according to the string of tokens passed in, inspired by <a href="https://github.com/iamkun/dayjs" target="_blank" rel="noopener noreferrer">dayjs</a>.</p><p><strong>List of all available formats (HH:mm:ss by default):</strong></p><table><thead><tr><th>Format</th><th>Output</th><th>Description</th></tr></thead><tbody><tr><td><code>YY</code></td><td>18</td><td>Two-digit year</td></tr><tr><td><code>YYYY</code></td><td>2018</td><td>Four-digit year</td></tr><tr><td><code>M</code></td><td>1-12</td><td>The month, beginning at 1</td></tr><tr><td><code>MM</code></td><td>01-12</td><td>The month, 2-digits</td></tr><tr><td><code>D</code></td><td>1-31</td><td>The day of the month</td></tr><tr><td><code>DD</code></td><td>01-31</td><td>The day of the month, 2-digits</td></tr><tr><td><code>H</code></td><td>0-23</td><td>The hour</td></tr><tr><td><code>HH</code></td><td>00-23</td><td>The hour, 2-digits</td></tr><tr><td><code>h</code></td><td>1-12</td><td>The hour, 12-hour clock</td></tr><tr><td><code>hh</code></td><td>01-12</td><td>The hour, 12-hour clock, 2-digits</td></tr><tr><td><code>m</code></td><td>0-59</td><td>The minute</td></tr><tr><td><code>mm</code></td><td>00-59</td><td>The minute, 2-digits</td></tr><tr><td><code>s</code></td><td>0-59</td><td>The second</td></tr><tr><td><code>ss</code></td><td>00-59</td><td>The second, 2-digits</td></tr><tr><td><code>SSS</code></td><td>000-999</td><td>The millisecond, 3-digits</td></tr><tr><td><code>d</code></td><td>0-6</td><td>The day of the week, with Sunday as 0</td></tr><tr><td><code>dd</code></td><td>S-S</td><td>The min name of the day of the week</td></tr><tr><td><code>ddd</code></td><td>Sun-Sat</td><td>The short name of the day of the week</td></tr><tr><td><code>dddd</code></td><td>Sunday-Saturday</td><td>The name of the day of the week</td></tr></tbody></table><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',5),w=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useDateFormat/demo.vue",target:"_blank"},"source")],-1),M=c(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic" tabindex="-1">Basic <a class="header-anchor" href="#basic" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">script</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">setup</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">lang</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&quot;ts&quot;</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">ref</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">computed</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;vue-demi&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useNow</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useDateFormat</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">formatted</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useDateFormat</span><span style="color:#858585;">(</span><span style="color:#A1B567;">useNow</span><span style="color:#858585;">(),</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">script</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">div</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">{{ formatted }}</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">div</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">script</span><span style="color:#393A34;"> </span><span style="color:#B58451;">setup</span><span style="color:#393A34;"> </span><span style="color:#B58451;">lang</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&quot;ts&quot;</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">ref</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">computed</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;vue-demi&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useNow</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useDateFormat</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">formatted</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useDateFormat</span><span style="color:#8E8F8B;">(</span><span style="color:#6C7834;">useNow</span><span style="color:#8E8F8B;">(),</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">script</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">div</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">{{ formatted }}</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">div</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="use-with-locale" tabindex="-1">Use with locale <a class="header-anchor" href="#use-with-locale" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">script</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">setup</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">lang</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&quot;ts&quot;</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">ref</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">computed</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;vue-demi&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useNow</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useDateFormat</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">formatted</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useDateFormat</span><span style="color:#858585;">(</span><span style="color:#A1B567;">useNow</span><span style="color:#858585;">(),</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;YYYY-MM-DD (ddd)&#39;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">locales</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;en-US&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">script</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&lt;</span><span style="color:#429988;">div</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">{{ formatted }}</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">div</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">script</span><span style="color:#393A34;"> </span><span style="color:#B58451;">setup</span><span style="color:#393A34;"> </span><span style="color:#B58451;">lang</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&quot;ts&quot;</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">ref</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">computed</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;vue-demi&#39;</span></span>
<span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useNow</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useDateFormat</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">formatted</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useDateFormat</span><span style="color:#8E8F8B;">(</span><span style="color:#6C7834;">useNow</span><span style="color:#8E8F8B;">(),</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;YYYY-MM-DD (ddd)&#39;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">locales</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;en-US&#39;</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">script</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">div</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">{{ formatted }}</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">div</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">DateLike</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Date</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">number</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">undefined</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseDateFormatOptions</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;">   * The locale(s) to used for dd/ddd/dddd format</span></span>
<span class="line"><span style="color:#758575;">   *</span></span>
<span class="line"><span style="color:#758575;">   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).</span></span>
<span class="line"><span style="color:#758575;">   */</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">locales</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Intl</span><span style="color:#858585;">.</span><span style="color:#A1B567;">LocalesArgument</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">formatDate</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">date</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Date</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">formatStr</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">locales</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Intl</span><span style="color:#858585;">.</span><span style="color:#A1B567;">LocalesArgument</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">normalizeDate</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">(</span><span style="color:#B8A965;">date</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">DateLike</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">Date</span></span>
<span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * Get the formatted date according to the string of tokens passed in.</span></span>
<span class="line"><span style="color:#758575;"> *</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">see</span><span style="color:#758575;"> </span><span style="color:#B8A965;">https://vueuse.org/useDateFormat</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">date</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">formatStr</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">options</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useDateFormat</span><span style="color:#858585;">(</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">date</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#A1B567;">DateLike</span><span style="color:#858585;">&gt;,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">formatStr</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">MaybeComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#858585;">&gt;,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#B8A965;">options</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseDateFormatOptions</span></span>
<span class="line"><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ComputedRef</span><span style="color:#858585;">&lt;</span><span style="color:#E0A569;">string</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">type</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">UseDateFormatReturn</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">ReturnType</span><span style="color:#858585;">&lt;</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useDateFormat</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">DateLike</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Date</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">number</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> </span><span style="color:#B58451;">undefined</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseDateFormatOptions</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * The locale(s) to used for dd/ddd/dddd format</span></span>
<span class="line"><span style="color:#A0ADA0;">   *</span></span>
<span class="line"><span style="color:#A0ADA0;">   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">locales</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Intl</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">LocalesArgument</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">formatDate</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">date</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Date</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">formatStr</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">locales</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Intl</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">LocalesArgument</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">normalizeDate</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">date</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">DateLike</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">Date</span></span>
<span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * Get the formatted date according to the string of tokens passed in.</span></span>
<span class="line"><span style="color:#A0ADA0;"> *</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">see</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">https://vueuse.org/useDateFormat</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">date</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">formatStr</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">options</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useDateFormat</span><span style="color:#8E8F8B;">(</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">date</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#6C7834;">DateLike</span><span style="color:#8E8F8B;">&gt;,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">formatStr</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">MaybeComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">&gt;,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8C862B;">options</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseDateFormatOptions</span></span>
<span class="line"><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ComputedRef</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">type</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">UseDateFormatReturn</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">ReturnType</span><span style="color:#8E8F8B;">&lt;</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useDateFormat</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDateFormat/index.ts" target="_blank" rel="noopener noreferrer">Source</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDateFormat/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> \u2022 <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDateFormat/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,10),N=s("h2",{id:"changelog",tabindex:"-1"},[v("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),O=JSON.parse('{"title":"useDateFormat","description":"","frontmatter":{"category":"Time"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic","slug":"basic"},{"level":3,"title":"Use with locale","slug":"use-with-locale"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"shared/useDateFormat/index.md"}'),U={name:"shared/useDateFormat/index.md"},V=Object.assign(U,{setup(y){return(n,p)=>{const e=A,l=D,o=B,d=i;return t(),r("div",null,[Y,a(e,{fn:"useDateFormat"}),a(l,null,{default:b(()=>[w,a(k)]),_:1}),M,a(o,{fn:"useDateFormat"}),N,a(d,{fn:"useDateFormat"})])}}});export{O as __pageData,V as default};
