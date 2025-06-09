import React from 'react'

interface Props {
   fill?: string
}

class RelatedTasksIcon extends React.Component<Props> {
   static defaultProps = {
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
            <path
               fill={fill}
               fillRule='evenodd'
               d='M2 6v2h2.555a4 4 0 013.157 1.544l3.997 5.14A6.002 6.002 0 0016.445 17H18v1.614a.5.5 0 00.829.376l2.935-2.56a.499.499 0 000-.752l-2.934-2.576a.5.5 0 00-.83.375V15h-1.555a4 4 0 01-3.157-1.544l-3.997-5.14A6.002 6.002 0 004.555 6H2z'
               clipRule='evenodd'
               opacity='0.3'
            ></path>
            <path
               fill={fill}
               fillRule='evenodd'
               d='M18.829 9.99A.5.5 0 0118 9.614V8h-1.555a4 4 0 00-3.157 1.544l-3.997 5.14A6.002 6.002 0 014.555 17H2v-2h2.555a4 4 0 003.157-1.544l3.997-5.14A6.002 6.002 0 0116.445 6H18V4.477a.5.5 0 01.83-.375l2.935 2.576a.5.5 0 01-.001.752l-2.935 2.56z'
               clipRule='evenodd'
            ></path>
         </svg>
      )
   }
}

export default RelatedTasksIcon
