import React, { Component } from 'react'
import NotificationSvgComponent from './NotificationSvgComponent'

class NotificationIconWithoutRedMark extends Component {
   render() {
      const { ...props } = this.props
      return <NotificationSvgComponent {...props} />
   }
}

export default NotificationIconWithoutRedMark
