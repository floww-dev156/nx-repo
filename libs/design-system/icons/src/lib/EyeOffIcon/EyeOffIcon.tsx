import React from 'react'

import { IconPropsType } from '../types'

const EyeOffIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 18, width = 18, fill = '#D0D5DD' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 18 18'
         {...props}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M1.72 1.72a.75.75 0 011.06 0l13.5 13.5a.75.75 0 01-1.06 1.06l-2.365-2.365C11.77 14.549 10.479 15 9 15c-2.146 0-3.896-.948-5.192-2.03-1.295-1.081-2.182-2.33-2.627-3.035l-.018-.028a1.754 1.754 0 01-.26-.572 1.62 1.62 0 010-.67c.057-.253.172-.434.26-.573l.019-.029c.452-.715 1.369-2.007 2.715-3.106L1.72 2.78a.75.75 0 010-1.06zm4.696 5.756a3 3 0 004.108 4.108L9.39 10.45A1.5 1.5 0 017.55 8.611L6.416 7.476z'
            clipRule='evenodd'
         ></path>
         <path
            fill={fill}
            d='M11.995 8.812a3 3 0 00-2.807-2.806L6.594 3.412A7.261 7.261 0 019 3c2.147 0 3.896.949 5.193 2.03 1.295 1.081 2.182 2.33 2.627 3.035l.018.028c.088.139.203.32.26.572a1.62 1.62 0 010 .67c-.057.253-.172.433-.26.572l-.018.028A13.805 13.805 0 0115.2 12.02l-3.207-3.207z'
         ></path>
      </svg>
   )
}

export { EyeOffIcon }
