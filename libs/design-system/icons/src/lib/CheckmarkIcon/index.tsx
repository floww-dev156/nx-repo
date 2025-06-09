import * as React from 'react'
interface CheckMarkIconProps {
   width?: number
   height?: number
   fill?: string
   onClick?: Function
}

function CheckMarkIcon(props: CheckMarkIconProps) {
   return (
      <svg
         width={props.width ?? 96}
         height={props.height ?? 96}
         fill={props.fill ?? 'none'}
         viewBox='0 0 96 96'
      >
         <path
            fill='#27AB83'
            fillRule='evenodd'
            d='M65.182 38.422l-18.272 24a3.998 3.998 0 01-3.156 1.58h-.028a4.005 4.005 0 01-3.148-1.536L30.85 50.038a3.997 3.997 0 01.684-5.612 3.995 3.995 0 015.616.684l6.532 8.344 15.136-19.876a3.998 3.998 0 116.364 4.844zm-17.18-30.42c-22.092 0-40 17.908-40 40 0 22.088 17.908 40 40 40s40-17.912 40-40c0-22.092-17.908-40-40-40z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { CheckMarkIcon }
