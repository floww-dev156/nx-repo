import React from 'react'

import { IconPropsType } from '../types'

const FeaturedThreeLayerLikeIcon = (
   props: IconPropsType
): React.ReactElement => {
   const { height = 48, width = 48 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         height={height}
         width={width}
         fill='none'
         viewBox='0 0 56 57'
      >
         <rect
            width='48'
            height='48'
            x='4'
            y='4.5'
            fill='#D1E9FF'
            rx='24'
         ></rect>
         <rect
            width='48'
            height='48'
            x='4'
            y='4.5'
            stroke='#EFF8FF'
            strokeWidth='8'
            rx='24'
         ></rect>
         <path
            fill='#1570EF'
            fillRule='evenodd'
            d='M25.87 18.582a1.82 1.82 0 0 1 1.664-1.082A3.466 3.466 0 0 1 31 20.966V24.5h3.503a4 4 0 0 1 3.954 4.608l-1.077 7a4 4 0 0 1-3.954 3.392H20a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.35zM24 37.5h9.426a2 2 0 0 0 1.977-1.696l1.077-7a2 2 0 0 0-1.977-2.304H31a2 2 0 0 1-2-2v-3.534c0-.771-.596-1.404-1.352-1.462l-3.47 7.808q-.076.17-.178.319zm-2-9v9h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default FeaturedThreeLayerLikeIcon
