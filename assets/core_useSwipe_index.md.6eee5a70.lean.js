import{_ as b,a as m,b as f}from"./chunks/FunctionInfo.bad951e4.js";import{_ as F}from"./chunks/DemoContainer.27403c15.js";import{_ as S,f as w,l as i,g as T,bq as R,o as h,c as _,a as s,A as x,u as c,y as k,d as l,t as C,s as N,v as P,b as r,w as I,e as d}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const E=e=>(N("data-v-1936eda6"),e=e(),P(),e),U=E(()=>s("p",null,"Swipe right",-1)),O=[U],V={class:"status"},W=E(()=>s("br",null,null,-1)),$=w({__name:"demo",setup(e){const A=i(null),B=i(null),a=T(()=>{var t;return(t=B.value)==null?void 0:t.offsetWidth}),o=i("0"),n=i(1),D=()=>{o.value="0",n.value=1},{direction:u,isSwiping:v,lengthX:p,lengthY:g}=R(A,{passive:!1,onSwipe(t){if(a.value)if(p.value<0){const y=Math.abs(p.value);o.value=`${y}px`,n.value=1.1-y/a.value}else o.value="0",n.value=1},onSwipeEnd(t,y){p.value<0&&a.value&&Math.abs(p.value)/a.value>=.5?(o.value="100%",n.value=0):(o.value="0",n.value=1)}});return(t,y)=>(h(),_("div",null,[s("div",{ref_key:"container",ref:B,class:"container select-none"},[s("button",{onClick:D}," Reset "),s("div",{ref_key:"target",ref:A,class:x(["overlay",{animated:!c(v)}]),style:k({left:o.value,opacity:n.value})},O,6)],512),s("p",V,[l(" Direction: "+C(c(u)?c(u):"-")+" ",1),W,l(" lengthX: "+C(c(p))+" | lengthY: "+C(c(g)),1)])]))}});var q=S($,[["__scopeId","data-v-1936eda6"]]);const G=d("",3),H=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useSwipe/demo.vue",target:"_blank"},"source")],-1),L=d("",3),M=s("details",null,[s("summary",{op50:"",italic:""},"Show Type Declarations"),s("div",{class:"language-typescript"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"enum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"SwipeDirection"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"UP"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"UP"'),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"RIGHT"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"RIGHT"'),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"DOWN"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"DOWN"'),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"LEFT"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"LEFT"'),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"NONE"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"NONE"'),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseSwipeOptions"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"extends"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ConfigurableWindow"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Register events as passive")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"default"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"passive"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"default"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"50")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"threshold"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Callback on swipe start")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"onSwipeStart"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"e"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"TouchEvent"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Callback on swipe moves")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"onSwipe"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"e"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"TouchEvent"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   * Callback on swipe ends")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"onSwipeEnd"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"e"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"TouchEvent"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"direction"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"SwipeDirection"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseSwipeReturn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isPassiveEventSupported"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isSwiping"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Ref"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"direction"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"SwipeDirection"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"coordsStart"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Readonly"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"Position"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"coordsEnd"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Readonly"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"Position"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lengthX"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lengthY"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"stop"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Reactive swipe detection.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"see"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"https://vueuse.org/useSwipe")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useSwipe"),s("span",{style:{color:"#858585"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"target"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MaybeComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"EventTarget"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined"),s("span",{style:{color:"#858585"}},">,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseSwipeOptions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseSwipeReturn")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"enum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"SwipeDirection"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"UP"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"UP"'),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"RIGHT"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"RIGHT"'),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"DOWN"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"DOWN"'),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"LEFT"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"LEFT"'),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"NONE"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"NONE"'),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseSwipeOptions"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"extends"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ConfigurableWindow"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Register events as passive")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"default"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"passive"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"default"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"50")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"threshold"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Callback on swipe start")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"onSwipeStart"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"e"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"TouchEvent"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Callback on swipe moves")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"onSwipe"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"e"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"TouchEvent"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   * Callback on swipe ends")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"   */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"onSwipeEnd"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"e"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"TouchEvent"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"direction"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"SwipeDirection"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseSwipeReturn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isPassiveEventSupported"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isSwiping"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Ref"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"direction"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"SwipeDirection"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"coordsStart"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Readonly"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"Position"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"coordsEnd"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Readonly"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"Position"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lengthX"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lengthY"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"stop"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Reactive swipe detection.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"see"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"https://vueuse.org/useSwipe")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useSwipe"),s("span",{style:{color:"#8E8F8B"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"target"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MaybeComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"EventTarget"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined"),s("span",{style:{color:"#8E8F8B"}},">,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"options"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseSwipeOptions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseSwipeReturn")]),l(`
`),s("span",{class:"line"})])])])],-1),X=d("",3),Y=s("h2",{id:"changelog",tabindex:"-1"},[l("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),Z=JSON.parse('{"title":"useSwipe","description":"","frontmatter":{"category":"Sensors"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useSwipe/index.md"}'),z={name:"core/useSwipe/index.md"},ss=Object.assign(z,{setup(e){return(A,B)=>{const a=b,o=F,n=m,D=f;return h(),_("div",null,[G,r(a,{fn:"useSwipe"}),r(o,null,{default:I(()=>[H,r(q)]),_:1}),L,M,X,r(n,{fn:"useSwipe"}),Y,r(D,{fn:"useSwipe"})])}}});export{Z as __pageData,ss as default};
