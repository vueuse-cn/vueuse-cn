import{_ as i,a as d,b as u}from"./chunks/FunctionInfo.bad951e4.js";import{_ as g}from"./chunks/DemoContainer.27403c15.js";import{f as E,l as f,bu as _,g as m,o as B,c as C,a as s,A as h,u as a,t as A,b as o,w as F,e as t,d as l}from"./app.28320a3a.js";import"./chunks/utils.e9c2f9be.js";const b=s("p",{class:"font-600 text-blue-600"}," You can select any text on the page. ",-1),v=s("strong",null,"Selected Text:",-1),x=s("strong",null,"Selected rects:",-1),S={class:"h-72",lang:"json"},T=E({__name:"demo",setup(D){const p=f(),{rects:c,text:e}=_(),n=m(()=>e.value?"text-primary":"text-gray-400");return(r,y)=>(B(),C("div",{ref_key:"demo",ref:p},[b,s("p",null,[v,s("em",{class:h([a(n),"whitespace-pre h-44 overflow-y-auto block"])},A(a(e)||"No selected"),3)]),s("p",null,[x,s("pre",S,A(a(c)),1)])],512))}}),N=t("",3),R=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useTextSelection/demo.vue",target:"_blank"},"source")],-1),k=t("",3),w=s("details",null,[s("summary",{op50:"",italic:""},"Show Type Declarations"),s("div",{class:"language-typescript"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Reactively track user text selection based on [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"see"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"https://vueuse.org/useTextSelection")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useTextSelection"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ConfigurableWindow"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"rects"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"DOMRect"),s("span",{style:{color:"#858585"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ranges"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ComputedRef"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"Range"),s("span",{style:{color:"#858585"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"selection"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Ref"),s("span",{style:{color:"#858585"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"anchorNode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"anchorOffset"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"focusNode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"focusOffset"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"isCollapsed"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"rangeCount"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"addRange"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"range"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Range"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"collapse"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"node"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"offset"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"collapseToEnd"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"collapseToStart"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"containsNode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"node"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"allowPartialContainment"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"deleteFromDocument"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"empty"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"extend"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"node"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"offset"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"getRangeAt"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Range")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"removeAllRanges"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"removeRange"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"range"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Range"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"selectAllChildren"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"node"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"setBaseAndExtent"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"anchorNode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"anchorOffset"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"focusNode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#858585"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"focusOffset"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"setPosition"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"node"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Node"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"offset"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"undefined"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"toString"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"null"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UseTextSelectionReturn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ReturnType"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#CB7676"}},"typeof"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"useTextSelection"),s("span",{style:{color:"#858585"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Reactively track user text selection based on [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"see"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"https://vueuse.org/useTextSelection")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useTextSelection"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"options"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ConfigurableWindow"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"rects"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"DOMRect"),s("span",{style:{color:"#8E8F8B"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ranges"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ComputedRef"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"Range"),s("span",{style:{color:"#8E8F8B"}},"[]>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"selection"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Ref"),s("span",{style:{color:"#8E8F8B"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"anchorNode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"anchorOffset"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"focusNode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"focusOffset"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"isCollapsed"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"rangeCount"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"addRange"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"range"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Range"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"collapse"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"node"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"offset"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"collapseToEnd"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"collapseToStart"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"containsNode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"node"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"allowPartialContainment"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"deleteFromDocument"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"empty"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"extend"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"node"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"offset"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"getRangeAt"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Range")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"removeAllRanges"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"removeRange"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"range"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Range"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"selectAllChildren"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"node"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"setBaseAndExtent"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"anchorNode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"anchorOffset"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"focusNode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#8E8F8B"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"focusOffset"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"setPosition"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"node"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Node"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"offset"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"undefined"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"toString"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"null"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UseTextSelectionReturn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ReturnType"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#AB5959"}},"typeof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"useTextSelection"),s("span",{style:{color:"#8E8F8B"}},">")]),l(`
`),s("span",{class:"line"})])])])],-1),P=t("",3),O=s("h2",{id:"changelog",tabindex:"-1"},[l("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#")],-1),q=JSON.parse('{"title":"useTextSelection","description":"","frontmatter":{"category":"Sensors"},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"},{"level":2,"title":"Changelog","slug":"changelog"}],"relativePath":"core/useTextSelection/index.md"}'),W={name:"core/useTextSelection/index.md"},z=Object.assign(W,{setup(D){return(p,c)=>{const e=i,n=g,r=d,y=u;return B(),C("div",null,[N,o(e,{fn:"useTextSelection"}),o(n,null,{default:F(()=>[R,o(T)]),_:1}),k,w,P,o(r,{fn:"useTextSelection"}),O,o(y,{fn:"useTextSelection"})])}}});export{q as __pageData,z as default};
