import { App } from 'vue'
import { AddIcon } from './add-icon'

export { AddIcon }

export default {
  install(app: App) {
    app.component('CLoseIcon', AddIcon)
  }
}
