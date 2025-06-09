import React from 'react'

interface PendingIconProps {
   height: number
   width: number
   fill?: string
}

export default function PendingIcon(props: PendingIconProps): JSX.Element {
   const { height, width } = props
   return (
      <svg
         width={width ?? 20}
         height={height ?? 20}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <path
            d='M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 9v.66l-.34.34-3.95 3.95-.71-.71 4-4V3h1v6Z'
            fill='#616E7C'
         />
      </svg>
   )
}

PendingIcon.defaultProps = {
   height: 20,
   width: 20
}
