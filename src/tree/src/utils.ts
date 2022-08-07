import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, // 当前节点层级
  path = [] as IInnerTreeNode[] // 表示递归过程的路径，用来获取父节点id
): IInnerTreeNode[] {
  level++

  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    // 设置节点层级
    o.level = level

    // 记录调用栈，用于计算parentID
    if (path.length > 0 && path[path.length - 1].level >= level) {
      // 子==》父，应该弹出栈顶
      path.pop()
    }
    // 记录 父==》子
    path.push(o)

    // 获取parentNode
    const parentNode = path[path.length - 1]
    if (parentNode) {
      // 给房钱节点增加parentId
      o.parentId = parentNode.id
    }

    if (o.children) {
      // 首先递归，然后删除children
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
