import React from 'react'

interface OutlineLightBulbIconProps {
   width?: number
   height?: number
   fill?: string
}

function OutlineLightBulbIcon(props: OutlineLightBulbIconProps) {
   const { width = 18, height = 18, fill = '#94A3B8', ...rest } = props
   return (
      <svg
         width={width}
         height={height}
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 18 18'
         {...rest}
      >
         <path
            d='M7.248 12.75h3.504M9 2.25V3m4.773 1.227-.53.53M15.75 9H15M3 9h-.75m2.507-4.243-.53-.53m2.121 7.425a3.75 3.75 0 1 1 5.304 0l-.41.41a2.53 2.53 0 0 0-.742 1.79v.398a1.5 1.5 0 0 1-3 0v-.398c0-.672-.267-1.315-.741-1.79l-.41-.41Z'
            stroke={fill}
            strokeWidth={1.2}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </svg>
   )
}

export default OutlineLightBulbIcon
