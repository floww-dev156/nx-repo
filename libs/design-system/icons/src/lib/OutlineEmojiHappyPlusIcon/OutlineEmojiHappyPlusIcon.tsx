import React from 'react'

import { IconPropsType } from '../types'

function OutlineEmojiHappyPlusIcon(props: IconPropsType): JSX.Element {
   const { height = 15, width = 15 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 18 16'
      >
         <path
            stroke='#475569'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.2'
            d='M6.114 9.886a2.667 2.667 0 003.772 0M10 6.666h-.007M6 6.667h-.007M2 8a6 6 0 1012 0A6 6 0 002 8z'
         ></path>
         <rect width='7' height='7' x='11' y='1' fill='#fff' rx='3.5'></rect>
         <path
            stroke='#475569'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.125 2v2.125m0 0V6.25m0-2.125h2.125m-2.125 0H12'
         ></path>
      </svg>
   )
}

export { OutlineEmojiHappyPlusIcon }
