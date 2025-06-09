import * as React from 'react'

const SvgComponent = props => (
   <svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M10.667 7.333h-2v-2a.666.666 0 1 0-1.333 0V8c0 .369.298.667.666.667h2.667a.666.666 0 1 0 0-1.334Zm-2.667 6A5.34 5.34 0 0 1 2.667 8 5.34 5.34 0 0 1 8 2.667 5.34 5.34 0 0 1 13.334 8 5.34 5.34 0 0 1 8 13.333Zm0-12A6.674 6.674 0 0 0 1.333 8 6.674 6.674 0 0 0 8 14.667 6.674 6.674 0 0 0 14.667 8 6.674 6.674 0 0 0 8 1.333Z'
         fill='#616E7C'
      />
   </svg>
)

export default SvgComponent
