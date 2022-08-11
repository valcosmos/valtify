import { computed, Ref, ref, unref } from 'vue'
import { generateInnerTree } from '../utils'
import { IInnerTreeNode, ITreeNode } from './../tree-type'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    // node.expanded = !node.expanded
    // 在原始列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
    }
  }

  // 获取那些展开的节点列表
  const expandedTree = computed(() => {
    let excludeNodes: IInnerTreeNode[] = []
    const result: IInnerTreeNode[] = []

    // 循环列表，找出那些expanded为false的节点
    for (const item of innerData.value) {
      // 如果遍历几点排除在列表中，直接跳出本次循环
      if (excludeNodes.includes(item)) {
        continue
      }

      // 当前节点处于折叠状态，它的子节点应该被排除
      if (item.expanded !== true) {
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }

    return result
  })

  const getChildren = (node: IInnerTreeNode, recursive = true) => {
    const result: IInnerTreeNode[] = []
    // 找到node在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到后面所有的子节点（level比当前节点大）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }

  const getParent = (node: IInnerTreeNode): IInnerTreeNode => {
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    return parentNode as IInnerTreeNode
  }

  const toggleCheckNode = (node: IInnerTreeNode) => {
    console.log(node)

    // 避免初始化的时候node中没有checked设置
    node.checked = !node.checked
    // 父子联动
    // 获取子节点，并同步他们的选中状态和父节点一致

    getChildren(node).forEach(child => {
      child.checked = node.checked
    })

    // 子- 父 联动  获取父节点

    const parentNode = getParent(node)

    console.log(parentNode)

    if (!parentNode) return

    // 获取兄弟节点：相当于获取parentNode的直接子节点
    const siblingNodes = getChildren(parentNode, true)
    console.log(siblingNodes)

    // 做一次过滤，过滤出所有选中的兄弟节点
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked)
    if (siblingNodes.length === checkedSiblingNodes.length) {
      // 说明当前所有兄弟节点都被选中
      parentNode.checked = true
    } else {
      parentNode.checked = false
    }
  }

  return { innerData, toggleNode, expandedTree, getChildren, toggleCheckNode }
}
