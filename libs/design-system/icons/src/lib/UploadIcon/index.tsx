import * as React from 'react'

import { IconPropsType } from '../types'

const UploadIcon = (props: IconPropsType) => {
   const { height = 16, width = 16, fill = '#344054', ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14 10v.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 12.48 2 11.92 2 10.8V10m9.333-4.667L8 2m0 0L4.667 5.333M8 2v8'
         />
      </svg>
   )
}
export { UploadIcon }
