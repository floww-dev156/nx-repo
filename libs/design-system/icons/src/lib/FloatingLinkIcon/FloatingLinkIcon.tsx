import React from 'react'

import { IconPropsType } from '../types'

const FloatingLinkIcon = (props: IconPropsType) => {
   const { height = 24, width = 24 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...props}
      >
         <path
            fill='#64748B'
            d='M11 12.166H9.993a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5H11A3.17 3.17 0 0014.166 8 3.17 3.17 0 0011 4.833h-1a.5.5 0 110-1h1c2.3 0 4.166 1.867 4.166 4.167S13.3 12.166 11 12.166zM6 12.166H5A4.168 4.168 0 01.833 8C.833 5.7 2.7 3.833 5 3.833h1c.273 0 .5.227.5.5s-.227.5-.5.5H5A3.17 3.17 0 001.833 8 3.17 3.17 0 005 11.166h1c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z'
         ></path>
         <path
            fill='#64748B'
            d='M10.666 8.5H5.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h5.333c.274 0 .5.227.5.5s-.226.5-.5.5z'
         ></path>
      </svg>
   )
}

export { FloatingLinkIcon }
