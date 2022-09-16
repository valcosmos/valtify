import { defineComponent, toRefs } from 'vue'
import { SkeletonProps, skeletonProps } from './skeleton-type'

export default defineComponent({
  name: 'Skeleton',
  props: skeletonProps,
  setup(props: SkeletonProps, { slots }) {
    return () => (
      <div class={`v-skeleton ${props.active && 'v-active'}`}>
        {slots.default?.()}
      </div>
    )
  }
})
