// entry file

// import component and export

// import component
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

// export component
export { Button }

// export plugin
const installs = [ButtonPlugin]
export default {
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
