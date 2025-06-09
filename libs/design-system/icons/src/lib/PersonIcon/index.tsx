import * as React from 'react'

import { IconPropsType } from '../types'

const PersonIcon = ({
   width = 24,
   height = 24,
   fill = '#616E7C',
   ...rest
}: IconPropsType) => (
   <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
   >
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M16 7c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4Zm3 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1c0-3.86 3.141-7 7-7s7 3.14 7 7Z'
         fill='#616E7C'
      />
   </svg>
)

export { PersonIcon }
