import { FunctionalComponent } from 'vue'

interface IconProps {
  size?: string | number
  color?: string
  onClick?: (e: MouseEvent) => void
}

export const CloseIcon: FunctionalComponent<IconProps> = ({
  color,
  size,
  onClick
}) => {
  const iconSize = size
    ? typeof size === 'number'
      ? `${size}px`
      : size
    : undefined

  const iconColor = color || 'currentcolor'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      style={{
        width: iconSize,
        height: iconSize,
        fill: iconColor,
        stroke: iconColor
      }}
      onClick={onClick}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export default CloseIcon

// import { defineComponent, PropType, toRefs } from 'vue'
// export const CloseIcon = defineComponent({
//   name: 'CloseIcon',
//   props: {
//     size: {
//       type: [String, Number] as PropType<string | number>,
//       default: 24
//     },
//     color: {
//       type: String as PropType<string>,
//       default: 'black'
//     }
//   },
//   emits: ['onClick'],
//   setup(props, { emit }) {
//     const { size, color } = props

//     const iconSize = size
//       ? typeof size === 'number'
//         ? `${size}px`
//         : size
//       : undefined

//     const iconColor = color || 'black'

//     return () => (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         style={{
//           width: iconSize,
//           height: iconSize,
//           fill: iconColor,
//           stroke: iconColor
//         }}
//         onClick={e => {
//           emit('onClick', e)
//         }}
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     )
//   }
// })
