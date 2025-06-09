import { mergeProps } from '@react-aria/utils'
import React, { ReactElement } from 'react'

import cn from 'classnames'

import { ExtendedSize, FocusRingVariant } from '../../types'
import { useThemeContext } from '../../Theme/Provider'

import { getFocusRingSizes, getFocusRingStyles } from './styles'

import { useFocusRing } from './useFocusRing'

export interface FocusRingProps {
   children: ReactElement
   variant?: FocusRingVariant
   focusClass?: string
   focusRingClass?: string
   within?: boolean
   isTextInput?: boolean
   autoFocus?: boolean
   size?: ExtendedSize
   isError?: boolean
   isFocused?: boolean
}

export function FocusRing(props: FocusRingProps) {
   let {
      children,
      focusClass,
      focusRingClass,
      size = 'Medium',
      isError,
      variant = isError ? 'Destructive' : 'Primary'
   } = props
   let { isFocused, isFocusVisible, focusProps } = useFocusRing(props)
   let child = React.Children.only(children)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   const focusRingSizes = getFocusRingSizes(size)
   const focusRingStyles = getFocusRingStyles(
      coloredTheme.focusRing,
      isError ? 'Destructive' : variant
   )

   return React.cloneElement(
      child,
      mergeProps(child.props, {
         ...focusProps,
         className: cn({
            [`ring-4 ring-offset-0 ring-offset-white outline-none ${focusRingSizes} ${focusRingStyles} ${focusClass}`]:
               isFocused || props.isFocused,
            [focusRingClass || '']: isFocusVisible || props.isFocused
         })
      })
   )
}
