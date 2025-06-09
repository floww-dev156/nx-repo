import { CollectionBase, MultipleSelection } from '@react-types/shared'
import { Key, useMemo } from 'react'
import { ListState, useListState } from '@react-stately/list'
import { Node } from '@react-types/shared'
import { useControlledState } from '@react-stately/utils'

export interface MultiSelectListProps<T>
   extends CollectionBase<T>,
      Omit<MultipleSelection, 'disallowEmptySelection'> {
   filter?: (nodes: Iterable<Node<T>>) => Iterable<Node<T>>
   suppressTextValueWarning?: boolean
}

export interface MultiSelectListState<T> extends ListState<T> {
   readonly selectedKeys: Set<Key>

   setSelectedKeys(keys: Key[]): void

   readonly selectedItems: Node<T>[]

   selectionMode: string
}

export function useMultiSelectListState<T extends object>(
   props: MultiSelectListProps<T>
): MultiSelectListState<T> {
   let [selectedKeys, setSelectedKeys] = useControlledState(
      //@ts-ignore
      props.selectedKeys,
      props.defaultSelectedKeys ?? null,
      props.onSelectionChange
   )

   let { collection, disabledKeys, selectionManager } = useListState({
      ...props,
      selectionMode: 'multiple',
      disallowEmptySelection: false,
      allowDuplicateSelectionEvents: true,
      selectedKeys: selectedKeys ?? undefined,
      //@ts-ignore
      onSelectionChange: (keys: Set<Key>) => {
         setSelectedKeys(keys)
      }
   })

   let selectedItems = Array.from(selectionManager.selectedKeys.keys()).map(
      key => collection.getItem(key)!
   )

   return {
      collection,
      disabledKeys,
      selectionManager,
      selectedKeys: new Set(selectedKeys),
      //@ts-ignore
      setSelectedKeys: setSelectedKeys,
      selectedItems,
      selectionMode: selectionManager.selectionMode
   }
}
