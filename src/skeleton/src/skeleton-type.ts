import { ExtractPropTypes } from 'vue'

export const skeletonProps = {
  active: {
    type: Boolean,
    default: false
  }
} as const
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>
