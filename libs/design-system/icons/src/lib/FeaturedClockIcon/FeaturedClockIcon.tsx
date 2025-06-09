import * as React from 'react'

import { IconPropsType } from '../types'

interface Props extends IconPropsType {
   secondStroke?: string
}

const FeaturedClockIcon = (props: Props): React.ReactElement => {
   const {
      width = 66,
      height = 66,
      fill = '#D1E9FF',
      stroke = '#EFF8FF',
      secondStroke = '#1570EF',
      ...rest
   } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
         viewBox='0 0 66 66'
      >
         <rect width='56' height='56' x='5' y='5' fill={fill} rx='28'></rect>
         <rect
            width='56'
            height='56'
            x='5'
            y='5'
            stroke={stroke}
            strokeWidth='10'
            rx='28'
         ></rect>
         <path
            stroke={secondStroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M33 26v7l4.666 2.333m7-2.333c0 6.443-5.223 11.667-11.666 11.667S21.333 39.443 21.333 33 26.556 21.333 33 21.333c6.443 0 11.666 5.224 11.666 11.667'
         ></path>
      </svg>
   )
}

export default FeaturedClockIcon
