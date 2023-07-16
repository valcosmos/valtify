# Tag 标记

## 不同类型的 Tag

:::demo

```vue
<template>
  <v-tag class="mr">Primary tag</v-tag>
  <v-tag class="mr" type="success">Success tag</v-tag>
  <v-tag class="mr" type="danger">Danger tag</v-tag>
  <v-tag class="mr" type="warning">Warning tag</v-tag>
  <v-tag class="mr" type="info">Info tag</v-tag>
</template>

<style>
.mr {
  margin-right: 20px;
}
</style>
```

:::

## 不同尺寸的 Tag

:::demo

```vue
<template>
  <v-tag class="mr">Default tag</v-tag>
  <v-tag class="mr" size="medium">Medium tag</v-tag>
  <v-tag class="mr" size="small">Small tag</v-tag>
  <v-tag class="mr" size="mini">Mini tag</v-tag>
</template>

<style>
.mr {
  margin-right: 20px;
}
</style>
```

:::

## 不同主题的 Tag

:::demo

```vue
<template>
  <div>
    <div class="mb">
      <v-tag class="mr" effect="plain">Medium tag</v-tag>
      <v-tag class="mr" effect="plain">Small tag</v-tag>
      <v-tag class="mr" effect="plain">Mini tag</v-tag>
    </div>
    <div class="mb">
      <v-tag class="mr" effect="dark">Medium tag</v-tag>
      <v-tag class="mr" effect="dark">Small tag</v-tag>
      <v-tag class="mr" effect="dark">Mini tag</v-tag>
    </div>
    <div>
      <v-tag class="mr" effect="light">Medium tag</v-tag>
      <v-tag class="mr" effect="light">Small tag</v-tag>
      <v-tag class="mr" effect="light">Mini tag</v-tag>
    </div>
  </div>
</template>

<style>
.mr {
  margin-right: 20px;
}
.mb {
  margin-bottom: 20px;
}
</style>
```

:::
