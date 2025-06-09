import React from 'react'

import { IconPropsType } from '../types'

interface Props extends IconPropsType {
   iconHeight?: number
   iconWidth?: number
}

const FeaturedHexagonAlertIcon = (props: Props): React.ReactElement => {
   const { height = 56, width = 56, iconHeight = 48, iconWidth = 48 } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         height={height}
         width={width}
         fill='none'
         viewBox='0 0 56 56'
      >
         <rect
            width={iconWidth}
            height={iconHeight}
            x='4'
            y='4'
            fill='#E0F2FE'
            rx='24'
         ></rect>
         <rect
            width={iconWidth}
            height={iconHeight}
            x='4'
            y='4'
            stroke='#F0F9FF'
            strokeWidth='8'
            rx='24'
         ></rect>
         <path
            fill='#1570EF'
            fillRule='evenodd'
            d='M27.597 17.185c.266-.055.54-.055.806 0 .307.063.582.217.8.34l.06.033 7.4 4.11q.03.018.063.035c.23.128.522.288.745.53.193.21.339.458.428.728.103.313.102.645.101.908v8.262c.001.264.002.595-.101.908a2 2 0 0 1-.428.728c-.223.242-.514.402-.745.53l-.063.034-7.4 4.111-.06.034c-.218.122-.493.276-.8.34-.266.054-.54.054-.806 0-.307-.064-.582-.218-.8-.34l-.06-.033-7.4-4.112-.063-.035c-.23-.127-.522-.287-.745-.529a2 2 0 0 1-.428-.728c-.103-.313-.102-.644-.101-.908v-8.262c-.001-.264-.002-.595.101-.908.09-.27.235-.518.428-.728.223-.242.514-.402.745-.53l.063-.034 7.4-4.111.06-.034c.218-.122.493-.276.8-.339M28 19.149l-.005.002c-.058.028-.135.07-.286.155l-7.4 4.111c-.16.089-.242.135-.3.171l-.004.003v.006a7 7 0 0 0-.005.345v8.117a7 7 0 0 0 .005.35l.005.003c.057.036.139.082.299.171l7.4 4.111c.151.084.229.127.286.155l.005.002.005-.002c.058-.028.135-.07.286-.155l7.4-4.11c.16-.09.242-.136.3-.172l.004-.003v-.006c.005-.068.005-.161.005-.344v-8.117a7 7 0 0 0-.005-.35l-.005-.004a7 7 0 0 0-.299-.171l-7.4-4.111a7 7 0 0 0-.286-.155zM28 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H28a1 1 0 0 1-1-1'
            clipRule='evenodd'
         ></path>
      </svg>
   )
}

export default FeaturedHexagonAlertIcon
