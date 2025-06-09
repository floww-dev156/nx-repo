import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ArrowUpSvg from './ArrowUpSvg'

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
      return <ArrowUpSvg fill={fill} {...otherProps} />
   }
}

export default observer(ArrowUp)
