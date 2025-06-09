import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedUnderlineIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M7.125 16.5h9.75V18h-9.75zM13.625 6v1.5h.813V12c0 1.24-1.094 2.25-2.438 2.25S9.562 13.24 9.562 12V7.5h.813V6h-3.25v1.5h.813V12c0 2.068 1.822 3.75 4.062 3.75s4.062-1.682 4.062-3.75V7.5h.813V6z'
         ></path>
      </svg>
   )
}

export default PaddedUnderlineIcon
