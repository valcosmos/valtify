import { defineComponent, toRefs } from 'vue'
export const DropdownItem = defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const { disabled } = toRefs(props)

    return () => (
      <li class={['v-dropdown-menu__item', disabled.value && 'is-disabled']}>
        {slots.default?.()}
      </li>
    )
  }
})
export default DropdownItem
