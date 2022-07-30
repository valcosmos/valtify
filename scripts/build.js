// import the build method of vite, use it to create

const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJSX = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')
const fs = require('fs')

// base config (entry file and output dir)
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJSX()]
})
// entry dir
const entryFile = path.resolve(__dirname, './entry.ts')

// component dir
const componentsDir = path.resolve(__dirname, '..', 'src')

// output dir
const outputDir = path.resolve(__dirname, '..', 'build')

// rollup config
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// generate package.json

const createPackageJson = name => {
  const fileStr = `{
    "name": "${name || 'valtify'}",
    "version": "0.0.1",
    "main": "${name ? 'index.umd.js' : 'valtify.umd.js'}",
    "module": "${name ? 'index.es.js' : 'valtify.es.js'}",
    "author": "Cupid Valentine",
    "github": "",
    "description": "A simple UI component library for vue3",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/valcosmos/valtify"
    },
    "keywords": ["vue3", "component", "tsx", "UI"],
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/valcosmos/valtify/issues"
    }
  }`

  if (name) {
    // This means this is a single component and outputs the corresponding package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // all export
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

// execute create

// single component build

const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

// full build

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'valtify',
          fileName: 'valtify',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  // full build
  await buildAll()

  // build on demand 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // get only dir, and it include index.ts
      const componentDir = path.resolve(componentsDir, name)
      // is dir?
      const isDir = fs.lstatSync(componentDir).isDirectory()

      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
