import React from 'react'

interface CrossIconProps {
   height?: number
   width?: number
   fill?: string
}

export default function CrossIcon(props: CrossIconProps): JSX.Element {
   const { height, width, fill } = props
   return (
      <svg
         width={width ?? 20}
         height={height ?? 20}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.707 11.293a.999.999 0 1 1-1.414 1.414L10 11.414l-1.293 1.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L8.586 10 7.293 8.707a.999.999 0 1 1 1.414-1.414L10 8.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L11.414 10l1.293 1.293ZM10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0Z'
            fill={fill ?? '#E12D39'}
         />
      </svg>
   )
}
