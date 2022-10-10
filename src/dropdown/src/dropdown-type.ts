import { ExtractPropTypes, PropType } from 'vue'

export const dropdownProps = {
  title: {
    type: String,
    required: true
  }
} as const
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
