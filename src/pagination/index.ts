import type { App } from 'vue'
import Pagination from './src/pagination'
import Pager from './src/components/pager'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'
import './style/pagination.scss'

// 具名导出
export { Pagination, Pager }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Pagination, options)
  }
}
