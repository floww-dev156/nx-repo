import * as React from 'react'

interface Props {
   width?: number
   height?: number
   fill?: string
}

function CopyLinkIcon({
   width = 16,
   height = 16,
   fill = '#616E7C',
   ...other
}: Props) {
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...other}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M6 10.667H4.807c-1.404 0-2.67-1.024-2.796-2.423a2.668 2.668 0 012.656-2.91H6A.667.667 0 006 4H4.806C2.773 4 .96 5.458.701 7.474A4.004 4.004 0 004.667 12H6a.667.667 0 100-1.333zM5.333 8c0 .369.3.667.667.667h4a.667.667 0 100-1.334H6A.667.667 0 005.333 8zm5.84-4c2.044 0 3.88 1.465 4.13 3.495A4.007 4.007 0 0111.332 12H10a.666.666 0 110-1.333h1.334c1.55 0 2.797-1.33 2.655-2.91-.125-1.4-1.392-2.424-2.796-2.424H10a.666.666 0 01-.666-.666c0-.369.295-.667.832-.667h1.007z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export { CopyLinkIcon }
