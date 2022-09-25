import { ExtractPropTypes, PropType } from 'vue'
import type { StyleValue } from 'vue'

type CardType = 'always' | 'hover' | 'never'

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: String as PropType<StyleValue>,
    default: ''
  },
  shadow: {
    type: String as PropType<CardType>,
    default: 'never'
  }
} as const
export type CardProps = ExtractPropTypes<typeof cardProps>
