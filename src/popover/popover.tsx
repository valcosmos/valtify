import { defineComponent, PropType, ref, toRefs, watch } from 'vue'
import { computePosition } from '@floating-ui/dom'

import { nextTick, title } from 'process'
import BasePopover from '../base-popover/base-popover'
export default defineComponent({
  name: 'VBasePopover',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object as PropType<HTMLElement>,
      default: () => null
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 获取属性中的关键值
    const { modelValue, title } = toRefs(props)

    //宿主元素
    // const hostRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位

    return () => (
      <>
        {modelValue.value && (
          <BasePopover class={'v-popover'} {...props}>
            <h4>{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    )
  }
})
