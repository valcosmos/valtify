import{V as F,_ as E,c as S,a as d,w as m,b as s,d as l,r as g,o as z}from"./app.f5f7a897.js";const{defineComponent:v}=F,V=v({name:"component-doc",components:{"render-demo-0":function(){const{renderList:y,Fragment:D,openBlock:t,createElementBlock:c,toDisplayString:i,resolveComponent:C,createVNode:r}=F;function p(o,n){const e=C("VPagination");return t(),c("div",null,[(t(!0),c(D,null,y(o.data,(a,u)=>(t(),c("div",{key:u},i(a),1))),128)),r(e,{total:o.source.length,modelValue:o.current,"onUpdate:modelValue":n[0]||(n[0]=a=>o.current=a),pageSize:o.pageSize},null,8,["total","modelValue","pageSize"])])}const{ref:A,computed:f}=F,_=v({setup(){const o=Array.from({length:1e3},()=>1).map((u,h)=>`\u7B2C${h}\u6761\u6570\u636E`),n=A(1),e=A(10),a=f(()=>o.slice((n.value-1)*e.value,n.value*e.value));return{source:o,current:n,pageSize:e,data:a}}});return{render:p,..._}}()}}),P=JSON.parse('{"title":"\u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]}],"relativePath":"components/pagination/index.md"}'),x=s("h1",{id:"\u5206\u9875",tabindex:"-1"},[l("\u5206\u9875 "),s("a",{class:"header-anchor",href:"#\u5206\u9875","aria-hidden":"true"},"#")],-1),B=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[l("\u57FA\u672C\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),k=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-for"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"d"),s("span",{style:{color:"#89DDFF"}},", "),s("span",{style:{color:"#A6ACCD"}},"i"),s("span",{style:{color:"#89DDFF"}},") in "),s("span",{style:{color:"#A6ACCD"}},"data"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," :"),s("span",{style:{color:"#C792EA"}},"key"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"i"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">{{"),s("span",{style:{color:"#A6ACCD"}}," d "),s("span",{style:{color:"#89DDFF"}},"}}</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"VPagination")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      :"),s("span",{style:{color:"#C792EA"}},"total"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"source"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"length"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      :"),s("span",{style:{color:"#C792EA"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"computed"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"defineComponent"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"setup"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"source"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"Array"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"from"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," length"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"1000"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"map"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"item"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"\u7B2C"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"\u6761\u6570\u636E"),s("span",{style:{color:"#89DDFF"}},"`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    )")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"10"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"data"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"computed"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"source"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"slice"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        ("),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}},") "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    )")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"source"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"current"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"pageSize"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"data")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function $(y,D,t,c,i,C){const r=g("render-demo-0"),p=g("demo");return z(),S("div",null,[x,B,d(p,{customClass:"undefined",sourceCode:`<template>
  <div>
    <div v-for="(d, i) in data" :key="i">{{ d }}</div>

    <VPagination
      :total="source.length"
      v-model="current"
      :pageSize="pageSize"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default defineComponent({
  setup() {
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

    return {
      source,
      current,
      pageSize,
      data
    }
  }
})
<\/script>
`},{highlight:m(()=>[k]),default:m(()=>[d(r)]),_:1})])}const b=E(V,[["render",$]]);export{P as __pageData,b as default};
