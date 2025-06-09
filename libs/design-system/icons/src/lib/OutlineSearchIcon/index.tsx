import React from 'react'

interface IconProps {
   width?: string
   height?: string
   color?: string
   className?: string
}

function OutlineSearchIcon(props: IconProps) {
   const {
      height = '20',
      width = '20',
      color = '#94A3B8',
      ...otherProps
   } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
         {...otherProps}
      >
         <path
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M17.5 17.5l-5-5m1.667-4.167a5.833 5.833 0 11-11.667 0 5.833 5.833 0 0111.667 0z'
         ></path>
      </svg>
   )
}

export { OutlineSearchIcon }
