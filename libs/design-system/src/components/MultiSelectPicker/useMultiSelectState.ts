import { MenuTriggerState, useMenuTriggerState } from '@react-stately/menu'
import { SelectProps } from '@react-types/select'
import { useState } from 'react'
import {
   MultiSelectListState,
   useMultiSelectListState
} from './useMultiSelectListState'

export interface MultiSelectState<T>
   extends MultiSelectListState<T>,
      MenuTriggerState {
   readonly isFocused: boolean
   setFocused(isFocused: boolean): void
}

export function useMultiSelectState<T extends object>(
   props: SelectProps<T>
): MultiSelectState<T> {
   let triggerState = useMenuTriggerState(props)
   let listState = useMultiSelectListState({
      ...props,
      onSelectionChange: key => {
         if (props.onSelectionChange != null) {
            //@ts-ignore
            props.onSelectionChange(key)
         }
      }
   })

   let [isFocused, setFocused] = useState(false)

   return {
      ...listState,
      ...triggerState,
      open() {
         if (listState.collection.size !== 0) {
            triggerState.open()
         }
      },
      toggle(focusStrategy) {
         if (listState.collection.size !== 0) {
            triggerState.toggle(focusStrategy)
         }
      },
      isFocused,
      setFocused
   }
}
