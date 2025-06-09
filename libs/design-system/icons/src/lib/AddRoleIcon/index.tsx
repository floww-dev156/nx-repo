import * as React from 'react'

function AddRoleIcon(props) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={24}
         height={24}
         fill='none'
         viewBox='0 0 24 24'
         {...props}
      >
         <path
            fill='#0967D2'
            fillRule='evenodd'
            d='M15 13h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2V9c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default AddRoleIcon
