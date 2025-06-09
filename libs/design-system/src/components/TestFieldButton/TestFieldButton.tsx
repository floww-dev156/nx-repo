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

import { ButtonProps } from '@react-types/button'
import { useFocusableRef } from '@react-spectrum/utils'
import { DOMProps, FocusableRef, StyleProps } from '@react-types/shared'
import { FocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import React, { RefObject } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'

interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
   isQuiet?: boolean
   isActive?: boolean
   validationState?: 'valid' | 'invalid'
   focusRingClass?: string
}

// @private
function FieldButton(props: FieldButtonProps, ref: FocusableRef) {
   let { isDisabled, children, autoFocus } = props
   let domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>
   let { buttonProps, isPressed } = useButton(props, domRef)
   let { hoverProps, isHovered } = useHover({ isDisabled })

   return (
      <FocusRing autoFocus={autoFocus}>
         <button
            style={{ width: '300px' }}
            {...mergeProps(buttonProps, hoverProps)}
            ref={domRef}
         >
            {children}
         </button>
      </FocusRing>
   )
}

let _FieldButton = React.forwardRef(FieldButton)
export { _FieldButton as FieldButton }
