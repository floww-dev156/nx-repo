import * as React from 'react'

interface Props {
   width: number
   height: number
   fill: string
}

class AddIcon extends React.Component<Props> {
   static defaultProps = {
      width: 16,
      height: 16,
      fill: '#7E858E'
   }
   render() {
      const { width, height, fill, ...rest } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 16 16'
            {...rest}
         >
            <path
               fill={fill}
               fillRule='evenodd'
               d='M7.25 7.25V2h1.5v5.25H14v1.5H8.75V14h-1.5V8.75H2v-1.5h5.25z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export { AddIcon }
