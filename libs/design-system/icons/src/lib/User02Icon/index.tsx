import * as React from 'react'

import { IconPropsType } from '../types'

const User02Icon = (props: IconPropsType) => {
   const { height = 16, width = 16, fill = '#fff', ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         {...rest}
      >
         <g
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.333}
         >
            <path d='M8 10c-2.114 0-3.994 1.02-5.19 2.604-.258.34-.386.511-.382.742a.743.743 0 0 0 .255.512c.181.142.432.142.934.142h8.764c.502 0 .753 0 .935-.142a.743.743 0 0 0 .255-.513c.004-.23-.125-.4-.382-.741C11.992 11.02 10.113 10 7.999 10ZM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
         </g>
      </svg>
   )
}
export { User02Icon }
