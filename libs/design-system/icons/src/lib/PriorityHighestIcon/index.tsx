import React from 'react'

interface HighestIconProps {
   height?: number
   width?: number
}

function PriorityHighestIcon(props: HighestIconProps) {
   const { height = 20, width = 20 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            stroke='#06B6D4'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 13.993V16M15.999 4v12M12.03 7.97V16M8.015 10.981V16'
         ></path>
      </svg>
   )
}

export { PriorityHighestIcon }
