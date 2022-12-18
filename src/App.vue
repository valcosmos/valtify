<script setup lang="ts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
</script>

<template>
  <v-button type="primary" @click="showDrawer">openDrawer</v-button>

  <v-drawer v-model:visible="visible" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
