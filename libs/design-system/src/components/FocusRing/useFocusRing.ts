import { DOMAttributes } from '@react-types/shared'
import {
   isFocusVisible,
   useFocus,
   useFocusVisibleListener,
   useFocusWithin
} from '@react-aria/interactions'
import { useCallback, useState } from 'react'
import { useRef } from 'react'

export interface AriaFocusRingProps {
   within?: boolean

   isTextInput?: boolean

   autoFocus?: boolean
}

export interface FocusRingAria {
   isFocused: boolean

   isFocusVisible: boolean

   focusProps: DOMAttributes
}

export function useFocusRing(props: AriaFocusRingProps = {}): FocusRingAria {
   let { autoFocus = false, isTextInput, within = true } = props
   let state = useRef({
      isFocused: false,
      isFocusVisible: autoFocus || isFocusVisible()
   })
   let [isFocused, setFocused] = useState(false)
   let [isFocusVisibleState, setFocusVisible] = useState(
      () => state.current.isFocused && state.current.isFocusVisible
   )

   let updateState = useCallback(
      () =>
         setFocusVisible(
            state.current.isFocused && state.current.isFocusVisible
         ),
      []
   )

   let onFocusChange = useCallback(
      isFocused => {
         state.current.isFocused = isFocused
         setFocused(isFocused)
         updateState()
      },
      [updateState]
   )

   useFocusVisibleListener(
      isFocusVisible => {
         state.current.isFocusVisible = isFocusVisible
         updateState()
      },
      [],
      { isTextInput }
   )

   let { focusProps } = useFocus({
      isDisabled: within,
      onFocusChange
   })

   let { focusWithinProps } = useFocusWithin({
      isDisabled: !within,
      onFocusWithinChange: onFocusChange
   })

   return {
      isFocused,
      isFocusVisible: state.current.isFocused && isFocusVisibleState,
      focusProps: within ? focusWithinProps : focusProps
   }
}
