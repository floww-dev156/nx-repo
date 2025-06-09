import React from 'react'

import { IconPropsType } from '../types'

const FeaturedCheckIcon = (props: IconPropsType): React.ReactElement => {
   const {
      height = 20,
      width = 20,
      fill = '#D1FADF',
      stroke = '#039855',
      ...rest
   } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         {...rest}
      >
         <rect width={56} height={56} fill={fill} rx={28} />
         <path
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M37.333 21 24.5 33.833 18.666 28'
         />
      </svg>
   )
}

export { FeaturedCheckIcon }
