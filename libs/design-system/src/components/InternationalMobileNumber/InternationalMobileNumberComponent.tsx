import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import cn from 'classnames'
import { chain } from '@react-aria/utils'
import { action } from '@storybook/addon-actions'

import TickIcon from '../../Icons/TickIcon'

import { Button } from '../Button'

import { InternationalMobileNumber } from '.'

export default {
   title: 'Components/InternationalMobileNumber',
   component: InternationalMobileNumber
} as Meta

export const InternationalMobileNumberComponent: Story = () => {
   const [countryCode, setCountryCode] = useState('IN')
   const [dialCode, setDialCode] = useState('+91')
   return (
      <InternationalMobileNumber
         label={'Phone Number'}
         helperText={'Helper Text'}
         wrapperWithPopOverStyles={cn('border-none p-0')}
         onChangePhoneNumber={number => {
            console.log({ number })
         }}
         onChangeCountryCode={countryCode => {
            setCountryCode(countryCode)
            console.log({ countryCode })
         }}
         onChangeDialCode={dialCode => {
            setDialCode(dialCode)
            console.log({ dialCode })
         }}
         getCustomLabelForSelectedOption={option => option.value.value}
         errorMessage={''}
         phoneNumber={'9874563154'}
         countryCode={countryCode}
         dialCode={dialCode}
         listBoxStyles={cn('max-h-150px')}
      />
   )
}

export const WithRightElement = () => {
   const [countryCode, setCountryCode] = useState('IN')
   const [dialCode, setDialCode] = useState('+91')
   const [value, setValue] = useState('9874563154')
   return (
      <InternationalMobileNumber
         label={'Phone Number'}
         helperText={'Helper Text'}
         wrapperWithPopOverStyles={cn('border-none p-0')}
         onChangePhoneNumber={number => {
            setValue(number)
         }}
         onChangeCountryCode={countryCode => {
            setCountryCode(countryCode)
            console.log({ countryCode })
         }}
         onChangeDialCode={dialCode => {
            setDialCode(dialCode)
            console.log({ dialCode })
         }}
         getCustomLabelForSelectedOption={option => option.value.value}
         phoneNumber={value}
         countryCode={countryCode}
         dialCode={dialCode}
         listBoxStyles={cn('max-h-150px')}
         renderRightElement={() => (
            <div className='flex justify-between'>
               <Button size='Small' onClick={chain(action('onClick button'))}>
                  Blur
               </Button>
            </div>
         )}
      />
   )
}

export const withRenderHintIcon = () => {
   const [countryCode, setCountryCode] = useState('IN')
   const [dialCode, setDialCode] = useState('+91')
   const [value, setValue] = useState('9874563154')
   return (
      <InternationalMobileNumber
         label={'Phone Number'}
         helperText={'Helper Text'}
         wrapperWithPopOverStyles={cn('border-none p-0')}
         onChangePhoneNumber={number => {
            setValue(number)
         }}
         onChangeCountryCode={countryCode => {
            setCountryCode(countryCode)
            console.log({ countryCode })
         }}
         onChangeDialCode={dialCode => {
            setDialCode(dialCode)
            console.log({ dialCode })
         }}
         getCustomLabelForSelectedOption={option => option.value.value}
         phoneNumber={value}
         countryCode={countryCode}
         dialCode={dialCode}
         listBoxStyles={cn('max-h-150px')}
         renderHintLeftIcon={() => (
            <>
               <TickIcon />
            </>
         )}
      />
   )
}
