import * as React from 'react'

function ProjectFlowIcon(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#CBD2D9'
            fillRule='evenodd'
            d='M10 18v3a1 1 0 001 1h2a1 1 0 001-1v-3h2v3a3 3 0 01-3 3h-2a3 3 0 01-3-3v-3h2z'
            clipRule='evenodd'
         />
         <path
            fill='#CBD2D9'
            fillRule='evenodd'
            d='M15 13.285l.75-.6A6 6 0 106 8c0 1.894.875 3.582 2.25 4.685l.75.6V16a1 1 0 001 1h4a1 1 0 001-1v-2.715zm2 .96V16a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1.755a8 8 0 1110 0z'
            clipRule='evenodd'
         />
         <path
            fill='#CBD2D9'
            d='M10.707 8.293a1 1 0 00-1.414 1.414L11 11.414V17h2v-5.586l1.707-1.707a1 1 0 00-1.414-1.414L12 9.586l-1.293-1.293z'
         />
      </svg>
   )
}

export default ProjectFlowIcon
