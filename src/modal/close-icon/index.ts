import { App } from 'vue'
import { CloseIcon } from './close-icon'

export { CloseIcon }

export default {
  install(app: App) {
    app.component('CLoseIcon', CloseIcon)
  }
}
