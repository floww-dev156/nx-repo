import React from 'react'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Hint } from './Hint'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   component: Hint,
   title: 'un-published/components/Hint',
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const HintWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <Hint
         id='Hint-1'
         error='Something went wrong'
         hint=''
         size={'ExtraSmall'}
         {...props}
      />
   </ThemeContextProvider>
)

export const HintWithHintText = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <Hint
         id='Hint-2'
         error=''
         hint='Hint Text'
         size={'ExtraSmall'}
         {...props}
      />
   </ThemeContextProvider>
)

export const HintWithElement = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <Hint
         id='Hint-2'
         error=''
         hint={<div>Hint with JSX Element</div>}
         {...props}
      />
   </ThemeContextProvider>
)

export const HintWithEmptyContent = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <Hint id='Hint-3' error='' hint='' {...props} />
   </ThemeContextProvider>
)
