import { computed } from 'vue'
import { isString } from '../../../shared/utils'
import { BadgeProps } from '../badge-type'

export const useBadge = () => {
  const useShow = (props: BadgeProps) =>
    computed(() => {
      if (props.hidden) return false
      if (props.value === 0) return false
      return true
    })

  const useBadgeContent = (props: BadgeProps) =>
    computed(() => {
      if (!props.max || isString(props.value)) return props.value
      if (typeof props.value === 'number' && props.value <= props.max)
        return props.value
      return `${props.max}+`
    })

  return { useShow, useBadgeContent }
}
