import React from 'react'

import { Time } from '@internationalized/date'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import TimeField from '../TimeField'

const instruction =
   'Go through this Component Guide to get to know about ths TimeField Component'
addParameters({ notes: instruction })

export default {
   title: 'components/TimeField',
   component: TimeField,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const TimeFieldWithDefault = props => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px', height: '500px' }}>
               <TimeField label='Time' hint='This is Default TimeField' />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const ControlledTimeField = props => {
   const [timeValue, setTimeValue] = React.useState<string | undefined>()

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px', height: '500px' }}>
               <TimeField
                  timeValue={timeValue}
                  setTimeValue={setTimeValue}
                  label='Time'
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const TimeFieldWithError = props => {
   const [timeValue, setTimeValue] = React.useState<string | undefined>('22:00')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px', height: '500px' }}>
               <TimeField
                  timeValue={timeValue}
                  setTimeValue={setTimeValue}
                  label='Time'
                  errorMessage='Please Select Time'
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const TimeFieldWithHint = props => {
   const [timeValue, setTimeValue] = React.useState<string | undefined>('22:00')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px', height: '500px' }}>
               <TimeField
                  timeValue={timeValue}
                  setTimeValue={setTimeValue}
                  label='Time'
                  hint='This is a hint text to help user. '
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const TimeFieldWithDisabled = props => {
   const [timeValue, setTimeValue] = React.useState<string | undefined>('22:00')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px', height: '500px' }}>
               <TimeField
                  timeValue={timeValue}
                  setTimeValue={setTimeValue}
                  label='Time'
                  isDisabled={true}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}
