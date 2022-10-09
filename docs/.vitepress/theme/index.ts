import Theme from 'vitepress/theme'
import type { App } from 'vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
// import HelloWorld from '../../../src/components/HelloWorld.vue'
import { Button as VButton } from '../../../src/button'
import { Tree as VTree } from '../../../src/tree'
import { Skeleton as VSkeleton } from '../../../src/skeleton'
import { Badge as VBadge } from '../../../src/badge'
import { Card as VCard } from '../../../src/card'
import { Tag as VTag } from '../../../src/tag'
import { Icon as VIcon } from '../../../src/icon'
import { Pagination as VPagination } from '../../../src/pagination'
import { Modal as VModal } from '../../../src/modal'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import '../../../src/index.scss'

import './assets/iconfont.css'
// import './assets/iconfont.js'

export default {
  ...Theme,
  // extends app instance
  enhanceApp({ app }: { app: App<never> }) {
    // register component
    // app.component('HelloWorld', HelloWorld)
    app.component('VButton', VButton)
    app.component('VTree', VTree)
    app.component('VSkeleton', VSkeleton)
    app.component('VBadge', VBadge)
    app.component('VCard', VCard)
    app.component('VTag', VTag)
    app.component('VPagination', VPagination)
    app.component('VIcon', VIcon)
    app.component('VModal', VModal)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
