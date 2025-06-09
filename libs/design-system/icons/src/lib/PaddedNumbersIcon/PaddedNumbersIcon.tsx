import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedNumbersIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M5.25 15.75h1.5v.375H6v.75h.75v.375h-1.5V18H7.5v-3H5.25zM6 9h.75V6h-1.5v.75H6zm-.75 2.25H6.6l-1.35 1.575v.675H7.5v-.75H6.15l1.35-1.575V10.5H5.25zM9 6.75v1.5h10.5v-1.5zm0 10.5h10.5v-1.5H9zm0-4.5h10.5v-1.5H9z'
         ></path>
      </svg>
   )
}

export default PaddedNumbersIcon
