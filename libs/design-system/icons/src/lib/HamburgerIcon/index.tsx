import * as React from 'react'

function HamburgerIcon(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <g clipPath='url(#prefix__clip0)'>
            <path
               fill='#616E7C'
               fillRule='evenodd'
               d='M3.948 6h16.103c.522 0 .95.427.95.949v.102a.953.953 0 01-.95.949H3.948A.95.95 0 013 7.051v-.102A.95.95 0 013.948 6zm16.103 5H3.948a.95.95 0 00-.948.949v.102a.95.95 0 00.948.949h16.103c.522 0 .95-.427.95-.949v-.102a.953.953 0 00-.95-.949zm0 5H3.948a.95.95 0 00-.948.949v.102a.95.95 0 00.948.949h16.103c.522 0 .95-.427.95-.949v-.102a.953.953 0 00-.95-.949z'
               clipRule='evenodd'
            />
         </g>
         <defs>
            <clipPath id='prefix__clip0'>
               <path fill='#fff' d='M0 0h24v24H0z' />
            </clipPath>
         </defs>
      </svg>
   )
}

export default HamburgerIcon
