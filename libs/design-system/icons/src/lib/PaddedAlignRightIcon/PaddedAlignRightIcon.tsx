import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedAlignRightIcon = (props: IconPropsType): React.ReactElement => {
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
            fill='currentColor'
            d='M9.429 9.5H18V11H9.429zM6 13h12v1.5H6zM9.429 16.5H18V18H9.429zM6 6h12v1.5H6z'
         ></path>
      </svg>
   )
}

export default PaddedAlignRightIcon
