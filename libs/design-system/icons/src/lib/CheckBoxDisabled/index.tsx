import React, { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}
class CheckBoxDisabled extends Component<Props> {
   static defaultProps = {
      width: 20,
      height: 20,
      fill: '#e6e6e6'
   }
   render() {
      const { width, height, fill } = this.props
      return (
         <svg width={width} height={height} fill={fill} viewBox='0 0 20 20'>
            <rect
               width={19}
               height={19}
               x={0.5}
               y={0.5}
               stroke='#7B8794'
               strokeOpacity={0.48}
               rx={2.5}
            />
         </svg>
      )
   }
}

export default CheckBoxDisabled
