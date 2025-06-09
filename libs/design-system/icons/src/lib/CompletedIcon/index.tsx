import React from 'react'

interface CompletedIconProps {
   height: number
   width: number
   fill?: string
   className?: string
}

export default function CompletedIcon(props: CompletedIconProps): JSX.Element {
   const { height, width, className } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         className={className}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m14.296 7.605-4.569 6a1 1 0 0 1-.789.396h-.007c-.307 0-.597-.143-.787-.384l-2.432-3.108a1 1 0 1 1 1.575-1.232l1.633 2.087 3.784-4.97a1 1 0 0 1 1.591 1.211ZM10 0C4.477 0 0 4.477 0 10s4.476 10 10 10c5.523 0 10-4.477 10-10S15.522 0 10 0Z'
            fill='#27AB83'
         />
      </svg>
   )
}

CompletedIcon.defaultProps = {
   height: 20,
   width: 20
}
