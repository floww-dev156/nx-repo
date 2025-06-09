import React, { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}

class DeleteIcon extends Component<Props> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#3E4C59'
   }
   render() {
      const { height, width, fill } = this.props
      return (
         <svg width={width} height={height} fill='none' viewBox='0 0 16 16'>
            <path
               fill={fill}
               d='M4 5.333v7.834a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5V5.333H4z'
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M9.333 3a1 1 0 00-1-1h-.666a1 1 0 00-1 1H3.833a.5.5 0 000 1h8.334a.5.5 0 000-1H9.333z'
               clipRule='evenodd'
               opacity={0.3}
            />
         </svg>
      )
   }
}

export { DeleteIcon }
