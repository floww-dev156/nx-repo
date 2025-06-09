import * as React from 'react'

interface Props {
   width: number
   height: number
   stroke: string
}

const ClockWatchIcon = (props: Props) => {
   const { width, height } = props
   return (
      <svg
         {...props}
         width={width}
         height={height}
         xmlns='http://www.w3.org/2000/svg'
         fill='none'
         viewBox='0 0 16 16'
      >
         <path
            d='M8 6.333V9l1.667 1M8 3.333a5.667 5.667 0 1 0 0 11.334A5.667 5.667 0 0 0 8 3.334Zm0 0v-2m-1.333 0h2.666m4.22 2.395-1-1 .5.5m-10.606.5 1-1-.5.5'
            stroke={props.stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}
ClockWatchIcon.defaultProps = {
   width: 16,
   height: 16,
   stroke: '#475467'
}

export { ClockWatchIcon }
