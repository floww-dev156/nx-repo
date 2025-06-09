import * as React from 'react'

function RecurringIcon(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M12.798 9.384A.5.5 0 0112 8.983V8H8c-2.21 0-4 1.79-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121z'
            clipRule='evenodd'
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M17 6v2a3 3 0 013 3v1a4 4 0 01-4 4h-3.942v-1.272a.5.5 0 00-.799-.4L8.402 16.46a.5.5 0 00.001.803l2.857 2.12a.5.5 0 00.798-.401V18H16a6 6 0 006-6v-1a5 5 0 00-5-5z'
            clipRule='evenodd'
            opacity={0.3}
         />
      </svg>
   )
}

export default RecurringIcon
