import * as React from 'react'

const RefreshCw2Icon = props => {
   const {
      height = 20,
      width = 20,
      stroke = '#344054',
      strokeWidth = 1.667
   } = props
   return (
      <svg
         width={width}
         height={height}
         {...props}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M1.667 11.667s.101.707 3.03 3.636a7.5 7.5 0 0 0 12.617-3.636m-15.647 0v5m0-5h5m11.667-3.334s-.101-.707-3.03-3.636A7.5 7.5 0 0 0 2.687 8.333m15.647 0v-5m0 5h-5'
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { RefreshCw2Icon }
