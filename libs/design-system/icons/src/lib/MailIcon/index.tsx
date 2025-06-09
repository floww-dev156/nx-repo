import * as React from 'react'

import { IconPropsType } from '../types'

//FIXME: need to add this color from style-guide colors
const MailIcon = ({ fill = '#667085', ...rest }: IconPropsType) => (
   <svg
      width={18}
      height={18}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
      viewBox='0 0 18 18'
   >
      <path
         d='m1.5 5.25 6.124 4.287c.496.347.744.52 1.013.587.238.06.488.06.726 0 .27-.067.517-.24 1.013-.587L16.5 5.25M5.1 15h7.8c1.26 0 1.89 0 2.371-.245.424-.216.768-.56.984-.984.245-.48.245-1.11.245-2.371V6.6c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H5.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C1.5 4.709 1.5 5.339 1.5 6.6v4.8c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984C3.209 15 3.839 15 5.1 15Z'
         stroke={fill}
         strokeWidth={1.667}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

export { MailIcon }
