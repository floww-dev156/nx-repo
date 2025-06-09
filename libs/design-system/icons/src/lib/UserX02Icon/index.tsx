import * as React from 'react'
import { IconPropsType } from '../types'
const UserX02Icon = (props: IconPropsType) => {
   const { height = 16, width = 16, fill = '#fff', ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         {...rest}
      >
         <path
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.333}
            d='m11 2.668 3.334 3.333m0-3.333-3.333 3.333m-.334 8v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H4.534c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874c-.218.428-.218.988-.218 2.108v.8m7-9a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Z'
         />
      </svg>
   )
}
export { UserX02Icon }
