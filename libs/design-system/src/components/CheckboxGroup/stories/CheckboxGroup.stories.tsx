import React from 'react'

import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import { Checkbox, CheckboxGroup } from '../index'

const instruction =
   'Go through this Component Guide to get to know about ths CheckboxGroup Component'
addParameters({ notes: instruction })

export default {
   component: CheckboxGroup,
   title: 'components/CheckboxGroup'
}

export const DefaultCheckboxGroup = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <CheckboxGroup
         label='Favorite pet Favorite pet'
         onChange={value => console.log(value)}
         {...props}
      >
         <Checkbox id='testing-id' value='dogs'>
            Dog
         </Checkbox>
         <Checkbox value='cats'>Cats 1</Checkbox>
      </CheckboxGroup>
   </ThemeContextProvider>
)

export const CheckboxGroupWithDefaultSelectedValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <CheckboxGroup
         label='Favorite pet Favorite pet'
         onChange={value => console.log(value)}
         defaultValue={'dogs'}
         {...props}
      >
         <Checkbox id='testing-id' value='dogs'>
            Dog
         </Checkbox>
         <Checkbox value='cats'>Cats 1</Checkbox>
      </CheckboxGroup>
   </ThemeContextProvider>
)

export const SelectedCheckboxGroupWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <CheckboxGroup
         label='Selected Checkbox group with error'
         onChange={value => console.log(value)}
         defaultValue={'dogs'}
         error={'Something went wrong'}
         {...props}
      >
         <Checkbox value='dogs'>Dog</Checkbox>
         <Checkbox value='cats'>Cats 1</Checkbox>
      </CheckboxGroup>
   </ThemeContextProvider>
)

export const DisableCheckboxGroup = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <CheckboxGroup
         label='Disable Checkbox Group'
         onChange={value => console.log(value)}
         defaultValue={'cats3'}
         {...props}
      >
         <Checkbox isDisabled={true} value='dogs'>
            Dog
         </Checkbox>
         <Checkbox isDisabled={true} value='cats3'>
            Cats 3
         </Checkbox>
      </CheckboxGroup>
   </ThemeContextProvider>
)

export const UnSelectedCheckboxGroupWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <CheckboxGroup
         error='Something went wrong'
         label='Disable Checkbox Group'
         onChange={value => console.log(value)}
         defaultValue={'cats3'}
         {...props}
      >
         <Checkbox value='cats'>Cats 1</Checkbox>
         <Checkbox value='cats2'>Cats 2</Checkbox>
      </CheckboxGroup>
   </ThemeContextProvider>
)
