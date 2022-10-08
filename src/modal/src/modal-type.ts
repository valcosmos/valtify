import { ExtractPropTypes } from 'vue'

export const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '300px'
  },
  headerCenter: {
    type: Boolean,
    default: false
  },
  centered: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  }
} as const

export type ModalProps = ExtractPropTypes<typeof modalProps>
