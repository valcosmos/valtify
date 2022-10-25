import { defineComponent, PropType, ref, toRefs, watch, nextTick } from 'vue'
import { computePosition, arrow, offset } from '@floating-ui/dom'

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
    showArrow: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, attrs }) {
    // 获取属性中的关键值
    const { host: hostRef, modelValue, showArrow } = toRefs(props)

    //宿主元素
    const arrowRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位

    const updatePosition = () => {
      const middleware: any = []
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }

      computePosition(hostRef.value, overlayRef.value, { middleware }).then(
        ({ x, y, middlewareData, placement }) => {
          // 设置overlay
          Object.assign(overlayRef.value.style, {
            left: x + 'px',
            top: y + 'px'
          })

          // 每次计算结束，重新计算肩头定位样式
          Object.assign(arrowRef.value.style, {
            left: middlewareData.arrow?.x + 'px',
            top: '-4px',
            'border-bottom-color': 'transparent',
            'border-right-color': 'transparent'
          })
        }
      )
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
            {/* 弹窗内容 */}
            {slots.default?.()}

            {/* 箭头 */}
            {showArrow.value && (
              <div class={'v-base-popover__arrow'} ref={arrowRef}></div>
            )}
          </div>
        )}
      </>
    )
  }
})
