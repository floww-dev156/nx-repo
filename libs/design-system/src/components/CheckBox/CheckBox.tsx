import { VisuallyHidden } from 'react-aria'

import { useFocusableRef, useStyleProps } from '@react-spectrum/utils'
import { FocusableRef } from '@react-types/shared'
import React, { forwardRef, useRef } from 'react'
import { SpectrumCheckboxProps } from '@react-types/checkbox'
import { useCheckbox } from '@react-aria/checkbox'
import { useProviderProps } from '@react-spectrum/provider'
import { useFocus, useFocusWithin, useHover } from '@react-aria/interactions'
import { useToggleState } from '@react-stately/toggle'

import { CheckboxSelectedIcon } from '../../icons/CheckboxSelectedIcon'
import { CheckboxUnSelectedIcon } from '../../icons/CheckboxUnselectedIcon'
import { useThemeContext } from '../../Theme/Provider'
import { SmallAndMedium } from '../../types'

import { FocusRing } from '../FocusRing'
import { sizes } from './sizes'
import {
   getCheckboxButtonContainerStyles,
   getSelectedCheckboxButtonColors,
   getSimpleCheckboxLabelStyles,
   getUnSelectedCheckboxButtonColors
} from './styles'

interface CheckBoxProps extends SpectrumCheckboxProps {
   size?: SmallAndMedium
   error?: React.ReactNode
   hiddenInputContainerClass?: string
   shouldFocusInputManually?: boolean
}

function Checkbox(props: CheckBoxProps, ref: FocusableRef<HTMLLabelElement>) {
   props = useProviderProps(props)
   let {
      isIndeterminate = false,
      isEmphasized = false,
      isDisabled = false,
      shouldFocusInputManually = false,
      autoFocus,
      children,
      error,
      size = 'Medium',
      isSelected,
      validationState,
      hiddenInputContainerClass = '',
      ...otherProps
   } = props
   let { styleProps } = useStyleProps(otherProps)
   let { hoverProps, isHovered } = useHover({ isDisabled })
   const [isFocusWithin, setFocusWithin] = React.useState(false)

   const { focusProps } = useFocus({
      onBlur: () => {},
      onFocusChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })
   const { focusWithinProps } = useFocusWithin({
      isDisabled: props.isDisabled,
      onFocusWithinChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })

   let inputRef = useRef<HTMLInputElement>(null)
   let domRef = useFocusableRef(ref, inputRef)

   let { inputProps } = useCheckbox(props, useToggleState(props), inputRef) // eslint-disable-next-line react-hooks/rules-of-hooks

   const simpleCheckboxLabelClass = getSimpleCheckboxLabelStyles(isDisabled)

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const { borderColor, bgColor } = isSelected
      ? getSelectedCheckboxButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
           },
           colorTheme
        )
      : getUnSelectedCheckboxButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
           },
           colorTheme
        )

   const renderCheckboxButton = () => {
      return (
         <FocusRing autoFocus={autoFocus}>
            <div
               {...focusProps}
               {...focusWithinProps}
               {...hoverProps}
               className={getCheckboxButtonContainerStyles(isDisabled)}
            >
               {isSelected ? (
                  <CheckboxSelectedIcon
                     borderColor={borderColor}
                     bgColor={bgColor}
                     height={sizes[size].icon.height}
                     width={sizes[size].icon.width}
                  />
               ) : (
                  <CheckboxUnSelectedIcon
                     borderColor={borderColor}
                     bgColor={bgColor}
                     height={sizes[size].icon.height}
                     width={sizes[size].icon.width}
                  />
               )}
            </div>
         </FocusRing>
      )
   }

   return (
      <label
         {...styleProps}
         {...hoverProps}
         ref={domRef}
         className={simpleCheckboxLabelClass}
      >
         {renderCheckboxButton()}
         <VisuallyHidden className={hiddenInputContainerClass}>
            <input
               {...inputProps}
               onFocus={e => {
                  if (shouldFocusInputManually) {
                     setFocusWithin(true)
                  }
                  inputProps.onFocus?.(e)
               }}
               onBlur={e => {
                  if (shouldFocusInputManually) {
                     setFocusWithin(false)
                  }
                  inputProps.onBlur?.(e)
               }}
               ref={inputRef}
               autoComplete='off'
            />
         </VisuallyHidden>

         {children && <span>{children}</span>}
      </label>
   )
}

let _Checkbox = forwardRef(Checkbox)
export { _Checkbox as CheckBoxComponent }
