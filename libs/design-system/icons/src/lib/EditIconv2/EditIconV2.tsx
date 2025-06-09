import * as React from 'react'
import { IconPropsType } from '../types'

const EditIcon = (props: IconPropsType) => {
   const { width = 16, height = 16, fill = '#64748B', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         {...rest}
      >
         <path
            d='m13.512 2.488.53-.53-.53.53ZM4.333 14.024v.75a.75.75 0 0 0 .53-.22l-.53-.53Zm-2.333 0h-.75c0 .414.336.75.75.75v-.75Zm0-2.381-.53-.53a.75.75 0 0 0-.22.53H2Zm9.685-8.625a.917.917 0 0 1 1.296 0l1.061-1.06a2.417 2.417 0 0 0-3.418 0l1.061 1.06Zm1.296 0a.917.917 0 0 1 0 1.297l1.061 1.06a2.417 2.417 0 0 0 0-3.417l-1.06 1.06Zm0 1.297-9.178 9.178 1.06 1.061 9.18-9.178-1.061-1.061Zm-8.648 8.959H2v1.5h2.333v-1.5Zm6.291-11.316L1.47 11.113l1.06 1.06 9.155-9.155-1.06-1.06ZM1.25 11.643v2.38h1.5v-2.38h-1.5Zm8.374-7.625 2.357 2.358 1.061-1.061-2.357-2.357-1.06 1.06Z'
            fill={fill}
         />
      </svg>
   )
}

export default EditIcon
