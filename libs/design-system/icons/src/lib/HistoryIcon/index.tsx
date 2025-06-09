import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M10.464 7.962a.501.501 0 01.499-.462h.085a.5.5 0 01.497.45L12 12.5l3.248 1.856c.156.09.252.255.252.434v.055a.5.5 0 01-.632.483l-4.47-1.22a.498.498 0 01-.366-.52l.432-5.626z'
            clipRule='evenodd'
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M6.201 1.418a.5.5 0 00-.87.206l-1.128 4.73a.5.5 0 00.515.616l4.867-.276a.5.5 0 00.354-.82l-1.19-1.42A8.506 8.506 0 0111.5 4a8.5 8.5 0 11-8.185 6.198l-1.926-.54A10.53 10.53 0 001 12.5C1 18.299 5.701 23 11.5 23S22 18.299 22 12.5 17.299 2 11.5 2c-1.459 0-2.848.297-4.11.835L6.2 1.418z'
            clipRule='evenodd'
            opacity={0.3}
         />
      </svg>
   )
}

export default SvgComponent
