import * as React from 'react'

import { IconPropsType } from '../types'

export const StarDisabledIcon = (props: IconPropsType) => {
   const { width = 41, height = 40 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 41 40'
         fill='none'
      >
         <g clip-path='url(#clip0_696_1049624)'>
            <path
               d='M21.9718 1.81338L27.2626 12.5335L39.0929 14.2525C40.4392 14.4481 40.9767 16.1025 40.0026 17.0521L31.4419 25.3965L33.4628 37.179C33.6928 38.5198 32.2854 39.5423 31.0814 38.9092L20.4999 33.3463L9.91857 38.9092C8.71451 39.5422 7.30718 38.5198 7.53717 37.179L9.55803 25.3965L0.997435 17.0521C0.0232979 16.1025 0.560874 14.4482 1.90712 14.2525L13.7375 12.5334L19.0281 1.81338C19.6303 0.593458 21.3697 0.593458 21.9718 1.81338Z'
               fill='#D0D5DD'
            />
         </g>
         <defs>
            <clipPath id='clip0_696_1049624'>
               <rect
                  width='40'
                  height='40'
                  fill='white'
                  transform='translate(0.5)'
               />
            </clipPath>
         </defs>
      </svg>
   )
}
