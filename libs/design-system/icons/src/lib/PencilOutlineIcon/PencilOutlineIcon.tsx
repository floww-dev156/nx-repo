import React from 'react'

import { IconPropsType } from '../types'

function PencilOutlineIcon(props: IconPropsType) {
   const { height = 16, width = 16, stroke = '#1570EF', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <g clipPath='url(#clip0_3702_12368)'>
            <path
               stroke={stroke}
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='1.667'
               d='M12 1.333L14.667 4M1.333 14.667l.851-3.12c.056-.204.083-.306.126-.4.038-.085.084-.165.139-.24.061-.084.136-.158.285-.307l6.889-6.89c.132-.131.198-.197.274-.222a.333.333 0 01.206 0c.076.025.142.09.274.223l1.912 1.912c.133.132.199.198.223.274a.333.333 0 010 .206c-.024.076-.09.142-.223.274l-6.888 6.89c-.15.148-.224.223-.308.284a1.33 1.33 0 01-.24.139 2.79 2.79 0 01-.4.126l-3.12.85z'
            ></path>
         </g>
         <defs>
            <clipPath id='clip0_3702_12368'>
               <path fill='#fff' d='M0 0H16V16H0z'></path>
            </clipPath>
         </defs>
      </svg>
   )
}

export { PencilOutlineIcon }
