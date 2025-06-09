import React from 'react'
import { IconPropsType } from '../types'

interface TrashIconProps extends IconPropsType {}

export default class TrashIcon extends React.Component<TrashIconProps> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#cbd2d9'
   }

   render() {
      const { width, height, fill, ...otherProps } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 16 16'
            {...otherProps}
         >
            <path
               fill={fill}
               d='M4 5.333v7.834a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5V5.333H4z'
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M9.334 3a1 1 0 00-1-1h-.667a1 1 0 00-1 1H3.834a.5.5 0 100 1h8.333a.5.5 0 000-1H9.334z'
               clipRule='evenodd'
               opacity={0.3}
            />
         </svg>
      )
   }
}
