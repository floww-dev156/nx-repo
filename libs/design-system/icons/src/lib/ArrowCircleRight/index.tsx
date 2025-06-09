import * as React from 'react'

interface ArrowCircleRightIconProps {
   width?: number
   height?: number
   fill?: string
}

class ArrowCircleRightIcon extends React.Component<ArrowCircleRightIconProps> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: 'none'
   }

   render() {
      const { width, height, fill } = this.props
      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            fill={fill}
            {...this.props}
         >
            <g clipPath='url(#a)'>
               <path
                  stroke='#667085'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='m8 10.67 2.667-2.667m0 0L8 5.336m2.667 2.667H5.334m9.333 0a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z'
               />
            </g>
            <defs>
               <clipPath id='a'>
                  <path fill='#fff' d='M0 0h16v16H0z' />
               </clipPath>
            </defs>
         </svg>
      )
   }
}

export default ArrowCircleRightIcon
