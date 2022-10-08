import { CSSProperties, defineComponent, toRefs } from 'vue'
import BaseModal from './components/base-modal'
import { ModalProps, modalProps } from './modal-type'

import { XMarkIcon } from '@heroicons/vue/24/solid'

export const Modal = defineComponent({
  name: 'VModal',
  props: modalProps,
  emits: ['update:modelValue'],
  setup(props: ModalProps, { slots, emit }) {
    const { modelValue, title, width, headerCenter, centered, closable } =
      toRefs(props)
    // 动态设置居中样式
    const alignCenterStyle: CSSProperties = centered.value
      ? {
          marginTop: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }
      : {}

    return () => (
      <BaseModal
        class={'v-modal'}
        modelValue={modelValue.value}
        onUpdate:modalValue={() => {
          emit('update:modelValue')
        }}
      >
        <div
          class={'v-modal__container'}
          style={{ width: width.value, ...alignCenterStyle }}
        >
          {/* 标题区 */}
          {slots.header ? (
            slots.header?.({
              close: () => {
                emit('update:modelValue', false)
              }
            })
          ) : (
            <div
              class={'v-modal__header'}
              style={{ textAlign: headerCenter.value ? 'center' : 'left' }}
            >
              <span>{title.value}</span>
              <span class={'close'}>
                {closable.value && (
                  <XMarkIcon
                    onClick={() => {
                      emit('update:modelValue', false)
                    }}
                  />
                )}
              </span>
            </div>
          )}

          {/* 内容区 */}

          <div class={'v-modal__body'}>{slots.default?.()}</div>
          {/* 操作区 */}
        </div>
      </BaseModal>
    )
  }
})

export default Modal
