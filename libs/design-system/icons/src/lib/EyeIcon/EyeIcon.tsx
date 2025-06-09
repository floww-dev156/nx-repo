import React from 'react'

import { IconPropsType } from '../types'

const EyeIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 18, width = 18, fill = '#667085' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 18 18'
         {...props}
         fill='none'
      >
         <path fill={fill} d='M7.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'></path>
         <path
            fill={fill}
            fillRule='evenodd'
            d='M9 3c-2.146 0-3.896.949-5.192 2.03C2.513 6.112 1.626 7.36 1.18 8.066l-.018.028c-.088.139-.203.32-.26.572a1.619 1.619 0 000 .67c.057.253.172.433.26.572l.018.028c.445.704 1.332 1.954 2.627 3.034C5.104 14.052 6.854 15 9 15c2.147 0 3.896-.948 5.193-2.03 1.294-1.081 2.182-2.33 2.627-3.035l.018-.028c.088-.139.203-.32.26-.572a1.62 1.62 0 000-.67c-.057-.253-.172-.433-.26-.572l-.018-.028c-.445-.704-1.333-1.954-2.627-3.034C12.896 3.949 11.147 3 9 3zm0 3a3 3 0 100 6 3 3 0 000-6z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export { EyeIcon }
