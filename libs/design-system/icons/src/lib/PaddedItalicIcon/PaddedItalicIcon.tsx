import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedItalicIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M10.5 6v2.25h1.658l-2.565 6H7.5v2.25h6v-2.25h-1.658l2.566-6H16.5V6z'
         ></path>
      </svg>
   )
}

export default PaddedItalicIcon
