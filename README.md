<div align="center">
    <img width="80px" src="logo.svg" />
</div>  
 
<h3 align="center">Welcome to valtify</h3>

<p align="center">Valtify is a simple, lightweight UI component library for <a href="https://vuejs.org/" target="_blank">Vue3</a>.</p>

<div align="center">

  <img src="https://img.shields.io/badge/build-passing-informational?style=for-the-badge&logo=GitHub&color=181717" />

  <img src="https://img.shields.io/badge/Node.js-v16.16.0-informational?style=for-the-badge&logo=Node.js&color=339933" />

  <img src="https://img.shields.io/badge/Vue-v3.2.37-informational?style=for-the-badge&logo=Vue.js&color=4FC08D" />

  <img src="https://img.shields.io/badge/TypeScript-v4.7.4-informational?style=for-the-badge&logo=TypeScript&color=3178C6" />

  <img src="https://img.shields.io/badge/npm-v8.11.0-informational?style=for-the-badge&logo=npm&color=CB3837" />

  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
  
</div>

## Description

Valtify is a simple UI component library for Vue3. **Still under development, stay tuned...**

## Getting Start

- To check out the [docs](https://valcosmos.github.io/valtify/), visit [https://valcosmos.github.io/valtify/](https://valcosmos.github.io/valtify/). 📚

## Install

```sh
pnpm add valtify
```

## Usage

In `main.ts`, And import stylesheets manually:

```ts
import 'valtify/dist/style.css'
```

In the component

```vue
<script setup lang="ts">
import { Button } from 'valtify'
</script>

<template>
  <Button type="primary">Primary Button</Button>
</template>
```

## Project Activity

![Alt](https://repobeats.axiom.co/api/embed/1c5535985021d103b1feed4985d982d991cc3ca1.svg 'Repobeats analytics image')

## Development

<!-- Use Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://valcosmos-valdesign-jeyace35t07.ws-us47.gitpod.io/) -->

Use StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/valcosmos/valtify)


clone locally:

```bash

git clone git@github.com:valcosmos/valtify.git

cd valtify

pnpm i

pnpm docs:dev

```

Open your browser and visit http://localhost:5173/valtify/

## License

Valtify is [MIT licensed](LICENSE).
