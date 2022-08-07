import { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean
  checked?: boolean
  expanded?: boolean

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string
  level: number
  isLeaf?: boolean
}
