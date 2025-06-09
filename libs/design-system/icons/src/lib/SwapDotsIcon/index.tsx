import React from 'react'

interface IconProps {
   fill?: string
   height?: number
   width?: number
}

const SwapDotsIcon = (props: IconProps): React.ReactElement => {
   const { fill = '#98A2B3', height = 16, width = 16, ...otherProps } = props

   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 18 18'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...otherProps}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6 2.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6-10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
            fill={fill}
         />
      </svg>
   )
}

export { SwapDotsIcon }
