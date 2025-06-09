import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedBulletsIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 24, width = 24, fill = '#98A2B3', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
         viewBox='0 0 24 24'
      >
         <path
            fill={'currentColor'}
            d='M6.188 10.875c-.623 0-1.125.502-1.125 1.125s.502 1.125 1.125 1.125c.622 0 1.125-.502 1.125-1.125s-.503-1.125-1.125-1.125m0-4.5c-.623 0-1.125.503-1.125 1.125 0 .623.502 1.125 1.125 1.125.622 0 1.125-.502 1.125-1.125 0-.622-.503-1.125-1.125-1.125m0 9c-.623 0-1.125.51-1.125 1.125s.51 1.125 1.125 1.125 1.125-.51 1.125-1.125-.503-1.125-1.125-1.125m2.25 1.875h10.5v-1.5h-10.5zm0-4.5h10.5v-1.5h-10.5zm0-6v1.5h10.5v-1.5z'
         ></path>
      </svg>
   )
}

export default PaddedBulletsIcon
