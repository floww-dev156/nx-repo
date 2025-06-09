import * as React from 'react'
import { IconPropsType } from '../types'
const Copy07Icon = (props: IconPropsType) => {
   const { width = 18, height = 18, stroke = '#667085' } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         {...props}
      >
         <g clipPath='url(#a)'>
            <path
               stroke={stroke}
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth={1.5}
               d='M7.875 1.502c-.506.007-.81.036-1.056.161a1.5 1.5 0 0 0-.656.656c-.125.246-.154.55-.16 1.056m8.622-1.873c.506.007.81.036 1.056.161a1.5 1.5 0 0 1 .656.656c.125.246.154.55.16 1.056m0 6.75c-.006.506-.035.81-.16 1.056a1.5 1.5 0 0 1-.656.655c-.246.126-.55.155-1.056.162M16.5 6v1.5m-6-6H12m-8.1 15h5.7c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V8.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C10.861 6 10.441 6 9.6 6H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v5.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163Z'
            />
         </g>
         <defs>
            <clipPath id='a'>
               <path fill='#fff' d='M0 0h18v18H0z' />
            </clipPath>
         </defs>
      </svg>
   )
}
export { Copy07Icon }
