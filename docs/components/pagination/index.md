# 分页

## 基本用法

:::demo

```vue
<template>
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
import { ref, computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const source = Array.from({ length: 1000 }, () => 1).map(
      (item, index) => `第${index}条数据`
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
</script>
```

:::
