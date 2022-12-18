import { ExtractPropTypes, PropType } from 'vue'

export const drawerProps = {
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
} as const
export type DrawerProps = ExtractPropTypes<typeof drawerProps>
