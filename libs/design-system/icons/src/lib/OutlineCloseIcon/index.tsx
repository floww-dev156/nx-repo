import * as React from 'react'

interface Props {
   width: number
   height: number
   fill: string

   strokeWidth: number
}

class OutlineCloseIcon extends React.Component<Props> {
   static defaultProps = {
      width: 20,
      height: 20,
      fill: '#94A3B8',
      strokeWidth: 2
   }
   render() {
      const { width, height, fill, strokeWidth, ...rest } = this.props
      return (
         <svg
            width={width}
            height={height}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            {...rest}
         >
            <path
               d='M5 15 15 5M5 5l10 10'
               stroke={fill}
               strokeWidth={strokeWidth}
               strokeLinecap='round'
               strokeLinejoin='round'
            />
         </svg>
      )
   }
}

export { OutlineCloseIcon }
