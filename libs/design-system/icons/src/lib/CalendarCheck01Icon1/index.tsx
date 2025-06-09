import * as React from 'react'

import { CommonIconPropsType } from '../types'

interface IconProps extends CommonIconPropsType {
   stroke: string
}

const CalendarCheck01Icon1 = (props: IconProps) => {
   const { height = 32, width = 32, stroke, ...iconProps } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox={`0 0 32 32`}
         {...iconProps}
      >
         <path
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M28 13.333H4M21.333 2.667V8M10.667 2.667V8M12 21.333 14.667 24l6-6M10.4 29.333h11.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.855.436-1.976.436-4.216v-11.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748c-.856-.436-1.976-.436-4.216-.436H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 8.373 4 9.493 4 11.733v11.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436Z'
         />
      </svg>
   )
}

export default CalendarCheck01Icon1
