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
      <div class="v-tree">
        {innerData.value.map(treeNode => (
          <div
            class="v-tree-node"
            style={{ paddingLeft: `${24 * (treeNode.level - 1)}px` }}
          >
            {treeNode.label}
          </div>
        ))}
      </div>
    )
  }
})
