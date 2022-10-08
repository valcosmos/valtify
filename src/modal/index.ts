import type { App } from 'vue'
import Modal from './src/modal'
import { installComponent } from '../install'
import type { ValtifyOptions } from '../_utils/global-config'

import './style/modal.scss'

// 具名导出
export { Modal }

// 导出插件
export default {
  install(app: App, options?: ValtifyOptions) {
    installComponent(app, Modal, options)
  }
}
