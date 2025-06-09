import { action } from '@storybook/addon-actions'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import {
   CloseButtonHierarchy,
   CloseButtonSubVariant,
   CloseButton as CloseButtonComponent
} from '.'

export default {
   component: CloseButtonComponent,
   title: 'components/CloseButton'
}

export const CloseButtonStory = args => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div className='flex flex-col justify-center items-center'>
            <CloseButtonComponent
               subVariant={CloseButtonSubVariant.Gray}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               {...args}
            />
         </div>
      </ThemeContextProvider>
   )
}
