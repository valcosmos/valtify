import { defineComponent } from 'vue'
import { BadgeProps } from './badge-type'
import { useBadge } from './composables/use-badge'

export default defineComponent({
  name: 'VBadge',
  props: BadgeProps,
  setup(props: BadgeProps, { slots }) {
    const { useBadgeContent, useShow } = useBadge()
    const badgeContent = useBadgeContent(props)
    const isShow = useShow(props)

    return () => (
      <div class="v-badge">
        {slots.default?.()}
        {isShow.value && (
          <sup
            class={[
              'v-badge__content',
              props.type && `v-badge__content--${props.type}`,
              props.isDot && 'is-dot',
              slots.default && 'is-fixed'
            ]}
          >
            {badgeContent.value}
          </sup>
        )}
      </div>
    )
  }
})
