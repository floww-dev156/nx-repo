import React from 'react'
import { IconPropsType } from '../types'

function ChevronLeftSolidIcon({
   height,
   width,
   fill,
   className
}: IconPropsType) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height || 16}
         height={width || 16}
         fill='none'
         viewBox='0 0 16 16'
         className={className}
      >
         <path
            fill={fill || '#475569'}
            fillRule='evenodd'
            d='M10.165 4.234a.8.8 0 010 1.132L7.531 8l2.634 2.634a.8.8 0 01-1.131 1.132l-3.2-3.2a.8.8 0 010-1.132l3.2-3.2a.8.8 0 011.131 0z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export { ChevronLeftSolidIcon }
