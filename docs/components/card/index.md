# 卡片

## 普通卡片

:::demo It is a Card component

```vue
<template>
  <v-card header="卡片组件">
    <div>卡片组件是一个基础组件</div>
  </v-card>
</template>
```

:::

## 卡片阴影

:::demo

```vue
<template>
  <v-card header="始终显示阴影" shadow="always">
    <div>卡片组件是一个基础组件</div>
  </v-card>
</template>
```

:::

:::demo

```vue
<template>
  <v-card header="鼠标移上去显示阴影" shadow="hover">
    <div>卡片组件是一个基础组件</div>
  </v-card>
</template>
```

:::

## 自定义卡片 body 样式

:::demo It is a Button component

```vue
<template>
  <v-card
    header="鼠标移上去显示阴影"
    shadow="hover"
    :body-style="{ color: 'skyblue' }"
  >
    <div>卡片组件是一个基础组件</div>
  </v-card>
</template>
```

:::

## 自定义 header 内容

:::demo

```vue
<template>
  <v-card>
    <template #header>这里是自定义header</template>
    <div>卡片组件是一个基础组件</div>
  </v-card>
</template>
```

:::
