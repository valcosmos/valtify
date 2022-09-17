import { ExtractPropTypes, PropType } from 'vue'

export const skeletonProps = {
  active: {
    type: Boolean,
    default: false
  },
  bg: {
    type: Boolean,
    default: false
  },
  row: {
    type: Array as PropType<number[]>,
    default: () => []
  }
} as const
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>
