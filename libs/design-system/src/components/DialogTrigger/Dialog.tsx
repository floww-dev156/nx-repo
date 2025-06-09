/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { useDOMRef } from '@react-spectrum/utils'
import { DialogContext, DialogContextValue } from './context'
import { DOMRef } from '@react-types/shared'
import { mergeProps } from '@react-aria/utils'
import React, { useContext } from 'react'
import { SpectrumDialogProps } from '@react-types/dialog'
import { useDialog } from '@react-aria/dialog'

function Dialog(props: SpectrumDialogProps, ref: DOMRef) {
   let { type = 'modal', ...contextProps } =
      useContext(DialogContext) || ({} as DialogContextValue)
   let { children } = props

   let domRef = useDOMRef(ref)
   let { dialogProps } = useDialog(mergeProps(contextProps, props), domRef)

   return (
      <section {...dialogProps} ref={domRef} className='outline-none'>
         {children}
      </section>
   )
}

/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
let _Dialog = React.forwardRef(Dialog)
export { _Dialog as Dialog }
