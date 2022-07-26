import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-types'

export default defineComponent({
  name: 'VButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return <button class={`v-btn v-btn--${type.value}`}>{defaultSlot}</button>
    }
  }
})
