import cn from 'classnames'

import { SmallAndMedium } from '../../types'

import { sizes } from './sizes'
import { Axis } from './types'

interface CheckboxBoxState {
   isHovered: boolean
   isDisabled?: boolean
   isFocused: boolean
   error?: boolean
}

const disabledCheckboxContainerStyles = checkboxGroupTheme => {
   return {
      borderColor: checkboxGroupTheme.disabled.borderColor,
      bgColor: checkboxGroupTheme.disabled.backgroundColor
   }
}

export const getUnSelectedCheckboxButtonColors = (
   { isHovered, isDisabled, error, isFocused }: CheckboxBoxState,
   theme: any
) => {
   const checkboxGroupTheme = theme.checkboxGroup
   const unSelectedCheckboxGroupStyles = checkboxGroupTheme.unSelected
   const unSelectedErrorCheckboxGroupStyles =
      checkboxGroupTheme.error.unSelected

   if (isDisabled) {
      return disabledCheckboxContainerStyles(checkboxGroupTheme)
   } else if (!isDisabled && !error) {
      return {
         borderColor: isHovered
            ? unSelectedCheckboxGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedCheckboxGroupStyles.focus.borderColor
            : unSelectedCheckboxGroupStyles.default.borderColor,
         bgColor: isHovered
            ? unSelectedCheckboxGroupStyles.hover.backgroundColor
            : unSelectedCheckboxGroupStyles.default.backgroundColor
      }
   } else {
      return {
         borderColor: isHovered
            ? unSelectedErrorCheckboxGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedErrorCheckboxGroupStyles.focus.borderColor
            : unSelectedErrorCheckboxGroupStyles.default.borderColor,
         bgColor: isHovered
            ? unSelectedErrorCheckboxGroupStyles.hover.backgroundColor
            : unSelectedErrorCheckboxGroupStyles.default.backgroundColor
      }
   }
}

export const getSelectedCheckboxButtonColors = (
   { isHovered, isDisabled, error }: CheckboxBoxState,
   theme: any
) => {
   const checkboxGroupTheme = theme.checkboxGroup
   const selectedCheckboxGroupStyles = checkboxGroupTheme.selected
   const selectedErrorCheckboxGroupStyles = checkboxGroupTheme.error.selected

   if (isDisabled) {
      return disabledCheckboxContainerStyles(checkboxGroupTheme)
   }
   if (!isDisabled && !error) {
      return {
         borderColor: selectedCheckboxGroupStyles.borderColor,
         bgColor: isHovered
            ? selectedCheckboxGroupStyles.background.hovered
            : selectedCheckboxGroupStyles.background.default
      }
   } else {
      return {
         borderColor: selectedErrorCheckboxGroupStyles.borderColor,
         bgColor: isHovered
            ? selectedErrorCheckboxGroupStyles.background.hovered
            : selectedErrorCheckboxGroupStyles.background.default
      }
   }
}

export const getSimpleCheckboxLabelStyles = (
   isDisabled?: boolean,
   className = ''
) => {
   return cn(
      'flex  items-center w-max max-w-full pr-2', //NOTE: w-max is used such that the input is registered for label and icon only
      { [`cursor-not-allowed`]: isDisabled },
      { 'cursor-pointer': !isDisabled },
      className
   )
}

export const getCheckboxButtonContainerStyles = (
   size: SmallAndMedium,
   isDisabled?: boolean,
   checkboxButtonClassName = ''
) => {
   return cn(
      `flex ${sizes[size].marginRight}`,
      checkboxButtonClassName,
      { 'cursor-not-allowed': isDisabled },
      { 'cursor-pointer': !isDisabled }
   )
}

export const getCheckboxButtonLabelClass = (theme: any) => {
   return `text-sm font-medium ${theme.checkboxGroup.label}`
}

export const getStylesBasedOnAxis = (axis?: Axis): string => {
   switch (axis) {
      case 'horizontal':
         return `mr-32px`
      case 'vertical':
         return `mb-8px`
      default:
         return ``
   }
}

export const getAxisStyles = (axis?: Axis): string => {
   switch (axis) {
      case 'horizontal':
         return `flex flex-row`
      case 'vertical':
         return `flex flex-col`
      default:
         return ``
   }
}

export const checkboxContainerStyles = `flex  items-center w-full`
