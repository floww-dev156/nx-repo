import * as React from 'react'
import cn from 'classnames'

interface LoaderProps {
   width?: number
   height?: number
   fill?: string
   className?: string
}

const Loader = ({
   width = 17,
   height = 18,
   fill,
   className,
   ...rest
}: LoaderProps) => (
   <svg
      width={width}
      height={height}
      fill={fill ? fill : 'currentColor'}
      className={cn('animate-spin', className)}
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
   >
      <mask id='omega-loader-id' fill={fill ? fill : 'currentColor'}>
         <path d='M8.5 1.917c0-.69-.563-1.26-1.245-1.157a8.333 8.333 0 1 0 9.207 5.78c-.204-.66-.961-.92-1.583-.62-.622.3-.868 1.048-.707 1.72A5.833 5.833 0 1 1 7.26 3.3c.674-.147 1.24-.693 1.24-1.383Z' />
      </mask>
      <path
         d='M8.5 1.917c0-.69-.563-1.26-1.245-1.157a8.333 8.333 0 1 0 9.207 5.78c-.204-.66-.961-.92-1.583-.62-.622.3-.868 1.048-.707 1.72A5.833 5.833 0 1 1 7.26 3.3c.674-.147 1.24-.693 1.24-1.383Z'
         stroke={fill}
         strokeWidth={8}
         strokeLinejoin='round'
         mask='url(#omega-loader-id)'
      />
   </svg>
)

export { Loader }
