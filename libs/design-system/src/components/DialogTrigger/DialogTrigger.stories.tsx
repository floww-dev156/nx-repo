import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { DialogTrigger } from './DialogTrigger'

storiesOf('un-published/Components/DialogTrigger', module)
   .addParameters({ providerSwitcher: { status: 'notice' } })
   .add('default', () => defaultDialog({}))
   .add('placement="left"', () =>
      dialogWithPosition({ type: 'popover', placement: 'left' })
   )
   .add('placement="left top"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'left top'
      })
   )
   .add('placement="left bottom"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'left bottom'
      })
   )
   .add('placement="right"', () =>
      dialogWithPosition({ type: 'popover', placement: 'right' })
   )
   .add('placement="right top"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'right top'
      })
   )
   .add('placement="right bottom"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'right bottom'
      })
   )
   .add('placement="bottom"', () =>
      dialogWithPosition({ type: 'popover', placement: 'bottom' })
   )
   .add('placement="bottom left"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'bottom left'
      })
   )
   .add('placement="bottom right"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'bottom right'
      })
   )
   .add('placement="top"', () =>
      dialogWithPosition({ type: 'popover', placement: 'top' })
   )
   .add('placement="top left"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'top left'
      })
   )
   .add('placement="top right"', () =>
      dialogWithPosition({
         type: 'popover',
         placement: 'top right'
      })
   )

function defaultDialog({ width = 'auto', ...props }) {
   return (
      <div style={{ display: 'flex', width }}>
         <ThemeContextProvider theme={defaultTheme}>
            <DialogTrigger
               {...props}
               type='popover'
               onOpenChange={action('open change')}
            >
               <button>Trigger</button>
               {close => (
                  <div>
                     <div style={{ textAlign: 'right' }}>
                        <button onClick={close}>X</button>
                     </div>
                     <p>Heading</p>
                     <p>Description</p>
                     <p>Lorem ipsum dolor sit amet</p>
                  </div>
               )}
            </DialogTrigger>
         </ThemeContextProvider>
      </div>
   )
}

function dialogWithPosition({ width = 'auto', ...props }, withMargin = true) {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width,
            margin: withMargin && '100px 0'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <DialogTrigger {...props} onOpenChange={action('open change')}>
               <button>Trigger</button>
               <div>
                  <p>Heading</p>
                  <p>Description</p>
                  <p>Lorem ipsum dolor sit amet</p>
               </div>
            </DialogTrigger>
         </ThemeContextProvider>
      </div>
   )
}
