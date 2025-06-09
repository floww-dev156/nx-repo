import * as React from 'react'

interface IconProps {
   width?: string
   height?: string
   fill?: string
}

const OutlineShareIcon = (props: IconProps) => {
   const { width = 24, height = 24, fill = '#475569', ...otherProps } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...otherProps}
      >
         <path
            d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684 6.632 3.316m-6.632-6 6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684Zm0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684Z'
            stroke={fill}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export default OutlineShareIcon
