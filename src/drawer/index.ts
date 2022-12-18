import type { App } from 'vue'
import Drawer from './src/drawer'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'
import './style/drawer.scss'

// 具名导出
export { Drawer }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Drawer, options)
  }
}
