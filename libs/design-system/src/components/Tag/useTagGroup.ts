import { DOMAttributes } from '@react-types/shared'
import { filterDOMProps, mergeProps } from '@react-aria/utils'
import { RefObject, useState } from 'react'
import { TagKeyboardDelegate } from './TagKeyboardDelegate'
import { useFocusWithin } from '@react-aria/interactions'
import { useLocale } from '@react-aria/i18n'

import { useGridList } from './useGridList'
import { AriaTagGroupProps } from './TagGroup'

import { MultiSelectState } from '../MultiSelectPicker/useMultiSelectState'

export interface TagGroupAria {
   tagGroupProps: DOMAttributes
}

export function useTagGroup<T>(
   props: AriaTagGroupProps<T>,
   state: MultiSelectState<T>,
   ref: RefObject<HTMLElement>
): TagGroupAria {
   let { direction } = useLocale()
   let keyboardDelegate = new TagKeyboardDelegate(state.collection, direction)
   let { gridProps } = useGridList({ ...props, keyboardDelegate }, state, ref)

   delete gridProps.role
   delete gridProps.tabIndex

   let [isFocusWithin, setFocusWithin] = useState(false)
   let { focusWithinProps } = useFocusWithin({
      onFocusWithinChange: setFocusWithin
   })
   let domProps = filterDOMProps(props)
   return {
      tagGroupProps: mergeProps(gridProps, domProps, {
         'aria-atomic': false,
         'aria-relevant': 'additions',
         'aria-live': isFocusWithin ? 'polite' : 'off',
         ...focusWithinProps
      } as DOMAttributes)
   }
}
