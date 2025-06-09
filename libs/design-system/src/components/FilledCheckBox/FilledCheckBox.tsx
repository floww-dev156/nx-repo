import React, { forwardRef, useRef } from 'react'
import { VisuallyHidden } from 'react-aria'

import { useCheckbox } from '@react-aria/checkbox'
import { useFocus, useFocusWithin, useHover } from '@react-aria/interactions'
import { useProviderProps } from '@react-spectrum/provider'
import { useFocusableRef, useStyleProps } from '@react-spectrum/utils'
import { useToggleState } from '@react-stately/toggle'
import { SpectrumCheckboxProps } from '@react-types/checkbox'
import { FocusableRef } from '@react-types/shared'

import { CheckboxUnSelectedIcon } from '../../icons/CheckboxUnselectedIcon'
import FilledCheckboxIndeterminateIcon from '../../icons/FilledCheckboxIndeterminateIcon'
import { useThemeContext } from '../../Theme/Provider'
import { SmallAndMedium } from '../../types'
import { FocusRing } from '../FocusRing'
import { sizes } from './sizes'
import {
   getCheckboxButtonContainerStyles,
   getIndeterminateCheckboxButtonColors,
   getSelectedCheckboxButtonColors,
   getSimpleCheckboxLabelStyles,
   getUnSelectedCheckboxButtonColors
} from './styles'
import FilledCheckboxSelectedIcon from '../../icons/FilledCheckboxSelectedIcon'

interface FilledCheckBoxProps extends SpectrumCheckboxProps {
   size?: SmallAndMedium
   error?: React.ReactNode
}

function FilledCheckBox(
   props: FilledCheckBoxProps,
   ref: FocusableRef<HTMLLabelElement>
) {
   props = useProviderProps(props)
   let {
      isIndeterminate = false,
      isEmphasized = false,
      isDisabled = false,
      autoFocus,
      children,
      error,
      size = 'Medium',
      isSelected,
      validationState,
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
      ? isIndeterminate
         ? getIndeterminateCheckboxButtonColors(
              {
                 isHovered,
                 isDisabled,
                 isFocused: isFocusWithin,
                 error: Boolean(error)
              },
              colorTheme
           )
         : getSelectedCheckboxButtonColors(
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
                  isIndeterminate ? (
                     <FilledCheckboxIndeterminateIcon
                        borderColor={borderColor}
                        bgColor={bgColor}
                        height={sizes[size].icon.height}
                        width={sizes[size].icon.width}
                     />
                  ) : (
                     <FilledCheckboxSelectedIcon
                        borderColor={borderColor}
                        bgColor={bgColor}
                        height={sizes[size].icon.height}
                        width={sizes[size].icon.width}
                     />
                  )
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
         <VisuallyHidden>
            <input {...inputProps} ref={inputRef} />
         </VisuallyHidden>
         {renderCheckboxButton()}

         {children && <span>{children}</span>}
      </label>
   )
}

let _FilledCheckbox = forwardRef(FilledCheckBox)
export { _FilledCheckbox as FilledCheckBoxComponent }
