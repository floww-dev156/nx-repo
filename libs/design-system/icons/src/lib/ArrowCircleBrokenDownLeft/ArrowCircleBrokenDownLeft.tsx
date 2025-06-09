import * as React from 'react'
import { IconPropsType } from '../types'

const ArrowCircleBrokenDownLeft = (props: IconPropsType) => {
   const { height = 32, width = 32, fill, ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         {...rest}
         fill='none'
         viewBox='0 0 32 32'
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M19.109 4.407A12 12 0 0 0 7.515 7.515c-4.686 4.686-4.686 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0a12 12 0 0 0 3.108-11.594 1.333 1.333 0 1 1 2.576-.688c1.306 4.89.042 10.328-3.798 14.168-5.728 5.728-15.014 5.728-20.742 0-5.727-5.728-5.727-15.014 0-20.742C9.47 1.79 14.908.525 19.797 1.831a1.333 1.333 0 1 1-.688 2.576m7.167 1.317c.521.52.521 1.365 0 1.885L15.22 18.667H20a1.333 1.333 0 1 1 0 2.666h-8A1.333 1.333 0 0 1 10.668 20v-8a1.333 1.333 0 0 1 2.667 0v4.781L24.39 5.724c.52-.52 1.365-.52 1.885 0'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default ArrowCircleBrokenDownLeft
