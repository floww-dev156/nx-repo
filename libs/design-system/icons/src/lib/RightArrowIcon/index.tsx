import * as React from 'react'
import { IconPropsType } from '../types'

function RightArrowIcon(props: IconPropsType) {
   const { fill = '#171F46', width = 16, height = 16, ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 16 16'
         {...props}
         fill='none'
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M6.126 14L5 12.85 9.747 8 5 3.15 6.126 2l5.19 5.3c.38.39.38 1.01 0 1.4L6.125 14z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { RightArrowIcon }
