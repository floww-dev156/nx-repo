import * as React from 'react'
import { colors } from '../../style-guide/colors'

interface IconProps {
   width?: number
   height?: number
   bgColor?: string
   borderColor?: string
}

const RadioUnSelectedIcon = (props: IconProps) => (
   <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox={'0 0 16 16'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
   >
      <rect
         x={0.5}
         y={0.5}
         width={15}
         height={15}
         rx={7.5}
         fill={props.bgColor}
      />
      <rect
         x={0.5}
         y={0.5}
         width={15}
         height={15}
         rx={7.5}
         stroke={props.borderColor}
      />
   </svg>
)

RadioUnSelectedIcon.defaultProps = {
   width: 16,
   height: 16,
   bgColor: colors['base-white'],
   borderColor: colors['gray-300']
}

export { RadioUnSelectedIcon }
