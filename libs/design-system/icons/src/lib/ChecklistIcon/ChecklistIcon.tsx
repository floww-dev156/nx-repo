import React, { Component } from 'react'
import ChecklistIconSvgComponent from './ChecklistIconSvg'

interface ChecklistIconProps {
   fill?: string

   style?: any

   width: number
   height: number
}

class ChecklistIcon extends Component<ChecklistIconProps> {
   static defaultProps = {
      width: 24,
      height: 24
   }
   render() {
      const { fill, ...props } = this.props
      return <ChecklistIconSvgComponent fill={fill} {...props} />
   }
}

export default ChecklistIcon
