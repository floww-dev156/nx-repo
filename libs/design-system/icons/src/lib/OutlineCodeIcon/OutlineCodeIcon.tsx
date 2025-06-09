import React from 'react'

import { IconPropsType } from '../types'

const OutlineCodeIcon = (props: IconPropsType) => {
   const { height = 24, width = 24 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 24 24'
         {...props}
      >
         <path
            stroke='#64748B'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M10.333 17.667L13 7m2.667 2.667l2.666 2.666L15.667 15m-8 0L5 12.333l2.667-2.666'
         ></path>
      </svg>
   )
}

export { OutlineCodeIcon }
