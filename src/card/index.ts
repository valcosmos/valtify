import type { App } from 'vue'
import Card from './src/card'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'
import './style/card.scss'

// 具名导出
export { Card }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Card, options)
  }
}
