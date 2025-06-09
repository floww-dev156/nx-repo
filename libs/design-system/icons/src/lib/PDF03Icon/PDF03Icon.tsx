import React from 'react'

import { IconPropsType } from '../types'

interface Props extends IconPropsType {
   text?: string
}

const PDF03Icon = (props: Props): React.ReactElement => {
   const { height = 24, width = 24, text = 'PDF' } = props

   // Calculate dynamic font size based on width
   const fontSize = Math.max(Number(width) / 3.3, 2.5)

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         height={height}
         width={width}
         fill='none'
         viewBox='0 0 24 24'
      >
         <path
            fill='#E5252A'
            d='M21.044 7.897v13.138a2.215 2.215 0 0 1-2.215 2.215H5.169a2.215 2.215 0 0 1-2.216-2.215V2.965c0-1.223.992-2.215 2.215-2.215h9.15z'
         ></path>
         <path
            fill='#ED676A'
            d='M21.043 7.897h-5.25a1.477 1.477 0 0 1-1.477-1.477V.75z'
         ></path>
         <text
            x='50%'
            y='65%'
            fill='#fff'
            fontSize={fontSize}
            fontFamily='Arial, Helvetica, sans-serif'
            textAnchor='middle'
            alignmentBaseline='middle'
            style={{
               fontWeight: 600,
               userSelect: 'none'
            }}
         >
            {text.toUpperCase()}
         </text>
      </svg>
   )
}

export default PDF03Icon
