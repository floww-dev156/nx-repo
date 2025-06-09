import React from 'react'

interface OutlineChevronLeftIconProps {
   width?: number
   height?: number
   fill?: string
}

function OutlineChevronLeftIcon(props: OutlineChevronLeftIconProps) {
   const { width = 16, height = 16, fill = '#64748B' } = props
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
            d='M10 12.667L5.333 8 10 3.333'
         ></path>
      </svg>
   )
}

export { OutlineChevronLeftIcon }
