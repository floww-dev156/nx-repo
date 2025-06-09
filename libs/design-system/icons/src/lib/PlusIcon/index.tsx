import React, { Component } from 'react'
import { IconPropsType } from '../types'

interface PlusIconProps extends IconPropsType {}

class PlusIcon extends Component<PlusIconProps> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#fff'
   }
   render() {
      const { width, height, fill } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 16 16'
            {...this.props}
         >
            <path
               fill={fill}
               fillRule='evenodd'
               d='M7.25 7.25V2h1.5v5.25H14v1.5H8.75V14h-1.5V8.75H2v-1.5h5.25z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export { PlusIcon }
