# 标记 - Badge

## 普通标记

:::demo

```vue
<template>
  <div class="badge-items">
    <v-badge :value="22" type="primary">
      <v-button type="primary">点赞</v-button>
    </v-badge>
    <v-badge :value="22" type="info">
      <v-button type="primary">点赞</v-button>
    </v-badge>
    <v-badge :value="22" type="danger">
      <v-button type="primary">点赞</v-button>
    </v-badge>
    <v-badge :value="22" type="success">
      <v-button type="primary">点赞</v-button>
    </v-badge>
    <v-badge :value="22" type="warning">
      <v-button type="primary">点赞</v-button>
    </v-badge>
  </div>
</template>

<style>
.badge-items .v-badge {
  margin-right: 20px;
}
</style>
```

:::

## 小圆点

:::demo

```vue
<template>
  <v-badge :isDot="true">
    <v-button type="primary">消息</v-button>
  </v-badge>
</template>
```

:::

## 自定义最大值

:::demo

```vue
<template>
  <v-badge :value="55" :max="50">
    <v-button type="primary">消息</v-button>
  </v-badge>
</template>
```

:::

## 隐藏与显示

:::demo

```vue
<template>
  <div class="badge-items">
    <v-badge :isDot="true" :hidden="true">
      <v-button type="primary">隐藏</v-button>
    </v-badge>
    <v-badge :isDot="true" :hidden="false">
      <v-button type="primary">显示</v-button>
    </v-badge>
  </div>
</template>

<style>
.badge-items .v-badge {
  margin-right: 20px;
}
</style>
```

:::
