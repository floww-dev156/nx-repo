import * as React from 'react'
import { IconPropsType } from '../types'

const CurvedLeftArrowIcon = ({
   width = 7,
   height = 14,
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
         d='M5.829 14a.998.998 0 0 1-.78-.373l-4.828-6A1 1 0 0 1 .23 6.36l5-6a1 1 0 1 1 1.536 1.28L2.294 7.011l4.315 5.362A1 1 0 0 1 5.828 14Z'
         fill={fill}
      />
   </svg>
)

export default CurvedLeftArrowIcon
