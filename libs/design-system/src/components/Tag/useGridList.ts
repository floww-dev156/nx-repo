import {
   AriaLabelingProps,
   CollectionBase,
   DisabledBehavior,
   DOMAttributes,
   DOMProps,
   KeyboardDelegate,
   MultipleSelection
} from '@react-types/shared'
import { filterDOMProps, mergeProps, useId } from '@react-aria/utils'
import { Key, RefObject } from 'react'
import { ListState } from '@react-stately/list'
import {
   useGridSelectionAnnouncement,
   useHighlightSelectionDescription
} from '@react-aria/grid'

import { useSelectableList } from '@react-aria/selection'

import { listMap } from './utils'

export interface GridListProps<T> extends CollectionBase<T>, MultipleSelection {
   onAction?: (key: Key) => void
   disabledBehavior?: DisabledBehavior
}

export interface AriaGridListProps<T>
   extends GridListProps<T>,
      DOMProps,
      AriaLabelingProps {}

export interface AriaGridListOptions<T>
   extends Omit<AriaGridListProps<T>, 'children'> {
   isVirtualized?: boolean
   keyboardDelegate?: KeyboardDelegate
}

export interface GridListAria {
   gridProps: DOMAttributes
}

export function useGridList<T>(
   props: AriaGridListOptions<T>,
   state: ListState<T>,
   ref: RefObject<HTMLElement>
): GridListAria {
   let { isVirtualized, keyboardDelegate, onAction } = props

   if (!props['aria-label'] && !props['aria-labelledby']) {
      console.warn(
         'An aria-label or aria-labelledby prop is required for accessibility.'
      )
   }

   let { listProps } = useSelectableList({
      selectionManager: state.selectionManager,
      collection: state.collection,
      disabledKeys: state.disabledKeys,
      ref,
      keyboardDelegate: keyboardDelegate,
      isVirtualized,
      selectOnFocus: state.selectionManager.selectionBehavior === 'replace'
   })

   let id = useId()
   //@ts-ignore
   listMap.set(state, { id, onAction })

   let descriptionProps = useHighlightSelectionDescription({
      selectionManager: state.selectionManager,
      hasItemActions: !!onAction
   })

   let domProps = filterDOMProps(props, { labelable: true })
   let gridProps: DOMAttributes = mergeProps(
      domProps,
      {
         role: 'grid',
         id,
         'aria-multiselectable':
            state.selectionManager.selectionMode === 'multiple'
               ? 'true'
               : undefined
      },
      state.collection.size === 0 ? {} : listProps,
      descriptionProps
   )

   if (isVirtualized) {
      gridProps['aria-rowcount'] = state.collection.size
      gridProps['aria-colcount'] = 1
   }

   useGridSelectionAnnouncement({}, state)

   return {
      gridProps
   }
}
