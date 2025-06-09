import cn from 'classnames'

import { BasicSize } from '../../types'

import { placeholderTextSizes, sizes } from './sizes'

export const getButtonTextStyles = () => cn(`max-w-full truncate pr-8`)

export const getPickerButtonClass = (
   theme: any,
   isError: boolean,
   isDisabled?: boolean,
   isOpen?: boolean
) => {
   return cn(
      `flex items-center justify-between focus:outline-none w-full border border-solid shadow-xs bg-base-white`,
      {
         [`${theme.picker.disabled.styles} ${theme.picker.disabledTextColor}`]: isDisabled
      },
      {
         [`${theme.picker.textColor}`]: !isDisabled
      },
      {
         [`${theme.picker.border.error} ${theme.picker.border.focusedErrorBorder} focus:shadow-errorFocusedShadow`]: isError
      },
      {
         [`${theme.picker.border.default} ${theme.picker.border.focusedBorder} focus:shadow-defaultFocusedShadow`]: !isError
      },
      {
         [`${theme.picker.border.openedBorder} ${theme.picker.border.focusedBorder}`]:
            isOpen && !isError
      },
      {
         [`${theme.picker.border.error} ${theme.picker.border.focusedErrorBorder}`]:
            isOpen && isError
      }
   )
}

export const getPickerSizeClasses = (size: BasicSize) => {
   return cn(sizes[size])
}

export const getPlaceholderStyles = (size: BasicSize, theme: any) => {
   return cn(
      `${theme.picker.placeholderColor} ${placeholderTextSizes[size]} text-left pr-8`
   )
}

export const clearIconContainerClassName = `absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer`
