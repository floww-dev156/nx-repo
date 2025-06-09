import * as React from 'react'

function EditIcon({ fill = '#0967D2', ...rest }: any) {
   return (
      <svg width={17} height={16} fill='none' viewBox='0 0 17 16' {...rest}>
         <path
            fill={fill}
            fillRule='evenodd'
            d='M11.11 7.12L9.313 5.322l1.299-1.3 1.796 1.796-1.298 1.3zm2.257-2.228h-.001l-1.825-1.826c-.494-.493-1.343-.516-1.811-.046L3.733 9.017a1.314 1.314 0 00-.38.81l-.253 2.78a.667.667 0 00.664.726c.02 0 .04 0 .06-.002l2.78-.253c.306-.028.593-.162.81-.379l5.998-5.998c.485-.486.465-1.298-.045-1.81z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default EditIcon
