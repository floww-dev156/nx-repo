import * as React from 'react'
import { colors } from '../../style-guide/colors'

const ChevronDownIcon = props => (
   <svg
      width={props.width}
      height={props.height}
      viewBox={'0 0 20 20'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='m5 7.5 5 5 5-5'
         stroke={props.stroke}
         strokeWidth={1.667}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

ChevronDownIcon.defaultProps = {
   width: 20,
   height: 20,
   stroke: colors['gray-500']
}

export { ChevronDownIcon }
