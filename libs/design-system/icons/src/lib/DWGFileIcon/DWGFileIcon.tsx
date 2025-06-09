import React from 'react'

import { IconPropsType } from '../types'

interface Props extends IconPropsType {
   text?: string
}

const DWGFileIcon = (props: Props): React.ReactElement => {
   const { height = 20, width = 20, text = 'DWG' } = props

   // Calculate dynamic font size based on width
   const fontSize = Math.max(Number(width) / 3.3, 2.5)

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         height={height}
         width={width}
         fill='none'
         viewBox='0 0 20 20'
      >
         <path
            fill='#0097A7'
            fillRule='evenodd'
            d='M15.835 20H4.164A1.67 1.67 0 0 1 2.5 18.337V1.663C2.5.75 3.25 0 4.164 0h7.503l5.832 5.833v12.504c0 .915-.749 1.663-1.664 1.663'
            clipRule='evenodd'
         ></path>
         <path
            fill='#86CED5'
            fillRule='evenodd'
            d='M17.5 5.833h-3.807a2.03 2.03 0 0 1-2.026-2.026V0z'
            clipRule='evenodd'
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

export default DWGFileIcon
