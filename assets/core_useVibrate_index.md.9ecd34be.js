import{_ as t,a as p,b as r}from"./chunks/FunctionInfo.bad951e4.js";import{_ as c,o as y,c as i,b as o,e as A,a as s,d as l}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const P=JSON.parse('{"title":"useVibrate","description":"","frontmatter":{"category":"Browser"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useVibrate/index.md"}'),B={name:"core/useVibrate/index.md"},D=A(`<h1 id="usevibrate" tabindex="-1">useVibrate <a class="header-anchor" href="#usevibrate" aria-hidden="true">#</a></h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API" target="_blank" rel="noopener noreferrer">Vibration API</a></p><p>Most modern mobile devices include vibration hardware, which lets software code provides physical feedback to the user by causing the device to shake.</p><p>The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn&#39;t support it.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Vibration is described as a pattern of on-off pulses, which may be of varying lengths.</p><p>The pattern may consist of either a single integer describing the number of milliseconds to vibrate, or an array of integers describing a pattern of vibrations and pauses.</p><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useVibrate</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// This vibrates the device for 300 ms</span></span>
<span class="line"><span style="color:#758575;">// then pauses for 100 ms before vibrating the device again for another 300 ms:</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">vibrate</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">stop</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isSupported</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useVibrate</span><span style="color:#858585;">({</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">pattern</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#6394BF;">300</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">100</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">300</span><span style="color:#858585;">]</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// Start the vibration, it will automatically stop when the pattern is complete:</span></span>
<span class="line"><span style="color:#A1B567;">vibrate</span><span style="color:#858585;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// But if you want to stop it, you can:</span></span>
<span class="line"><span style="color:#A1B567;">stop</span><span style="color:#858585;">()</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useVibrate</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@vueuse/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// This vibrates the device for 300 ms</span></span>
<span class="line"><span style="color:#A0ADA0;">// then pauses for 100 ms before vibrating the device again for another 300 ms:</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">vibrate</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">stop</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isSupported</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useVibrate</span><span style="color:#8E8F8B;">({</span><span style="color:#393A34;"> </span><span style="color:#B58451;">pattern</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#296AA3;">300</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">100</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">300</span><span style="color:#8E8F8B;">]</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// Start the vibration, it will automatically stop when the pattern is complete:</span></span>
<span class="line"><span style="color:#6C7834;">vibrate</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// But if you want to stop it, you can:</span></span>
<span class="line"><span style="color:#6C7834;">stop</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2>`,9),d=s("details",null,[s("summary",{op50:"",italic:""},"Show Type Declarations"),s("div",{class:"language-typescript"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseVibrateOptions"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"extends"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ConfigurableNavigator"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Vibration Pattern")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * An array of values describes alternating periods in which the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * device is vibrating and not vibrating. Each value in the array")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * is converted to an integer, then interpreted alternately as")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * the number of milliseconds the device should vibrate and the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * number of milliseconds it should not be vibrating")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"default"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"pattern"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MaybeComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Interval to run a persistent vibration, in ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Pass `0` to disable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"default"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"interval"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Reactive vibrate")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"see"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"https://vueuse.org/useVibrate")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"see"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useVibrate"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseVibrateOptions"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isSupported"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Ref"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"pattern"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MaybeComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"intervalControls"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Pausable"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"vibrate"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"pattern"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},"[])"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"stop"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseVibrateReturn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ReturnType"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#CB7676"}},"typeof"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"useVibrate"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseVibrateOptions"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"extends"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ConfigurableNavigator"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Vibration Pattern")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * An array of values describes alternating periods in which the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * device is vibrating and not vibrating. Each value in the array")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * is converted to an integer, then interpreted alternately as")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * the number of milliseconds the device should vibrate and the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * number of milliseconds it should not be vibrating")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"default"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"pattern"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MaybeComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Interval to run a persistent vibration, in ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Pass `0` to disable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"default"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"interval"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Reactive vibrate")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"see"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"https://vueuse.org/useVibrate")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"see"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useVibrate"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"options"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseVibrateOptions"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isSupported"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Ref"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"pattern"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MaybeComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"intervalControls"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Pausable"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"vibrate"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"pattern"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},"[])"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"stop"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseVibrateReturn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ReturnType"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#AB5959"}},"typeof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"useVibrate"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"})])])])],-1),u=s("h2",{id:"source",tabindex:"-1"},[l("Source "),s("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#")],-1),C=s("p",null,[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVibrate/index.ts",target:"_blank",rel:"noopener noreferrer"},"Source"),l(" \u2022 "),s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useVibrate/index.md",target:"_blank",rel:"noopener noreferrer"},"Docs")],-1),b=s("h2",{id:"contributors",tabindex:"-1"},[l("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#")],-1),h=s("h2",{id:"changelog",tabindex:"-1"},[l("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1);function v(f,m,g,E,_,F){const n=t,a=p,e=r;return y(),i("div",null,[D,d,u,o(n,{fn:"useVibrate"}),C,b,o(a,{fn:"useVibrate"}),h,o(e,{fn:"useVibrate"})])}var T=c(B,[["render",v]]);export{P as __pageData,T as default};
