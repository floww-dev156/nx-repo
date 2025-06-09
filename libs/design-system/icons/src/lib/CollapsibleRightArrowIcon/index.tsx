import * as React from 'react'
interface CollapsibleRightArrowIconProps {
   width?: number
   height?: number
   fill?: string
}

function CollapsibleRightArrowIcon({
   width = 16,
   height = 16,
   fill = '#64748B',
   ...restProps
}: CollapsibleRightArrowIconProps) {
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...restProps}
      >
         <path
            d='M10.133 6.993 8.82 5.68 6.68 3.54a.721.721 0 0 0-1.227.513v7.894c0 .64.773.96 1.227.506L10.133 9a1.42 1.42 0 0 0 0-2.007Z'
            fill={fill}
         />
      </svg>
   )
}

export { CollapsibleRightArrowIcon }
