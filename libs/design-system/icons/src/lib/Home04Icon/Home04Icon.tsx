import React from 'react'

import { CommonIconPropsType } from '../types'

interface PropsType extends CommonIconPropsType {
   stroke: string
}

const Home04Icon = (iconProps: PropsType): React.ReactElement => {
   const {
      stroke,

      height = 20,
      width = 20,

      ...props
   } = iconProps

   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 20 20'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <path
            d='M10 13.333a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
         <path
            d='M2.5 8.804c0-.479 0-.718.062-.938.054-.196.144-.38.265-.542.136-.184.325-.331.702-.625l5.652-4.396c.293-.228.44-.341.601-.385a.833.833 0 01.436 0c.161.044.308.157.6.385L16.472 6.7c.377.294.566.44.702.625.12.163.21.346.265.542.062.22.062.46.062.938v6.03c0 .933 0 1.4-.182 1.756-.16.313-.414.568-.728.728-.357.182-.823.182-1.757.182H5.167c-.934 0-1.4 0-1.757-.182a1.667 1.667 0 01-.728-.728c-.182-.357-.182-.823-.182-1.757V8.804z'
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { Home04Icon }
