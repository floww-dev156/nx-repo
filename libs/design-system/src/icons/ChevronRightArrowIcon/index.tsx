import React from 'react'

interface IconProps {
   width?: number
   height?: number
   strokeColor?: string
}

function ChevronRightArrowIcon(props: IconProps) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width='20'
         height='20'
         viewBox='0 0 20 20'
         fill='none'
         {...props}
      >
         <path
            d='M7.5 15L12.5 10L7.5 5'
            stroke={props.strokeColor ?? '#1570EF'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
         />
      </svg>
   )
}

export { ChevronRightArrowIcon }
