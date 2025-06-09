import React, { ReactElement } from 'react'

interface OutlineLockOpenIconProps {
   width?: number
   height?: number
   fill?: string
}

const OutlineLockOpenIcon = (props: OutlineLockOpenIconProps): ReactElement => {
   const { width = 16, height = 16, ...rest } = props
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
            d='M5.333 7.333V4.667a2.667 2.667 0 0 1 5.333 0M7.999 10v1.333M4 14h8c.737 0 1.334-.597 1.334-1.333v-4c0-.737-.597-1.334-1.334-1.334H4c-.736 0-1.333.597-1.333 1.334v4c0 .736.597 1.333 1.333 1.333Z'
            stroke='#334155'
            strokeLinecap='round'
         />
      </svg>
   )
}

export { OutlineLockOpenIcon }
