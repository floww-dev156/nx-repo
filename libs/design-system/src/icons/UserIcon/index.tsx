import * as React from 'react'
import { colors } from '../../style-guide/colors'

const UserIcon = props => (
   <svg
      width={props.width}
      height={props.height}
      viewBox={'0 0 18 18'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='M15 15.75c0-1.047 0-1.57-.13-1.996a3 3 0 0 0-2-2c-.425-.129-.948-.129-1.995-.129h-3.75c-1.047 0-1.57 0-1.996.13a3 3 0 0 0-2 2C3 14.18 3 14.702 3 15.75m9.375-10.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z'
         stroke={props.stroke}
         strokeWidth={1.667}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

UserIcon.defaultProps = {
   height: 18,
   width: 18,
   stroke: colors['gray-500']
}

export { UserIcon }
