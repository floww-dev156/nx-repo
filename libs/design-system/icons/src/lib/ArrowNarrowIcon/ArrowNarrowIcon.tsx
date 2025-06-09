import React from 'react'

import { IconPropsType } from '../types'

const ArrowNarrowIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 20, width = 20, fill = '#fff' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
         {...props}
      >
         <path
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.667'
            d='M3.333 10h13.333m0 0l-5-5m5 5l-5 5'
         ></path>
      </svg>
   )
}

export { ArrowNarrowIcon }
