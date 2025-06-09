import * as React from 'react'

interface IconProps {
   width?: number
   height?: number
   bgColor?: string
   borderColor?: string
}

const FilledCheckboxIndeterminateIcon = (props: IconProps) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 16}
      height={props.height || 16}
      fill='none'
      {...props}
   >
      <rect
         width={props.width || 16}
         height={props.width || 16}
         fill={props.bgColor}
         rx={5}
      />
      <path
         stroke='#FFF'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2.083}
         d='M5.625 10h8.75'
      />
   </svg>
)
export default FilledCheckboxIndeterminateIcon
