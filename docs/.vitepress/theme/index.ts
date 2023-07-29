import Theme from 'vitepress/theme'
import type { App } from 'vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import '../../../src/index.scss'
import valtify from '../../../scripts/entry'
import './assets/iconfont.css'
import { useComponents } from './useComponents'
import './assets/iconfont.js'

export default {
  ...Theme,
  // extends app instance
  enhanceApp({ app }: { app: App<never> }) {
    useComponents(app)
    app.use(valtify)
  }
}
