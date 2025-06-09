import React from 'react'

import { IconPropsType } from '../types'

const UserPlusIcon = (props: IconPropsType) => {
   const { width = 21, height = 20, fill = '#1570EF', ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 21 20'
         {...rest}
      >
         <path
            fill={fill}
            d='M17.167 12.5a.833.833 0 00-1.667 0v1.667h-1.667a.833.833 0 000 1.667H15.5V17.5a.833.833 0 101.667 0v-1.666h1.666a.833.833 0 000-1.667h-1.666V12.5z'
         ></path>
         <path
            fill={fill}
            fillRule='evenodd'
            d='M6.155 12.084h3.698c.099 0 .217 0 .322.008.12.01.294.035.476.128.235.12.426.311.546.546.093.182.118.355.128.476.008.105.008.223.008.322v3.289c0 .1 0 .218-.008.322-.01.121-.035.294-.128.476a1.25 1.25 0 01-.546.546 1.255 1.255 0 01-.476.128c-.105.009-.223.009-.322.009-2.398-.001-4.796-.013-7.194 0-.06 0-.18 0-.293-.02a1.25 1.25 0 01-1.033-1.306c.003-.492-.022-.994.064-1.481a4.166 4.166 0 013.38-3.38c.36-.064.772-.063 1.378-.063zM4.25 6.25a4.583 4.583 0 119.167 0 4.583 4.583 0 01-9.167 0z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export { UserPlusIcon }
