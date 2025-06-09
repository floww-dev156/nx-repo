import React from 'react'

import { IconPropsType } from '../types'

const FeaturedThreeLayerIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 56, width = 56 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 56 56'
         {...props}
      >
         <rect width='48' height='48' x='4' y='4' fill='#D1E9FF' rx='24'></rect>
         <path
            stroke='#1570EF'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M23 25.5L18 28l9.642 4.821c.131.066.197.099.266.111.06.012.123.012.184 0 .069-.012.135-.045.266-.11L38 28l-5-2.5m-10 5L18 33l9.642 4.821c.131.066.197.099.266.111.06.012.123.012.184 0 .069-.012.135-.045.266-.11L38 33l-5-2.5M18 23l9.642-4.821c.131-.066.197-.098.266-.111a.497.497 0 01.184 0c.069.013.135.045.266.111L38 23l-9.642 4.821a1.087 1.087 0 01-.266.111.501.501 0 01-.184 0 1.087 1.087 0 01-.266-.11L18 23z'
         ></path>
         <rect
            width='48'
            height='48'
            x='4'
            y='4'
            stroke='#EFF8FF'
            strokeWidth='8'
            rx='24'
         ></rect>
      </svg>
   )
}

export { FeaturedThreeLayerIcon }
