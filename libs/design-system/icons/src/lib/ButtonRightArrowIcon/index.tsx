import * as React from 'react'

const ButtonRightArrowIcon = props => (
   <svg
      width={14}
      height={12}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
   >
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M7.234.634a.8.8 0 0 1 1.132 0l4.8 4.8a.8.8 0 0 1 0 1.132l-4.8 4.8a.8.8 0 0 1-1.132-1.132L10.67 6.8H1.4a.8.8 0 1 1 0-1.6h9.269L7.234 1.766a.8.8 0 0 1 0-1.132Z'
         fill={props.fill}
      />
   </svg>
)

ButtonRightArrowIcon.defaultProps = {
   width: 14,
   height: 12,
   fill: '#94A3B8'
}

export { ButtonRightArrowIcon }
