import cn from 'classnames'

import { SmallAndMedium } from '../../types'

import { sizes } from './sizes'
import { Axis } from './types'

interface RadioBoxState {
   isHovered: boolean
   isDisabled?: boolean
   isFocused: boolean
   error?: boolean
}

const disabledRadioContainerStyles = radioGroupTheme => {
   return {
      borderColor: radioGroupTheme.disabled.borderColor,
      dotColor: radioGroupTheme.disabled.dotColor,
      bgColor: radioGroupTheme.disabled.backgroundColor
   }
}

export const getUnSelectedRadioButtonColors = (
   { isHovered, isDisabled, error, isFocused }: RadioBoxState,
   theme: any
) => {
   const radioGroupTheme = theme.radioGroup
   const unSelectedRadioGroupStyles = radioGroupTheme.unSelected
   const unSelectedErrorRadioGroupStyles = radioGroupTheme.error.unSelected

   if (isDisabled) {
      return disabledRadioContainerStyles(radioGroupTheme)
   } else if (!isDisabled && !error) {
      return {
         borderColor: isHovered
            ? unSelectedRadioGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedRadioGroupStyles.focus.borderColor
            : unSelectedRadioGroupStyles.default.borderColor,
         dotColor: '',
         bgColor: isHovered
            ? unSelectedRadioGroupStyles.hover.backgroundColor
            : unSelectedRadioGroupStyles.default.backgroundColor
      }
   } else {
      return {
         borderColor: isHovered
            ? unSelectedErrorRadioGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedErrorRadioGroupStyles.focus.borderColor
            : unSelectedErrorRadioGroupStyles.default.borderColor,
         dotColor: '',
         bgColor: isHovered
            ? unSelectedErrorRadioGroupStyles.hover.backgroundColor
            : unSelectedErrorRadioGroupStyles.default.backgroundColor
      }
   }
}

export const getSelectedRadioButtonColors = (
   { isHovered, isDisabled, error }: RadioBoxState,
   theme: any
) => {
   const radioGroupTheme = theme.radioGroup
   const selectedRadioGroupStyles = radioGroupTheme.selected
   const selectedErrorRadioGroupStyles = radioGroupTheme.error.selected

   if (isDisabled) {
      return disabledRadioContainerStyles(radioGroupTheme)
   }
   if (!isDisabled && !error) {
      return {
         borderColor: selectedRadioGroupStyles.borderColor,
         dotColor: selectedRadioGroupStyles.dotColor,
         bgColor: isHovered
            ? selectedRadioGroupStyles.background.hovered
            : selectedRadioGroupStyles.background.default
      }
   } else {
      return {
         borderColor: selectedErrorRadioGroupStyles.borderColor,
         dotColor: selectedErrorRadioGroupStyles.dotColor,
         bgColor: isHovered
            ? selectedErrorRadioGroupStyles.background.hovered
            : selectedErrorRadioGroupStyles.background.default
      }
   }
}

export const getSimpleRadioLabelStyles = (
   isDisabled?: boolean,
   className = ''
) => {
   return cn(
      'flex items-center w-max max-w-full pr-2', //NOTE: w-max is used such that the input is registered for label and icon only
      { [`cursor-not-allowed`]: isDisabled },
      { 'cursor-pointer': !isDisabled },
      className
   )
}

export const getRadioButtonContainerStyles = (
   size: SmallAndMedium,
   isDisabled?: boolean,
   radioButtonClassName = ''
) => {
   return cn(
      `flex ${sizes[size].marginRight}`,
      radioButtonClassName,
      { 'cursor-not-allowed': isDisabled },
      { 'cursor-pointer': !isDisabled }
   )
}

export const getRadioButtonLabelClass = (theme: any) => {
   return `text-sm font-medium ${theme.radioGroup.label}`
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

export const radioContainerStyles = `flex items-center w-full`

export const radioLabelContainerClassName = `flex justify-between`

export const clearButtonClassName = `text-xs-semibold text-primary-600 border-none`
