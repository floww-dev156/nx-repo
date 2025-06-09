import React, { ReactElement } from 'react'

interface OutlineChevronRightIconProps {
   width?: number
   height?: number
   fill?: string
}

const OutlineChevronRightIcon = (
   props: OutlineChevronRightIconProps
): ReactElement => {
   const { width = 24, height = 24, fill = '#94A3B8', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 24 24'
         {...rest}
      >
         <path
            d='m9 5 7 7-7 7'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { OutlineChevronRightIcon }
