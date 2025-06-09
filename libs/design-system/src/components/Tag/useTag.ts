import { AriaButtonProps } from '@react-types/button'
import { chain, filterDOMProps, mergeProps, useId } from '@react-aria/utils'
import { DOMAttributes } from '@react-types/shared'
// @ts-ignore
import { KeyboardEvent } from 'react'
import { TagProps } from './Tag'
import { TagGroupState } from './useTagGroupState'
import { useGridListItem } from './useGridListItem'

export interface TagAria {
   labelProps: DOMAttributes
   tagProps: DOMAttributes
   tagRowProps: DOMAttributes
   clearButtonProps: AriaButtonProps
}

export function useTag<T>(
   props: TagProps<T>,
   state: TagGroupState<T>
): TagAria {
   let { isFocused, allowsRemoving, item, tagRowRef } = props
   let removeString = 'remove'
   let labelId = useId()
   let buttonId = useId()

   let { rowProps, gridCellProps } = useGridListItem(
      {
         node: item
      },
      state,
      tagRowRef
   )

   delete rowProps.onKeyDownCapture

   let onRemove = chain(props.onRemove, state.onRemove)

   let onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace' || e.key === ' ') {
         onRemove(item.key)
         e.preventDefault()
      }
   }

   isFocused = isFocused || state.selectionManager.focusedKey === item.key
   let domProps = filterDOMProps(props)
   return {
      clearButtonProps: {
         'aria-label': removeString,
         'aria-labelledby': `${buttonId} ${labelId}`,
         id: buttonId,
         onPress: () => (allowsRemoving && onRemove ? onRemove(item.key) : null)
      },
      labelProps: {
         id: labelId
      },
      tagRowProps: {
         ...rowProps,
         tabIndex:
            isFocused || state.selectionManager.focusedKey == null ? 0 : -1,
         onKeyDown: allowsRemoving ? onKeyDown : undefined
      },
      tagProps: mergeProps(domProps, gridCellProps, {
         'aria-errormessage': props['aria-errormessage'],
         'aria-label': props['aria-label']
      })
   }
}
