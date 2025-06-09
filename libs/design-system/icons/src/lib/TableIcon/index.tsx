import * as React from 'react'

interface TableIconProps {
   width?: number
   height?: number
   fill?: string
}

const TableIcon = ({
   width = 20,
   height = 20,
   fill = '#98A2B3',
   ...props
}: TableIconProps) => (
   <svg
      width={width}
      height={height}
      {...props}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
   >
      <path
         d='M2.5 7.5h15m-10-5v15m-1-15h7c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2.5 15.6 2.5 14.9 2.5 13.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.4 2.5 5.1 2.5 6.5 2.5Z'
         stroke={fill}
         strokeWidth={2}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

export { TableIcon }
