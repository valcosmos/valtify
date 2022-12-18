# 抽屉

## 普通抽屉

:::demo It is a Drawer component

```vue
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false)
    const showDrawer = () => {
      visible.value = true
    }

    return {
      visible,
      showDrawer
    }
  }
})
</script>

<template>
  <div>
    <v-button type="primary" @click="showDrawer">Open</v-button>
    <v-drawer v-model:visible="visible" title="Basic Drawer">
      <div>Hello world</div>
    </v-drawer>
  </div>
</template>
```

:::
