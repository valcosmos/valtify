import type { App } from 'vue'
import Skeleton from './src/skeleton'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'

import './style/skeleton.scss'

// 具名导出
export { Skeleton }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Skeleton, options)
  }
}
