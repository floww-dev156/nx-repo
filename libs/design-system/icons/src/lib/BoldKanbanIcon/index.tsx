import React from 'react'

import { IconPropsType } from '../types'

const BoldKanbanIcon = (props: IconPropsType) => {
   const { fill = '#1D4ED8', width = 16, height = 16, ...rest } = props

   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            d='M7 13.267V2.733c0-1-.426-1.4-1.486-1.4H2.821c-1.06 0-1.487.4-1.487 1.4v10.534c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4ZM14.667 8.6V2.733c0-1-.427-1.4-1.487-1.4h-2.693c-1.06 0-1.487.4-1.487 1.4V8.6c0 1 .427 1.4 1.487 1.4h2.693c1.06 0 1.487-.4 1.487-1.4Z'
            fill={fill}
         />
      </svg>
   )
}

export { BoldKanbanIcon }
