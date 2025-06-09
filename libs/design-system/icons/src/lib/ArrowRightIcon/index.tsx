import React from 'react'

interface ArrowRightIconProps {
   height: string | number
   width: string | number
   fill: string
   className?: string
}

export function ArrowRightIcon(props: ArrowRightIconProps): JSX.Element {
   const { height, width, fill, className } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 24 24'
         className={className}
      >
         <path
            fill={fill}
            fillRule='evenodd'
            d='M10.5 17a.999.999 0 01-.707-1.707l3.305-3.305-3.18-3.293a1 1 0 011.439-1.39l3.862 4a1 1 0 01-.012 1.402l-4 4A.997.997 0 0110.5 17z'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

ArrowRightIcon.defaultProps = {
   height: '24',
   width: '24',
   fill: '#616E7C'
}
