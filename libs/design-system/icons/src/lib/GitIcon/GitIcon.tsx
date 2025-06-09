import * as React from 'react'

interface Props {
   width: number
   height: number
   fill: string
}

const GitIcon = (props: Props) => {
   const { width, height, fill, ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill={fill}
         viewBox='0 0 25 24'
         {...rest}
      >
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M2.43 5a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-3.999.001A2 2 0 018.43 5z'
            clipRule='evenodd'
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M15.43 10v2h-6c-.728 0-1.41-.195-2-.535V17a2 2 0 002 2h6v2h-6a4 4 0 01-4-4V7h2v1a2 2 0 002 2h6z'
            clipRule='evenodd'
            opacity={0.3}
         />
         <path
            fill='#3E4C59'
            fillRule='evenodd'
            d='M14.43 20a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-3.999.001A2 2 0 0120.43 20zm-6-9a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-3.999.001A2 2 0 0120.43 11z'
            clipRule='evenodd'
         />
      </svg>
   )
}

GitIcon.defaultProps = {
   width: 25,
   height: 24,
   fill: 'none'
}
export default GitIcon
