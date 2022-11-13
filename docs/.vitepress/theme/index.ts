import Theme from 'vitepress/theme'
import type { App } from 'vue'
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

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
import { Dropdown as VDropdown } from '../../../src/dropdown'
import { DropdownItem as VDropdownItem } from '../../../src/dropdown'
import { Tab as VTab } from '../../../src/tab'
import { Tabs as VTabs } from '../../../src/tab'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import '../../../src/index.scss'

import './assets/iconfont.css'
import { useComponents } from './useComponents'
// import './assets/iconfont.js'

export default {
  ...Theme,
  // extends app instance
  enhanceApp({ app }: { app: App<never> }) {
    // register component
    // app.component('HelloWorld', HelloWorld)
    // app.component('DemoBlock', DemoBlock)
    // app.component('Demo', Demo)
    useComponents(app)
    app.component('VButton', VButton)
    app.component('VTree', VTree)
    app.component('VSkeleton', VSkeleton)
    app.component('VBadge', VBadge)
    app.component('VCard', VCard)
    app.component('VTag', VTag)
    app.component('VPagination', VPagination)
    app.component('VIcon', VIcon)
    app.component('VModal', VModal)
    app.component('VDropdown', VDropdown)
    app.component('VDropdownItem', VDropdownItem)
    app.component('VTab', VTab)
    app.component('VTabs', VTabs)
  }
}
