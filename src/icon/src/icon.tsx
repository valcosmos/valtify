import { defineComponent, toRefs } from 'vue'
import { IconProps, iconProps } from './icon-type'

export default defineComponent({
  name: 'Icon',
  props: iconProps,
  setup(props: IconProps) {
    return () => <div class="v-icon"></div>
  }
})
