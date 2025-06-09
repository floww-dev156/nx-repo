import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ArrowDownSvg from './ArrowDownSvg'

interface ArrowUpProps {
   width?: string
   height?: string
   fill: string
}

class ArrowUp extends Component<ArrowUpProps> {
   static defaultProps = {
      fill: '#F0B429'
   }
   render() {
      const { fill, ...otherProps } = this.props
      return <ArrowDownSvg fill={fill} {...otherProps} />
   }
}

export default observer(ArrowUp)
