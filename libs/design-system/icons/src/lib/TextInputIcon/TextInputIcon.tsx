import React, { ReactElement } from 'react'

import { IconPropsType } from '../types'

const TextInputIcon = (props: IconPropsType): ReactElement => {
   const { width = 18, height = 18, stroke = '#667085', ...rest } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 18 18'
         fill='none'
         {...rest}
      >
         <path
            d='M9.75 5.25H3.9C3.05992 5.25 2.63988 5.25 2.31901 5.41349C2.03677 5.5573 1.8073 5.78677 1.66349 6.06901C1.5 6.38988 1.5 6.80992 1.5 7.65V10.35C1.5 11.1901 1.5 11.6101 1.66349 11.931C1.8073 12.2132 2.03677 12.4427 2.31901 12.5865C2.63988 12.75 3.05992 12.75 3.9 12.75H9.75M12.75 5.25H14.1C14.9401 5.25 15.3601 5.25 15.681 5.41349C15.9632 5.5573 16.1927 5.78677 16.3365 6.06901C16.5 6.38988 16.5 6.80992 16.5 7.65V10.35C16.5 11.1901 16.5 11.6101 16.3365 11.931C16.1927 12.2132 15.9632 12.4427 15.681 12.5865C15.3601 12.75 14.9401 12.75 14.1 12.75H12.75M12.75 15.75L12.75 2.25M14.625 2.25001L10.875 2.25M14.625 15.75L10.875 15.75'
            stroke={stroke}
            stroke-width='1.66667'
            stroke-linecap='round'
            stroke-linejoin='round'
         />
      </svg>
   )
}

export default TextInputIcon
