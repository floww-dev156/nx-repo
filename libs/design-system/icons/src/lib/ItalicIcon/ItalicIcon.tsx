import React from 'react'

import { IconPropsType } from '../types'

const ItalicIcon = (props: IconPropsType) => {
   const { height = 24, width = 24, fill = '#64748B' } = props

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
            fill={fill}
            d='M15.823 22.166H8.167v-2.87h2.402l4.514-10.592h-2.13V5.833h7.655v2.871h-2.402l-4.514 10.591h2.131v2.871z'
         ></path>
      </svg>
   )
}

export { ItalicIcon }
