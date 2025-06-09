import * as React from 'react'

import { IconPropsType } from '../types'

const CheckBoxIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 12, width = 13, stroke = '#1570EF', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
         viewBox='0 0 13 12'
      >
         <path
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.667}
            d='m10.334 3-5.5 5.5-2.5-2.5'
         />
      </svg>
   )
}
export default CheckBoxIcon
