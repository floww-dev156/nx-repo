import React, {
   cloneElement,
   forwardRef,
   HTMLAttributes,
   InputHTMLAttributes,
   LabelHTMLAttributes,
   ReactElement,
   Ref,
   RefObject,
   TextareaHTMLAttributes,
   useImperativeHandle,
   useRef
} from 'react'
import cn from 'classnames'

import { createFocusableRef } from '@react-spectrum/utils'
import { mergeProps } from '@react-aria/utils'
import { PressEvents } from '@react-types/shared'
import { SpectrumTextFieldProps, TextFieldRef } from '@react-types/textfield'
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { textFieldBaseContainerClassName } from './styles'

interface TextFieldBaseProps
   extends Omit<SpectrumTextFieldProps, 'onChange'>,
      PressEvents {
   wrapperChildren?: ReactElement | ReactElement[]
   inputClassName?: string
   validationIconClassName?: string
   multiLine?: boolean
   labelProps?: LabelHTMLAttributes<HTMLLabelElement>
   inputProps:
      | InputHTMLAttributes<HTMLInputElement>
      | TextareaHTMLAttributes<HTMLTextAreaElement>
   descriptionProps?: HTMLAttributes<HTMLElement>
   errorMessageProps?: HTMLAttributes<HTMLElement>
   inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>
   loadingIndicator?: ReactElement
   isLoading?: boolean
   disableFocusRing?: boolean
   showToolTip?: boolean
}

function TextFieldBase(props: TextFieldBaseProps, ref: Ref<TextFieldRef>) {
   let {
      validationState,
      icon,
      isDisabled,
      multiLine,
      autoFocus,
      inputClassName,
      wrapperChildren,
      inputProps,
      inputRef: userInputRef,
      isLoading,
      loadingIndicator,
      showToolTip
   } = props
   let { hoverProps, isHovered } = useHover({ isDisabled })
   let domRef = useRef<HTMLDivElement>(null)
   let defaultInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
   let inputRef = userInputRef || defaultInputRef

   // Expose imperative interface for ref
   useImperativeHandle(ref, () => ({
      ...createFocusableRef(domRef, inputRef),
      select() {
         if (inputRef.current) {
            inputRef.current.select()
         }
      },
      getInputElement() {
         return inputRef.current
      }
   }))

   let ElementType: React.ElementType = multiLine ? 'textarea' : 'input'
   let isInvalid = validationState === 'invalid' && !isDisabled

   let validationIcon = isInvalid ? <>Alert Icon</> : <>Check Mark Icon</>
   let validation = cloneElement(validationIcon, {})

   let { focusProps, isFocusVisible } = useFocusRing({
      isTextInput: true,
      autoFocus
   })

   return (
      <div className={textFieldBaseContainerClassName}>
         <ElementType
            {...mergeProps(inputProps, hoverProps, focusProps)}
            ref={inputRef as any}
            rows={multiLine ? 1 : undefined}
            className={cn(inputClassName)}
            title={inputProps.value?.toString()}
         />
         {icon}
         {validationState && !isLoading && !isDisabled ? validation : null}
         {isLoading && loadingIndicator}
         {wrapperChildren}
      </div>
   )
}

const _TextFieldBase = forwardRef(TextFieldBase)
export { _TextFieldBase as TextFieldBase }
