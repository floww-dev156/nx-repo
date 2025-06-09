import { AriaButtonProps } from '@react-types/button'
import { AriaListBoxOptions } from '@react-aria/listbox'
import { AriaSelectProps } from '@react-types/select'
import { chain, filterDOMProps, mergeProps, useId } from '@react-aria/utils'
import {
   DOMAttributes,
   FocusableElement,
   KeyboardDelegate
} from '@react-types/shared'
import { FocusEvent, RefObject, useMemo } from 'react'
import { ListKeyboardDelegate, useTypeSelect } from '@react-aria/selection'
import { setInteractionModality } from '@react-aria/interactions'
import { useCollator } from '@react-aria/i18n'
import { useField } from '@react-aria/label'
import { useMenuTrigger } from '@react-aria/menu'

import { MultiSelectState } from './useMultiSelectState'

export interface AriaSelectOptions<T> extends AriaSelectProps<T> {
   keyboardDelegate?: KeyboardDelegate
}

export interface SelectAria<T> {
   labelProps: DOMAttributes
   triggerProps: AriaButtonProps
   valueProps: DOMAttributes
   menuProps: AriaListBoxOptions<T>
   descriptionProps: DOMAttributes
   errorMessageProps: DOMAttributes
}

export function useMultiSelect<T>(
   props: AriaSelectOptions<T>,
   state: MultiSelectState<T>,
   ref: RefObject<FocusableElement>
): SelectAria<T> {
   let { keyboardDelegate, isDisabled } = props

   let collator = useCollator({ usage: 'search', sensitivity: 'base' })
   let delegate = useMemo(
      () =>
         keyboardDelegate ||
         new ListKeyboardDelegate(
            state.collection,
            state.disabledKeys,
            //@ts-ignore
            null,
            collator
         ),
      [keyboardDelegate, state.collection, state.disabledKeys, collator]
   )

   let { menuTriggerProps, menuProps } = useMenuTrigger<T>(
      {
         isDisabled,
         type: 'listbox'
      },
      state,
      ref
   )

   let onKeyDown = (e: KeyboardEvent) => {
      if (state.selectionMode === 'single') {
         switch (e.key) {
            case 'ArrowLeft': {
               e.preventDefault()

               let key =
                  state.selectedKeys.size > 0
                     ? //@ts-ignore
                       delegate.getKeyAbove(
                          state.selectedKeys.values().next().value
                       )
                     : //@ts-ignore
                       delegate.getFirstKey()
               if (key) {
                  state.setSelectedKeys([key])
               }
               break
            }
            case 'ArrowRight': {
               e.preventDefault()
               let key =
                  state.selectedKeys.size > 0
                     ? //@ts-ignore
                       delegate.getKeyBelow(
                          state.selectedKeys.values().next().value
                       )
                     : //@ts-ignore
                       delegate.getFirstKey()
               if (key) {
                  state.setSelectedKeys([key])
               }
               break
            }
         }
      }
   }

   let { typeSelectProps } = useTypeSelect({
      keyboardDelegate: delegate,
      selectionManager: state.selectionManager,
      onTypeSelect(key) {
         state.setSelectedKeys([key])
      }
   })

   let {
      labelProps,
      fieldProps,
      descriptionProps,
      errorMessageProps
   } = useField({
      ...props,
      labelElementType: 'span'
   })

   typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture
   delete typeSelectProps.onKeyDownCapture

   let domProps = filterDOMProps(props, { labelable: true })
   let triggerProps = mergeProps(typeSelectProps, menuTriggerProps, fieldProps)

   let valueId = useId()

   return {
      labelProps: {
         ...labelProps,
         onClick: () => {
            if (!props.isDisabled) {
               ref.current?.focus()
               setInteractionModality('keyboard')
            }
         }
      },
      triggerProps: mergeProps(domProps, {
         ...triggerProps,
         isDisabled,
         onKeyDown: chain(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
         onKeyUp: props.onKeyUp,
         'aria-labelledby': [
            triggerProps['aria-labelledby'],
            triggerProps['aria-label'] && !triggerProps['aria-labelledby']
               ? triggerProps.id
               : null,
            valueId
         ]
            .filter(Boolean)
            .join(' '),
         onFocus(e: FocusEvent) {
            if (state.isFocused) {
               return
            }

            if (props.onFocus) {
               props.onFocus(e)
            }

            if (props.onFocusChange) {
               props.onFocusChange(true)
            }

            state.setFocused(true)
         },
         onBlur(e: FocusEvent) {
            if (state.isOpen) {
               return
            }

            if (props.onBlur) {
               props.onBlur(e)
            }

            if (props.onFocusChange) {
               props.onFocusChange(false)
            }

            state.setFocused(false)
         }
      }),
      valueProps: {
         id: valueId
      },
      menuProps: {
         ...menuProps,
         autoFocus: state.focusStrategy || true,
         shouldSelectOnPressUp: true,
         shouldFocusOnHover: true,
         disallowEmptySelection: true,
         onBlur: e => {
            if (e.currentTarget.contains(e.relatedTarget as Node)) {
               return
            }

            if (props.onBlur) {
               props.onBlur(e)
            }

            if (props.onFocusChange) {
               props.onFocusChange(false)
            }

            state.setFocused(false)
         },
         'aria-labelledby': [
            fieldProps['aria-labelledby'],
            triggerProps['aria-label'] && !fieldProps['aria-labelledby']
               ? triggerProps.id
               : null
         ]
            .filter(Boolean)
            .join(' ')
      },
      descriptionProps,
      errorMessageProps
   }
}
