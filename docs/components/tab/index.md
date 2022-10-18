# Tab 页签

## 基础

v-tabs 包裹若干 v-tab 即可，设置`v-model`控制激活页签 id

:::demo

```vue
<template>
  <v-tabs v-model="activeTab">
    <v-tab id="tab1" title="Tab1">Tab1 Content</v-tab>
    <v-tab id="tab2" title="Tab2">Tab2 Content</v-tab>
    <v-tab id="tab3" title="Tab3">Tab3 Content</v-tab>
  </v-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
</script>

<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
```

:::


## 关闭、新增标签

添加 closable 和 addable 课关闭、新增标签。 添加 closable 和 addable 课关闭、新增标签。

:::demo

```vue
<template>
  <v-tabs v-model="activeTab" closable addable>
    <v-tab id="tab1" title="Tab1">Tab1 Content</v-tab>
    <v-tab id="tab2" title="Tab2">Tab2 Content</v-tab>
    <v-tab id="tab3" title="Tab3">Tab3 Content</v-tab>
  </v-tabs>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```

:::

