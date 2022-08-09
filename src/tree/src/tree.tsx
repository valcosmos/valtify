import { defineComponent, toRefs } from 'vue'
import { useTree } from './composables/use-tree'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)

    const { expandedTree, toggleNode } = useTree(data)

    return () => (
      <div class="v-tree">
        {expandedTree.value.map(treeNode => (
          <div
            class="v-tree-node"
            style={{ paddingLeft: `${24 * (treeNode.level - 1)}px` }}
          >
            {/* 折叠图标 */}

            {/* 判断当前节点是否是叶子结点 */}
            {treeNode.isLeaf ? (
              <span style={{ display: 'inline-block', width: '25px' }}></span>
            ) : (
              <svg
                onClick={() => toggleNode(treeNode)}
                style={{
                  width: '18px',
                  height: '18px',
                  display: 'inline-block',
                  transform: treeNode.expanded ? 'rotate(0)' : 'rotate(-90deg)'
                }}
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="caret-down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
              </svg>
            )}

            {/* 标签 */}
            {treeNode.label}
          </div>
        ))}
      </div>
    )
  }
})
