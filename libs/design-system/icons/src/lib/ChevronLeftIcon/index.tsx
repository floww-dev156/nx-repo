import * as React from 'react'
import { IconPropsType } from '../types'

function ChevronLeftIcon({ height, width, fill, className }: IconPropsType) {
   return (
      <svg
         width={height || 32}
         height={width || 32}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         className={className}
         viewBox={'0 0 32 32'}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17.816 22.667c-.35 0-.697-.136-.958-.407l-5.151-5.333a1.335 1.335 0 01.017-1.87l5.334-5.333a1.332 1.332 0 111.885 1.885l-4.407 4.407 4.239 4.39a1.333 1.333 0 01-.959 2.26z'
            fill={fill || '#616E7C'}
         />
      </svg>
   )
}

export { ChevronLeftIcon }
