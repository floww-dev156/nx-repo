import * as React from 'react'
interface Props {
   fill?: string
}
class ContributedToIcon extends React.Component<Props> {
   static defaultProps = {
      fill: '#3E4C59'
   }

   render() {
      const { fill } = this.props
      return (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            viewBox='0 0 24 24'
         >
            <path
               fill={fill}
               fillRule='evenodd'
               d='M16.543 17.457L11 11.914V4a1 1 0 012 0v7.086l4.957 4.957 2.19-2.19a.5.5 0 01.853.354V19.5a.5.5 0 01-.5.5h-5.293a.5.5 0 01-.353-.854l1.689-1.689z'
               clipRule='evenodd'
            />
            <path
               fill={fill}
               fillRule='evenodd'
               d='M8.854 13.163l1.292 1.527-2.9 2.455 2 2.001a.5.5 0 01-.353.854H3.53a.5.5 0 01-.5-.5v-5.364a.5.5 0 01.854-.354l1.943 1.944 3.028-2.563z'
               clipRule='evenodd'
               opacity={0.3}
            />
         </svg>
      )
   }
}

export default ContributedToIcon
