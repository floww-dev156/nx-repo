import * as React from 'react'

import { IconPropsType } from '../types'

export const ThumbsUpIcon = (props: IconPropsType) => {
   const { width = 32, height = 32, stroke = '#475467' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 32 32'
         fill='none'
      >
         <path
            d='M9.33317 29.3337V14.667M2.6665 17.3337V26.667C2.6665 28.1398 3.86041 29.3337 5.33317 29.3337H23.2348C25.2091 29.3337 26.8881 27.8932 27.1883 25.9419L28.6242 16.6086C28.997 14.1855 27.1223 12.0003 24.6707 12.0003H19.9998C19.2635 12.0003 18.6665 11.4034 18.6665 10.667V5.95478C18.6665 4.13898 17.1945 2.66699 15.3787 2.66699C14.9456 2.66699 14.5531 2.92205 14.3772 3.31782L9.68509 13.8752C9.47109 14.3567 8.99359 14.667 8.46667 14.667H5.33317C3.86041 14.667 2.6665 15.8609 2.6665 17.3337Z'
            stroke={stroke}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
         />
      </svg>
   )
}
