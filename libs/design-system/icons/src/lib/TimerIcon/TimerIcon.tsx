import React, { Component } from 'react'
import { Wrapper } from './styledComponents'

interface Props {
   width?: number
   height?: number
   fill?: string
   onClick?: () => void
}

class TimerIcon extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: `#3E4C59`
   }

   render() {
      const { width, height, fill, ...other } = this.props

      return (
         <Wrapper {...other}>
            <svg width={24} height={24} fill={fill} viewBox='0 0 24 24'>
               <path
                  fill={fill}
                  fillRule='evenodd'
                  d='M12 21a8 8 0 110-16 8 8 0 010 16z'
                  clipRule='evenodd'
                  opacity={0.3}
               />
               <path
                  fill={fill}
                  fillRule='evenodd'
                  d='M13 5.062V4h1a1 1 0 000-2h-4a1 1 0 000 2h1v1.062a8.05 8.05 0 012 0zm5.167 2.842l.783-.783a1 1 0 00-1.414-1.414l-.826.826c.541.394 1.03.856 1.457 1.37zm-6.703.058a.501.501 0 01.499-.462h.074a.5.5 0 01.498.462l.424 5.5a.5.5 0 01-.499.538h-.92a.501.501 0 01-.499-.538l.423-5.5z'
                  clipRule='evenodd'
               />
            </svg>
         </Wrapper>
      )
   }
}

export default TimerIcon
