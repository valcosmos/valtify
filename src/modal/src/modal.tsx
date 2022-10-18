import {
  CSSProperties,
  defineComponent,
  Teleport,
  toRefs,
  Transition
} from 'vue'
import BaseModal from './components/base-modal'
import { ModalProps, modalProps } from './modal-type'

import { CloseIcon } from '../../icon'

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
      <Teleport to={'body'}>
        <Transition name="dialog-fade">
          <BaseModal
            key={modelValue.value ? 1 : 2}
            class={'v-modal'}
            style={[!modelValue.value && 'display: none;']}
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
                      <CloseIcon
                        onClick={() => emit('update:modelValue', false)}
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
        </Transition>
      </Teleport>
    )
  }
})

export default Modal
