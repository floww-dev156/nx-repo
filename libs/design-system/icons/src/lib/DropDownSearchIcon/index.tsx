import * as React from 'react'

interface IconProps {
   width: number
   height: number
}
function DropDownSearchIcon(props: IconProps): JSX.Element {
   const { width = 16, height = 16, ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            fill='#9AA5B1'
            fillRule='evenodd'
            d='M3.333 7.333c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm10.472 5.529l-2.264-2.264a5.303 5.303 0 001.126-3.265A5.34 5.34 0 007.333 2 5.34 5.34 0 002 7.333a5.34 5.34 0 005.333 5.334 5.303 5.303 0 003.265-1.126l2.264 2.264a.665.665 0 10.943-.943z'
            clipRule='evenodd'
         />
      </svg>
   )
}
DropDownSearchIcon.defaultProps = {
   width: 16,
   height: 16
}

export default DropDownSearchIcon
