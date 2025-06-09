import React from 'react'

interface OutlineTimerProps {
   fill?: string
   width?: string
   height?: string
}

function OutlineTimerIcon(props: OutlineTimerProps) {
   const { fill = '#64748B', width = '16', height = '16' } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
      >
         <path
            fill={fill}
            d='M8 15.167a6.34 6.34 0 01-6.333-6.334A6.34 6.34 0 018 2.5a6.34 6.34 0 016.333 6.333A6.34 6.34 0 018 15.167zM8 3.5a5.34 5.34 0 00-5.333 5.333A5.34 5.34 0 008 14.167a5.34 5.34 0 005.333-5.334A5.34 5.34 0 008 3.5z'
         ></path>
         <path
            fill={fill}
            d='M8 9.167a.504.504 0 01-.5-.5V5.333c0-.273.227-.5.5-.5s.5.227.5.5v3.334c0 .273-.227.5-.5.5zM10 1.833H6a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z'
         ></path>
      </svg>
   )
}

export { OutlineTimerIcon }
