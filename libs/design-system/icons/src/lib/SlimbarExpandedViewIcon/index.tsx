import React from 'react'

interface SlimbarExapndedViewIconProps {
   filledcolor: string
}

class SlimBarExpandedViewIcon extends React.Component<
   SlimbarExapndedViewIconProps
> {
   static defaultProps = {
      filledcolor: '#616E7C'
   }
   render() {
      const { filledcolor } = this.props
      return (
         <svg
            width={16}
            height={16}
            fill='none'
            viewBox='0 0 16 16'
            {...this.props}
         >
            <path
               fill={filledcolor}
               fillRule='evenodd'
               d='M8.908 11.333a.668.668 0 01-.48-.203L5.854 8.463a.666.666 0 01.01-.934L8.53 4.862a.668.668 0 01.943.943L7.268 8.008l2.12 2.195a.668.668 0 01-.48 1.13z'
               clipRule='evenodd'
            />
         </svg>
      )
   }
}

export default SlimBarExpandedViewIcon
