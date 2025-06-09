import React, { Component } from 'react'
import DiscussionsIconSvg from './DiscussionsIconSvg'

interface DiscussionsIconProps {
   fill?: string
   style?: any
}

class DiscussionsIcon extends Component<DiscussionsIconProps> {
   render() {
      const { fill, ...props } = this.props
      return <DiscussionsIconSvg fill={fill} {...props} />
   }
}

export default DiscussionsIcon
