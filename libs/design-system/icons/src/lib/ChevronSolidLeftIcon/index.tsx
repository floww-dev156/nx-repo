import * as React from 'react'

import { IconPropsType } from '../types'

function ChevronSolidLeftIcon(props: IconPropsType) {
   const { height, width, stroke, ...rest } = props
   return (
      <svg
         width={height || 18}
         height={width || 18}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='M11.25 13.5 6.75 9l4.5-4.5'
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { ChevronSolidLeftIcon }
