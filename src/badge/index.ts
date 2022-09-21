import type { App } from 'vue'
import Badge from './src/badge'

import './style/Badge.scss'

// 具名导出
export { Badge }

// 导出插件
export default {
  install(app: App) {
    app.component(Badge.name, Badge)
  }
}
