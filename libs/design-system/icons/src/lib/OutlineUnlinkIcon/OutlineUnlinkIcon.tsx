import React from 'react'

import { IconPropsType } from '../types'

const OutlineUnlinkIcon = ({
   width = 18,
   height = 18,
   stroke = '#475569',
   ...rest
}: IconPropsType) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 18 18'
      {...rest}
   >
      <path
         stroke={stroke}
         strokeLinecap='round'
         strokeLinejoin='round'
         d='M6.6 2.6V1m4.8 14.4V17M2.6 6.6H1m14.4 4.8H17M3.331 3.331L2.2 2.2m12.469 12.469L15.8 15.8M9 13.525l-1.697 1.697a3.2 3.2 0 11-4.526-4.525L4.475 9m9.05 0l1.697-1.697a3.2 3.2 0 10-4.525-4.526L9 4.475'
      ></path>
   </svg>
)

export { OutlineUnlinkIcon }
