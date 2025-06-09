import React, { Component } from 'react'

interface Props {
   className?: string
   width?: number
   height?: number
   stroke?: string
}

class BaseCheckBoxNormalIcon extends Component<Props> {
   static defaultProps = {
      width: 20,
      height: 20,
      stroke: '#9AA5B1'
   }
   render() {
      const { width, height, stroke, ...rest } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
         >
            <rect
               width={19}
               height={19}
               x={0.5}
               y={0.5}
               stroke={stroke}
               rx={2.5}
            />
         </svg>
      )
   }
}

export { BaseCheckBoxNormalIcon }
