import * as React from 'react'

interface DiscussionsIconSvgProps {
   fill?: string
}

class DiscussionsIconSvg extends React.Component<DiscussionsIconSvgProps> {
   static defaultProps = {
      fill: '#52606D'
   }
   render() {
      const { fill, ...props } = this.props
      return (
         <svg width={24} height={24} fill={fill} viewBox='0 0 24 24' {...props}>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M22.167 18.142a.5.5 0 00.854-.355l-.017-4.682V5.526A2.526 2.526 0 0020.478 3H8.688a2.526 2.526 0 00-2.526 2.526V9H13a3 3 0 013 3v3.632h3.657l2.51 2.51z'
               clipRule='evenodd'
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M1.985 18v-5a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2H4.101l-1.244 1.19a.5.5 0 01-.846-.36v-2.506A2.033 2.033 0 011.985 18zM6 14.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM9.5 16a.5.5 0 000 1h2a.5.5 0 000-1h-2z'
               clipRule='evenodd'
               opacity={0.3}
            />
         </svg>
      )
   }
}

export default DiscussionsIconSvg
