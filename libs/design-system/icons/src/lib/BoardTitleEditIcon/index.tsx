import * as React from 'react'
import { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}
class BoardTitleEditIcon extends Component<Props> {
   static defaultProps = {
      width: 16,
      height: 16
   }
   render() {
      const { height, width } = this.props
      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 16 16'
            {...this.props}
         >
            <path
               fill='#616E7C'
               fillRule='evenodd'
               d='M7.989 4.882L4.244 8.627l-.176 1.97 1.985-.18 3.733-3.738L7.99 4.882zm3.988-.396L10.181 2.69 8.882 3.989l1.797 1.797 1.298-1.3zm-8.583 7.511l-.06.003a.668.668 0 01-.665-.727l.253-2.78c.028-.305.163-.592.38-.809l5.997-5.998c.468-.47 1.317-.446 1.81.047l1.826 1.825c.511.511.531 1.323.046 1.81l-5.998 5.997a1.311 1.311 0 01-.809.38l-2.78.252zm-.06 1.336h9.333c.366 0 .666.3.666.667 0 .367-.3.667-.666.667H3.333A.669.669 0 012.667 14c0-.367.3-.667.666-.667z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export default BoardTitleEditIcon
