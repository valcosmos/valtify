import{V as p,_ as S,c as z,a as v,w as g,b as s,d as o,r as _,o as V}from"./app.6b25f91e.js";const{defineComponent:B}=p,k=B({name:"component-doc",components:{"render-demo-0":function(){const{renderList:C,Fragment:A,openBlock:a,createElementBlock:t,toDisplayString:i,resolveComponent:u,createVNode:D}=p;function y(e,r){const c=u("VPagination");return a(),t("div",null,[(a(!0),t(A,null,C(e.data,(l,n)=>(a(),t("div",{key:n},i(l),1))),128)),D(c,{total:e.source.length,modelValue:e.current,"onUpdate:modelValue":r[0]||(r[0]=l=>e.current=l),pageSize:e.pageSize},null,8,["total","modelValue","pageSize"])])}const{defineComponent:f}=p,{ref:F,computed:d}=p;return{render:y,...f({setup(e,{expose:r}){r();const c=Array.from({length:1e3},()=>1).map((w,E)=>`\u7B2C${E}\u6761\u6570\u636E`),l=F(1),n=F(10),h=d(()=>c.slice((l.value-1)*n.value,l.value*n.value)),m={source:c,current:l,pageSize:n,data:h,ref:F,computed:d};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}})}}()}}),O=JSON.parse('{"title":"\u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]}],"relativePath":"components/pagination/index.md"}'),x=s("h1",{id:"\u5206\u9875",tabindex:"-1"},[o("\u5206\u9875 "),s("a",{class:"header-anchor",href:"#\u5206\u9875","aria-hidden":"true"},"#")],-1),$=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[o("\u57FA\u672C\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),N=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-for"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"d"),s("span",{style:{color:"#89DDFF"}},", "),s("span",{style:{color:"#A6ACCD"}},"i"),s("span",{style:{color:"#89DDFF"}},") in "),s("span",{style:{color:"#A6ACCD"}},"data"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"key"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"i"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">{{"),s("span",{style:{color:"#A6ACCD"}}," d "),s("span",{style:{color:"#89DDFF"}},"}}</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VPagination")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      :"),s("span",{style:{color:"#C792EA"}},"total"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"source"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"length"),s("span",{style:{color:"#89DDFF"}},'"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#89DDFF"}},'"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      :"),s("span",{style:{color:"#C792EA"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},'"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#A6ACCD"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"computed"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," source "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," Array"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"from"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F07178"}},"length"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1000"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"map"),s("span",{style:{color:"#A6ACCD"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"\u7B2C"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"\u6761\u6570\u636E"),s("span",{style:{color:"#89DDFF"}},"`")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," current "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," pageSize "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#F78C6C"}},"10"),s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," data "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"computed"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  source"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"slice"),s("span",{style:{color:"#A6ACCD"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    (current"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#A6ACCD"}},") "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," pageSize"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    current"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," pageSize"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  )")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"})])])],-1);function P(C,A,a,t,i,u){const D=_("render-demo-0"),y=_("demo");return V(),z("div",null,[x,$,v(y,{customClass:"undefined",sourceCode:`<template>
  <div>
    <div v-for="(d, i) in data" :key="i">{{ d }}</div>

    <VPagination
      :total="source.length"
      v-model="current"
      :pageSize="pageSize"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const source = Array.from({ length: 1000 }, () => 1).map(
  (item, index) => \`\u7B2C\${index}\u6761\u6570\u636E\`
)

const current = ref(1)
const pageSize = ref(10)

const data = computed(() =>
  source.slice(
    (current.value - 1) * pageSize.value,
    current.value * pageSize.value
  )
)
<\/script>
`},{highlight:g(()=>[N]),default:g(()=>[v(D)]),_:1})])}const j=S(k,[["render",P]]);export{O as __pageData,j as default};
