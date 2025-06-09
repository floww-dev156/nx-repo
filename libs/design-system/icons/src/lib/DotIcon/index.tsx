import * as React from 'react'

function DotIcon(props) {
   const { width = 8, height = 8, fill = '#F04438', ...otherProps } = props

   return (
      <svg
         width={8}
         height={8}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...otherProps}
      >
         <circle cx={4} cy={4} r={3} fill={fill} />
      </svg>
   )
}

export { DotIcon }
