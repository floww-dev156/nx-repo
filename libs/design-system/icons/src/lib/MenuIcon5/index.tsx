import * as React from 'react'

const MenuIcon5 = props => {
   const {
      width = 16,
      height = 16,
      stroke = '#98A2B3',
      strokeWidth = 2
   } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <path
            d='M2 5.667h12M2 10.332h12'
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { MenuIcon5 }
