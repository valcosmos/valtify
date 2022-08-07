import { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true
  }
} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

export interface ITreeNode {
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
