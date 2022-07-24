import Theme from 'vitepress/theme'
import type { App } from 'vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...Theme,
  // extends app instance
  enhanceApp({ app }: { app: App<never> }) {
    // register component
    app.component('HelloWorld', HelloWorld)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
