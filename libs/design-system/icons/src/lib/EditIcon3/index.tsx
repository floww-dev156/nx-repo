import * as React from 'react'

const EditIcon3 = props => (
   <svg
      {...props}
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
   >
      <path
         d='M8 13.334h6m-12 0h1.116c.326 0 .49 0 .643-.037.136-.032.266-.086.385-.16.135-.082.25-.197.48-.428L13 4.334a1.414 1.414 0 1 0-2-2L2.625 10.71c-.23.23-.346.346-.429.48-.073.12-.127.25-.16.386C2 11.73 2 11.892 2 12.218v1.116Z'
         stroke={props.stroke}
         strokeWidth={1.5}
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)

EditIcon3.defaultProps = {
   width: 16,
   height: 16,
   stroke: '#344054'
}

export { EditIcon3 }
