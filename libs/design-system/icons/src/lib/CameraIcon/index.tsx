import React, { Component } from 'react'
import { Wrapper } from './styledComponents'

interface Props {
   width?: number
   height?: number
   fill?: string
   onClick?: () => void
}

class CameraIcon extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: `#FFF`
   }

   render() {
      const { width, height, fill, ...otherProps } = this.props

      return (
         <Wrapper {...otherProps}>
            <svg width={width} height={height} fill='none' viewBox='0 0 24 24'>
               <path fill={fill} d='M14 13a2 2 0 11-3.999.001A2 2 0 0114 13z' />
               <path
                  fill={fill}
                  fillRule='evenodd'
                  d='M2 8.342a3 3 0 012.272-2.91L6 5l1.406-2.11C7.777 2.335 8.402 2 9.07 2h5.86c.668 0 1.293.334 1.664.89L18 5l1.728.432A3 3 0 0122 8.342V19a3 3 0 01-3 3H5a3 3 0 01-3-3V8.342zM19 9a1 1 0 11-2 0 1 1 0 012 0zm-3 4c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z'
                  clipRule='evenodd'
               />
               <path fill={fill} d='M14 13a2 2 0 11-3.999.001A2 2 0 0114 13z' />
            </svg>
         </Wrapper>
      )
   }
}

export { CameraIcon }
