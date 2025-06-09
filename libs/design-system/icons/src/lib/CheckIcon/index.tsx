import * as React from 'react'
import { IconPropsType } from '../types'

const CheckIcon = (props: IconPropsType) => {
   const {
      width = 20,
      height = 20,
      stroke = '#1570EF',
      strokeWidth = 1.667,
      ...rest
   } = props

   return (
      <svg
         width={width}
         height={height}
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
         viewBox='0 0 20 20'
         fill='none'
      >
         <path
            d='m16.667 5-9.166 9.167L3.334 10'
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { CheckIcon }
