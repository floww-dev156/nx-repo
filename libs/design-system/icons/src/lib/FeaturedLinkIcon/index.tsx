import React from 'react'

import { IconPropsType } from '../types'

const FeaturedLinkIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 56, width = 56, fill = '#1570EF' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={56}
         height={56}
         fill='none'
         {...props}
      >
         <rect width={48} height={48} x={4} y={4} fill='#D1E9FF' rx={24} />
         <path
            stroke='#1570EF'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='m28.708 34.364-1.415 1.415a5 5 0 1 1-7.07-7.071l1.414-1.415m12.727 1.415 1.415-1.415a5 5 0 0 0-7.071-7.07l-1.415 1.414M24.5 31.5l7-7'
         />
         <rect
            width={48}
            height={48}
            x={4}
            y={4}
            stroke='#EFF8FF'
            strokeWidth={8}
            rx={24}
         />
      </svg>
   )
}

export { FeaturedLinkIcon }
