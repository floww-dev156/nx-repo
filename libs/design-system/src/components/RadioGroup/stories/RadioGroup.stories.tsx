import React from 'react'
import { RadioGroup, Radio } from '../index'
import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'
import { addParameters } from '@storybook/react'

const instruction =
   'Go through this Component Guide to get to know about ths RadioGroup Component'
addParameters({ notes: instruction })

export default {
   component: RadioGroup,
   title: 'components/RadioGroup'
}

export const DefaultRadioGroup = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         label='Favorite pet Favorite pet'
         onChange={value => console.log(value)}
         {...props}
      >
         <Radio id='testing-id' value='dogs'>
            Dog
         </Radio>
         <Radio value='cats'>Cats 1</Radio>
      </RadioGroup>
   </ThemeContextProvider>
)

export const RadioGroupWithDefaultSelectedValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         label='Favorite pet Favorite pet'
         onChange={value => console.log(value)}
         defaultValue={'dogs'}
         {...props}
      >
         <Radio value='dogs'>Dog</Radio>
         <Radio value='cats'>Cats 1</Radio>
      </RadioGroup>
   </ThemeContextProvider>
)

export const SelectedRadioGroupWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         label='Selected radio group with error'
         onChange={value => console.log(value)}
         defaultValue={'dogs'}
         error={'Something went wrong'}
         {...props}
      >
         <Radio value='dogs'>Dog</Radio>
         <Radio value='cats'>Cats 1</Radio>
      </RadioGroup>
   </ThemeContextProvider>
)

export const DisableRadioGroup = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         label='Disable Radio Group'
         onChange={value => console.log(value)}
         defaultValue={'cats3'}
         {...props}
      >
         <Radio isDisabled={true} value='dogs'>
            Dog
         </Radio>
         <Radio isDisabled={true} value='cats3'>
            Cats 3
         </Radio>
      </RadioGroup>
   </ThemeContextProvider>
)

export const UnSelectedRadioGroupWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         error='Something went wrong'
         label='Disable Radio Group'
         onChange={value => console.log(value)}
         defaultValue={'cats3'}
         {...props}
      >
         <Radio value='cats'>Cats 1</Radio>
         <Radio value='cats2'>Cats 2</Radio>
      </RadioGroup>
   </ThemeContextProvider>
)

export const HorizontalRadioGroup = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <RadioGroup
         label='Horizontal Radio Group'
         onChange={value => console.log(value)}
         defaultValue={'cats3'}
         axis='horizontal'
         hint={'Something went wrong'}
         {...props}
      >
         <div className='flex'>
            <Radio value='cats'>Cats 1</Radio>
            <Radio value='cats2'>Cats 2</Radio>
         </div>
      </RadioGroup>
   </ThemeContextProvider>
)
