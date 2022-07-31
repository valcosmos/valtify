import type { App } from 'vue'
import Button from './src/button'
import './style/button.scss'

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
