import * as React from 'react'
import { IconPropsType } from '../types'

function LinkIcon({
   width,
   height,
   fill,
   className
}: IconPropsType): React.ReactElement {
   return (
      <svg
         width={width || 16}
         height={height || 16}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         className={className}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.685 2.6c1.454-1.459 3.802-1.722 5.423-.454a4.042 4.042 0 01.382 6.04l-.949.95a.669.669 0 01-.948 0 .672.672 0 010-.95l.948-.95a2.693 2.693 0 00-.181-3.967c-1.085-.909-2.713-.736-3.712.266l-.849.85a.669.669 0 01-.948 0c-.262-.262-.264-.686.118-1.069l.716-.717zm1.177 3.595L6.195 8.862a.666.666 0 10.943.942l2.667-2.666a.666.666 0 10-.943-.943zm-.675 5.402l-.85.848c-1 .998-2.632 1.17-3.717.265a2.677 2.677 0 01-.182-3.954l.95-.947a.67.67 0 000-.947.675.675 0 00-.95 0l-.85.849c-1.448 1.444-1.702 3.766-.45 5.382a4.041 4.041 0 006.049.398l.95-.946a.67.67 0 000-.948.672.672 0 00-.95 0z'
            fill={fill || '#0552B5'}
         />
      </svg>
   )
}

export { LinkIcon }
