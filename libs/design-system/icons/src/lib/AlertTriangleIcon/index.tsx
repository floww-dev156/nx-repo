import * as React from 'react'

import { IconPropsType } from '../types'

const AlertTriangle = (props: IconPropsType): React.ReactElement => {
   const { height = 16, width = 16, fill = '#E12D39', ...rest } = props

   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M7.333 6a.667.667 0 011.334 0v2.667a.667.667 0 01-1.334 0V6zm0 4.667a.667.667 0 111.335.001.667.667 0 01-1.335-.001zm6.577 1.568c-.153.27-.45.432-.796.432H2.886c-.345 0-.643-.162-.795-.432a.648.648 0 01.012-.678L7.216 3.08c.311-.516 1.256-.516 1.568 0l5.114 8.478a.648.648 0 01.012.678m1.13-1.366L9.926 2.39c-.4-.661-1.12-1.056-1.926-1.056-.807 0-1.527.395-1.926 1.056L.96 10.87a1.98 1.98 0 00-.03 2.022C1.314 13.575 2.064 14 2.884 14h10.23c.82 0 1.57-.425 1.956-1.11a1.981 1.981 0 00-.03-2.021'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default AlertTriangle
