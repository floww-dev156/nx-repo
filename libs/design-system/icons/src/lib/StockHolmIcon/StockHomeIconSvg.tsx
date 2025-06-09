import * as React from 'react'

interface SvgComponentProps {
   fill?: string
}

class SvgComponent extends React.Component<SvgComponentProps> {
   static defaultProps = {
      fill: '#3E4C59'
   }
   render() {
      const { fill, ...props } = this.props
      return (
         <svg width={24} height={24} fill={fill} viewBox='0 0 24 24' {...props}>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M8 3H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2v.5A1.5 1.5 0 0114.5 5h-5A1.5 1.5 0 018 3.5V3z'
               clipRule='evenodd'
               opacity={0.3}
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M13 2h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11a1 1 0 012 0z'
               clipRule='evenodd'
            />
            <rect
               width={7}
               height={2}
               x={10}
               y={9}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
            <rect
               width={2}
               height={2}
               x={7}
               y={9}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
            <rect
               width={2}
               height={2}
               x={7}
               y={13}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
            <rect
               width={7}
               height={2}
               x={10}
               y={13}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
            <rect
               width={2}
               height={2}
               x={7}
               y={17}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
            <rect
               width={7}
               height={2}
               x={10}
               y={17}
               fill={fill}
               opacity={0.3}
               rx={1}
            />
         </svg>
      )
   }
}

export default SvgComponent
