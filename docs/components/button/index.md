# 按钮 - Button

## 不同类型的按钮

:::demo

```vue
<template>
  <v-button class="m-rb">Default button</v-button>

  <v-button class="m-rb" type="primary">Primary button</v-button>

  <v-button class="m-rb" type="secondary">Secondary button</v-button>

  <v-button class="m-rb" type="success">Success button</v-button>

  <v-button class="m-rb" type="info">Info button</v-button>

  <v-button class="m-rb" type="warning">Warning button</v-button>

  <v-button class="m-rb" type="danger">Danger button</v-button>

  <v-button class="m-rb" type="text">Text button</v-button>
</template>

<style>
.m-rb {
  margin: 0 10px 10px 0;
}
</style>
```

:::

## 不同尺寸的按钮

:::demo

```vue
<template>
  <v-button class="m-rb" type="primary" size="small">Small button</v-button>

  <v-button class="m-rb" type="primary">Medium button (default size)</v-button>

  <v-button class="m-rb" type="primary" size="large">Large button</v-button>
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
