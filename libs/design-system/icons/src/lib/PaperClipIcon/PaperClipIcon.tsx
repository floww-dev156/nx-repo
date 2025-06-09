import * as React from 'react'

import { IconPropsType } from '../types'

const PaperClipIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 20, width = 20, fill = '#475467', ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         {...rest}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M14.975 3.485a2.083 2.083 0 0 0-2.946 0l-7.513 7.513a3.542 3.542 0 0 0 5.009 5.009l7.513-7.513a.833.833 0 1 1 1.178 1.178l-7.513 7.513A5.208 5.208 0 0 1 3.338 9.82l7.512-7.513a3.75 3.75 0 1 1 5.304 5.304l-7.219 7.218a2.292 2.292 0 1 1-3.24-3.24l6.334-6.335a.833.833 0 1 1 1.178 1.178l-6.334 6.335a.625.625 0 0 0 .884.883l7.218-7.218a2.083 2.083 0 0 0 0-2.946Z'
            clipRule='evenodd'
         />
      </svg>
   )
}
export default PaperClipIcon
