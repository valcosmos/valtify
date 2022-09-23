import { ExtractPropTypes, PropType } from 'vue'

type TagType = 'success' | 'warning' | 'danger' | 'info'
type TagSize = 'large' | 'medium' | 'small' | 'mini'
type TagEffect = 'dark' | 'light' | 'plain'

export const tagProps = {
  type: {
    type: String as PropType<TagType>,
    default: ''
  },
  disabledTransitions: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  hit: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  color: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<TagSize>,
    default: 'large'
  },
  effect: {
    type: String as PropType<TagEffect>,
    default: 'light'
  }
} as const
export type TagProps = ExtractPropTypes<typeof tagProps>
