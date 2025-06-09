import * as React from 'react'

interface OutlineChevronUpIconProps {
   width?: number
   height?: number
   fill?: string
}

const OutlineChevronDownIcon = (props: OutlineChevronUpIconProps) => {
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
            d='M12.667 6 8 10.667 3.333 6'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { OutlineChevronDownIcon }
