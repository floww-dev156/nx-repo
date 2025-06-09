import React, { ReactElement, useState } from 'react'

import { defaultTheme } from '../../Theme/theme'
import { ThemeContextProvider } from '../../Theme/Provider'

import { TextFieldWithPrefixAndSuffix } from './TextFieldWithPrefixAndSuffix'

export default {
   component: TextFieldWithPrefixAndSuffix,
   title: 'components/TextFieldWithPrefixAndSuffix'
}

const prefixOptions = [
   {
      value: 'Mr',
      label: 'Mr'
   },
   {
      value: 'Mrs',
      label: 'Mrs'
   }
]

const suffixOptions = [
   {
      value: 'Suffix-A',
      label: 'Suffix-A'
   },
   {
      value: 'Suffix-B',
      label: 'Suffix-B'
   }
]

const TextFieldWithPrefixAndSuffixComponent = (args: any): ReactElement => {
   const [inputValue, setInputValue] = useState('0')
   const [selectedPrefixKey, setSelectedPrefixKey] = useState(
      prefixOptions[0].label
   )
   const [selectedSuffixKey, setSelectedSuffixKey] = useState(
      suffixOptions[0].label
   )

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <TextFieldWithPrefixAndSuffix
            inputValue={inputValue}
            selectedPrefixOption={selectedPrefixKey}
            selectedSuffixOption={selectedSuffixKey}
            prefixOptions={prefixOptions}
            suffixOptions={suffixOptions}
            label={'Value'}
            helperText={'Helper Text'}
            onInputChange={value => {
               setInputValue(value)
            }}
            onPrefixChange={value => {
               setSelectedPrefixKey(value as string)
            }}
            onSuffixChange={value => {
               setSelectedSuffixKey(value as string)
            }}
            errorMessage={''}
            {...args}
         />
      </ThemeContextProvider>
   )
}

export const TextFieldWithPrefixAndSuffixBase = TextFieldWithPrefixAndSuffixComponent.bind(
   {}
)
