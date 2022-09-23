import type { App } from 'vue'
import Tag from './src/tag'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'
import './style/tag.scss'

// 具名导出
export { Tag }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Tag, options)
  }
}
