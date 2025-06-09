import * as React from 'react'

const CopyIcon3 = props => (
   <svg
      width={props.width}
      height={props.height}
      {...props}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
   >
      <g clipPath='url(#a)'>
         <path
            d='M5.333 5.334V3.467c0-.746 0-1.12.145-1.405.128-.25.332-.455.583-.583.285-.145.659-.145 1.405-.145h5.067c.747 0 1.12 0 1.405.145.251.128.455.332.583.583.145.285.145.659.145 1.405v5.067c0 .747 0 1.12-.145 1.405-.128.251-.332.455-.583.583-.285.145-.658.145-1.405.145h-1.867m-7.2 4h5.067c.747 0 1.12 0 1.405-.145.251-.128.455-.332.583-.583.145-.285.145-.658.145-1.405V7.467c0-.746 0-1.12-.145-1.405a1.333 1.333 0 0 0-.583-.583c-.285-.145-.658-.145-1.405-.145H3.466c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583-.145.285-.145.659-.145 1.405v5.067c0 .747 0 1.12.145 1.405.128.251.332.455.583.583.285.145.659.145 1.405.145Z'
            stroke={props.stroke}
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </g>
      <defs>
         <clipPath id='a'>
            <path fill={props.fill} d='M0 0h16v16H0z' />
         </clipPath>
      </defs>
   </svg>
)

CopyIcon3.defaultProps = {
   height: 16,
   width: 16,
   stroke: '#344054',
   fill: '#fff'
}

export { CopyIcon3 }
