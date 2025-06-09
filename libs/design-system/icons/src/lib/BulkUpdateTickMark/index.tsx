import React, { Component } from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}
class BulkUpdateTickMark extends Component<Props> {
   static defaultProps = {
      width: 24,
      height: 24,
      fill: '#0967D2'
   }
   render() {
      const { width, height, fill } = this.props
      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 24 24'
            {...this.props}
         >
            <circle cx={12} cy={12} r={10} fill='#fff' />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M16.295 9.605l-4.568 6a1 1 0 01-.789.395h-.007c-.307 0-.597-.142-.787-.383l-2.432-3.108a1 1 0 011.575-1.232l1.633 2.087 3.784-4.97a1.001 1.001 0 011.592 1.211zM12 2.001C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.479 10-10c0-5.523-4.477-10-10-10z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export default BulkUpdateTickMark
