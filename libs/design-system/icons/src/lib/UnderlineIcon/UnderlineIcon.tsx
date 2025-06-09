import React from 'react'

import { IconPropsType } from '../types'

const UnderlineIcon = (props: IconPropsType) => {
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
            d='M18.86 5.833a.817.817 0 00-.816.817v7.077a3.543 3.543 0 01-3.539 3.54 3.516 3.516 0 01-2.502-1.037 3.515 3.515 0 01-1.037-2.503V6.65a.817.817 0 10-1.633 0v7.077c0 1.382.538 2.68 1.515 3.658a5.138 5.138 0 003.657 1.515 5.178 5.178 0 005.172-5.172V6.65a.817.817 0 00-.816-.817zM18.86 20.535h-8.71a.817.817 0 100 1.634h8.71a.817.817 0 000-1.634z'
         ></path>
      </svg>
   )
}

export { UnderlineIcon }
