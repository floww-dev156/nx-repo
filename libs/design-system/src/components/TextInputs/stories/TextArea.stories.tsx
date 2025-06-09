import React, { useState } from 'react'
import { chain } from '@react-aria/utils'
import { action } from '@storybook/addon-actions'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import { InputSize, TextArea } from '../index'

export default {
   component: TextArea,
   title: 'components/TextArea'
}

export const TextAreaWithHint = () => {
   const [value, setValue] = useState('lens')
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <TextArea
            label='Label'
            onChange={chain(action('onChange'), setValue)}
            value={value}
            id='learning_point'
            shouldShowHint={true}
            hint='This has all features of text field with type text'
            containerClassName='w-1/4'
            title={value}
            size={'Small'}
            inputClassName='overflow-y-auto'
         />
      </ThemeContextProvider>
   )
}
