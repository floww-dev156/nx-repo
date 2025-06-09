import { Key } from 'react'
import type { ListState } from '@react-stately/list'

interface ListMapShared {
   id: string
   onAction: (key: Key) => void
}

export const listMap = new WeakMap<ListState<unknown>, ListMapShared>()

export function getRowId<T>(state: ListState<T>, key: Key) {
   //@ts-ignore
   let { id } = listMap.get(state)
   if (!id) {
      throw new Error('Unknown list')
   }

   return `${id}-${normalizeKey(key)}`
}

export function normalizeKey(key: Key): string {
   if (typeof key === 'string') {
      return key.replace(/\s*/g, '')
   }

   return '' + key
}
