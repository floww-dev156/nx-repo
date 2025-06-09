import * as React from 'react'

import { IconPropsType } from '../types'

//FIXME: need to add this color from style-guide colors
const RoundedOutlineIcon = ({ fill = '#1570EF', ...rest }: IconPropsType) => (
   <svg
      width={19}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 19 20'
      {...rest}
   >
      <path
         d='M9.5 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z'
         stroke={fill}
         strokeWidth={1.667}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

export { RoundedOutlineIcon }
