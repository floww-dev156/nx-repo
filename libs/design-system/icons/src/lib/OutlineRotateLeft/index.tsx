import React from 'react'

interface OutlineRotateLeftProps {
   width?: number
   height?: number
   fill?: string
}

function OutlineRotateLeft(props: OutlineRotateLeftProps) {
   const { width = 16, height = 16, fill = '#fff' } = props
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
            d='M8 15.167a6.286 6.286 0 01-6.28-6.28c0-1.247.367-2.454 1.06-3.494a.503.503 0 01.693-.14.503.503 0 01.14.694 5.284 5.284 0 004.393 8.213 5.284 5.284 0 005.28-5.28A5.29 5.29 0 008 3.6c-.613 0-1.213.087-1.78.26a.5.5 0 01-.627-.333.5.5 0 01.334-.627c.666-.2 1.36-.307 2.073-.307 3.467 0 6.28 2.82 6.28 6.28 0 3.46-2.813 6.294-6.28 6.294z'
         ></path>
         <path
            fill={fill}
            d='M5.247 4.047a.499.499 0 01-.38-.827l1.926-2.213c.18-.207.5-.234.707-.047.207.18.227.5.047.707L5.62 3.873a.505.505 0 01-.373.174z'
         ></path>
         <path
            fill={fill}
            d='M7.493 5.687a.527.527 0 01-.293-.094L4.947 3.947a.5.5 0 01.593-.807l2.247 1.64a.5.5 0 01.106.7.473.473 0 01-.4.207z'
         ></path>
      </svg>
   )
}

export { OutlineRotateLeft }
