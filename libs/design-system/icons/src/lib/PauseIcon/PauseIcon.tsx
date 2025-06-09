import React, { Component } from 'react'
import { Wrapper } from './styledComponents'

interface Props {
   width?: number
   height?: number
   fill?: string
   onClick?: () => void
}

class PauseIcon extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: `#616E7C`
   }

   render() {
      const { width, height, fill, ...other } = this.props

      return (
         <Wrapper data-testid='pause-icon' {...other}>
            <svg width={width} height={height} fill={fill} viewBox='0 0 24 24'>
               <path
                  fill={fill}
                  fillRule='evenodd'
                  d='M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
                  clipRule='evenodd'
               />
               <path
                  fill={fill}
                  d='M8 10a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z'
               />
            </svg>
         </Wrapper>
      )
   }
}

export default PauseIcon
