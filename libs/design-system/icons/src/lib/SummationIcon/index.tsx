import React from 'react'

interface SummationIconProps {
   height: number
   width: number
   fill?: string
}

export default function SummationIcon(props: SummationIconProps): JSX.Element {
   const { height, width } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z'
            fill='#0967D2'
         />
         <path
            d='M14.828 15.517H4.138L8.967 10 4.14 4.483h10.69v2.759h-1.38v-1.38H7.587L11.035 10l-3.448 4.138h5.862v-1.38h1.38v2.76Z'
            fill='#fff'
         />
      </svg>
   )
}

SummationIcon.defaultProps = {
   height: 20,
   width: 20
}
