import React from 'react'

interface PaddedIconProps {
   height?: number
   width?: number
   fill?: string
}
function PaddedCloseIcon(props: PaddedIconProps) {
   const { height = 16, width = 16, fill = '#64748B' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
      >
         <path
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 12l8-8M4 4l8 8'
         ></path>
      </svg>
   )
}

export { PaddedCloseIcon }
