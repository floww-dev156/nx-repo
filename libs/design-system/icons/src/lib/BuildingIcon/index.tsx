import React, { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}

class BuildingIcon extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: `#3E4C59`
   }

   render() {
      const { width, height, fill } = this.props

      return (
         <svg width={width} height={height} fill='none' viewBox='0 0 24 24'>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M5 4a2 2 0 012-2h10a2 2 0 012 2v17h-5.5v-3a1 1 0 00-1-1h-1a1 1 0 00-1 1v3H5V4zm3 1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V5zm6-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1h-1zM8 9a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V9zm1 3a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H9zm4 1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1z'
               clipRule='evenodd'
            />
            <rect width={3} height={3} x={13} y={8} fill='#fff' rx={1} />
            <path
               fill={fill}
               d='M3 22.988C3 21.89 3.89 21 4.988 21h14.024C20.11 21 21 21.89 21 22.988a.012.012 0 01-.012.012H3.012A.012.012 0 013 22.988z'
               opacity={0.3}
            />
         </svg>
      )
   }
}

export { BuildingIcon }
