import React, { ReactElement } from 'react'

interface OutlineLogoutIconProps {
   width?: number
   height?: number
   fill?: string
}

const OutlineLogoutIcon = (props: OutlineLogoutIconProps): ReactElement => {
   const { width = 16, height = 16, fill = '#EF4444', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            d='M11.333 10.667 14 8m0 0-2.667-2.667M14 8H4.667m4 2.667v.666a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h2.667a2 2 0 0 1 2 2v.666'
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { OutlineLogoutIcon }
