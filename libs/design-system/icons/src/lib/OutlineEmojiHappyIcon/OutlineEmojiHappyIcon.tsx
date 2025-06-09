import React from 'react'

import { IconPropsType } from '../types'

function OutlineEmojiHappyIcon(props: IconPropsType): JSX.Element {
   const { height = 15, width = 15 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            stroke='#475569'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.3'
            d='M7.643 12.357a3.333 3.333 0 004.714 0m.143-4.024h-.008m-4.992 0h-.008M2.5 10a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z'
         ></path>
      </svg>
   )
}

export { OutlineEmojiHappyIcon }
