import React from 'react'

import { IconPropsType } from '../types'

const MenuEmojiHappyIcon = (props: IconPropsType): JSX.Element => {
   const { height = 15, width = 15 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 12 12'
      >
         <g clipPath='url(#clip0_18628_17986)'>
            <path
               stroke='#475569'
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='1.2'
               d='M4.586 7.414a2 2 0 002.828 0M7.5 5h-.005M4.5 5h-.005M1.5 6a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z'
            ></path>
         </g>
         <defs>
            <clipPath id='clip0_18628_17986'>
               <path fill='#fff' d='M0 0H12V12H0z'></path>
            </clipPath>
         </defs>
      </svg>
   )
}

export { MenuEmojiHappyIcon }
