import { computed, defineComponent, toRefs } from 'vue'
import { isString } from '../../shared/utils'
import { BadgeProps } from './badge-type'

export default defineComponent({
  name: 'Badge',
  props: BadgeProps,
  setup(props: BadgeProps, { slots }) {
    const useShow = props =>
      computed(() => {
        if (props.hidden) return false
        if (props.value === 0 || props.value === '') return false
        return true
      })

    const useBadgeContent = props =>
      computed(() => {
        if (!props.max || isString(props.value)) return props.value
        if (props.value <= props.max) return props.value
        return `${props.max}+`
      })

    const badgeContent = useBadgeContent(props)

    const isShow = useShow(props)

    return () => (
      <div class="v-badge">
        {slots.default?.()}
        {isShow.value && (
          <sup
            class={`v-badge__content v-badge__content--${props.type} ${
              props.isDot && 'is-dot'
            } ${slots.default && 'is-fixed'}`}
          >
            {badgeContent.value}
          </sup>
        )}
      </div>
    )
  }
})
