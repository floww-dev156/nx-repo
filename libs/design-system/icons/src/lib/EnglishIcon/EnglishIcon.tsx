import React from 'react'

import { IconPropsType } from '../types'

const EnglishIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 40, width = 27, fill = '#D1E9FF' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 27 40'
      >
         <path
            fill={fill}
            d='M0 40V.048h26.922V7.01H8.447v9.52h17.09v6.965H8.447v9.54H27v6.965H0Z'
         />
      </svg>
   )
}

export default EnglishIcon
