import { DropdownItem } from './src/dropdown-item'
import type { App } from 'vue'
import Dropdown from './src/dropdown'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'

// 具名导出
export { Dropdown, DropdownItem }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Dropdown, options)
    installComponent(app, DropdownItem, options)
  }
}
