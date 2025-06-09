import * as React from 'react'

interface IconProps {
   width?: number
   height?: number
   bgColor?: string
   borderColor?: string
}

const FilledCheckboxSelectedIcon = (props: IconProps) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 16}
      height={props.height || 16}
      fill='none'
   >
      <rect width={20} height={20} rx={5} fill={props.bgColor} />
      <path
         stroke='#FFFFFF'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2.083}
         d='m15 6.25-6.875 6.875L5 10'
      />
   </svg>
)
export default FilledCheckboxSelectedIcon
