import React from 'react'

import { IconPropsType } from '../types'

function OutlineMirrorIcon(props: IconPropsType) {
   const { fill = '#334155', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width='16'
         height='16'
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            fill={fill}
            d='M8 12.5a5.84 5.84 0 01-5.833-5.833A5.84 5.84 0 018 .833a5.84 5.84 0 015.833 5.834A5.84 5.84 0 018 12.5zM8 1.833a4.837 4.837 0 00-4.833 4.834A4.837 4.837 0 008 11.5a4.837 4.837 0 004.833-4.833A4.837 4.837 0 008 1.833zM12 15.167H4a.504.504 0 01-.5-.5c0-.274.227-.5.5-.5h8c.273 0 .5.226.5.5 0 .273-.227.5-.5.5z'
         ></path>
      </svg>
   )
}

export { OutlineMirrorIcon }
