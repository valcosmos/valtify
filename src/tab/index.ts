import type { App } from 'vue'
import Tab from './src/tab'
import Tabs from './src/tabs'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'

import './style/tabs.scss'

// 具名导出
export { Tab, Tabs }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Tab, options)
    installComponent(app, Tabs, options)
  }
}
