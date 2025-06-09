import React from 'react'
import { CommonIconPropsType } from '../types'

interface iconProps extends CommonIconPropsType {
   stroke: string
}

function CheckCircleIcon1(iconProps: iconProps) {
   const { height = 20, width = 21, stroke, ...props } = iconProps

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 21 20'
      >
         <path
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.667'
            d='M6.75 10l2.5 2.5 5-5m4.583 2.5a8.333 8.333 0 11-16.666 0 8.333 8.333 0 0116.666 0z'
         ></path>
      </svg>
   )
}

export default CheckCircleIcon1
