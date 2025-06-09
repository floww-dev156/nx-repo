import React from 'react'

import { IconPropsType } from '../types'

const ScrutinizedSuccessIcon = (props: IconPropsType): React.ReactElement => {
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
         <rect width='40' height='40' rx='20' fill='#ECFDF3' />
         <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M26.541 14.3135L18.1853 22.2073L15.968 19.8883C15.5596 19.5113 14.9177 19.4885 14.4509 19.8083C13.9958 20.1396 13.8674 20.7222 14.1475 21.1906L16.7732 25.3717C17.03 25.7601 17.4734 26 17.9753 26C18.4537 26 18.9088 25.7601 19.1656 25.3717C19.5857 24.8348 27.6029 15.4787 27.6029 15.4787C28.6532 14.4277 27.3812 13.5024 26.541 14.3021V14.3135Z'
            fill='#12B76A'
         />
      </svg>
   )
}

export { ScrutinizedSuccessIcon }
