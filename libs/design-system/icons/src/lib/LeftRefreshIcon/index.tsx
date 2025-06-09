import * as React from 'react'

interface LeftRefreshIconProps {
   width?: number
   height?: number
   fill?: string
}

const LeftRefreshIcon = (props: LeftRefreshIconProps) => {
   const { width = 21, height = 20, fill = '#fff', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
         viewBox='0 0 20 20'
      >
         <path
            d='M2.168 8.333S3.838 6.057 5.196 4.7a7.5 7.5 0 1 1-1.902 7.385m-1.126-3.75v-5m0 5h5'
            stroke={fill}
            strokeWidth={1.667}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export { LeftRefreshIcon }
