import * as React from 'react'

import { IconPropsType } from '../types'

const UsersRightIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 18, width = 18, stroke = '#667085', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 18 18'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='M14.25 15.75l2.25-2.25m0 0l-2.25-2.25m2.25 2.25H12m-.375-11.032a3.001 3.001 0 010 5.564M9 11.25H6c-1.398 0-2.097 0-2.648.228a3 3 0 00-1.624 1.624c-.228.551-.228 1.25-.228 2.648m8.625-10.5a3 3 0 11-6 0 3 3 0 016 0z'
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}
export default UsersRightIcon
