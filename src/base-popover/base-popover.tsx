import { defineComponent, PropType, ref, toRefs, watch } from 'vue'
import { computePosition } from '@floating-ui/dom'

import { nextTick } from 'process'
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
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, attrs }) {
    // 获取属性中的关键值
    const { host: hostRef, modelValue } = toRefs(props)

    //宿主元素
    // const hostRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位

    const updatePosition = () => {
      computePosition(hostRef.value, overlayRef.value).then(({ x, y }) => {
        // 设置overlay
        Object.assign(overlayRef.value.style, {
          left: x + 'px',
          top: y + 'px'
        })
      })
    }

    watch(modelValue, newValue => {
      // 当前newValue为true, 即overlay需要显示时，需要重新更新位置
      if (newValue) {
        nextTick(updatePosition)
      }
    })

    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="v-base-popover" {...attrs}>
            {slots.default?.()}
          </div>
        )}
      </>
    )
  }
})
