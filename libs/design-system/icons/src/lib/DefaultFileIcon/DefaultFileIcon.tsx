import React from 'react'

import { IconPropsType } from '../types'

const DefaultFileIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 20, width = 20 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         height={height}
         width={width}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            fill='#4F6773'
            fillRule='evenodd'
            d='M15.835 20H4.164A1.67 1.67 0 0 1 2.5 18.337V1.663C2.5.75 3.25 0 4.164 0h7.503l5.832 5.833v12.504c0 .915-.749 1.663-1.664 1.663'
            clipRule='evenodd'
         ></path>
         <path
            fill='#9DA8AC'
            fillRule='evenodd'
            d='M17.5 5.833h-3.807a2.03 2.03 0 0 1-2.026-2.026V0z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default DefaultFileIcon
