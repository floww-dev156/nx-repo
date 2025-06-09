import React from 'react'

import { IconPropsType } from '../types'

const ToolbarCodeIcon = (props: IconPropsType) => {
   const { height = 18, width = 18 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 19 15'
         {...props}
      >
         <path
            stroke='#64748B'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.055 13.611l3.111-12.444m3.111 3.111L17.39 7.39 14.278 10.5m-9.334 0L1.833 7.39l3.111-3.112'
         ></path>
      </svg>
   )
}

export { ToolbarCodeIcon }
