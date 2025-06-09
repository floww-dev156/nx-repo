import * as React from 'react'

const Lightning1Icon = props => {
   const {
      width = 32,
      height = 32,
      stroke = '#1570EF',
      fill = '#1570EF'
   } = props
   return (
      <svg
         width={width}
         height={height}
         xmlns='http://www.w3.org/2000/svg'
         {...props}
         fill='none'
         viewBox='0 0 32 32'
      >
         <path
            opacity={0.12}
            d='M17.334 2.667 5.458 16.917c-.465.558-.698.837-.701 1.073-.003.205.088.4.247.529.184.148.547.148 1.274.148H16l-1.333 10.666 11.875-14.25c.465-.558.698-.837.701-1.073a.666.666 0 0 0-.247-.528c-.183-.149-.547-.149-1.273-.149H16l1.334-10.666Z'
            fill={fill}
         />
         <path
            d='M17.334 2.667 5.458 16.917c-.465.558-.698.837-.701 1.073-.003.205.088.4.247.529.184.148.547.148 1.274.148H16l-1.333 10.666 11.875-14.25c.465-.558.698-.837.701-1.073a.666.666 0 0 0-.247-.528c-.183-.149-.547-.149-1.273-.149H16l1.334-10.666Z'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { Lightning1Icon }
