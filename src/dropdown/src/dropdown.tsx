import { defineComponent, ref, toRefs, watch } from 'vue'
import { useClickOutside } from './composable/useClickOutSide'
import { DropdownProps, dropdownProps } from './dropdown-type'

import '../style/dropdown.scss'

export default defineComponent({
  name: 'Dropdown',
  props: dropdownProps,
  setup(props: DropdownProps, { slots }) {
    const { title } = toRefs(props)
    const isOpen = ref<boolean>(false)
    const dropdownRef = ref<null | HTMLElement>(null)

    const toggleOpen = () => (isOpen.value = !isOpen.value)

    const isClickOutSide = useClickOutside(dropdownRef)

    watch(isClickOutSide, () => {
      if (isOpen.value && isClickOutSide.value) {
        isOpen.value = false
      }
    })

    return () => (
      <div class="v-dropdown" ref={dropdownRef}>
        <span onClick={() => toggleOpen()}>{title.value}</span>
        {isOpen.value && <ul class={'v-dropdown-menu'}>{slots.default?.()}</ul>}
      </div>
    )
  }
})
