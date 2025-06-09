import React, { Component } from 'react'
import { Wrapper } from './styledComponents'

interface Props {
   width?: number
   height?: number
   fill?: string
   onClick?: () => void
}

class PlayIcon extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: `#616E7C`
   }

   render() {
      const { width, height, fill, ...other } = this.props

      return (
         <Wrapper data-testid='play-icon' {...other}>
            <svg width={width} height={height} fill={fill} viewBox='0 0 25 24'>
               <path
                  fill={fill}
                  fillRule='evenodd'
                  d='M12.991 20c4.419 0 8-3.582 8-8a8 8 0 10-16 0 8 8 0 008 8zm0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'
                  clipRule='evenodd'
               />
               <path
                  fill={fill}
                  d='M9.991 8.804a1 1 0 011.53-.848l5.113 3.196a1 1 0 010 1.696l-5.113 3.196a1 1 0 01-1.53-.848V8.804z'
               />
            </svg>
         </Wrapper>
      )
   }
}

export default PlayIcon
