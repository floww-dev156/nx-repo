import React from 'react'
import { IconPropsType } from '../types'

const OutlineKanbanIcon = ({
   width = 16,
   height = 16,
   fill = '#334155',
   ...rest
}: IconPropsType) => {
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            d='M5.513 15.167H2.82c-1.34 0-1.987-.62-1.987-1.9V2.733c0-1.28.654-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v10.534c0 1.28-.653 1.9-1.987 1.9ZM2.82 1.833c-.846 0-.986.227-.986.9v10.534c0 .673.14.9.986.9h2.693c.847 0 .987-.227.987-.9V2.733c0-.673-.14-.9-.987-.9H2.82ZM13.18 10.5h-2.693c-1.34 0-1.987-.62-1.987-1.9V2.733c0-1.28.653-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9V8.6c0 1.28-.654 1.9-1.987 1.9Zm-2.693-8.667c-.847 0-.987.227-.987.9V8.6c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9V2.733c0-.673-.14-.9-.987-.9h-2.693Z'
            fill={fill}
         />
      </svg>
   )
}

export { OutlineKanbanIcon }
