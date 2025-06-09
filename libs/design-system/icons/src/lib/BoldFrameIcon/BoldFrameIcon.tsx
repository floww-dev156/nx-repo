import React from 'react'
import { IconPropsType } from '../types'

export const BoldFrameIcon = ({ ...rest }: IconPropsType) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={rest.width ? rest.width : 16}
      height={rest.height ? rest.height : 16}
      fill='none'
      viewBox='0 0 16 16'
   >
      <path
         fill='#1D4ED8'
         d='M8 1.333A3.17 3.17 0 004.833 4.5c0 1.713 1.34 3.1 3.087 3.16a.538.538 0 01.147 0h.046a3.159 3.159 0 003.054-3.16A3.17 3.17 0 008 1.333zM11.387 9.433c-1.86-1.24-4.894-1.24-6.767 0-.847.567-1.313 1.334-1.313 2.154 0 .82.466 1.58 1.306 2.14.934.626 2.16.94 3.387.94 1.227 0 2.453-.314 3.387-.94.84-.567 1.306-1.327 1.306-2.154-.006-.82-.466-1.58-1.306-2.14z'
      ></path>
   </svg>
)

export default BoldFrameIcon
