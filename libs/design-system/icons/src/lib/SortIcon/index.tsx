import React from 'react'

interface Props {
   width: number
   height: number
   fill: string
}
export default class SortIcon extends React.Component<Props> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#3E4C59'
   }
   render() {
      const { fill } = this.props
      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
         >
            <rect width='16' height='3' x='4' y='5' fill={fill} rx='1.5'></rect>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M7.5 11a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3h-9zm3 6a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3h-3z'
               clipRule='evenodd'
               opacity='0.3'
            ></path>
         </svg>
      )
   }
}
