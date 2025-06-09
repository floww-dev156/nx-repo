import * as React from 'react'
import { IconPropsType } from '../types'

function LeftArrowIcon(props: IconPropsType) {
   const { fill = '#171F46', width = 16, height = 16, ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 16 16'
         {...rest}
         fill='none'
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M9.874 2L11 3.15 6.253 8 11 12.85 9.874 14l-5.19-5.3c-.38-.39-.38-1.01 0-1.4L9.875 2z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { LeftArrowIcon }
