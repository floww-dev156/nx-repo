import React, { RefObject } from 'react'
import cn from 'classnames'
import { mergeProps } from '@react-aria/utils'
import { useButton } from '@react-aria/button'
import { useFocusableRef, useSlotProps } from '@react-spectrum/utils'
import { FocusableRef } from '@react-types/shared'

import { ChevronDownIcon } from '../../icons/ChevronDownIcon'
import { useThemeContext } from '../../Theme/Provider'
import { XIcon } from '../../icons/XIcon'

import {
   getPickerButtonClass,
   getButtonTextStyles,
   getPickerSizeClasses,
   getPlaceholderStyles,
   clearIconContainerClassName
} from './styles'
import { sizes } from './sizes'
import { PickerButtonPropTypes } from './types'

const PickerButton = (
   props: PickerButtonPropTypes,
   ref: FocusableRef<HTMLButtonElement>
) => {
   props = useSlotProps(props, 'button')
   const {
      state,
      triggerProps,
      valueProps,
      error,
      placeholder,
      hoverProps,
      focusProps,
      size,
      id,
      renderValueContainer,
      renderLeadingIcon,
      isDisabled,
      inputButtonTextClassName,
      buttonClassName,
      autoFocus,
      showToolTip,
      showPickerButtonRightIcon = true,
      pickerButtonClassName,
      rightIconHeight,
      rightIconWidth,
      shouldShowClearButton
   } = props

   const domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>

   const { buttonProps } = useButton(
      {
         ...triggerProps,
         onPress: e => {
            setTimeout(() => {
               triggerProps.onPress && triggerProps.onPress(e)
            }, 100)
         }
      },
      domRef
   )

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const buttonClass = getPickerButtonClass(
      colorTheme,
      Boolean(error),
      isDisabled,
      state.isOpen
   )
   const buttonSizeStyles = getPickerSizeClasses(size)

   const pickerValue =
      state.selectedItem && state.selectedItem.rendered
         ? state.selectedItem.rendered.toString()
         : ''

   const clearValue = (event: any): void => {
      if (isDisabled) return
      if (props.onSelectionChange) props.onSelectionChange('')
      else state.setSelectedKey('')

      event.stopPropagation()
   }

   return (
      <div className='relative'>
         <button
            {...mergeProps(buttonProps, hoverProps, focusProps)}
            className={cn(buttonClass, buttonSizeStyles, buttonClassName)}
            ref={domRef}
            autoFocus={autoFocus}
            id={id}
            title={showToolTip ? state.selectedItem?.textValue : undefined}
         >
            <div
               className={`flex items-center w-[90%] ${pickerButtonClassName}`}
            >
               {renderLeadingIcon && renderLeadingIcon()}
               {
                  <p
                     className={cn(
                        getButtonTextStyles(),
                        renderLeadingIcon ? 'ml-8px' : 'ml-0px',
                        inputButtonTextClassName
                     )}
                     {...valueProps}
                     title={pickerValue}
                  >
                     {state.selectedItem ? (
                        renderValueContainer ? (
                           renderValueContainer({
                              selectedKey: state.selectedKey,
                              rendered: state?.selectedItem?.rendered
                           })
                        ) : (
                           state.selectedItem.rendered
                        )
                     ) : (
                        <span
                           className={getPlaceholderStyles(size, colorTheme)}
                        >
                           {placeholder}
                        </span>
                     )}
                  </p>
               }
            </div>

            {showPickerButtonRightIcon ? (
               state.isOpen ? (
                  <ChevronDownIcon
                     stroke={colorTheme.picker.icon.stroke}
                     height={rightIconHeight || sizes.sizes[size]}
                     width={rightIconWidth || sizes.sizes[size]}
                     style={{
                        transform: 'rotate(180deg)',
                        transition: 'transform 0.5s',
                        flexShrink: 0
                     }}
                  />
               ) : (
                  <ChevronDownIcon
                     stroke={colorTheme.picker.icon.stroke}
                     height={rightIconHeight || sizes.sizes[size]}
                     width={rightIconWidth || sizes.sizes[size]}
                     style={{ transition: 'transform 0.5s', flexShrink: 0 }}
                  />
               )
            ) : null}
         </button>
         {pickerValue && shouldShowClearButton ? (
            <div onClick={clearValue} className={clearIconContainerClassName}>
               <XIcon />
            </div>
         ) : null}
      </div>
   )
}

const _PickerButton = React.forwardRef(PickerButton)
export { _PickerButton as PickerButton }
