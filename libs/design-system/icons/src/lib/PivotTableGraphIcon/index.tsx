import * as React from 'react'
import { IconPropsType } from '../types'

const PivotTableGraphIcon = ({
   width = 32,
   height = 32,
   fill = '#1570EF',
   stroke = '#1570EF',
   ...props
}: IconPropsType) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 32 32'
      {...props}
   >
      <path
         fill={fill}
         d='M28 12v-1.6c0-2.24 0-3.36-.436-4.216a4 4 0 00-1.748-1.748C24.96 4 23.84 4 21.6 4H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 00-1.748 1.748C4 7.04 4 8.16 4 10.4V12h24z'
         opacity='0.12'
      ></path>
      <path
         stroke={stroke}
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
         d='M4 12h24M12 4v24M10.4 4h11.2c2.24 0 3.36 0 4.216.436a4 4 0 011.748 1.748C28 7.04 28 8.16 28 10.4v11.2c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C24.96 28 23.84 28 21.6 28H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C4 24.96 4 23.84 4 21.6V10.4c0-2.24 0-3.36.436-4.216a4 4 0 011.748-1.748C7.04 4 8.16 4 10.4 4z'
      ></path>
   </svg>
)

export { PivotTableGraphIcon }
