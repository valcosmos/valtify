import { ExtractPropTypes, PropType } from 'vue'
import type { CSSProperties } from 'vue'

type CardType = 'always' | 'hover' | 'never'

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  shadow: {
    type: String as PropType<CardType>,
    default: 'never'
  }
} as const
export type CardProps = ExtractPropTypes<typeof cardProps>
