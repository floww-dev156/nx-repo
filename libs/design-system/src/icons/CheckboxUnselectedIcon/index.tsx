import React from 'react'

import { colors } from '../../style-guide'

interface IconProps {
   width?: number
   height?: number
   bgColor?: string
   borderColor?: string
}

const CheckboxUnSelectedIcon = (props: IconProps) => {
   return (
      <svg
         width={props.width || 16}
         height={props.height || 16}
         fill='none'
         viewBox='0 0 16 16'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <rect
            x={0.5}
            y={0.5}
            width={15}
            height={15}
            rx={3.5}
            fill={props.bgColor}
         />
         <rect
            x={0.5}
            y={0.5}
            width={15}
            height={15}
            rx={3.5}
            stroke={props.borderColor}
         />
      </svg>
   )
}

CheckboxUnSelectedIcon.defaultProps = {
   width: 16,
   height: 16,
   borderColor: colors['gray-300'],
   bgColor: colors['base-white']
}
export { CheckboxUnSelectedIcon }
