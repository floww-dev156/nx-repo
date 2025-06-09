import React from 'react'

import { IconPropsType } from '../types'

const FeaturedThreeLayerNotActiveIcon = (
   props: IconPropsType
): React.ReactElement => {
   const {
      height = 48,
      width = 48,
      strokeWidth = 2,
      stroke = '#D92D20'
   } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width='56'
         height='56'
         fill='none'
         viewBox='0 0 56 56'
      >
         <rect
            width={width}
            height={height}
            x='4'
            y='4'
            fill={'#FEE4E2'}
            rx='24'
         ></rect>
         <rect
            width='48'
            height='48'
            x='4'
            y='4'
            stroke={'#FEF3F2'}
            strokeWidth='8'
            rx='24'
         ></rect>
         <path
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M32.5 20l5 5m0-5l-5 5M32 37v-1.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C29.72 31 28.88 31 27.2 31h-4.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C18 33.28 18 34.12 18 35.8V37m10.5-13.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z'
         ></path>
      </svg>
   )
}

export default FeaturedThreeLayerNotActiveIcon
