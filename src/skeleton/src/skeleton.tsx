import { defineComponent } from 'vue'
import { SkeletonProps, skeletonProps } from './skeleton-type'

export default defineComponent({
  name: 'Skeleton',
  props: skeletonProps,
  setup(props: SkeletonProps, { slots }) {
    return () => (
      <div class={`v-skeleton ${props.active && 'v-active'}`}>
        {props.bg && slots.default?.()}
      </div>
    )
  }
})
