import type { App } from 'vue'
import Icon from './src/icon'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'
import { AddIcon } from './src/add-icon'
import { CloseIcon } from './src/close-icon'

// 具名导出
export { Icon, AddIcon, CloseIcon }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Icon, options)
  }
}
