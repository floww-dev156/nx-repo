import * as React from 'react'
import { IconPropsType } from '../types'

const FollowTwitterIcon = (props: IconPropsType) => {
   const { height = 28, width = 28, fill = '#fff' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 28 28'
         {...props}
      >
         <rect width={28} height={28} fill='#1A1B1E' rx={6} />
         <path
            fill={fill}
            d='m5.044 6 6.95 9.292L5 22.847h1.574l6.123-6.614 4.947 6.614H23l-7.34-9.815L22.168 6h-1.574l-5.639 6.092L10.4 6H5.044Zm2.315 1.16h2.46l10.866 14.528h-2.46L7.358 7.16Z'
         />
      </svg>
   )
}

export default FollowTwitterIcon
