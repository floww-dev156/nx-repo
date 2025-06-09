import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { ComponentStoryObj } from '@storybook/react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import { CheckBoxComponent } from '../CheckBox'

type CheckboxStory = ComponentStoryObj<typeof CheckBoxComponent>

export default {
   title: 'components/Checkbox',
   component: CheckBoxComponent,
   args: {
      onChange: action('onChange')
   },
   argTypes: {
      onChange: {
         table: {
            disable: true
         }
      },
      defaultSelected: {
         control: 'boolean'
      },
      isSelected: {
         control: 'boolean'
      },
      isIndeterminate: {
         control: 'boolean'
      },
      isEmphasized: {
         control: 'boolean'
      },
      isDisabled: {
         control: 'boolean'
      },
      isReadOnly: {
         control: 'boolean'
      },
      autoFocus: {
         control: 'boolean'
      },
      validationState: {
         control: {
            type: 'select',
            options: [null, 'valid', 'invalid']
         }
      }
   }
}

export const Default: CheckboxStory = {
   render: args => render(args)
}

export const CustomLabel: CheckboxStory = {
   render: args => renderCustomLabel(args)
}

export const LongLabel: CheckboxStory = {
   render: args => (
      <CheckBoxComponent {...args}>
         Super long checkbox label. Sample text. Arma virumque cano, Troiae qui
         primus ab oris. Italiam, fato profugus, Laviniaque venit.
      </CheckBoxComponent>
   )
}

export const NoLabel: CheckboxStory = {
   render: args => renderNoLabel(args)
}

function render(props = {}) {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <CheckBoxComponent {...props}>
            CheckBoxComponent Label
         </CheckBoxComponent>
      </ThemeContextProvider>
   )
}

function renderCustomLabel(props = {}) {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <CheckBoxComponent {...props}>
            <span>
               <i>Italicized</i> CheckBoxComponent Label
            </span>
         </CheckBoxComponent>
      </ThemeContextProvider>
   )
}

function renderNoLabel(props = {}) {
   const [isSelected, setIsSelected] = useState(true)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <CheckBoxComponent
            {...props}
            isSelected={isSelected}
            onChange={() => {
               setIsSelected(!isSelected)
            }}
         />
      </ThemeContextProvider>
   )
}
