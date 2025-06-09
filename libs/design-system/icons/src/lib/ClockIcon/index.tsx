import * as React from 'react'

interface Props {
   width: number
   height: number
   fill: string
}

class ClockIcon extends React.Component<Props> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#3E4C59'
   }
   render() {
      const { width, height, fill } = this.props
      return (
         <svg width={width} height={height} fill='none' viewBox='0 0 16 16'>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M8 14.667a6 6 0 11.002-12.002A6 6 0 018 14.667z'
               clipRule='evenodd'
               opacity={0.3}
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M7.641 5.336a.364.364 0 01.725-.008l.3 3.005 2.156 1.232a.351.351 0 01-.267.646l-2.823-.769a.5.5 0 01-.367-.52l.276-3.586z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export default ClockIcon
