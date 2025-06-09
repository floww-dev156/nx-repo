import * as React from 'react'

interface AlignTopArrowIconProps {
   width?: number
   height?: number
   fill?: string
}

const AlignTopArrowIcon = ({
   width = 20,
   height = 20,
   fill = '#98A2B3',
   ...props
}: AlignTopArrowIconProps) => (
   <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         d='M8.334 15V5c0-.777 0-1.165-.127-1.471a1.667 1.667 0 0 0-.902-.902C7 2.5 6.611 2.5 5.834 2.5c-.777 0-1.165 0-1.471.127-.409.169-.733.493-.902.902-.127.306-.127.694-.127 1.471v10c0 .777 0 1.165.127 1.471.169.409.493.733.902.902.306.127.694.127 1.471.127.777 0 1.165 0 1.471-.127.409-.169.733-.494.902-.902.127-.306.127-.694.127-1.471ZM16.667 11.667V5c0-.777 0-1.165-.127-1.471a1.667 1.667 0 0 0-.901-.902c-.307-.127-.695-.127-1.472-.127-.776 0-1.165 0-1.47.127-.41.169-.734.493-.903.902-.127.306-.127.694-.127 1.471v6.667c0 .776 0 1.165.127 1.47.17.41.494.734.902.903.306.127.695.127 1.471.127.777 0 1.165 0 1.472-.127.408-.17.732-.494.902-.902.126-.306.126-.695.126-1.471Z'
         stroke={fill}
         strokeWidth={2}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

export { AlignTopArrowIcon }
