import React from 'react'

import { IconPropsType } from '../types'

const ClockFastForwardIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 12, width = 12, stroke = '#7A5AF8', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 12 12'
         {...rest}
      >
         <g clipPath='url(#clip0_3909_9791)'>
            <path
               stroke={stroke}
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='1.2'
               d='M11.35 5.75l-1 1-1-1m1.123.75A4.5 4.5 0 109.5 8.829M6 3.5V6l1.5 1'
            ></path>
         </g>
         <defs>
            <clipPath id='clip0_3909_9791'>
               <path fill='#fff' d='M0 0H12V12H0z'></path>
            </clipPath>
         </defs>
      </svg>
   )
}

export { ClockFastForwardIcon }
