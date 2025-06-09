import React, { Component } from 'react'
import SvgComponent from './StockHomeIconSvg'

interface StockHolmIconProps {
   fill?: string

   style?: any
}

class StockHolmIcon extends Component<StockHolmIconProps> {
   render() {
      const { fill, ...props } = this.props
      return <SvgComponent fill={fill} {...props} />
   }
}

export default StockHolmIcon
