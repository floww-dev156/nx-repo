import {
   DOMAttributes,
   FocusableElement,
   Node as RSNode
} from '@react-types/shared'
import { focusSafely, getFocusableTreeWalker } from '@react-aria/focus'
import { getRowId, listMap } from './utils'
import { isFocusVisible } from '@react-aria/interactions'
import type { ListState } from '@react-stately/list'
import { mergeProps, useSlotId } from '@react-aria/utils'
import { KeyboardEvent as ReactKeyboardEvent, RefObject } from 'react'
import { SelectableItemStates, useSelectableItem } from '@react-aria/selection'
import { useLocale } from '@react-aria/i18n'

export interface AriaGridListItemOptions {
   node: RSNode<unknown>
   isVirtualized?: boolean
   shouldSelectOnPressUp?: boolean
}

export interface GridListItemAria extends SelectableItemStates {
   rowProps: DOMAttributes
   gridCellProps: DOMAttributes
   descriptionProps: DOMAttributes
}

export function useGridListItem<T>(
   props: AriaGridListItemOptions,
   state: ListState<T>,
   ref: RefObject<FocusableElement>
): GridListItemAria {
   let { node, isVirtualized, shouldSelectOnPressUp } = props

   let { direction } = useLocale()
   let listMapState = listMap.get(state)
   const onAction = listMapState?.onAction
   let descriptionId = useSlotId()
   let focus = () => {
      if (!ref.current?.contains(document.activeElement) && ref.current) {
         focusSafely(ref.current)
      }
   }

   let { itemProps, ...itemStates } = useSelectableItem({
      selectionManager: state.selectionManager,
      key: node.key,
      ref,
      isVirtualized,
      shouldSelectOnPressUp,
      onAction: onAction ? () => onAction(node.key) : undefined,
      focus
   })

   let onKeyDown = (e: ReactKeyboardEvent) => {
      if (!e.currentTarget.contains(e.target as Element)) {
         return
      }
      if (!ref.current) return
      let walker = getFocusableTreeWalker(ref.current)
      walker.currentNode = document as Node

      switch (e.key) {
         case 'ArrowLeft': {
            let focusable =
               direction === 'rtl'
                  ? (walker.nextNode() as FocusableElement)
                  : (walker.previousNode() as FocusableElement)

            if (focusable) {
               e.preventDefault()
               e.stopPropagation()
               focusSafely(focusable)
            } else {
               e.preventDefault()
               e.stopPropagation()
               if (ref.current)
                  if (direction === 'rtl') {
                     focusSafely(ref.current)
                  } else {
                     walker.currentNode = ref.current
                     let lastElement = last(walker)
                     if (lastElement) {
                        focusSafely(lastElement)
                     }
                  }
            }
            break
         }
         case 'ArrowRight': {
            let focusable =
               direction === 'rtl'
                  ? (walker.previousNode() as FocusableElement)
                  : (walker.nextNode() as FocusableElement)

            if (focusable) {
               e.preventDefault()
               e.stopPropagation()
               focusSafely(focusable)
            } else {
               e.preventDefault()
               e.stopPropagation()
               if (ref.current)
                  if (direction === 'ltr') {
                     focusSafely(ref.current)
                  } else {
                     walker.currentNode = ref.current
                     let lastElement = last(walker)
                     if (lastElement) {
                        focusSafely(lastElement)
                     }
                  }
            }
            break
         }
         case 'ArrowUp':
         case 'ArrowDown':
            if (
               !e.altKey &&
               ref.current &&
               ref.current.contains(e.target as Element)
            ) {
               e.stopPropagation()
               e.preventDefault()
               ref.current.parentElement?.dispatchEvent(
                  new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)
               )
            }
            break
      }
   }

   let onFocus = e => {
      if (e.target !== ref.current) {
         if (!isFocusVisible()) {
            state.selectionManager.setFocusedKey(node.key)
         }
         return
      }
   }

   let rowProps: DOMAttributes = mergeProps(itemProps, {
      role: 'row',
      onKeyDownCapture: onKeyDown,
      onFocus,
      'aria-label': node.textValue || undefined,
      'aria-selected': state.selectionManager.canSelectItem(node.key)
         ? state.selectionManager.isSelected(node.key)
         : undefined,
      'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
      'aria-labelledby':
         descriptionId && node.textValue
            ? `${getRowId(state, node.key)} ${descriptionId}`
            : undefined,
      id: getRowId(state, node.key)
   })

   if (isVirtualized) {
      rowProps['aria-rowindex'] = node.index ? node.index + 1 : 0
   }

   let gridCellProps = {
      role: 'gridcell',
      'aria-colindex': 1
   }

   return {
      rowProps,
      gridCellProps,
      descriptionProps: {
         id: descriptionId
      },
      ...itemStates
   }
}

function last(walker: TreeWalker) {
   let next: FocusableElement | null = null
   let last: FocusableElement
   do {
      last = walker.lastChild() as FocusableElement
      if (last) {
         next = last
      }
   } while (last)
   return next
}
