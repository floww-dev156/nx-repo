import * as React from 'react'

const SettingsOutline4 = props => (
   <svg
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='M2 5.334h8m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-4 5.333h8m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
         stroke={props.stroke}
         strokeWidth={1.5}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

SettingsOutline4.defaultProps = {
   width: 16,
   height: 16,
   stroke: '#344054'
}

export { SettingsOutline4 }
