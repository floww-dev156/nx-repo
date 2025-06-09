import * as React from 'react'

import { IconPropsType } from '../types'

const UncheckedCheckboxIcon = (props: IconPropsType): React.ReactElement => {
   const {
      height = 16,
      width = 16,
      fill = 'white',
      stroke = '#D0D5DD',
      ...rest
   } = props
   return (
      <svg
         width={width}
         height={height}
         viewBox='0 0 16 16'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <rect x='0.5' y='0.5' width='15' height='15' rx='3.5' fill={fill} />
         <rect
            x='0.5'
            y='0.5'
            width='15'
            height='15'
            rx='3.5'
            stroke={stroke}
         />
      </svg>
   )
}
export default UncheckedCheckboxIcon
