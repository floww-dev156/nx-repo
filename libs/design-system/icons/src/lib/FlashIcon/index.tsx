import * as React from 'react'

const FlashIcon = props => {
   const { width, height, stroke = '#667085' } = props
   return (
      <svg
         width={width}
         height={height}
         {...props}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M13.5 2 4.593 12.688c-.348.418-.523.628-.525.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12.5l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 0 0-.185-.397c-.138-.111-.41-.111-.955-.111H12.5l1-8Z'
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}
export { FlashIcon }
