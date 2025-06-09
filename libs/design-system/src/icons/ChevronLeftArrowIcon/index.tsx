import React from 'react'

interface IconProps {
   width?: number
   height?: number
   strokeColor?: string
}

function ChevronLeftArrowIcon(props: IconProps) {
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
            d='M12.5 15L7.5 10L12.5 5'
            stroke={props.strokeColor ?? '#1570EF'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
         />
      </svg>
   )
}

export { ChevronLeftArrowIcon }
