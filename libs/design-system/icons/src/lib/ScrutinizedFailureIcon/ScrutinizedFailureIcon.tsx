import React from 'react'

import { IconPropsType } from '../types'

const ScrutinizedFailureIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 40, width = 40, ...rest } = props

   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 40 40'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <rect width='40' height='40' rx='20' fill='#FEF3F2' />
         <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M20.0001 12.0001C15.5818 12.0001 12.0001 15.5818 12.0001 20.0001C12.0001 24.4184 15.5818 28.0001 20.0001 28.0001C24.4184 28.0001 28.0001 24.4184 28.0001 20.0001C28.0001 15.5818 24.4184 12.0001 20.0001 12.0001ZM20.7274 17.091C20.7274 16.6894 20.4018 16.3638 20.0001 16.3638C19.5985 16.3638 19.2728 16.6894 19.2728 17.091V20.0001C19.2728 20.4018 19.5985 20.7274 20.0001 20.7274C20.4018 20.7274 20.7274 20.4018 20.7274 20.0001V17.091ZM20.0001 22.1819C19.5985 22.1819 19.2728 22.5076 19.2728 22.9092C19.2728 23.3109 19.5985 23.6365 20.0001 23.6365H20.0074C20.4091 23.6365 20.7347 23.3109 20.7347 22.9092C20.7347 22.5076 20.4091 22.1819 20.0074 22.1819H20.0001Z'
            fill='#F04438'
         />
      </svg>
   )
}

export { ScrutinizedFailureIcon }
