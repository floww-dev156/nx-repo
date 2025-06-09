import cn from 'classnames'

import { BasicSize } from '../../types'

import { listBoxSizes } from './sizes'

interface ListBoxOptionState {
   isHovered: boolean
   isDisabled?: boolean
   isSelected: boolean
   isFocused: boolean
   selectionMode: string
   shouldUseVirtualFocus: boolean | undefined
   isKeyboardModality: boolean
   shouldFocusOnHover: boolean | undefined
}
export const getListBoxOptionStyles = (
   {
      isHovered,
      isDisabled,
      isSelected,
      isFocused,
      shouldUseVirtualFocus,
      isKeyboardModality,
      shouldFocusOnHover
   }: ListBoxOptionState,
   theme
) => {
   return cn(
      `flex items-center outline-none cursor-pointer`,
      // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
      {
         [`${theme.focused.backgroundColor} ${theme.focused.textColor}`]:
            isFocused && isKeyboardModality
      },
      {
         [`${theme.default.backgroundColor} ${theme.default.textColor}`]:
            !shouldUseVirtualFocus &&
            !isFocused &&
            !isKeyboardModality &&
            !isDisabled &&
            !isSelected &&
            !isHovered &&
            !shouldFocusOnHover
      },
      {
         [`${theme.disabled.backgroundColor} ${theme.disabled.textColor}`]: isDisabled
      },
      {
         [`${theme.selected.backgroundColor} ${theme.selected.textColor}`]: isSelected
      },
      {
         // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
         // Otherwise, apply hover styles when focused using non-keyboard modality.
         [`${theme.hovered.backgroundColor} ${theme.hovered.textColor}`]:
            (isHovered && !shouldFocusOnHover) ||
            (isFocused && !isKeyboardModality)
      }
   )
}
export const getSectionSeperatorStyles = theme => {
   return cn(
      `border-b-1 border-solid ${theme.borderColor} section-separator-class-name`
   )
}

export const getSectionHeaderStyles = () => {
   return cn(
      `${listBoxSizes.sectionHeader} flex items-start section-header-class-name`
   )
}

export const getSectionStyles = () =>
   cn(`flex flex-col ${listBoxSizes.section}`)

export const getStylesBasedOnSize = (size: BasicSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return `text-sm-medium py-10px pl-8px pr-10px`
      case 'Small':
      case 'Medium':
      default:
         return `text-md-medium py-10px pl-8px pr-10px`
   }
}

export const getListBoxStyles = (
   isEmptyState: boolean,
   isFromMobile?: boolean
): string => {
   return cn(
      `overflow-y-auto outline-none scrollbar w-full`,
      {
         [`max-h-[320px]`]: !isEmptyState && !isFromMobile
      },
      {
         [`flex items-center`]: isEmptyState && isFromMobile
      }
   )
}

export const getMobileListOptionStyles = (isSelected: boolean): string =>
   `text-sm rounded-2xl text-sm font-medium flex box-border w-full p-4 ${
      isSelected
         ? 'border-2 border-primary-600 text-primary-600 p-[15px] bg-primary-50'
         : 'border border-gray-200 text-gray-700'
   }`
