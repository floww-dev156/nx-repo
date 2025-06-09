import React from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Field } from './Field'

export default {
   component: Field,
   title: 'un-published/components/Field'
}

export const InputWithLabelAndHint = (): React.ReactElement => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <Field
            hintProps={{ id: '1', hintText: 'This is a hint' }}
            labelProps={{
               children: 'Label',
               labelProps: {
                  htmlFor: '1'
               }
            }}
         >
            <input
               id='1'
               type='text'
               name='input'
               className='border-blue-50 border-solid border-1'
            />
         </Field>
      </ThemeContextProvider>
   )
}

export const TextWithLabelAndError = (): React.ReactElement => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <Field
            hintProps={{ id: '1', errorText: 'This is a Error' }}
            labelProps={{
               children: 'Label'
            }}
         >
            "Can render Dropdown, input etc."
         </Field>
      </ThemeContextProvider>
   )
}

export const TextWithOnlyLabel = (): React.ReactElement => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <Field
            labelProps={{
               children: 'Label'
            }}
         >
            "Can render Dropdown, input etc."
         </Field>
      </ThemeContextProvider>
   )
}

export const WithSpaceBetween = (): React.ReactElement => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <Field
            hintProps={{
               id: '1',
               errorText: 'This is a Error',
               containerClassName: 'mt-30px'
            }}
            labelProps={{
               containerClassName: 'mb-30px',
               children: 'Child Label'
            }}
         >
            "Can render Dropdown, input etc."
         </Field>
      </ThemeContextProvider>
   )
}
