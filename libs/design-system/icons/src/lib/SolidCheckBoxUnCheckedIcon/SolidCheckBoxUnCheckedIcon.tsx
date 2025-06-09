import React from 'react'

import { IconPropsType } from '../types'

const SolidCheckBoxUnCheckedIcon = (
   props: IconPropsType
): React.ReactElement => {
   const { height = 16, width = 16, stroke = '#D0D5DD', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
      >
         <rect width={15} height={15} x={0.5} y={0.5} fill='#fff' rx={3.5} />
         <rect
            width={15}
            height={15}
            x={0.5}
            y={0.5}
            stroke={stroke}
            rx={3.5}
         />
      </svg>
   )
}

export { SolidCheckBoxUnCheckedIcon }
