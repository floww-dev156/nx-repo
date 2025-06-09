import * as React from 'react'

function CopyIcon(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M13.818 4H6.182C4.768 4 4 4.768 4 6.182v7.636c0 1.353.702 2.114 2 2.178V9a3 3 0 013-3h6.996c-.064-1.298-.825-2-2.178-2z'
            clipRule='evenodd'
            opacity={0.3}
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M10.182 8h7.636C19.233 8 20 8.768 20 10.182v7.636C20 19.233 19.233 20 17.818 20h-7.636C8.768 20 8 19.233 8 17.818v-7.636C8 8.768 8.768 8 10.182 8z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { CopyIcon }
