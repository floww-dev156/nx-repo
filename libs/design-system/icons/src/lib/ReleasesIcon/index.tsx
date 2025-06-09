import * as React from 'react'

function ReleasesIcon(props) {
   return (
      <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
         <circle cx={8} cy={8} r={8} fill='#F35627' fillOpacity={0.32} />
         <circle cx={8} cy={8} r={4} fill='#F35627' />
      </svg>
   )
}

export { ReleasesIcon }
