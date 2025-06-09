import React from 'react'

import '../../style-guide/typos.css'

const TypoGraphy = (props: {
   children: React.ReactElement
}): React.ReactElement => {
   const { children } = props

   return <>{children}</>
}

export default {
   component: TypoGraphy,
   title: 'style-guide/components/TypoGraphy'
}

export const TextXs = () => (
   <>
      <TypoGraphy>
         <p className='text-xs-regular'>text-xs-regular</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xs-medium'>text-xs-medium</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xs-semibold'>text-xs-semibold</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xs-bold'>text-xs-bold</p>
      </TypoGraphy>
   </>
)

export const TextSm = () => (
   <>
      <TypoGraphy>
         <p className='text-sm-regular'>text-sm-regular</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-sm-medium'>text-sm-medium</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-sm-semibold'>text-sm-semibold</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-sm-bold'>text-sm-bold</p>
      </TypoGraphy>
   </>
)

export const TextMd = () => (
   <>
      <TypoGraphy>
         <p className='text-md-regular'>text-md-regular</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-md-medium'>text-md-medium</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-md-semibold'>text-md-semibold</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-md-bold'>text-md-bold</p>
      </TypoGraphy>
   </>
)

export const TextLg = () => (
   <>
      <TypoGraphy>
         <p className='text-lg-regular'>text-lg-regular</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-lg-medium'>text-lg-medium</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-lg-semibold'>text-lg-semibold</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-lg-bold'>text-lg-bold</p>
      </TypoGraphy>
   </>
)

export const TextXl = () => (
   <>
      <TypoGraphy>
         <p className='text-xl-regular'>text-xl-regular</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xl-medium'>text-xl-medium</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xl-semibold'>text-xl-semibold</p>
      </TypoGraphy>
      <TypoGraphy>
         <p className='text-xl-bold'>text-xl-bold</p>
      </TypoGraphy>
   </>
)
