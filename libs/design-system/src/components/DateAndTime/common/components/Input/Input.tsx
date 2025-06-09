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

import cn from 'classnames'
import React, { useCallback, useRef } from 'react'

import { useFocusRing } from '@react-aria/focus'
import {
   mergeProps,
   mergeRefs,
   useEvent,
   useLayoutEffect,
   useResizeObserver
} from '@react-aria/utils'
import { useValueEffect } from '@react-spectrum/utils'

import { useThemeContext } from '../../../../../Theme/Provider'

import { dateInputSizes } from './sizes'
import { inputContentsStyles } from './styles'

function Input(props, ref: any) {
   let inputRef = useRef<InstanceType<typeof HTMLDivElement>>(null)
   let { inputClassName, children, fieldProps, style, size } = props

   const { theme } = useThemeContext()

   const dateInputSize = dateInputSizes[size]

   // Reserve padding for the error icon when the width of the input is unconstrained.
   // When constrained, don't reserve space because adding it only when invalid will
   // not cause a layout shift.
   let [reservePadding, setReservePadding] = useValueEffect(false)
   let onResize = useCallback(
      () =>
         setReservePadding(function* (reservePadding) {
            if (inputRef.current) {
               if (reservePadding) {
                  // Try to collapse padding if the content is clipped.
                  if (
                     inputRef.current.scrollWidth > inputRef.current.offsetWidth
                  ) {
                     let width = inputRef.current?.parentElement?.offsetWidth
                     yield false

                     // If removing padding causes a layout shift, add it back.
                     if (
                        inputRef.current?.parentElement?.offsetWidth !== width
                     ) {
                        yield true
                     }
                  }
               } else {
                  // Try to add padding if the content is not clipped.
                  if (
                     inputRef.current.offsetWidth >=
                     inputRef.current.scrollWidth
                  ) {
                     let width = inputRef.current?.parentElement?.offsetWidth
                     yield true

                     // If adding padding does not change the width (i.e. width is constrained), remove it again.
                     if (
                        inputRef.current?.parentElement?.offsetWidth === width
                     ) {
                        yield false
                     }
                  }
               }
            }
         }),
      [inputRef, setReservePadding]
   )

   useLayoutEffect(onResize, [onResize])
   useResizeObserver({
      ref: inputRef,
      onResize
   })

   // We also need to listen for resize events of the window so we can detect
   // when there is enough space for the padding to be re-added. Ideally we'd
   // use a resize observer on a parent element, but it's hard to know _what_
   // parent element.
   useEvent(
      useRef(typeof window !== 'undefined' ? window : null),
      'resize',
      onResize
   )

   let { focusProps } = useFocusRing({
      isTextInput: true,
      within: true
   })

   let inputClass = cn(inputClassName)

   return (
      <div
         role='presentation'
         {...mergeProps(fieldProps, focusProps)}
         style={style}
      >
         <div role='presentation' className={inputClass}>
            <div
               role='presentation'
               ref={mergeRefs(ref, inputRef)}
               className={cn(inputContentsStyles, dateInputSize.inputHeight)}
            >
               {children}
            </div>
         </div>
      </div>
   )
}

const _Input = React.forwardRef(Input)
export { _Input as Input }
