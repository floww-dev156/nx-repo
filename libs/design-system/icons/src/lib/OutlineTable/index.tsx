import * as React from 'react'

import { IconPropsType } from '../types'

const OutlineTable = ({
   width = 24,
   height = 24,
   fill = '#475569',
   ...rest
}: IconPropsType) => (
   <svg
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
   >
      <path
         d='M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z'
         fill={fill}
      />
      <path
         d='M10 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z'
         fill={fill}
      />
      <path
         d='M21.556 9.25H2.444c-.653 0-1.194-.34-1.194-.75s.541-.75 1.194-.75h19.112c.652 0 1.194.34 1.194.75s-.541.75-1.194.75ZM21.556 16.25H2.444c-.653 0-1.194-.34-1.194-.75s.541-.75 1.194-.75h19.112c.652 0 1.194.34 1.194.75s-.541.75-1.194.75Z'
         fill={fill}
      />
   </svg>
)

export { OutlineTable }
