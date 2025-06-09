import React from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Card } from './Card'

export default {
   component: Card,
   title: 'components/Card'
}

const CardTemplate = args => (
   <ThemeContextProvider theme={defaultTheme}>
      <div className='p-20px bg-success-200 flex justify-center'>
         <Card
            isOutline={true}
            elevation='Small'
            className={'p-50px w-160px h-160px'}
            onClick={() => console.log('Card on Action')}
            {...args}
         >
            <p>Card</p>
            <p>Content</p>
         </Card>
      </div>
   </ThemeContextProvider>
)

export const CardWithOutline = CardTemplate.bind({})
