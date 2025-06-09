import * as React from 'react'

function LogOutIcon(props) {
   return (
      <svg width={25} height={24} fill='none' viewBox='0 0 25 24' {...props}>
         <path
            fill='#CBD2D9'
            fillRule='evenodd'
            d='M8.998 5c0 .55-.45 1-1 1h-1v12h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1zm10.004 2.425l2.814 4a.998.998 0 01-.018 1.175l-3 4a.998.998 0 01-1.401.2 1.002 1.002 0 01-.2-1.4L19 13h-8.001a1 1 0 110-2h8c.017 0 .032.004.047.009.013.004.025.008.039.009l-1.718-2.443a.999.999 0 01.243-1.393.997.997 0 011.393.243z'
            clipRule='evenodd'
            {...props}
         />
      </svg>
   )
}

export default LogOutIcon
