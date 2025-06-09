import React from 'react'

import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const PaddedBoldIcon = (props: IconPropsType): React.ReactElement => {
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
            d='M14.7 11.093c.728-.503 1.238-1.328 1.238-2.093 0-1.695-1.313-3-3-3H8.25v10.5h5.28c1.568 0 2.783-1.275 2.783-2.842 0-1.14-.645-2.115-1.613-2.565m-4.2-3.218h2.25c.623 0 1.125.502 1.125 1.125s-.502 1.125-1.125 1.125H10.5zm2.625 6.75H10.5v-2.25h2.625c.623 0 1.125.502 1.125 1.125s-.502 1.125-1.125 1.125'
         ></path>
      </svg>
   )
}

export default PaddedBoldIcon
