import * as React from 'react'

function CopyIcon(props) {
   return (
      <svg width={18} height={18} fill='none' viewBox='0 0 18 18' {...props}>
         <path
            fill='#616E7C'
            fillRule='evenodd'
            d='M6.75 9.75V9c0-1.24 1.01-2.25 2.25-2.25h.75v-2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h2.5zm0 1.5h-2.5c-1.103 0-2-.897-2-2v-5c0-1.103.897-2 2-2h5c1.103 0 2 .897 2 2v2.5h2.25c1.24 0 2.25 1.01 2.25 2.25v4.5c0 1.24-1.01 2.25-2.25 2.25H9c-1.24 0-2.25-1.01-2.25-2.25v-2.25zM8.25 9c0-.413.337-.75.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H9a.752.752 0 01-.75-.75V9z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default CopyIcon
