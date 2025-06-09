import React, { forwardRef, useRef, ReactNode } from 'react'
import { useTextField } from '@react-aria/textfield'
import { useId } from '@react-aria/utils'
import { AriaTextFieldOptions } from '@react-aria/textfield'

import {
   BasicSize,
   FocusRingVariant,
   ValidationResponseType
} from '../../types'

import { TextFieldBase } from './TextFieldBase'

export interface TextFieldProps
   extends Omit<AriaTextFieldOptions<'input'>, 'validate'> {
   size: BasicSize

   ref?: React.ForwardedRef<HTMLInputElement>
   hint?: ReactNode
   leftElement?: React.ComponentType<any>

   rightElement?: React.ComponentType<any>

   containerClassName?: string
   enableDataSanitization?: boolean

   inputContainerClassName?: string

   focusRingVariant?: FocusRingVariant

   inputClassName?: string
   validate?: () => ValidationResponseType
   hintClassName?: string
   labelClassName?: string
   isRequired?: boolean
   shouldShowHint?: boolean
   title?: string
   id?: string
   errorTransitionClassName?: string
   renderRequiredIcon?: () => React.ReactElement
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
   (props: TextFieldProps, forwardedRef) => {
      const {
         autoFocus = false,
         errorMessage,
         errorTransitionClassName,
         hint,
         isDisabled = false,
         ref = null,
         type = 'text',
         name,
         size = 'Small'
      } = props

      const _inputRef = useRef<unknown>(props.ref)
      const inputRef: any = forwardedRef || _inputRef

      const hintId = useId()

      const { labelProps, inputProps } = useTextField(
         {
            ...props,
            'aria-describedby': errorMessage || hint ? hintId : undefined,
            autoFocus,
            isDisabled,
            isReadOnly: isDisabled,
            type,
            validationState: !!errorMessage ? 'invalid' : 'valid',
            description: hint,
            'aria-label': name
         },
         inputRef
      )

      return (
         <TextFieldBase
            {...props}
            labelProps={labelProps}
            inputProps={inputProps}
            ref={inputRef}
            size={size}
            errorTransitionClassName={errorTransitionClassName}
            enableDataSanitization={props.enableDataSanitization}
         />
      )
   }
)
