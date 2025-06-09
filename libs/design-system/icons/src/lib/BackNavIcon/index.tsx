import * as React from 'react'

interface BackNavProps {
   width?: number
   height?: number
   fill?: string
}

const BackNavIcon = ({
   width = 16,
   height = 14,
   fill = '#52606D',
   ...props
}: BackNavProps) => (
   <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M15 6H3.135l3.633-4.36A1 1 0 1 0 5.232.36l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 0 0-.072.358L0 7l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 1 0 1.536-1.28L3.135 8H15a1 1 0 0 0 0-2Z'
         fill={fill}
      />
   </svg>
)

export default BackNavIcon
