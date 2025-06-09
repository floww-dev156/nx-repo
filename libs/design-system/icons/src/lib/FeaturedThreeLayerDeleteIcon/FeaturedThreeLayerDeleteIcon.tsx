import React from 'react'

import { IconPropsType } from '../types'

const FeaturedThreeLayerDeleteIcon = (
   props: IconPropsType
): React.ReactElement => {
   const { height = 48, width = 48, fill = '#FEE4E2' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill={'none'}
         viewBox='0 0 56 56'
         {...props}
      >
         <rect x={4} y={4} width={width} height={height} rx={24} fill={fill} />
         <path
            d='M32 22v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C30.48 18 29.92 18 28.8 18h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C24 19.52 24 20.08 24 21.2v.8m2 5.5v5m4-5v5M19 22h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C32.72 38 31.88 38 30.2 38h-4.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C21 35.72 21 34.88 21 33.2V22'
            stroke='#D92D20'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
         <rect
            x={4}
            y={4}
            width={48}
            height={48}
            rx={24}
            stroke='#FEF3F2'
            strokeWidth={8}
         />
      </svg>
   )
}

export default FeaturedThreeLayerDeleteIcon
