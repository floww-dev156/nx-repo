import * as React from 'react'

import { colors } from '../../style-guide'

interface IconProps {
   width?: number
   height?: number
   strokeColor?: string
}

const XIcon = (props: IconProps) => (
   <svg
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='M15 5 5 15M5 5l10 10'
         stroke={props.strokeColor}
         strokeWidth={1.667}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

XIcon.defaultProps = {
   width: 20,
   height: 20,
   strokeColor: colors['gray-500']
}

export { XIcon }
