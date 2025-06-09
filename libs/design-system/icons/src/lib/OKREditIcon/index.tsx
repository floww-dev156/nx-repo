import React from 'react'
import { IconPropsType } from '../types'

// TODO: add props
function OKREditIcon({
   width = 16,
   height = 16,
   fill = '#7B8794',
   ...rest
}: IconPropsType): JSX.Element {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 16 16'
         {...rest}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M10.68 7.119L8.881 5.322l1.3-1.3 1.795 1.797-1.298 1.3zm-4.627 4.63l-1.985.181.176-1.97L7.99 6.215l1.797 1.797-3.733 3.738zm6.883-6.857V4.89L11.11 3.066c-.494-.493-1.343-.516-1.81-.046L3.301 9.017a1.314 1.314 0 00-.38.81l-.253 2.78a.667.667 0 00.664.726c.02 0 .04 0 .06-.003l2.78-.252c.306-.028.593-.162.81-.379l5.998-5.998c.485-.487.465-1.299-.045-1.81z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default OKREditIcon
