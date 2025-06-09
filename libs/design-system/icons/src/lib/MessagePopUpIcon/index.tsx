import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#52606D'
            fillRule='evenodd'
            d='M22.167 18.142a.5.5 0 00.853-.355l-.016-4.682V5.526A2.526 2.526 0 0020.477 3H8.687a2.526 2.526 0 00-2.524 2.526V9H13a3 3 0 013 3v3.632h3.656l2.51 2.51z'
            clipRule='evenodd'
         />
         <path
            fill='#52606D'
            fillRule='evenodd'
            d='M1.985 18v-5a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2H4.1l-1.244 1.19a.5.5 0 01-.846-.36v-2.506A2.033 2.033 0 011.984 18zM6 14.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM9.5 16a.5.5 0 000 1h2a.5.5 0 000-1h-2z'
            clipRule='evenodd'
            opacity={0.3}
         />
      </svg>
   )
}

export default SvgComponent
