import * as React from 'react'
import { IconPropsType } from '../types'

const FunnelGraphIcon = ({
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
         stroke={stroke}
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
         d='M8 16h16M4 8h24M12 24h8'
      ></path>
   </svg>
)

export { FunnelGraphIcon }
