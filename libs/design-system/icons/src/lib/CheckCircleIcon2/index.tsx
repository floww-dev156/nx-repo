import * as React from 'react'
import { IconPropsType } from '../types'

const CheckCircleIcon2 = (props: IconPropsType) => {
   const { height = 16, width = 16, fill = '#12B76A' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         {...props}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667Zm3.471 5.804a.667.667 0 1 0-.942-.943L7 9.057 5.471 7.528a.667.667 0 1 0-.942.943l2 2c.26.26.682.26.942 0l4-4Z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default CheckCircleIcon2
