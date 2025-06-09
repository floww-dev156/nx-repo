import React from 'react'

import { IconPropsType } from '../types'

function DonutChartIcon(props: IconPropsType) {
   const { width = 32, height = 32, fill = '#1570EF', ...other } = props
   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 32 32'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...props}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.128 3.697a12.334 12.334 0 00-10.744 8.155l7.11 1.905a5.032 5.032 0 013.557-2.7l.077-7.36zm.857-2.03C8.075 1.674 1.666 8.089 1.666 16c0 7.916 6.417 14.333 14.333 14.333S30.333 23.916 30.333 16c0-7.914-6.414-14.33-14.327-14.333h-.021zm1.143 2.05l-.077 7.393a5.002 5.002 0 01-1.96 9.808l-2.77 6.857c1.161.363 2.397.558 3.678.558 6.812 0 12.334-5.522 12.334-12.333 0-6.431-4.922-11.713-11.205-12.283zM3.859 13.827a12.334 12.334 0 006.608 13.196l2.76-6.832a5.026 5.026 0 01-2.244-4.482L3.86 13.826zM15.999 13a3 3 0 100 6 3 3 0 000-6z'
            fill={fill}
         />
      </svg>
   )
}

export default DonutChartIcon
