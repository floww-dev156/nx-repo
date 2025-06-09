import * as React from 'react'
import { IconPropsType } from '../types'

export const CircleIcon = (props: IconPropsType) => {
   const { height, width, fill, ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width || 6}
         height={height || 6}
         fill='none'
         {...props}
      >
         <circle cx={3} cy={3} r={3} fill={fill || '#98A2B3'} />
      </svg>
   )
}
