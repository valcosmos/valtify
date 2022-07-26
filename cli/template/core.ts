// 创建组件核心文件的模板

import { upperFirst } from './utils'

export default function genCoreTemplate(name: string) {
  const compName = upperFirst(name)
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  const propsFileName = name + '-type'
  const className = 'v-' + name

  return `import { defineComponent, toRefs } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => <div class="${className}"></div>
  }
})
`
}
