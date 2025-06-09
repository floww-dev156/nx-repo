import * as React from 'react'

import { IconPropsType } from '../types'

const FeaturedImageIcon = (props: IconPropsType) => {
   const { height = 40, width = 40, ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
      >
         <rect width={40} height={40} fill='#EFF8FF' rx={20} />
         <path
            stroke='#1570EF'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M25.833 27.5h.842c.81 0 1.214 0 1.437-.169a.833.833 0 0 0 .33-.615c.016-.279-.208-.616-.657-1.289l-2.509-3.763c-.37-.556-.556-.835-.79-.931a.834.834 0 0 0-.639 0c-.233.096-.419.375-.79.931l-.62.93m3.396 4.906-6.403-9.25c-.369-.532-.553-.798-.783-.891a.833.833 0 0 0-.627 0c-.23.093-.415.36-.783.891l-4.955 7.158c-.47.677-.704 1.016-.69 1.298.011.245.13.473.325.623.225.171.637.171 1.461.171h12.455ZM27.5 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
         />
      </svg>
   )
}

export { FeaturedImageIcon }
