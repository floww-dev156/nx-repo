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

import { Collection, FocusStrategy, Node } from '@react-types/shared'
import { ComboBoxProps, MenuTriggerAction } from '@react-types/combobox'
import { ListCollection } from '@react-stately/list'
import { useMultiSelectListState } from './useMultieSelectListState'
import { SelectState } from '@react-stately/select'
import { useControlledState } from '@react-stately/utils'
import { Key, useEffect, useMemo, useRef, useState } from 'react'
import { useMenuTriggerState } from '@react-stately/menu'

export interface ComboBoxState<T> extends SelectState<T> {
   /** The current value of the combo box input. */
   inputValue: string
   /** Sets the value of the combo box input. */
   setInputValue(value: string): void
   /** Selects the currently focused item and updates the input value. */
   commit(): void
   /** Opens the menu. */
   open(focusStrategy?: FocusStrategy | null, trigger?: MenuTriggerAction): void
   /** Toggles the menu. */
   toggle(
      focusStrategy?: FocusStrategy | null,
      trigger?: MenuTriggerAction
   ): void
   /** Resets the input value to the previously selected item's text if any and closes the menu.  */
   revert(): void
}

type FilterFn = (textValue: string, inputValue: string) => boolean

// export interface ComboBoxStateOptions<T> extends ComboBoxProps<T> {
//   /** The filter function used to determine if a option should be included in the combo box list. */
//   defaultFilter?: FilterFn;
//   /** Whether the combo box allows the menu to be open when the collection is empty. */
//   allowsEmptyCollection?: boolean;
//   /** Whether the combo box menu should close on blur. */
//   shouldCloseOnBlur?: boolean;

//   onSelectionChange: (selectedKeys: Set<Key>) => void;
// }

/**
 * Provides state management for a combo box component. Handles building a collection
 * of items from props and manages the option selection state of the combo box. In addition, it tracks the input value,
 * focus state, and other properties of the combo box.
 */
export function useMultiSelectComboBoxState<T extends object>(props: any): any {
   let {
      defaultFilter,
      menuTrigger = 'input',
      allowsEmptyCollection = false,
      allowsCustomValue,
      shouldCloseOnBlur = true
   } = props

   let [showAllItems, setShowAllItems] = useState(false)
   let [isFocused, setFocusedState] = useState(false)
   let [inputValue, setInputValue] = useControlledState(
      props.inputValue,
      props.defaultInputValue ?? '',
      props.onInputChange
   )

   let onSelectionChange = keys => {
      if (props.onSelectionChange) {
         props.onSelectionChange([...Array.from(keys)] as string[])
      }
      setInputValue('')
      props.onInputChange?.('')
   }

   let {
      collection,
      selectionManager,
      selectedKeys,
      setSelectedKeys,
      selectedItems,
      disabledKeys
   } = useMultiSelectListState({
      ...props,
      onSelectionChange,
      items: props.items ?? props.defaultItems
   })

   let originalCollection = collection
   let filteredCollection = useMemo(() => {
      return filterCollection(collection, inputValue, defaultFilter)
   }, [collection, inputValue, props.inputValue, defaultFilter, props.items])

   let menuOpenTrigger = useRef('focus' as MenuTriggerAction)
   let onOpenChange = (open: boolean) => {
      if (props.onOpenChange) {
         props.onOpenChange(open, open ? menuOpenTrigger.current : undefined)
      }
   }

   let triggerState = useMenuTriggerState({
      ...props,
      onOpenChange,
      isOpen: undefined,
      defaultOpen: undefined
   })

   let open = (focusStrategy?: FocusStrategy, trigger?: MenuTriggerAction) => {
      let displayAllItems =
         trigger === 'manual' ||
         (trigger === 'focus' && menuTrigger === 'focus')
      if (
         allowsEmptyCollection ||
         filteredCollection.size > 0 ||
         (displayAllItems && originalCollection.size > 0) ||
         props.items
      ) {
         if (
            displayAllItems &&
            !triggerState.isOpen &&
            props.items === undefined
         ) {
            setShowAllItems(true)
         }

         //@ts-ignore
         menuOpenTrigger.current = trigger
         triggerState.open(focusStrategy)
      }
   }

   let toggle = (
      focusStrategy?: FocusStrategy,
      trigger?: MenuTriggerAction
   ) => {
      let displayAllItems =
         trigger === 'manual' ||
         (trigger === 'focus' && menuTrigger === 'focus')
      if (
         !(
            allowsEmptyCollection ||
            filteredCollection.size > 0 ||
            (displayAllItems && originalCollection.size > 0) ||
            props.items
         ) &&
         !triggerState.isOpen
      ) {
         return
      }

      if (
         displayAllItems &&
         !triggerState.isOpen &&
         props.items === undefined
      ) {
         setShowAllItems(true)
      }

      if (!triggerState.isOpen) {
         //@ts-ignore
         menuOpenTrigger.current = trigger
      }

      triggerState.toggle(focusStrategy)
   }

   let lastValue = useRef(inputValue)
   let resetInputValue = () => {}

   let isInitialRender = useRef(true)
   let lastSelectedKey = useRef(
      props.selectedKey ?? props.defaultSelectedKey ?? null
   )

   useEffect(() => {
      if (
         isFocused &&
         (filteredCollection.size > 0 || allowsEmptyCollection) &&
         !triggerState.isOpen &&
         inputValue !== lastValue.current &&
         menuTrigger !== 'manual'
      ) {
         //@ts-ignore
         open(null, 'input')
      }

      if (
         !showAllItems &&
         !allowsEmptyCollection &&
         triggerState.isOpen &&
         filteredCollection.size === 0
      ) {
         triggerState.close()
      }
      if (inputValue !== lastValue.current) {
         selectionManager.setFocusedKey(null)
         setShowAllItems(false)
      }

      if (
         isInitialRender.current &&
         props.inputValue === undefined &&
         props.defaultInputValue === undefined
      ) {
         resetInputValue()
      }

      lastValue.current = inputValue

      isInitialRender.current = false
   })

   useEffect(() => {
      if (!triggerState.isOpen) {
         selectionManager.setFocusedKey(null)
      }
   }, [triggerState.isOpen, selectionManager])

   let revert = () => {
      if (allowsCustomValue && selectedKeys.size === 0) {
         commitCustomValue()
      } else {
         commitSelection()
      }
   }

   let commitCustomValue = () => {
      lastSelectedKey.current = null
      //@ts-ignore
      setSelectedKeys(null)
      triggerState.close()
   }

   let commitSelection = () => {
      if (props.selectedKey !== undefined && props.inputValue !== undefined) {
         props.onSelectionChange(selectedKeys)
         triggerState.close()
      } else {
         resetInputValue()
         triggerState.close()
      }
   }

   let commit = () => {
      if (triggerState.isOpen && selectionManager.focusedKey != null) {
         selectionManager.select(selectionManager.focusedKey)
      } else if (allowsCustomValue) {
         commitCustomValue()
      } else {
         commitSelection()
      }
   }

   let close = () => {
      if (allowsCustomValue) {
         commitCustomValue()
      } else {
         commitSelection()
      }
      triggerState.close()
   }

   let setFocused = (isFocused: boolean) => {
      if (isFocused) {
         if (menuTrigger === 'focus') {
            //@ts-ignore
            open(null, 'focus')
         }
      } else if (shouldCloseOnBlur) {
         close()
      }
      setFocusedState(isFocused)
   }

   return {
      ...triggerState,
      toggle,
      open,
      close,
      selectionManager,
      selectedKeys,
      setSelectedKeys,
      disabledKeys,
      isFocused,
      setFocused,
      selectedItems,
      collection: showAllItems ? originalCollection : filteredCollection,
      inputValue,
      setInputValue,
      commit,
      revert
   }
}

function filterCollection<T extends object>(
   collection: Collection<Node<T>>,
   inputValue: string,
   filter: FilterFn
): Collection<Node<T>> {
   return new ListCollection(filterNodes(collection, inputValue, filter))
}

function filterNodes<T extends object>(
   nodes: Iterable<Node<T>>,
   inputValue: string,
   filter: FilterFn
): Iterable<Node<T>> {
   let filteredNode: Array<Node<T>> = []
   for (let node of nodes) {
      if (node.type === 'section' && node.hasChildNodes) {
         let filtered = filterNodes(node.childNodes, inputValue, filter)
         if ([...filtered].length > 0) {
            filteredNode.push({ ...node, childNodes: filtered })
         }
      } else if (
         node.type !== 'section' &&
         filter(node.textValue, inputValue)
      ) {
         filteredNode.push({ ...node })
      }
   }
   return filteredNode
}
