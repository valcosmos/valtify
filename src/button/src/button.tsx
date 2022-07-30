import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-types'

export default defineComponent({
  name: 'VButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      // block

      const blockCls = block.value ? 'v-btn--block' : ''

      return (
        <button
          disabled={disabled.value}
          class={`v-btn v-btn--${type.value} v-btn--${size.value} ${blockCls}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
