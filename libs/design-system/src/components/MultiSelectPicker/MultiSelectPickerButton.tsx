import React, { DOMAttributes, ReactNode, RefObject } from 'react'
import cn from 'classnames'
import { mergeProps } from '@react-aria/utils'
import { AriaButtonProps, useButton } from '@react-aria/button'
import { useFocusableRef, useSlotProps } from '@react-spectrum/utils'
import { FocusableRef, FocusableElement } from '@react-types/shared'
import { useMediaQuery } from 'react-responsive'

import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants'
import { ChevronDownIcon } from '../../icons/ChevronDownIcon'
import { useThemeContext } from '../../Theme/Provider'
import { BasicSize } from '../../types'
import { XIcon } from '../../icons/XIcon'

import { getPlaceholderStyles } from '../Picker/styles'

import {
   getPickerButtonClass,
   getButtonTextStyles,
   getPickerSizeClasses,
   clearIconContainerClassName
} from './styles'
import { ValueContainerState } from './Context/Provider'
import { MultiSelectState } from './useMultiSelectState'
import { sizes } from './sizes'

export interface MultiSelectPickerButtonPropTypes {
   state: MultiSelectState<any>
   triggerProps: AriaButtonProps<'button'>
   valueProps?: DOMAttributes<FocusableElement>
   focusProps: DOMAttributes<FocusableElement>
   hoverProps: DOMAttributes<FocusableElement>

   ref: FocusableRef<HTMLButtonElement>
   popoverRef: FocusableRef<HTMLDivElement>
   size: BasicSize
   id?: string
   error?: ReactNode
   isDisabled?: boolean
   placeholder?: string
   children?: React.ReactElement
   containerClassName?: string

   clearAllSelectedItems?: (event: any) => void
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
}
const MultiSelectPickerButton = (
   props: MultiSelectPickerButtonPropTypes,
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
      containerClassName,
      renderValueContainer,
      renderLeadingIcon,
      isDisabled,
      popoverRef,
      clearAllSelectedItems
   } = props

   const domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>
   const popoverTriggerRef = useFocusableRef(popoverRef) as RefObject<
      HTMLDivElement
   >

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

   const isMobileDevice = useMediaQuery({
      query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`
   })

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const buttonClass = getPickerButtonClass(
      colorTheme,
      Boolean(error),
      isDisabled,
      state.isOpen
   )

   const buttonSizeStyles = getPickerSizeClasses(size)

   const hasSelectedItems = state.selectedItems.length > 0

   return (
      <div className='relative'>
         <button
            className={cn(
               buttonClass,
               buttonSizeStyles,
               'flex shadow-xs',
               containerClassName
            )}
            ref={popoverTriggerRef as any}
            {...mergeProps(buttonProps, hoverProps, focusProps)}
            id={id}
         >
            <div className={cn('outline-none flex flex-1')}>
               <div className='flex items-center justify-between flex-1'>
                  {!hasSelectedItems && renderLeadingIcon
                     ? renderLeadingIcon()
                     : null}

                  {!hasSelectedItems && placeholder ? (
                     <span className={getPlaceholderStyles(size, colorTheme)}>
                        {placeholder}
                     </span>
                  ) : null}

                  {hasSelectedItems ? (
                     <div className='flex items-center flex-1'>
                        <div className='outline-none'>
                           {renderLeadingIcon && renderLeadingIcon()}
                        </div>
                        <span
                           className={cn(
                              getButtonTextStyles(),
                              renderLeadingIcon ? 'ml-8px' : 'ml-0px',
                              'w-full text-left flex-1',
                              'notranslate'
                           )}
                           {...valueProps}
                        >
                           {renderValueContainer &&
                              renderValueContainer({
                                 selectedKeys: Array.from(state.selectedKeys)
                              })}
                        </span>
                     </div>
                  ) : null}

                  {state.isOpen ? (
                     <ChevronDownIcon
                        stroke={colorTheme.picker.icon.stroke}
                        height={sizes.sizes[size]}
                        width={sizes.sizes[size]}
                        style={{
                           transform: 'rotate(180deg)',
                           transition: 'transform 0.5s',
                           flexShrink: 0
                        }}
                     />
                  ) : (
                     <ChevronDownIcon
                        stroke={colorTheme.picker.icon.stroke}
                        height={sizes.sizes[size]}
                        width={sizes.sizes[size]}
                        style={{
                           transition: 'transform 0.5s',
                           flexShrink: 0
                        }}
                     />
                  )}
               </div>
            </div>
         </button>
      </div>
   )
}

const _MultiSelectPickerButton = React.forwardRef(MultiSelectPickerButton)
export { _MultiSelectPickerButton as MultiSelectPickerButton }
