import * as React from 'react'

import { IconPropsType } from '../types'

const FeaturedThreeLayerWarningIcon = (props: IconPropsType) => {
   const { height = 48, width = 48, fill = '#FFFAEB' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 56 56'
         fill='none'
         {...props}
      >
         <rect x={4} y={4} width={48} height={48} rx={24} fill='#FEF0C7' />
         <path
            d='M28 24v4m0 4h.01M38 28c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z'
            stroke='#DC6803'
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
            stroke={fill}
            strokeWidth={8}
         />
      </svg>
   )
}

export default FeaturedThreeLayerWarningIcon
