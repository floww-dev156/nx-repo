import * as React from 'react'
import { IconPropsType } from '../types'

function QuoteLeftIcon({ width, height, fill, className }: IconPropsType) {
   return (
      <svg
         width={width || 53}
         height={height || 47}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         className={className}
      >
         <path
            opacity={0.06}
            d='M47.856 23.448h-8.141v-6.512a6.493 6.493 0 016.513-6.513h.814c1.322 0 2.442-1.017 2.442-2.442V3.096c0-1.322-1.12-2.442-2.442-2.442h-.814c-9.057 0-16.282 7.327-16.282 16.282v24.422c0 2.748 2.137 4.885 4.884 4.885h13.026c2.645 0 4.884-2.137 4.884-4.885V28.333c0-2.646-2.239-4.885-4.884-4.885zm-29.307 0h-8.14v-6.512a6.492 6.492 0 016.512-6.513h.814c1.323 0 2.442-1.017 2.442-2.442V3.096c0-1.322-1.12-2.442-2.442-2.442h-.814C7.864.654.639 7.981.639 16.936v24.422c0 2.748 2.137 4.885 4.885 4.885h13.025c2.646 0 4.884-2.137 4.884-4.885V28.333c0-2.646-2.238-4.885-4.884-4.885z'
            fill={fill || '#1F2933'}
         />
      </svg>
   )
}

export default QuoteLeftIcon
