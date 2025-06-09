import React, { Component } from 'react'
import NotificationSvgComponent from './NotificationSvgComponent'

class NotificationIconWithRedMark extends Component {
   render() {
      const { ...props } = this.props
      return <NotificationSvgComponent {...props} />
   }
}

export default NotificationIconWithRedMark
