# Modal-对话框

## 基本对话框

:::demo

```vue
<template>
  <v-button type="primary" @click="showModal">Open</v-button>

  <v-modal v-model="modalVisible" title="Header" closable centered>
    <p>Modal</p>
  </v-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const modalVisible = ref<boolean>(false)

const showModal = () => (modalVisible.value = true)
</script>
```

:::
