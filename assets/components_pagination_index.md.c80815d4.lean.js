import{V as k,_ as b,c as B,a as h,w as C,b as n,d as a,r as S,o as E}from"./app.0770f8ef.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{renderList:d,Fragment:m,openBlock:o,createElementBlock:c,toDisplayString:g,resolveComponent:v,createVNode:l,createElementVNode:r}=k;function y(s,p){const u=v("VPagination");return o(),c("div",null,[r("div",null,[(o(!0),c(m,null,d(s.data,(t,e)=>(o(),c("div",{key:e},g(t),1))),128)),l(u,{total:s.source.length,modelValue:s.current,"onUpdate:modelValue":p[0]||(p[0]=t=>s.current=t),pageSize:s.pageSize},null,8,["total","modelValue","pageSize"])])])}const{defineComponent:V}=k,{ref:i,computed:_}=k;return{render:y,...V({setup(s,{expose:p}){p();const u=Array.from({length:1e3},()=>1).map((q,x)=>`\u7B2C${x}\u6761\u6570\u636E`),t=i(1),e=i(10),z=_(()=>u.slice((t.value-1)*e.value,t.value*e.value)),f={source:u,current:t,pageSize:e,data:z,ref:i,computed:_};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}})}}()}},j=JSON.parse('{"title":"\u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"}],"relativePath":"components/pagination/index.md"}'),A=n("h1",{id:"\u5206\u9875",tabindex:"-1"},[a("\u5206\u9875 "),n("a",{class:"header-anchor",href:"#\u5206\u9875","aria-hidden":"true"},"#")],-1),D=n("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u672C\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(d, i) in data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ d }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("VPagination")]),a(`
      `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("source.length"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("current"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":pageSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pageSize"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"const"),a(" source "),n("span",{class:"token operator"},"="),a(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("item"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u7B2C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u6761\u6570\u636E"),n("span",{class:"token template-punctuation string"},"`")]),a(`
`),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"const"),a(" pageSize "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
  source`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token punctuation"},"("),a("current"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"*"),a(" pageSize"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(`
    current`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"*"),a(" pageSize"),n("span",{class:"token punctuation"},"."),a(`value
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function F(d,m,o,c,g,v){const l=S("render-demo-0"),r=S("demo");return E(),B("div",null,[A,D,h(r,{sourceCode:`<template>
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
`},{highlight:C(()=>[N]),default:C(()=>[h(l)]),_:1})])}const L=b(w,[["render",F]]);export{j as __pageData,L as default};
