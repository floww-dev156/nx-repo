import { CollectionBase, MultipleSelection } from '@react-types/shared'
import { Key, useMemo } from 'react'
import { ListState, useListState } from '@react-stately/list'
import { Node } from '@react-types/shared'
import { useControlledState } from '@react-stately/utils'

export interface MultiSelectListProps<T>
   extends CollectionBase<T>,
      Omit<MultipleSelection, 'disallowEmptySelection'> {
   /** Filter function to generate a filtered list of nodes. */
   filter?: (nodes: Iterable<Node<T>>) => Iterable<Node<T>>
   /** @private */
   suppressTextValueWarning?: boolean
}

export interface MultiSelectListState<T> extends ListState<T> {
   /** The key for the currently selected item. */
   readonly selectedKeys: Set<Key>

   /** Sets the selected key. */
   setSelectedKeys(keys: Key[]): void

   /** The value of the currently selected item. */
   readonly selectedItems: Node<T>[]
}

/**
 * Provides state management for list-like components with single selection.
 * Handles building a collection of items from props, and manages selection state.
 */
export function useMultiSelectListState<T extends object>(
   props: MultiSelectListProps<T>
): MultiSelectListState<T> {
   let [selectedKeys, setSelectedKeys] = useControlledState(
      //@ts-ignore
      props.selectedKeys,
      props.defaultSelectedKeys ?? null,
      props.onSelectionChange
   )
   // let selectedKeys = useMemo(() => selectedKey != null ? [...selectedKey] : [], [...selectedKey]);
   let { collection, disabledKeys, selectionManager } = useListState({
      ...props,
      selectionMode: 'multiple',
      disallowEmptySelection: false,
      allowDuplicateSelectionEvents: true,
      selectedKeys: selectedKeys ?? undefined,
      onSelectionChange: keys => {
         setSelectedKeys(keys)
      }
   })

   let selectedItems = Array.from(
      selectionManager.selectedKeys.keys()
   ).map(key => (key != null ? collection.getItem(key) : null))

   return {
      collection,
      disabledKeys,
      selectionManager,
      selectedKeys: new Set(selectedKeys),
      //@ts-ignore
      setSelectedKeys: setSelectedKeys,
      //@ts-ignore
      selectedItems
   }
}
