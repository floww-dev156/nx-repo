import React from 'react'

import { IconPropsType } from '../types'

const UploadCloud02Icon = (props: IconPropsType) => {
   const { width = 46, height = 46, ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...rest}
      >
         <rect width={40} height={40} x={3} y={3} fill='#F2F4F7' rx={20} />
         <rect
            width={40}
            height={40}
            x={3}
            y={3}
            stroke='#F9FAFB'
            strokeWidth={6}
            rx={20}
         />
         <path
            stroke='#475467'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.667}
            d='M19.667 26.333 23 23m0 0 3.333 3.333M23 23v7.5m6.667-3.548a4.583 4.583 0 0 0-2.917-8.12.516.516 0 0 1-.445-.25 6.25 6.25 0 1 0-9.816 7.58'
         />
      </svg>
   )
}

export default UploadCloud02Icon
