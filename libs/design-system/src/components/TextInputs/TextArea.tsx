import React, { forwardRef, useCallback, useRef } from 'react'
import { AriaTextFieldOptions } from '@react-aria/textfield'
import { useControlledState } from '@react-stately/utils'
import { useTextField } from '@react-aria/textfield'
import { chain, useLayoutEffect } from '@react-aria/utils'

import { BasicSize, FocusRingVariant } from '../../types'

import { TextAreaTextFieldBase } from './TextAreaTextFieldBase'

export interface TextAreaPropTypes extends AriaTextFieldOptions<'textarea'> {
   size: BasicSize
   ref?: React.ForwardedRef<HTMLTextAreaElement>
   label: string
   containerClassName?: string
   enableDataSanitization?: boolean
   labelClassName?: string
   autoFocus?: boolean
   isDisabled?: boolean
   inputContainerClassName?: string
   inputClassName?: string
   hint?: React.ReactNode
   hintClassName?: string
   errorMessage?: string
   isRequired?: boolean
   shouldShowHint?: boolean
   title?: string
   id?: string
   focusRingVariant?: FocusRingVariant
   renderRequiredIcon?: () => React.ReactElement
   shouldFocusAtTheEnd?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropTypes>(
   (props: TextAreaPropTypes, forwardedRef) => {
      const {
         isDisabled = false,
         isRequired = false,
         onChange,
         autoFocus = false,
         type = 'textarea',
         errorMessage,
         shouldFocusAtTheEnd
      } = props

      // not in stately because this is so we know when to re-measure, which is a spectrum design
      const [inputValue, setInputValue] = useControlledState(
         props.value ?? '',
         props.defaultValue,
         () => {}
      )
      const inputRef = useRef<HTMLTextAreaElement>(null)
      // const inputRef = forwardedRef || _inputRef

      useLayoutEffect(() => {
         if (!shouldFocusAtTheEnd) return
         if (!inputRef?.current) return

         inputRef?.current.setSelectionRange(
            inputRef?.current.value.length,
            inputRef?.current.value.length
         )
      }, [])

      const onHeightChange = useCallback(() => {
         // Quiet textareas always grow based on their text content.
         // Standard textareas also grow by default, unless an explicit height is set.
         if (inputRef?.current) {
            const input = inputRef?.current
            const prevAlignment = input.style.alignSelf
            const prevOverflow = input.style.overflow
            // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
            // The measure/applied height is also incorrect/reset if we turn on and off
            // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
            const isFirefox = 'MozAppearance' in input.style
            if (!isFirefox) {
               input.style.overflow = 'hidden'
            }
            input.style.alignSelf = 'start'
            input.style.height = 'auto'
            // offsetHeight - clientHeight accounts for the border/padding.
            input.style.height = `${
               input.scrollHeight + (input.offsetHeight - input.clientHeight)
            }px`
            input.style.overflow = prevOverflow
            input.style.alignSelf = prevAlignment
         }
      }, [inputRef])

      useLayoutEffect(() => {
         if (inputRef.current) {
            onHeightChange()
         }
      }, [onHeightChange, inputValue, inputRef])

      const { labelProps, inputProps } = useTextField(
         {
            ...props,
            autoFocus,
            isDisabled,
            isReadOnly: isDisabled,
            type,
            validationState: !!errorMessage ? 'invalid' : 'valid',
            onChange: chain(onChange, setInputValue)
         },
         inputRef as React.RefObject<HTMLTextAreaElement>
      )
      return (
         <TextAreaTextFieldBase
            {...props}
            ref={inputRef}
            labelProps={labelProps}
            inputProps={inputProps}
            multiLine
            isDisabled={isDisabled}
            isRequired={isRequired}
            enableDataSanitization={props.enableDataSanitization}
         />
      )
   }
)
