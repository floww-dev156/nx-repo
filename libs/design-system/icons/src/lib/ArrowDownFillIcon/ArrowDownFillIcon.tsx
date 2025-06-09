import React from 'react'

interface ArrowDownFillIconProps {
   width?: number
   height?: number
   fill?: string
}

export const ArrowDownFillIcon = (props: ArrowDownFillIconProps) => {
   const { height, width, fill } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width ? width : '24'}
         height={height ? height : '24'}
         fill={fill ? fill : 'none'}
         viewBox='0 0 24 24'
      >
         <path
            fill={fill ? fill : '#64748B'}
            d='M17.92 8.18H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z'
         ></path>
      </svg>
   )
}
