import * as React from 'react'

import { IconPropsType } from '../types'

const FeaturedImageXIcon = (props: IconPropsType) => {
   const { height = 40, width = 40, ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
      >
         <rect width={40} height={40} fill='#FEE4E2' rx={20} />
         <path
            stroke='#D92D20'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m23.75 12.084 4.167 4.166m0-4.166L23.75 16.25m-3.333-3.75H16.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.092 1.092C12.5 14.4 12.5 15.1 12.5 16.5v7c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.093c.535.272 1.235.272 2.635.272h7.667c.775 0 1.162 0 1.48-.085a2.5 2.5 0 0 0 1.768-1.768c.085-.318.085-.705.085-1.48m-8.75-7.084a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Zm3.742 2.849-7.05 6.408c-.396.36-.594.54-.612.697a.416.416 0 0 0 .14.36c.117.103.385.103.921.103h7.822c1.2 0 1.8 0 2.27-.201a2.5 2.5 0 0 0 1.316-1.316c.201-.47.201-1.07.201-2.27 0-.403 0-.605-.044-.793a1.669 1.669 0 0 0-.312-.648c-.119-.152-.276-.278-.591-.53l-2.332-1.865c-.315-.252-.473-.378-.646-.423a.834.834 0 0 0-.465.015c-.17.055-.32.191-.618.463Z'
         />
      </svg>
   )
}

export { FeaturedImageXIcon }
