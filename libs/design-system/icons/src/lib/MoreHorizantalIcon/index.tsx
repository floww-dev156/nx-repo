import * as React from 'react'

interface IconProps {
   fill?: string
   height?: number
   width?: number
}

function MoreHorizantalIcon(props: IconProps) {
   const { fill, height, width } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
         {...props}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M2.5 10a1.667 1.667 0 113.332 0A1.667 1.667 0 012.5 10zM10 8.333a1.668 1.668 0 10.002 3.336A1.668 1.668 0 0010 8.333zm5.833 0a1.667 1.667 0 10.002 3.334 1.667 1.667 0 00-.002-3.334z'
            clipRule='evenodd'
         />
      </svg>
   )
}

MoreHorizantalIcon.defaultProps = {
   fill: '#616E7C',
   height: 20,
   width: 20
}

export default MoreHorizantalIcon
