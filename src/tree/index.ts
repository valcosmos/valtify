import type { App } from 'vue'
import Tree from './src/tree'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'

// 具名导出
export { Tree }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Tree, options)
  }
}
