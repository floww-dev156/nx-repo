import React from 'react'

import { IconPropsType } from '../types'

const EditOutlineIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 20, width = 20, fill = '#344054' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 20 20'
         {...props}
      >
         <path
            stroke={fill}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.667'
            d='M15 8.333L11.668 5M2.084 17.917l2.82-.314c.345-.038.517-.057.678-.11.143-.046.279-.11.404-.194.142-.093.264-.215.51-.46L17.5 5.832A2.357 2.357 0 0014.167 2.5L3.162 13.505c-.245.245-.368.368-.46.51a1.667 1.667 0 00-.195.403c-.052.161-.071.334-.11.678l-.313 2.82z'
         ></path>
      </svg>
   )
}

export { EditOutlineIcon }
