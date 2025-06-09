import * as React from 'react'

import { colors } from '../../style-guide'

interface IconProps {
   width?: number
   height?: number
   fill?: string
}

const ChevronRightIcon = (props: IconProps) => {
   const { fill = colors['gray-500'], ...rest } = props
   return (
      <svg
         width={20}
         height={20}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='m7.5 15 5-5-5-5'
            stroke={fill}
            strokeWidth={1.667}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { ChevronRightIcon }
