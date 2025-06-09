import React, { ReactElement, useState } from 'react'

import { defaultTheme } from '../../Theme/theme'
import { ThemeContextProvider } from '../../Theme/Provider'
import InputWithPicker from './InputWithPicker'

export default {
   component: InputWithPicker,
   title: 'components/InputWithPicker'
}

const options = [
   {
      value: 'Count',
      label: 'Count'
   },
   {
      value: 'Percentage',
      label: 'Percentage'
   }
]

const InputWithPickerComponent = (args: any): ReactElement => {
   const [inputValue, setInputValue] = useState('0')
   const [selectedKey, setSelectedKey] = useState(options[0].label)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <InputWithPicker
            inputValue={inputValue}
            selectedOptionKey={selectedKey}
            options={options}
            label={'Value'}
            helperText={'Helper Text'}
            onInputChange={value => {
               setInputValue(value)
            }}
            onSelectionChange={value => {
               setSelectedKey(value as string)
            }}
            errorMessage={''}
            {...args}
         />
      </ThemeContextProvider>
   )
}

export const InputWithPickerBase = InputWithPickerComponent.bind({})
