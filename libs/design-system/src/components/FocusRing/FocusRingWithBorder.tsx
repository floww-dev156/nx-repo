import { mergeProps } from '@react-aria/utils'
import React, { ReactElement } from 'react'

import cn from 'classnames'

import { BasicSize } from '../../types'
import { useThemeContext } from '../../Theme/Provider'

import { getFocusRingSizes, getFocusRingStylesWithBorder } from './styles'

import { useFocusRing } from './useFocusRing'

import { Variant } from '.'

export interface FocusRingWithBorderProps {
   children: ReactElement
   variant?: Variant
   focusClass?: string
   focusRingClass?: string
   within?: boolean
   isTextInput?: boolean
   autoFocus?: boolean
   size?: BasicSize
   isError?: boolean
}

export function FocusRingWithBorder(props: FocusRingWithBorderProps) {
   let {
      children,
      focusClass,
      focusRingClass,
      size = 'Small',
      isError,
      variant = isError ? 'Destructive' : 'Primary'
   } = props
   let { isFocused, isFocusVisible, focusProps } = useFocusRing(props)
   let child = React.Children.only(children)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   const focusRingSizes = getFocusRingSizes(size)
   const focusRingStyles = getFocusRingStylesWithBorder(
      coloredTheme.focusRing,
      isError ? 'Destructive' : variant
   )

   return React.cloneElement(
      child,
      mergeProps(child.props, {
         ...focusProps,
         className: cn({
            ['border border-solid border-gray-300']: !isFocused && !isError,
            ['border border-solid border-error-300']: !isFocused && isError,
            [`border border-solid ring-4 ring-offset-0 ring-offset-white outline-none  ${focusRingStyles} ${focusRingSizes} ${focusClass}`]: isFocused,
            [focusRingClass || '']: isFocusVisible
         })
      })
   )
}
