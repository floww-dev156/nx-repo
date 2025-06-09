import * as React from 'react'
import { IconPropsType } from '../types'

//NOTE: explicitly added fill to currentColor
const LinkHorizontalIcon = (props: IconPropsType): React.ReactElement => {
   const { width = 24, height = 24, fill = '#98A2B3', ...rest } = props

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
            d='M5.925 12A2.327 2.327 0 0 1 8.25 9.675h3V8.25h-3C6.18 8.25 4.5 9.93 4.5 12s1.68 3.75 3.75 3.75h3v-1.425h-3A2.327 2.327 0 0 1 5.925 12M9 12.75h6v-1.5H9zm6.75-4.5h-3v1.425h3A2.327 2.327 0 0 1 18.075 12a2.327 2.327 0 0 1-2.325 2.325h-3v1.425h3c2.07 0 3.75-1.68 3.75-3.75s-1.68-3.75-3.75-3.75'
         ></path>
      </svg>
   )
}

export default LinkHorizontalIcon
