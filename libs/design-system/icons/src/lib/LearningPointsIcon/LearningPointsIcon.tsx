import React, { Component } from 'react'
import LearningPointsSvgComponent from './LearningPointsSvg'

interface LearningPointsProps {
   fill?: string

   style?: any
}

class LearningPointsIcon extends Component<LearningPointsProps> {
   render() {
      const { fill, ...props } = this.props
      return <LearningPointsSvgComponent fill={fill} {...props} />
   }
}

export default LearningPointsIcon
