import * as React from 'react'
import { IconPropsType } from '../types'

const FollowYoutubeIcon = (props: IconPropsType) => {
   const { height = 28, width = 28, fill = '#fff' } = props
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width ?? 28}
         height={height ?? 28}
         fill='none'
         viewBox='0 0 28 28'
         {...props}
      >
         <rect width={28} height={28} fill='#1A1B1E' rx={6} />
         <path
            fill={fill ?? '#fff'}
            d='m14.49 20.832-3.728-.07c-1.208-.024-2.418.025-3.602-.227-1.8-.376-1.928-2.22-2.062-3.765a26.986 26.986 0 0 1 .235-6.543c.196-1.21.967-1.931 2.16-2.01 4.025-.285 8.078-.25 12.095-.118.424.012.851.08 1.27.155 2.064.37 2.115 2.459 2.248 4.217a24.426 24.426 0 0 1-.178 5.327c-.204 1.46-.596 2.686-2.249 2.804-2.07.155-4.094.28-6.17.24 0-.01-.012-.01-.018-.01ZM12.3 17.133c1.56-.915 3.09-1.816 4.642-2.725-1.563-.916-3.09-1.816-4.642-2.726v5.451Z'
         />
      </svg>
   )
}

export default FollowYoutubeIcon
