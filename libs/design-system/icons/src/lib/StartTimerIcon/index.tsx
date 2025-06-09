import * as React from 'react'

function StartTimerIcon(props) {
   return (
      <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
         <path
            fill='#616E7C'
            fillRule='evenodd'
            d='M10 8H8.667V6.667a.667.667 0 10-1.334 0v2c0 .368.299.666.667.666h2A.667.667 0 1010 8zm-2 5.167a4.505 4.505 0 01-4.5-4.5c0-2.482 2.019-4.5 4.5-4.5s4.5 2.018 4.5 4.5c0 2.481-2.019 4.5-4.5 4.5zm.659-10.462c.001-.014.008-.024.008-.038V2h.666a.667.667 0 100-1.333H6.667a.667.667 0 100 1.333h.666v.667c0 .014.007.024.008.038C4.342 3.035 2 5.581 2 8.667c0 3.308 2.692 6 6 6s6-2.692 6-6c0-3.086-2.342-5.632-5.341-5.962z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default StartTimerIcon
