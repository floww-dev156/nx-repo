import * as React from 'react'
import { IconPropsType } from '../types'

function AlertCircleIcon(props: IconPropsType) {
   const { width = 24, height = 24, fill = '#CF1124' } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 24 24'
         {...props}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M11 8a1 1 0 012 0v5a1 1 0 01-2 0V8zm0 8a1 1 0 112 0 1 1 0 01-2 0zm1 4c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { AlertCircleIcon }
