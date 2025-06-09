import React from 'react'

interface IconProps {
   width?: string
   height?: string
   fill?: string
}

function OutlineSearchNormalIcon(props: IconProps) {
   const { height = '16', width = '16', fill = '#64748B' } = props
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
            d='M7.667 14.5C3.9 14.5.833 11.433.833 7.667.833 3.9 3.9.833 7.667.833 11.433.833 14.5 3.9 14.5 7.667c0 3.766-3.067 6.833-6.833 6.833zm0-12.667a5.84 5.84 0 00-5.834 5.834A5.84 5.84 0 007.667 13.5 5.84 5.84 0 0013.5 7.667a5.84 5.84 0 00-5.833-5.834zM14.667 15.167a.494.494 0 01-.354-.147l-1.333-1.333a.503.503 0 010-.707.503.503 0 01.707 0l1.333 1.333a.503.503 0 010 .707c-.1.1-.227.147-.353.147z'
         ></path>
      </svg>
   )
}

export { OutlineSearchNormalIcon }
