# 按钮 - Button

## 不同类型的按钮

:::demo

```vue
<template>
  <v-button>Default button</v-button>

  <v-button type="primary">Primary button</v-button>

  <v-button type="secondary">Secondary button</v-button>

  <v-button type="success">Success button</v-button>

  <v-button type="info">Info button</v-button>

  <v-button type="warning">Warning button</v-button>

  <v-button type="danger">Danger button</v-button>

  <v-button type="text">Text button</v-button>
</template>

<style>
.v-btn {
  margin: 0 10px 10px 0;
}
</style>
```

:::

## 不同尺寸的按钮

:::demo

```vue
<template>
  <v-button type="primary" size="small">Small button</v-button>

  <v-button type="primary">Medium button (default size)</v-button>

  <v-button type="primary" size="large">Large button</v-button>
</template>
```

:::

## 按钮禁用

:::demo

```vue
<template>
  <v-button type="primary" disabled>Button Disabled</v-button>
</template>
```

:::

## block 按钮

:::demo

```vue
<template>
  <v-button type="primary" block>Block Button</v-button>
</template>
```

:::
