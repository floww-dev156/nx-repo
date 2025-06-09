import * as React from 'react'
import { IconPropsType } from '../types'

const OverdueTasksAlertIcon = (props: IconPropsType) => {
   const { width = 87, height = 87, ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 76 98'
         {...rest}
      >
         <g clipPath='url(#clip0_1535_45640)' opacity='0.3'>
            <path
               fill='#FFD53D'
               d='M95.599 95.612c21.048-21.049 21.048-55.175 0-76.224-21.049-21.048-55.175-21.048-76.224 0-21.048 21.049-21.048 55.175 0 76.224 21.049 21.048 55.175 21.048 76.224 0z'
            ></path>
            <path
               fill='#DBAD09'
               fillRule='evenodd'
               d='M111.204 66.575c-5.436 27.433-29.632 48.117-58.661 48.117-1.74 0-3.461-.079-5.163-.224L16.716 83.805a12.762 12.762 0 01-2.955-3.492 12.605 12.605 0 010-12.69l27.791-48.135a12.605 12.605 0 0110.99-6.345c3.713 0 7.14 1.576 9.52 4.29l49.142 49.142z'
               clipRule='evenodd'
            ></path>
            <path
               fill='#fff'
               fillRule='evenodd'
               d='M52.543 61.345a3.323 3.323 0 01-3.32-3.203l-.84-23.256a3.21 3.21 0 01.928-2.426 3.211 3.211 0 012.392-1.016h1.68c.936 0 1.741.342 2.39 1.016a3.21 3.21 0 01.93 2.426l-.84 23.256a3.323 3.323 0 01-3.32 3.203zm0 7.598a4.256 4.256 0 110 8.512 4.256 4.256 0 010-8.512zm10.99-49.455a12.604 12.604 0 00-10.99-6.345c-4.57 0-8.706 2.387-10.991 6.345l-27.79 48.134a12.605 12.605 0 000 12.691 12.605 12.605 0 0010.99 6.345h55.58c4.57 0 8.707-2.388 10.991-6.345a12.605 12.605 0 000-12.69l-27.79-48.135z'
               clipRule='evenodd'
            ></path>
         </g>
         <defs>
            <clipPath id='clip0_1535_45640'>
               <path fill='#fff' d='M0 0H115V115H0z'></path>
            </clipPath>
         </defs>
      </svg>
   )
}

export { OverdueTasksAlertIcon }
