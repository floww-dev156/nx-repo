import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedAlignLeftIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M14.75 9.5H6V11h8.75zM18 13H6v1.5h12zM14.75 16.5H6V18h8.75zM18 6H6v1.5h12z'
         ></path>
      </svg>
   )
}

export default PaddedAlignLeftIcon
