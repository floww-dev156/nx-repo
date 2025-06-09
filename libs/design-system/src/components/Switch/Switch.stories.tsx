import { useState } from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Switch } from './Switch'

export const DefaultSwitch = () => {
   const [switchValue1, setSwitchValue1] = useState(false)
   const [switchValue2, setSwitchValue2] = useState(false)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div className='flex flex-col gap-2'>
            <Switch
               value={switchValue1}
               size={'Small'}
               onChange={setSwitchValue1}
            />
            <Switch
               value={switchValue2}
               size={'Medium'}
               onChange={setSwitchValue2}
            />
         </div>
      </ThemeContextProvider>
   )
}

export const DisabledSwitch = () => {
   const [switchValue3, setSwitchValue3] = useState(false)
   const [switchValue4, setSwitchValue4] = useState(false)
   const [switchValue5, setSwitchValue5] = useState(true)
   const [switchValue6, setSwitchValue6] = useState(true)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div className='flex flex-col gap-2'>
            <Switch
               value={switchValue5}
               size={'Small'}
               isDisabled
               onChange={setSwitchValue5}
            />
            <Switch
               value={switchValue3}
               size={'Small'}
               isDisabled
               onChange={setSwitchValue3}
            />
            <Switch
               value={switchValue6}
               size={'Medium'}
               isDisabled
               onChange={setSwitchValue6}
            />
            <Switch
               value={switchValue4}
               size={'Medium'}
               isDisabled
               onChange={setSwitchValue4}
            />
         </div>
      </ThemeContextProvider>
   )
}

export default {
   title: 'Components/Switch',
   component: Switch
}
