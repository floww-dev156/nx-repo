import * as React from 'react'

function NotificationIconSvgComponent(props) {
   return (
      <svg width={32} height={32} fill='none' viewBox='0 0 32 32' {...props}>
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M15.5 7a4.5 4.5 0 00-4.5 4.5V16H9.5a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3H21v-4.5A4.5 4.5 0 0016.5 7h-1z'
            clipRule='evenodd'
         />
         <rect
            width={4}
            height={4}
            x={14}
            y={20}
            fill='#3E4C59'
            opacity={0.3}
            rx={2}
         />
         <circle cx={20} cy={8} r={4} fill='#E12D39' />
      </svg>
   )
}

export default NotificationIconSvgComponent
