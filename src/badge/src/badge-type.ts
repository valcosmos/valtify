import { ExtractPropTypes, PropType } from 'vue'

type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export const BadgeProps = {
  value: {
    type: String as PropType<string | number>,
    default: ''
  },
  max: { type: Number, default: 100 },
  isDot: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  type: { type: String as PropType<BadgeType>, default: 'danger' }
} as const
export type BadgeProps = ExtractPropTypes<typeof BadgeProps>
