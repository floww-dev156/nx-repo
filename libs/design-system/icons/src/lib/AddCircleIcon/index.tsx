import * as React from 'react'

interface AddCircleIconProps {
   width?: number
   height?: number
   fill?: string
}

const AddCircleIcon = ({
   width = 20,
   height = 20,
   fill = '#64748B',
   ...props
}: AddCircleIconProps) => (
   <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='M10 18.958c-4.942 0-8.958-4.016-8.958-8.958S5.058 1.042 10 1.042 18.958 5.058 18.958 10 14.942 18.958 10 18.958Zm0-16.666C5.75 2.292 2.292 5.75 2.292 10S5.75 17.708 10 17.708 17.708 14.25 17.708 10 14.25 2.292 10 2.292Z'
         fill={fill}
      />
      <path
         d='M13.333 10.625H6.667A.63.63 0 0 1 6.042 10a.63.63 0 0 1 .625-.625h6.666a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z'
         fill={fill}
      />
      <path
         d='M10 13.958a.63.63 0 0 1-.625-.625V6.667A.63.63 0 0 1 10 6.042a.63.63 0 0 1 .625.625v6.666a.63.63 0 0 1-.625.625Z'
         fill={fill}
      />
   </svg>
)

export { AddCircleIcon }
