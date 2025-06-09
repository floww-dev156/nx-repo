import { IconPropsType } from '../types'

import * as React from 'react'

export const FeaturedBlockChainIcon = (
   props: IconPropsType
): React.ReactElement => {
   const { width = 32, height = 32, ...rest } = props

   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 32 32'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <rect width='32' height='32' rx='16' fill='#CFF9FE' />
         <path
            d='M15.7462 7.52064L8.65234 12.0038L9.51657 12.544L15.9983 16.649L22.48 12.562L23.0921 12.1839L23.3442 12.0218L16.2503 7.52064C16.0883 7.43062 15.9083 7.43062 15.7462 7.52064Z'
            fill='#06AED4'
         />
         <path
            d='M8.38555 12.9385L8.1875 12.8125V19.6543C8.1875 19.8163 8.25952 19.9604 8.40356 20.0504L15.5334 24.5516V17.4577L9.12375 13.4067L8.43957 12.9745L8.38555 12.9385Z'
            fill='#06AED4'
         />
         <path
            d='M16.4688 17.4577V24.5516L23.5986 20.0504C23.7427 19.9604 23.8147 19.8163 23.8147 19.6543V12.8125L23.6166 12.9385L23.5626 12.9745L22.8784 13.4067L16.4688 17.4577Z'
            fill='#06AED4'
         />
      </svg>
   )
}
