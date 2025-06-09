import React from 'react'

import { parseDate } from '@internationalized/date'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../../Theme/Provider'
import { defaultTheme } from '../../../../Theme/theme'

import { DatePicker } from '../index'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   title: 'components/DatePicker',
   component: DatePicker,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const SimpleDatePickerWithPlaceholder = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker labelText='Date Of Birth' isRequired {...props} />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithCustomPlaceholder = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               placeholderText='new placeholder'
               isRequired
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)
export const SimpleDatePickerWithCustomFormate = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               customFormat='DD-MM-YYYY'
               isRequired
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithDefaultValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               defaultValue={new Date()}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const ControlledDatePicker = props => {
   let [value, setValue] = React.useState(new Date())

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DatePicker
                  labelText='Date Of Birth'
                  value={value}
                  onChange={setValue}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const SimpleDatePickerWithCustomTrigger = props => {
   const renderCustomTrigger = () => {
      return <div>Custom Trigger</div>
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DatePicker
                  labelText='Date Of Birth'
                  isRequired
                  renderCustomTrigger={renderCustomTrigger}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const SimpleDatePickerWithoutLabel = props => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DatePicker {...props} />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const ControlledDatePickerWithoutClearable = props => {
   let [value, setValue] = React.useState(new Date())

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DatePicker
                  labelText='Date Of Birth'
                  value={value}
                  onChange={setValue}
                  isClearable={false}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

// NOTE: updated the `Min` & `Max` Values to differentiate with a proper in between `defaultValue`
export const SimpleDatePickerWithMinAndMaxValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               defaultValue={new Date('2023-09-21')}
               isRequired
               labelText='Date Of Birth'
               maxValue={new Date('2023-12-18')}
               minValue={new Date('2023-03-16')}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithDefaultOpen = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               isRequired
               defaultOpen={true}
               defaultValue={new Date('2023-02-03')}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithDescription = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               defaultValue={new Date('2023-02-03')}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithFocus = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               defaultValue={new Date('2023-02-03')}
               autoFocus={true}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithDisabled = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               defaultValue={new Date('2023-02-03')}
               isDisabled={true}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               errorMessage='This is an error message.'
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithErrorAndDefaultValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               errorMessage='This is an error message.'
               defaultValue={new Date('2023-02-03')}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SimpleDatePickerWithErrorDefaultValueAndFocus = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DatePicker
               labelText='Date Of Birth'
               descriptionText='This is a hint text to help user.'
               errorMessage='This is an error message.'
               defaultValue={new Date('2023-02-03')}
               autoFocus={true}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)
