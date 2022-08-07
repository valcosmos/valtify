import { defineComponent, ref, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))

    return () => (
      <div class="s-tree">
        {innerData.value.map(treeNode => treeNode.label)}
      </div>
    )
  }
})
