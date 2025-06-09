import React from 'react'

interface PropType {
   width?: number
   height?: number
   fill?: string
}

function InformationIcon({
   width = 16,
   height = 16,
   fill = '#616E7C'
}: PropType) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M7.333 5.333a.667.667 0 111.334 0 .667.667 0 01-1.334 0zm0 2a.667.667 0 011.333 0v3.334a.667.667 0 01-1.333 0V7.333zm.667 6A5.34 5.34 0 012.666 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zm0-12a6.667 6.667 0 100 13.333A6.667 6.667 0 008 1.333z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default InformationIcon
