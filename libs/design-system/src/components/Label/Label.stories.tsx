import React from 'react'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Label } from './Label'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   component: Label,
   title: 'un-published/components/Label',
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      },
      isRequired: {
         options: [false, true],
         control: { type: 'radio' }
      }
   }
}

export const LabelComponent = (props): React.ReactElement => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <Label {...props}>First Name</Label>
      </ThemeContextProvider>
   )
}
