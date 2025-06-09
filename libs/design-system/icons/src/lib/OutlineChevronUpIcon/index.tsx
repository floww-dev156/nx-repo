import * as React from 'react'

interface OutlineChevronUpIconProps {
   width?: number
   height?: number
   fill?: string
}

const OutlineChevronUpIcon = (props: OutlineChevronUpIconProps) => {
   const { width = 16, height = 16, fill = '#64748B', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            d='M3.333 10 8 5.333 12.667 10'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { OutlineChevronUpIcon }
