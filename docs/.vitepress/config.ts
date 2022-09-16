import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import { version } from '../../package.json'

const nav = () => [
  { text: 'Guide', link: '/components/button/' },
  {
    text: version,
    items: [
      {
        text: 'npm',
        link: 'https://www.npmjs.com/package/valtify'
      }
    ]
  }
]

const sidebarGuide = () => [
  // { text: '快速开始', link: '/', items: [] },
  {
    text: '通用',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Tree 树形控件', link: '/components/tree/' },
      { text: 'Skeleton 骨架屏', link: '/components/skeleton/' }
    ]
  },
  { text: '导航', items: [] },
  { text: '反馈', items: [] },
  { text: '数据录入', items: [] },
  { text: '数据展示', items: [] },
  { text: '布局', items: [] }
]

export default {
  themeConfig: {
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/valcosmos/valtify' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Cupid Valentine'
    },
    // Type is `DefaultTheme.Config`
    siteTitle: 'Valtify',
    sidebar: {
      '/': sidebarGuide()
    }
  },
  markdown: {
    config(md) {
      // u can use `markdown-it` plugin here
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
