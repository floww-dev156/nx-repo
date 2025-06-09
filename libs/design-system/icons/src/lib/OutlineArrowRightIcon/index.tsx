import * as React from 'react'

interface OutlineArrowRightIconProps {
   height?: number
   width?: number
   fill?: string
}

const OutlineArrowRightIcon = (props: OutlineArrowRightIconProps) => {
   const { width = 16, height = 16, fill = '#fff', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='M9.62 12.547a.495.495 0 0 1-.353-.147.503.503 0 0 1 0-.707L12.96 8 9.267 4.307a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0l4.047 4.047a.503.503 0 0 1 0 .706L9.973 12.4c-.1.1-.226.147-.353.147Z'
            fill={fill}
         />
         <path
            d='M13.553 8.5H2.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h11.22c.274 0 .5.227.5.5s-.226.5-.5.5Z'
            fill={fill}
         />
      </svg>
   )
}

export { OutlineArrowRightIcon }
