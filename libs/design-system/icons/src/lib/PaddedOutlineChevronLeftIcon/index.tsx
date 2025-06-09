import React from 'react'

interface PaddedOutlineChevronLeftIconProps {
   width?: number
   height?: number
   fill?: string
}

function PaddedOutlineChevronLeftIcon(
   props: PaddedOutlineChevronLeftIconProps
) {
   const { width = 24, height = 24, fill = '#64748B' } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 24 24'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <path
            d='m15 19-7-7 7-7'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { PaddedOutlineChevronLeftIcon }
