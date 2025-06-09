import React from 'react'

import { IconPropsType } from '../types'

function OutlineExportIcon(props: IconPropsType) {
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
            d='M10.173 14.833H5.827c-3.274 0-4.674-1.4-4.674-4.673v-.087c0-2.96 1.167-4.386 3.78-4.633.267-.02.52.18.547.453a.501.501 0 01-.453.547c-2.094.193-2.874 1.18-2.874 3.64v.087c0 2.713.96 3.673 3.674 3.673h4.346c2.714 0 3.674-.96 3.674-3.673v-.087c0-2.473-.794-3.46-2.927-3.64a.5.5 0 01.087-.993c2.653.226 3.84 1.66 3.84 4.64v.086c0 3.26-1.4 4.66-4.674 4.66z'
         ></path>
         <path
            fill={fill}
            d='M8 10.5a.504.504 0 01-.5-.5V2.413c0-.273.227-.5.5-.5s.5.227.5.5V10c0 .273-.227.5-.5.5z'
         ></path>
         <path
            fill={fill}
            d='M10.233 4.4a.495.495 0 01-.353-.147L8 2.373l-1.88 1.88a.503.503 0 01-.707 0 .503.503 0 010-.706l2.234-2.234a.503.503 0 01.706 0l2.234 2.234a.503.503 0 010 .706.484.484 0 01-.354.147z'
         ></path>
      </svg>
   )
}

export { OutlineExportIcon }
