import React from 'react'
import { CommonIconPropsType } from '../types'

interface IconProps extends CommonIconPropsType {
   stroke: string
}

function Edit02Icon(iconProps: IconProps) {
   const { height = 20, width = 20, stroke, ...props } = iconProps
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         viewBox='0 0 20 20'
      >
         <g>
            <path
               stroke={stroke}
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='1.667'
               d='M15 8.333L11.667 5M2.083 17.917l2.82-.314c.345-.038.517-.057.679-.11.142-.046.278-.11.404-.194.141-.093.264-.215.509-.46L17.5 5.832A2.357 2.357 0 1014.167 2.5L3.16 13.505c-.245.245-.367.368-.46.51a1.667 1.667 0 00-.195.403c-.052.161-.071.334-.11.678l-.313 2.82z'
            ></path>
         </g>
      </svg>
   )
}

export default Edit02Icon
