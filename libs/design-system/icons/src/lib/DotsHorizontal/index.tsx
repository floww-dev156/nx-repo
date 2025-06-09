import * as React from 'react'

import { IconPropsType } from '../types'

const DotsHorizontal = (props: IconPropsType): React.ReactElement => {
   const {
      width = 20,
      height = 20,
      stroke = '#667085',
      strokeWidth = 2,
      ...rest
   } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
         viewBox='0 0 20 20'
      >
         <path
            d='M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15.834 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM4.167 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z'
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { DotsHorizontal }
