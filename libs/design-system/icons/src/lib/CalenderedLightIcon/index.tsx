import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M6 3a1 1 0 012 0v1h8V3a1 1 0 012 0v1h1a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h1V3z'
            clipRule='evenodd'
            opacity={0.25}
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M10 12a1 1 0 000 2h7a1 1 0 000-2h-7zm-3 4a1 1 0 000 2h6a1 1 0 000-2H7z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent
