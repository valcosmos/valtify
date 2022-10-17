import { defineComponent, toRefs } from 'vue'
import '../../style/base-modal.scss'

export const VBaseModal = defineComponent({
  name: 'VBaseModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modalValue'],
  setup(props, { slots, emit }) {
    const { modelValue } = toRefs(props)

    return () => (
      <div>
        {/* {modelValue.value && ( */}
          <div class={'v-base-modal'}>
            {/* 遮罩 */}
            <div
              onClick={() => {
                emit('update:modalValue', false)
              }}
              class="v-base-modal__mask"
            ></div>

            {slots.default?.()}
          </div>
        {/* )} */}
      </div>
    )
  }
})

export default VBaseModal
