import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedAlignCenterIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M7.714 9.53h8.572v1.411H7.714zM6 13.059h12v1.412H6zM7.714 16.588h8.572V18H7.714zM6 6h12v1.412H6z'
         ></path>
      </svg>
   )
}

export default PaddedAlignCenterIcon
