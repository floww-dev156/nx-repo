import React from 'react'

import { parseDate } from '@internationalized/date'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../../Theme/Provider'
import { defaultTheme } from '../../../../Theme/theme'

import { DateField } from '../index'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   title: 'components/DateField',
   component: DateField,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const SimpleDateFieldWithPlaceholder = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField labelText='Date Of Birth' isRequired {...props} />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithDefaultValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            defaultValue={parseDate('2020-02-03')}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const ControlledDateField = props => {
   let [value, setValue] = React.useState(parseDate('2020-02-03'))

   const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      console.log('blur triggered')
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div style={{ width: '328px' }}>
            <DateField
               labelText='Date Of Birth'
               value={value}
               onChange={setValue}
               onBlur={onBlur}
               {...props}
            />
         </div>
      </ThemeContextProvider>
   )
}

export const SimpleDateFieldWithDescription = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            defaultValue={parseDate('2020-02-03')}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithFocus = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            defaultValue={parseDate('2020-02-03')}
            autoFocus={true}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithDisabled = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            defaultValue={parseDate('2020-02-03')}
            isDisabled={true}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            errorMessage='This is an error message.'
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithErrorAndDefaultValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            errorMessage='This is an error message.'
            defaultValue={parseDate('2020-02-03')}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)

export const SimpleDateFieldWithErrorDefaultValueAndFocus = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div style={{ width: '328px' }}>
         <DateField
            labelText='Date Of Birth'
            descriptionText='This is a hint text to help user.'
            errorMessage='This is an error message.'
            defaultValue={parseDate('2020-02-03')}
            autoFocus={true}
            {...props}
         />
      </div>
   </ThemeContextProvider>
)
