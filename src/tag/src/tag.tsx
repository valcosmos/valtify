import { computed, defineComponent, Transition } from 'vue'
import { TagProps, tagProps } from './tag-type'

export default defineComponent({
  name: 'Tag',
  props: tagProps,
  setup(props: TagProps, { slots }) {
    const useClasses = (props: TagProps) =>
      computed(() => [
        'v-tag',
        props.type && `v-tag--${props.type}`,
        props.hit && `is-hit`,
        props.size && `v-tag--${props.size}`,
        props.effect && `v-tag--${props.effect}`
      ])

    const useStyle = (props: TagProps) =>
      computed(() => ({
        color: props.color
      }))

    const classes = useClasses(props)
    const style = useStyle(props)

    return () => (
      <Transition
        appear
        name={props.disabledTransitions ? '' : 'v-zoom-in-center'}
      >
        <span class={classes.value} style={style.value}>
          {slots.default?.()}
        </span>
      </Transition>
    )
  }
})
