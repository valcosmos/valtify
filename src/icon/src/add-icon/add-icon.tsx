import { FunctionalComponent } from 'vue'

interface IconProps {
  size?: string | number
  color?: string
  onClick?: (e: MouseEvent) => void
}

export const AddIcon: FunctionalComponent<IconProps> = ({
  color,
  size,
  onClick
}) => {
  const iconSize = size
    ? typeof size === 'number'
      ? `${size}px`
      : size
    : '24px'

  const iconColor = color || 'black'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      style={{
        width: iconSize,
        height: iconSize,
        fill: iconColor,
        stroke: iconColor
      }}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
}

export default AddIcon
