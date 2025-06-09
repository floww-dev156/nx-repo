import { FocusableElement } from '@react-types/shared'
import React, { ReactNode, RefObject } from 'react'

import { useInteractionModality } from '@react-aria/interactions'
import { useVisuallyHidden } from '@react-aria/visually-hidden'

import { MultiSelectState } from './useMultiSelectState'

export interface AriaHiddenSelectProps {
   autoComplete?: string
   label?: ReactNode
   name?: string
   isDisabled?: boolean
}

export interface HiddenSelectProps<T> extends AriaHiddenSelectProps {
   state: MultiSelectState<T>

   triggerRef: RefObject<FocusableElement>
}

export function useHiddenSelect<T>(
   props: AriaHiddenSelectProps,
   state: MultiSelectState<T>,
   triggerRef: RefObject<FocusableElement>
) {
   let { autoComplete, name, isDisabled } = props

   let modality = useInteractionModality()
   let { visuallyHiddenProps } = useVisuallyHidden()

   return {
      containerProps: {
         ...visuallyHiddenProps,
         'aria-hidden': true
      },
      inputProps: {
         type: 'text',
         tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
         style: { fontSize: 16 },
         onFocus: () => triggerRef.current?.focus(),
         disabled: isDisabled
      },
      selectProps: {
         tabIndex: -1,
         autoComplete,
         disabled: isDisabled,
         name,
         size: state.collection.size,
         value: (Array.from(state.selectedKeys) as string[]) ?? '',
         onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
            state.setSelectedKeys([
               ...Array.from(state.selectedKeys),
               e.target.value
            ])
      }
   }
}

export function HiddenSelect<T>(props: HiddenSelectProps<T>) {
   let { state, triggerRef, label, name, isDisabled } = props

   let { containerProps, inputProps, selectProps } = useHiddenSelect(
      props,
      state,
      triggerRef
   )

   if (state.collection.size <= 300) {
      return (
         <div {...containerProps}>
            <input {...inputProps} />
            <label>
               {label}
               <select {...selectProps}>
                  <option />
                  {[...Array.from(state.collection.getKeys())].map(key => {
                     let item = state.collection.getItem(key)
                     if (item?.type === 'item') {
                        return (
                           <option key={item?.key} value={item?.key}>
                              {item?.textValue}
                           </option>
                        )
                     }
                     return null
                  })}
               </select>
            </label>
         </div>
      )
   } else if (name) {
      return (
         <input
            type='hidden'
            autoComplete={selectProps.autoComplete}
            name={name}
            disabled={isDisabled}
            value={[...Array.from(state.selectedKeys)] as string[]}
         />
      )
   }

   return null
}
