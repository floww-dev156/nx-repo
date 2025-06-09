import React from 'react'

import { ComboBoxComponent } from './ComboBox'
import { ComboBoxWithCustomTrigger } from './ComboBoxWithCustomTrigger'
import { ComboBoxBaseProps } from './types'

//TODO: need to update type
export const ComboBox = <T extends any>(props: ComboBoxBaseProps<T>) => {
   const { enableCustomTrigger, size } = props

   return (
      <>
         {enableCustomTrigger ? (
            <ComboBoxWithCustomTrigger {...props} size={size} />
         ) : (
            <ComboBoxComponent {...props} size={size} />
         )}
      </>
   )
}

export default ComboBox
