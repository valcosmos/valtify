import { computed, defineComponent, toRefs } from 'vue'
import { IconProps, iconProps } from './icon-type'

export default defineComponent({
  name: 'VIcon',
  props: iconProps,
  setup(props: IconProps, { attrs }) {
    const iconSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )

    // 远程资源使用图片显示
    const imgIcon = (
      <img
        src={props.name}
        {...attrs}
        style={{ width: iconSize.value, verticalAlign: 'middle' }}
      />
    )
    // icon font
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      />
    )

    // svg
    const svgIcon = (
      <svg
        class={'icon'}
        style={{ width: iconSize.value, height: iconSize.value }}
      >
        <use
          xlinkHref={`#${props.prefix}-${props.component}`}
          fill={props.color}
        ></use>
      </svg>
    )

    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
      ? imgIcon
      : fontIcon

    return () => icon
  }
})
