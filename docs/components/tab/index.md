# Tab 标签页

## 基础 Tab

:::demo

```vue
<template>
  <v-tabs v-model:active="activeTab">
    <v-tab id="tab1" title="Tab1">Tab1 Content</v-tab>
    <v-tab id="tab2" title="Tab2">Tab2 Content</v-tab>
    <v-tab id="tab3" title="Tab3">Tab3 Content</v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
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

## 关闭、新增 Tab

:::demo

```vue
<template>
  <v-tabs v-model:active="activeTab" closable addable>
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
