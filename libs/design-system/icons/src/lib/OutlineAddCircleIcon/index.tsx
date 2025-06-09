import React from 'react'

import { IconPropsType } from '../types'

function OutlineAddCircleIcon({ ...rest }: IconPropsType) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={rest.width ? rest.width : 20}
         height={rest.width ? rest.width : 20}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            fill='#475569'
            d='M10 18.958c-4.941 0-8.958-4.017-8.958-8.959 0-4.941 4.017-8.958 8.958-8.958 4.942 0 8.959 4.017 8.959 8.958 0 4.942-4.017 8.959-8.959 8.959zM10 2.29c-4.25 0-7.708 3.458-7.708 7.708S5.75 17.708 10 17.708s7.709-3.459 7.709-7.709S14.25 2.291 10 2.291z'
         ></path>
         <path
            fill='#475569'
            d='M13.334 10.625H6.667A.63.63 0 016.042 10a.63.63 0 01.625-.625h6.667a.63.63 0 01.625.625.63.63 0 01-.625.625z'
         ></path>
         <path
            fill='#475569'
            d='M10 13.958a.63.63 0 01-.625-.625V6.666A.63.63 0 0110 6.041a.63.63 0 01.625.625v6.667a.63.63 0 01-.625.625z'
         ></path>
      </svg>
   )
}

export { OutlineAddCircleIcon }
