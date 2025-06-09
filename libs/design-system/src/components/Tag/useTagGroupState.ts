import { Key } from 'react'
import { ListState, useListState } from '@react-stately/list'
import { TagGroupProps } from './TagGroup'
import { MultiSelectState } from '../MultiSelectPicker/useMultiSelectState'

export interface TagGroupState<T> extends MultiSelectState<T> {
   onRemove?: (key: Key) => void
   onRemoveAll?: () => void
}

export function useTagGroupState<T extends object>(
   props: TagGroupProps<T>
): TagGroupState<T> {
   let state = useListState(props)

   let onRemove = (key: any) => {
      let restoreKey =
         state.collection.getKeyAfter(key) || state.collection.getKeyBefore(key)
      restoreKey && state.selectionManager.setFocusedKey(restoreKey)
   }

   let onRemoveAll = () => {
      state.selectionManager.setSelectedKeys([])
   }
   //@ts-ignore
   return {
      onRemove,
      onRemoveAll,
      ...state
   }
}
