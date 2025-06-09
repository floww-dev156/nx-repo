import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
         <path
            fill='#F0B429'
            fillRule='evenodd'
            d='M5.232 10.64a1 1 0 001.408.128L11 7.135V19a1 1 0 002 0V7.135l4.36 3.633a1 1 0 101.28-1.536l-6-5c-.047-.04-.103-.059-.155-.089-.041-.024-.077-.052-.122-.07A.996.996 0 0012 4a.992.992 0 00-.363.073c-.045.018-.081.046-.122.07-.052.03-.108.05-.155.09l-6 5a.998.998 0 00-.128 1.407z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent
