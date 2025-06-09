import * as React from 'react'
import { IconPropsType } from '../types'

const FollowLinkedinIcon = (props: IconPropsType) => {
   const { height = 28, width = 28, fill = '#fff' } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={height}
         height={width}
         fill='none'
         viewBox='0 0 28 28'
         {...props}
      >
         <rect width={28} height={28} fill='#1A1B1E' rx={6} />
         <path
            fill={fill}
            d='M7 8.648c0-.478.168-.872.503-1.182C7.84 7.156 8.275 7 8.812 7c.527 0 .953.153 1.28.459.335.315.502.726.502 1.232 0 .458-.162.84-.488 1.146-.336.316-.777.473-1.323.473h-.015c-.527 0-.953-.158-1.28-.473C7.164 9.522 7 9.126 7 8.647Zm.187 12.538v-9.572h3.192v9.572H7.187Zm4.96 0h3.192v-5.345c0-.334.038-.592.115-.773.134-.325.338-.6.611-.825.273-.224.616-.336 1.028-.336 1.074 0 1.61.721 1.61 2.163v5.116h3.192v-5.488c0-1.414-.335-2.486-1.006-3.217-.671-.73-1.558-1.096-2.66-1.096-1.236 0-2.2.53-2.89 1.59v.029h-.014l.014-.029v-1.36h-3.192c.02.305.029 1.255.029 2.85 0 1.596-.01 3.836-.029 6.721Z'
         />
      </svg>
   )
}

export default FollowLinkedinIcon
