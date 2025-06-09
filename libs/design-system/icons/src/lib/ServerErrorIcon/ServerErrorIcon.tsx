import React from 'react'

import { IconPropsType } from '../types'

const ServerErrorIcon = (props: IconPropsType): React.ReactElement => {
   const { height = 250, width = 250, ...rest } = props

   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill='none'
         viewBox='0 0 250 250'
         {...rest}
      >
         <path
            fill='#EAEEF9'
            d='M221.886 129.054c0 28.08-11.469 53.391-29.859 71.584-17.995 17.994-42.911 28.87-70.397 28.87-27.29 0-52.205-11.073-70.397-28.87-18.39-18.193-29.86-43.504-29.86-71.584C21.373 73.488 66.261 28.6 121.63 28.6c55.368 0 100.256 45.085 100.256 100.454zM213.186 63.205a8.108 8.108 0 10-.001-16.215 8.108 8.108 0 00.001 16.215zM225.048 31.565a5.537 5.537 0 100-11.073 5.537 5.537 0 000 11.073zM24.537 63.007a5.537 5.537 0 100-11.073 5.537 5.537 0 000 11.073z'
         ></path>
         <path
            fill='#D5DDEA'
            d='M180.406 151.523H63.26a8.324 8.324 0 01-8.322-8.322v-27.183a8.325 8.325 0 018.322-8.323h117.143a8.323 8.323 0 018.323 8.323v27.18a8.321 8.321 0 01-8.32 8.325z'
         ></path>
         <g filter='url(#filter0_d_22_85548)'>
            <path
               fill='url(#paint0_linear_22_85548)'
               d='M180.406 107.695H63.26a8.324 8.324 0 01-8.322-8.322V72.19a8.325 8.325 0 018.322-8.323h117.143a8.325 8.325 0 018.325 8.323v27.18a8.324 8.324 0 01-8.322 8.325z'
            ></path>
         </g>
         <g filter='url(#filter1_d_22_85548)'>
            <path
               fill='url(#paint1_linear_22_85548)'
               d='M180.406 195.351H63.26a8.324 8.324 0 01-8.322-8.322v-27.183a8.325 8.325 0 018.322-8.323h117.143a8.323 8.323 0 018.323 8.323v27.18a8.321 8.321 0 01-8.32 8.325z'
            ></path>
         </g>
         <path
            fill='#989FB0'
            d='M76.85 93.854a8.074 8.074 0 100-16.147 8.074 8.074 0 000 16.147z'
         ></path>
         <path
            fill='#D5DDEA'
            d='M167.969 84.629a2.306 2.306 0 100-4.612 2.306 2.306 0 000 4.612zM158.74 84.629a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM172.582 91.547a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM163.353 91.547a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM149.514 84.629a2.306 2.306 0 100-4.612 2.306 2.306 0 000 4.612zM154.127 91.547a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM140.287 84.629a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM144.9 91.547a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM131.061 84.629a2.307 2.307 0 10-.001-4.614 2.307 2.307 0 00.001 4.614zM135.674 91.547a2.306 2.306 0 100-4.612 2.306 2.306 0 000 4.612z'
         ></path>
         <path
            fill='#989FB0'
            d='M76.85 137.682a8.074 8.074 0 100-16.146 8.074 8.074 0 000 16.146zM167.969 128.457a2.306 2.306 0 100-4.613 2.306 2.306 0 000 4.613zM158.74 128.457a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM172.582 135.375a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM163.353 135.375a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM149.514 128.457a2.306 2.306 0 100-4.613 2.306 2.306 0 000 4.613zM154.127 135.375a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM140.287 128.457a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM144.9 135.375a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM131.061 128.457a2.307 2.307 0 10-.002-4.614 2.307 2.307 0 00.002 4.614zM135.674 135.375a2.306 2.306 0 100-4.613 2.306 2.306 0 000 4.613zM76.85 181.51a8.074 8.074 0 100-16.146 8.074 8.074 0 000 16.146z'
         ></path>
         <path
            fill='#D5DDEA'
            d='M167.969 172.283a2.306 2.306 0 100-4.612 2.306 2.306 0 000 4.612zM158.74 172.283a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM172.582 179.203a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM163.353 179.203a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM149.514 172.283a2.306 2.306 0 100-4.612 2.306 2.306 0 000 4.612zM154.127 179.203a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM140.287 172.283a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM144.9 179.203a2.307 2.307 0 100-4.614 2.307 2.307 0 000 4.614zM131.061 172.283a2.307 2.307 0 10-.001-4.613 2.307 2.307 0 00.001 4.613zM135.674 179.203a2.306 2.306 0 100-4.613 2.306 2.306 0 000 4.613z'
         ></path>
         <path
            fill='#989FB0'
            fillRule='evenodd'
            d='M172.115 36.274l-23.781 41.188a4.887 4.887 0 00-.001 4.893 4.897 4.897 0 004.238 2.446h47.559a4.89 4.89 0 004.893-4.893c0-.859-.227-1.703-.656-2.446l-23.779-41.188a4.888 4.888 0 00-4.237-2.446 4.89 4.89 0 00-4.236 2.446zm4.546 12.703h-.62a2.766 2.766 0 00-2.766 2.765V64.96a2.766 2.766 0 002.766 2.766h.62a2.766 2.766 0 002.766-2.766V51.742a2.766 2.766 0 00-2.766-2.765zm2.765 26.155a3.075 3.075 0 11-6.15 0 3.075 3.075 0 016.15 0z'
            clipRule='evenodd'
         ></path>
         <defs>
            <filter
               id='filter0_d_22_85548'
               width='160.337'
               height='70.374'
               x='41.664'
               y='57.231'
               colorInterpolationFilters='sRGB'
               filterUnits='userSpaceOnUse'
            >
               <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
               <feColorMatrix
                  in='SourceAlpha'
                  result='hardAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
               ></feColorMatrix>
               <feOffset dy='6.637'></feOffset>
               <feGaussianBlur stdDeviation='6.637'></feGaussianBlur>
               <feColorMatrix values='0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0'></feColorMatrix>
               <feBlend
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_22_85548'
               ></feBlend>
               <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow_22_85548'
                  result='shape'
               ></feBlend>
            </filter>
            <filter
               id='filter1_d_22_85548'
               width='160.335'
               height='70.374'
               x='41.664'
               y='144.887'
               colorInterpolationFilters='sRGB'
               filterUnits='userSpaceOnUse'
            >
               <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
               <feColorMatrix
                  in='SourceAlpha'
                  result='hardAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
               ></feColorMatrix>
               <feOffset dy='6.637'></feOffset>
               <feGaussianBlur stdDeviation='6.637'></feGaussianBlur>
               <feColorMatrix values='0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0'></feColorMatrix>
               <feBlend
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_22_85548'
               ></feBlend>
               <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow_22_85548'
                  result='shape'
               ></feBlend>
            </filter>
            <linearGradient
               id='paint0_linear_22_85548'
               x1='121.789'
               x2='121.789'
               y1='62.853'
               y2='108.168'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FDFEFF'></stop>
               <stop offset='0.996' stopColor='#ECF0F5'></stop>
            </linearGradient>
            <linearGradient
               id='paint1_linear_22_85548'
               x1='121.788'
               x2='121.788'
               y1='150.51'
               y2='195.824'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FDFEFF'></stop>
               <stop offset='0.996' stopColor='#ECF0F5'></stop>
            </linearGradient>
         </defs>
      </svg>
   )
}

export { ServerErrorIcon }
