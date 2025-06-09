import React, { Component } from 'react'
import { IconPropsType } from '../types'

interface Props extends IconPropsType {
   width?: number
   height?: number
   fill?: string
}
class BaseCheckBoxSelectedIcon extends Component<Props> {
   static defaultProps = {
      width: 20,
      height: 20,
      fill: '#0967D2'
   }
   render() {
      const { width, height, fill, ...rest } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
         >
            <path
               fill={fill}
               d='M0 3a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V3z'
            />
            <path
               fill='#fff'
               fillRule='evenodd'
               d='M12.039 7.43a1.11 1.11 0 011.517-.228c.483.342.588.998.234 1.466L10.431 13.1a1 1 0 01-1.492.114l-2.622-2.538a1.024 1.024 0 01.002-1.483 1.113 1.113 0 011.535.002l1.641 1.59 2.544-3.357z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export { BaseCheckBoxSelectedIcon }
