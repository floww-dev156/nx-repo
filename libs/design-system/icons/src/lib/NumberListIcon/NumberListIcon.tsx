import React from 'react'

import { IconPropsType } from '../types'

const NumberListIcon = (props: IconPropsType) => {
   const { height = 18, width = 18, fill = '#64748B' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 17'
         {...props}
      >
         <path
            fill={fill}
            d='M.667 13.604h1.965v.492h-.983v.982h.983v.491H.667v.983h2.947v-3.93H.667v.982zM1.65 4.763h.982V.833H.667v.982h.982v2.948zM.667 7.71h1.768L.667 9.773v.884h2.947v-.982H1.846l1.768-2.063v-.884H.667v.982zM19.334 13.604H5.58v1.965h13.754v-1.965zM19.334 1.815H5.58V3.78h13.754V1.815zM19.334 7.71H5.58v1.965h13.754V7.71z'
         ></path>
      </svg>
   )
}

export { NumberListIcon }
