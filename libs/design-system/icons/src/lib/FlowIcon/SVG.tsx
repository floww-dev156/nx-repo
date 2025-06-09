import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={24} height={10} fill='none' viewBox='0 0 24 10' {...props}>
         <path stroke='#616E7C' d='M0 5h24M10 1l4 4-4 4' />
      </svg>
   )
}

export default SvgComponent
